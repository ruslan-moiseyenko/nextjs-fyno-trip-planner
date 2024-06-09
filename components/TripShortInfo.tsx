"use client";
import React from "react";

const tripInfo = [
  {
    id: 1,
    title: "Trip duration",
    description: "7 days",
  },
  {
    id: 2,
    title: "Exploration",
    description: "4 regions",
  },
  {
    id: 3,
    title: "Flight",
    description: "7h 20m from SFO",
  },
];

export const TripShortInfo = () => {
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
      <p className="text-violet ml-auto">View itinerary</p>
    </section>
  );
};
