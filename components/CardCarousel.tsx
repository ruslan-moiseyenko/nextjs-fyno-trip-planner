import { PoiCard } from "@/components/PoiCard";
import { CardInfoType } from "@/types/types";
import React, { FC } from "react";

type CardCarouselProps = {
  data: CardInfoType[];
};
export const CardCarousel: FC<CardCarouselProps> = ({ data }) => {
  return (
    <div className="flex w-full gap-4 overflow-hidden">
      {data.map((item) => (
        <PoiCard key={item.id} item={item} />
      ))}
    </div>
  );
};
