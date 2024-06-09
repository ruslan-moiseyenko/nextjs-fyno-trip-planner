"use client";
import React from "react";

import plus from "@/assets/svg/plus.svg";
import Image from "next/image";

export const ButtonCreate = () => {
  return (
    <div className="ml-auto flex overflow-hidden rounded-full border-[1px] border-border_gray bg-white px-3 py-2 pr-2 text-base font-semibold">
      <Image src={plus} alt="plus" className="mr-3" />
      <p className="mr-3">Create</p>
    </div>
  );
};
