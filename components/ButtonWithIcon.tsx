import Image from "next/image";
import React, { FC } from "react";

type ButtonWithIconProps = {
  icon: string;
  text: string;
};

export const ButtonWithIcon: FC<ButtonWithIconProps> = ({ text, icon }) => {
  return (
    <button className="mb-4 flex items-center rounded-lg border-[1px] border-border_gray bg-transparent px-3 py-1 text-[15px] font-semibold">
      <Image src={icon} alt="avatar" className="mr-2" />
      {text}
    </button>
  );
};
