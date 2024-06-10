import { PoiHighlights } from "@/components/PoiHighlights";
import { RegionInfo } from "@/components/RegionInfo";
import { RegionType } from "@/types/types";
import React, { forwardRef } from "react";
import highlightsIcon from "@/assets/svg/highlights.svg";
import bed from "@/assets/svg/bed.svg";

type TripFullInfoProps = {
  data: RegionType;
};

export const TripFullInfo = forwardRef<HTMLDivElement, TripFullInfoProps>(
  ({ data }, ref) => {
    return (
      <article className="mb-6 w-full" ref={ref} id="target-scroll">
        <RegionInfo data={data.generalInfo} />
        <PoiHighlights
          data={data.regionalHighlights}
          title="Region highlights"
          icon={highlightsIcon}
          isProgressBar
          showDailyButton
        />
        <PoiHighlights
          data={data.whereToStay}
          icon={bed}
          title="Where to stay"
        />
      </article>
    );
  },
);

TripFullInfo.displayName = "TripFullInfo";
