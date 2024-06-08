import React from "react";
import arrowDown from "@/assets/svg/arrowDown.svg";
import Image from "next/image";

const selectOptions = [
  {
    value: 5,
    label: "5 days",
  },
  {
    value: 6,
    label: "6 days",
  },
  {
    value: 7,
    label: "7 days",
  },
  {
    value: 8,
    label: "8 days",
  },
  {
    value: 9,
    label: "9 days",
  },
  {
    value: 10,
    label: "10 days",
  },
];

export const TripleButton = () => {
  return (
    <div className="flex overflow-hidden rounded-full border-[1px] border-border_gray bg-white pr-2 text-base font-semibold">
      <div className="content-center px-5 py-2">Trips</div>
      <div className="content-center border-x-[1px] border-border_gray px-5 py-2">
        Iceland
      </div>
      <div className="relative flex">
        <select
          name="days"
          id="days"
          className="relative appearance-none border-none px-5 py-2 focus:border-transparent focus:outline-none focus:ring-2"
        >
          {selectOptions.map((item) => (
            <option
              key={`${item.value}${item.label}`}
              value={item.value}
              className="bg-slate-300 text-green-600"
            >
              {item.label}
            </option>
          ))}
        </select>
        <Image
          src={arrowDown}
          alt="arrowDown"
          className="absolute right-1 top-4"
        />
      </div>
    </div>
  );
};
