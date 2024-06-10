import { CardInfoType } from "@/types/types";
import Image from "next/image";
import React, { FC } from "react";

import ellipses from "@/assets/svg/ellipses.svg";
import menu2 from "@/assets/svg/menu2.svg";

type HorizontalCardProps = {
  item: CardInfoType;
};
export const HorizontalCard: FC<HorizontalCardProps> = ({ item }) => {
  return (
    <article className="relative h-[156px] py-3">
      <div className="flex">
        <div className="relative h-[132px] w-[96px] overflow-hidden rounded-xl">
          <Image
            src={item?.image}
            alt="image"
            fill={true}
            objectFit="cover"
            objectPosition="center"
            sizes="(max-width: 96px) 40vw, 33vw"
          />
        </div>
        <div className="flex w-full items-center pl-6">
          <div className="flex flex-col justify-center gap-2">
            <h4 className="text-[17px] font-semibold">{item.title}</h4>
            {item.isCuratorsPick && (
              <p className="text-text_trinary rounded-lg bg-[#F2F2F7] px-3 py-1 text-[13px] font-medium">
                Curator&apos;s pick
              </p>
            )}
            <p className="text-text_trinary text-[15px] font-normal">{`${item.estimation} · ${item.description}`}</p>
          </div>
          <div className="ml-auto flex gap-2">
            <button className="flex h-8 w-8 items-center justify-center">
              <Image src={menu2} alt="menu" width={14} height={3} />
            </button>
            <button className="flex h-8 w-8 items-center justify-center">
              <Image src={ellipses} alt="menu" width={14} height={3} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
