import { RegionInfo } from "@/components/RegionInfo";
import { RegionType } from "@/types/types";
import React, { FC } from "react";

type TripFullInfoProps = {
  data: RegionType;
};

export const TripFullInfo: FC<TripFullInfoProps> = ({ data }) => {
  return (
    <article className="w-full">
      <RegionInfo data={data.generalInfo} />
      <RegionInfo data={data.generalInfo} />
    </article>
  );
};
