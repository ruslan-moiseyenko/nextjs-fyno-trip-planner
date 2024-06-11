"use client";
import React from "react";
import Image from "next/image";
import img1 from "@/public/images/img1.jpg";
import img2 from "@/public/images/img2.jpg";
import img3 from "@/public/images/img3.jpg";
import img4 from "@/public/images/img4.jpg";
import img5 from "@/public/images/img5.webp";
import { ButtonAllPhotos } from "@/components/ButtonAllPhotos";

const images = [img2, img3, img4, img5];

export const Gallery = () => {
  return (
    <section className="relative flex h-[292px] w-full gap-1 overflow-hidden rounded-3xl">
      <div className="h-1 flex-1">
        <Image src={img1} alt="img1" />
      </div>

      <div className="flex flex-1 flex-wrap gap-1">
        {images.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="gallery"
            width={175}
            height={144}
          />
        ))}
      </div>
      <ButtonAllPhotos styles="absolute right-3 bottom-2 rounded-full overflow-hidden" />
    </section>
  );
};
