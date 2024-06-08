import React from "react";
import Image from "next/image";
import img1 from "@/public/images/img1.jpg";
import img2 from "@/public/images/img2.jpg";
import img3 from "@/public/images/img3.jpg";
import img4 from "@/public/images/img4.jpg";
import img5 from "@/public/images/img5.webp";
import { ButtonAllPhotos } from "@/components/ButtonAllPhotos";

export const Gallery = () => {
  return (
    <div className="relative flex w-full gap-1 overflow-hidden rounded-3xl">
      <div className="h-1 flex-1">
        <Image src={img1} alt="img1" />
      </div>

      <div className="flex h-1/2 flex-1 flex-col gap-1">
        <div className="flex h-1 flex-1 gap-1">
          <div className="flex-1">
            <Image src={img2} alt="img1" />
          </div>
          <div className="flex-1">
            <Image src={img3} alt="img1" />
          </div>
        </div>
        <div className="flex h-1 flex-1 gap-1">
          <div className="flex-1">
            <Image src={img4} alt="img1" />
          </div>
          <div className="h-1 flex-1 object-none">
            <Image src={img5} alt="img1" />
          </div>
        </div>
      </div>
      <ButtonAllPhotos styles="absolute right-3 bottom-2 rounded-full overflow-hidden" />
    </div>
  );
};
