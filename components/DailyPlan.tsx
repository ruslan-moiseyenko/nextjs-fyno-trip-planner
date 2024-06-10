import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import React from "react";
import sparkles from "@/assets/svg/sparkles.svg";
import { HorizontalCard } from "@/components/HorizontalCard";
import Image from "next/image";

import { Dot } from "@/components/Dot";
import { dailyPlans } from "@/data/dailyPlays";

import listIcon from "@/assets/svg/listw.svg";
import curvedArrow from "@/assets/svg/curvedArrow.svg";
import ellipses from "@/assets/svg/ellipses.svg";

export const DailyPlan = () => {
  return (
    <section className="relative w-[697px] pl-12">
      <div className="flex w-full justify-between">
        <span className="text-[17px] font-semibold">2 days plan</span>
        <ButtonWithIcon icon={sparkles} text="Show highlights" />
      </div>

      {dailyPlans.map((day) => (
        <>
          <div className="flex items-center py-2">
            <span className="text-[17px] font-semibold">{day.title}</span>
            <div className="ml-auto flex items-center gap-2">
              <Image src={curvedArrow} alt="menu" width={15} height={15} />
              <span className="text-text_trinary ml-2 mr-2 text-[15px] font-normal">
                {day.estimatedTime}
              </span>
              <button className="flex h-8 w-8 items-center justify-center">
                <Image src={ellipses} alt="menu" width={14} height={3} />
              </button>
            </div>
          </div>
          {day.plan.map((item) => (
            <Dot key={item.id}>
              <HorizontalCard item={item} />
            </Dot>
          ))}
        </>
      ))}

      <div
        className={`absolute left-2 top-1 z-10 flex h-6 w-6 content-center items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[#9D9DA1] text-center text-xs font-medium text-white`}
      >
        <Image
          src={listIcon}
          alt="icon"
          width={10}
          height={10}
          className="bg-[#9D9DA1] fill-current text-white"
        />
      </div>
      <div
        className={`bg-border_light_gray absolute left-[19px] top-2 z-0 h-full w-0.5`}
      ></div>
    </section>
  );
};
