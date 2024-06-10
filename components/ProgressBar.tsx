import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";

type ProgressBarProps = {
  progress: string;
  children: ReactNode;
  isProgressBar?: boolean;
  icon?: StaticImageData;
};

export const ProgressBar: FC<ProgressBarProps> = ({
  children,
  icon,
  progress,
  isProgressBar,
}) => {
  return (
    <div className="relative flex w-full">
      <div className={`w-full pb-5 pl-14`}>{children}</div>
      <div
        className={`${icon ? "bg-[#9D9DA1]" : "bg-violet"} absolute left-2 top-1 z-10 flex h-6 w-6 content-center items-center justify-center overflow-hidden rounded-full border-2 border-white text-center text-xs font-medium text-white`}
      >
        {icon ? (
          <Image
            src={icon}
            alt="icon"
            width={18}
            height={18}
            className="bg-[#9D9DA1]"
          />
        ) : (
          progress
        )}
      </div>
      <div
        className={`${isProgressBar ? "bg-border_light_gray" : "bg-transparent"} absolute left-[19px] top-2 z-0 h-full w-0.5`}
      ></div>
    </div>
  );
};
