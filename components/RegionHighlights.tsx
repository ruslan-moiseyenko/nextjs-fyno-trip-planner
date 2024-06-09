import { ProgressBar } from "@/components/ProgressBar";
import React, { FC } from "react";
import highlightsIcon from "@/assets/svg/highlights.svg";
import { CardInfoType } from "@/types/types";
import { PoiCard } from "@/components/PoiCard";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import list from "@/assets/svg/list.svg";

type RegionHighlightsProps = {
  data: CardInfoType[];
};

export const RegionHighlights: FC<RegionHighlightsProps> = ({ data }) => {
  return (
    <ProgressBar icon={highlightsIcon} progress="">
      <div className="flex w-full justify-between">
        <h3 className="text-2xl font-medium">Region highlights</h3>
        <ButtonWithIcon icon={list} text="Show daily plan" />
      </div>
      <PoiCard item={data[2]} />
    </ProgressBar>
  );
};
