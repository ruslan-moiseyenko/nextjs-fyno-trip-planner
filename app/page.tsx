"use client";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Highlights } from "@/components/Highlights";
import { Itinerary } from "@/components/Itinerary";
import { TripShortInfo } from "@/components/TripShortInfo";

import { highlights } from "@/data/highlights";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-white p-6">
      <Header />
      <Gallery />
      <TripShortInfo />
      <Highlights data={highlights} />
      <Itinerary />
    </main>
  );
}
