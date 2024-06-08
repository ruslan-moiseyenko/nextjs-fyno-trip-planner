import { Gallery } from "@/components/Gallery";
import { Navigation } from "@/components/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-white p-6">
      <Navigation />
      <Gallery />
    </main>
  );
}
