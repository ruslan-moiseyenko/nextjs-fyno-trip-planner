import Image from "next/image";
import React, { FC } from "react";

type InputWithIconProps = {
  placeholder: string;
  icon?: string;
  width?: string;
};
export const InputWithIcon: FC<InputWithIconProps> = ({
  icon,
  placeholder,
  width,
}) => {
  return (
    <div
      className={`flex overflow-hidden rounded-lg border-[1px] border-border_blue bg-white pl-3 pr-1 ${width ? width : ""}`}
    >
      {icon && <Image src={icon} alt="icon" className="mr-3" />}
      <input
        type="text"
        placeholder={placeholder}
        className="w-full py-2 text-[15px] font-normal focus:outline-none focus:ring-0"
      />
    </div>
  );
};
