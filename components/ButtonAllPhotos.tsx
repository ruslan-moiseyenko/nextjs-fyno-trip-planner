import React, { FC } from "react";
import Image from "next/image";
import dots from "@/assets/svg/dots.svg";

type ButtonAllPhotosProps = {
  styles: string;
};
export const ButtonAllPhotos: FC<ButtonAllPhotosProps> = ({ styles }) => {
  return (
    <div className={styles}>
      <button className="flex items-center rounded-full bg-white bg-opacity-10 px-3 text-base font-semibold text-white backdrop-blur-md">
        <Image src={dots} alt="dots" className="mr-1" />
        All photos
      </button>
    </div>
  );
};
