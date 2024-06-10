import { CardInfoType } from "@/types/types";
import Image from "next/image";
import React, { FC } from "react";
import yellowArrow from "@/assets/svg/yellowArrow.svg";
import bookmark2 from "@/assets/svg/bookmark2.svg";

type PoiCardProps = {
  item: CardInfoType;
};
export const PoiCard: FC<PoiCardProps> = ({ item }) => {
  console.log(typeof item);
  return (
    <article className="relative w-[216px]">
      <div className="relative h-[292px] w-[216px] overflow-hidden rounded-xl">
        <Image
          src={item?.image}
          alt="image"
          fill={true}
          sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <a href="#" className="cursor-pointer appearance-none">
        <div className="p-2">
          <h4 className="text-[17px] font-semibold">{item.title}</h4>
          {item.rating && (
            <div className="flex items-center gap-1">
              <Image src={yellowArrow} alt="image" width={10} height={10} />
              <p className="text-[15px] font-normal text-text_secondary">
                {item.rating}
              </p>
            </div>
          )}
          <p className="text-[15px] font-normal text-text_secondary">{`${item.estimation} · ${item.description}`}</p>
        </div>
      </a>
      <button className="absolute right-6 top-6">
        <Image src={bookmark2} alt="bookmark" width={20} height={20} />
      </button>
      {item.isCuratorsPick && (
        <p className="absolute left-6 top-6 rounded-lg bg-[#FFFFFF80] px-3 py-1 text-[13px] font-medium text-[#3C3C43] backdrop-blur-md">
          Curator&apos;s pick
        </p>
      )}
    </article>
  );
};
