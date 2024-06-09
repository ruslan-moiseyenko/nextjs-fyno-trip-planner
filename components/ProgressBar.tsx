import Image from "next/image";
import React, { FC, ReactNode } from "react";

type ProgressBarProps = {
  progress: string;
  children: ReactNode;
  borderColor?: string;
  icon?: string;
};

export const ProgressBar: FC<ProgressBarProps> = ({
  children,
  icon,
  progress,
  borderColor = "border-border_light_gray ",
}) => {
  return (
    <div className="relative flex w-full">
      <div className={`ml-8 w-full border-l-2 px-3 pb-5 pl-8 ${borderColor}`}>
        {children}
      </div>
      <div className="absolute left-[25px] top-0 h-4 w-4 rounded-full bg-violet text-center text-xs font-medium text-white">
        {icon ? (
          <Image src={icon} alt="icon" width={16} height={16} />
        ) : (
          progress
        )}
      </div>
    </div>
  );
};
