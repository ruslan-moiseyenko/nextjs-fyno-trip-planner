import { PoiHighlights } from "@/components/PoiHighlights";
import { RegionInfo } from "@/components/RegionInfo";
import { RegionType } from "@/types/types";
import React, { FC } from "react";
import highlightsIcon from "@/assets/svg/highlights.svg";
import bed from "@/assets/svg/bed.svg";

type TripFullInfoProps = {
  data: RegionType;
};

export const TripFullInfo: FC<TripFullInfoProps> = ({ data }) => {
  return (
    <article className="mb-6 w-full">
      <RegionInfo data={data.generalInfo} />
      <PoiHighlights
        data={data.regionalHighlights}
        title="Region highlights"
        icon={highlightsIcon}
        isProgressBar
      />
      <PoiHighlights data={data.whereToStay} icon={bed} title="Where to stay" />
    </article>
  );
};
