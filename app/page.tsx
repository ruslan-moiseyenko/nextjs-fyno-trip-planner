import { Navigation } from "@/components/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white p-6">
      <Navigation />
    </main>
  );
}
