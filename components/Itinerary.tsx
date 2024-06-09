import { InputWithIcon } from "@/components/InputWithIcon";
import React from "react";
import Image from "next/image";
import airplane from "@/assets/svg/airplane.svg";
import calendar from "@/assets/svg/calendar.svg";
import person from "@/assets/svg/person.svg";

export const Itinerary = () => {
  return (
    <section className="py-6">
      <h2 className="mb-6 text-2xl font-semibold">Iceland itinerary</h2>
      <div className="border-border_blue bg-background_secondary flex w-full gap-3 rounded-3xl border-[1px] px-4 py-6">
        <InputWithIcon placeholder="Reykjavík, KEF" />
        <Image src={airplane} alt="airplane" />
        <InputWithIcon placeholder="San Francisco, SFO" />
        <InputWithIcon
          placeholder="Jul 03 – Jul 11"
          icon={calendar}
          width="w-[190px]"
        />
        <InputWithIcon placeholder="2" icon={person} width="w-[70px]" />
      </div>
    </section>
  );
};
