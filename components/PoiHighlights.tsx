import React, { FC } from "react";
import { ProgressBar } from "@/components/ProgressBar";

import { CardInfoType } from "@/types/types";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import list from "@/assets/svg/list.svg";
import { CardCarousel } from "@/components/CardCarousel";
import { StaticImageData } from "next/image";

type PoiHighlightsProps = {
  title: string;
  isProgressBar?: boolean;
  icon?: StaticImageData;
  data: CardInfoType[];
};

export const PoiHighlights: FC<PoiHighlightsProps> = ({
  data,
  title,
  icon,
  isProgressBar,
}) => {
  return (
    <ProgressBar icon={icon} progress="" isProgressBar={isProgressBar}>
      <div className="mb-6 flex w-full justify-between">
        <h3 className="text-2xl font-medium">{title}</h3>
        <ButtonWithIcon icon={list} text="Show daily plan" />
      </div>
      <CardCarousel data={data} />
    </ProgressBar>
  );
};
