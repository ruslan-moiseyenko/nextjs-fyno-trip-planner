"use client";
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
  return (
    <main className="flex flex-col items-center justify-center bg-white p-6">
      <Header />
      <Gallery />
      <TripShortInfo tripInfo={tripInfo} />
      <Highlights data={highlights} />
      <Itinerary />
      <TripFullInfo data={regionsInfo} />
    </main>
  );
}
