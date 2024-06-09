import { ProgressBar } from "@/components/ProgressBar";
import { ItineraryType } from "@/types/types";
import React, { FC } from "react";

type RegionInfoProps = {
  data: ItineraryType;
};
export const RegionInfo: FC<RegionInfoProps> = ({
  data: { description, tags, title },
}) => {
  return (
    <ProgressBar progress="A" isProgressBar>
      <h3 className="mb-1 text-xl font-semibold">{title}</h3>
      <div className="mb-2 flex gap-4">
        {tags.map((item, index) => (
          <p
            key={`key-${index}${item}`}
            className="text-text_trinary mr-4 text-sm font-normal"
          >
            {item}
          </p>
        ))}
      </div>
      <p className="text-base font-normal text-text_secondary">{description}</p>
    </ProgressBar>
  );
};

//icon="📍"
