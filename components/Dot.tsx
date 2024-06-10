import React, { FC } from "react";

type DotProps = {
  children: React.ReactNode;
};
export const Dot: FC<DotProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute -left-8 top-1/2 z-20 box-content h-1 w-1 rounded-full border-2 border-white bg-[#9D9DA1]"></div>
      {children}
    </div>
  );
};
