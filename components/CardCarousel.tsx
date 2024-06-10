"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import arrowRight from "@/assets/svg/arrowRight.svg";
import arrowLeft from "@/assets/svg/arrowLeft.svg";
import Image from "next/image";

type CardCarouselProps = {
  children: React.ReactNode;
};
export const CardCarousel: FC<CardCarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        setCanScrollLeft(carouselRef.current.scrollLeft > 0);
        setCanScrollRight(
          carouselRef.current.scrollWidth >
            carouselRef.current.scrollLeft + carouselRef.current.clientWidth,
        );
      }
    };

    if (carouselRef.current) {
      handleScroll();
      carouselRef.current.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -(carouselRef.current.clientWidth + 16), // 16 is the gap-4
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth + 16,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex h-full w-full items-center">
      {canScrollLeft && (
        <button
          className="absolute left-0 top-1/3 z-10 h-10 w-10 rounded-full bg-white p-2 text-white"
          onClick={scrollLeft}
        >
          <Image
            src={arrowLeft}
            alt="Scroll right"
            className="h-6 w-6 rounded-full"
          />
        </button>
      )}
      <div
        ref={carouselRef}
        className="flex h-full w-full space-x-4 overflow-hidden"
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      {canScrollRight && (
        <button
          className="absolute right-0 top-1/3 z-10 rounded-full bg-white p-2 text-white"
          onClick={scrollRight}
        >
          <Image
            src={arrowRight}
            alt="Scroll right"
            className="h-6 w-6 rounded-full"
          />
        </button>
      )}
    </div>
  );
};
