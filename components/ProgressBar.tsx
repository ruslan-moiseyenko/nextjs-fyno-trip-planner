import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";

type ProgressBarProps = {
  progress: string;
  children: ReactNode;
  borderColor?: string;
  icon?: StaticImageData;
};

export const ProgressBar: FC<ProgressBarProps> = ({
  children,
  icon,
  progress,
  borderColor = "bg-border_light_gray ",
}) => {
  return (
    <div className="relative flex w-full">
      <div className={`ml-8 w-full px-3 pb-5 pl-8`}>{children}</div>
      <div className="absolute left-[22px] top-1 z-10 h-6 w-6 content-center items-center overflow-hidden rounded-full bg-violet text-center text-xs font-medium text-white">
        {icon ? (
          <Image
            src={icon}
            alt="icon"
            width={24}
            height={24}
            className="bg-[#9D9DA1]"
          />
        ) : (
          progress
        )}
      </div>
      <div
        className={`${borderColor} absolute left-8 top-2 z-0 h-full w-0.5`}
      ></div>
    </div>
  );
};
