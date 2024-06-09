"use client";
import { ShortTripInfoType } from "@/types/types";
import React, { FC } from "react";

type TripShortInfoProps = {
  tripInfo: ShortTripInfoType[];
};
export const TripShortInfo: FC<TripShortInfoProps> = ({ tripInfo }) => {
  return (
    <section className="my-7 flex w-full items-center rounded-3xl border-[1px] border-border_gray p-6">
      <div className="flex gap-14">
        {tripInfo.map((item) => (
          <div key={item.id} className="flex flex-col items-start">
            <p className="text-sm font-normal text-text_secondary">
              {item.title}
            </p>
            <p className="text-base font-semibold">{item.description}</p>
          </div>
        ))}
      </div>
      <p className="ml-auto text-violet">View itinerary</p>
    </section>
  );
};
