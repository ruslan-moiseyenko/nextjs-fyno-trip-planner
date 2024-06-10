"use client";
import React, { useRef } from "react";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Highlights } from "@/components/Highlights";
import { Itinerary } from "@/components/Itinerary";
import { TripFullInfo } from "@/components/TripFullInfo";
import { TripShortInfo } from "@/components/TripShortInfo";

import { highlights } from "@/data/highlights";
import { regionsInfo } from "@/data/regionsInfo";
import { tripInfo } from "@/data/tripInfo";

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const scrollToComponent = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center bg-white p-6">
      <Header />
      <Gallery />
      <TripShortInfo
        tripInfo={tripInfo}
        scrollToComponent={scrollToComponent}
      />
      <Highlights data={highlights} />
      <Itinerary />
      <TripFullInfo data={regionsInfo} ref={targetRef} />
    </main>
  );
}
