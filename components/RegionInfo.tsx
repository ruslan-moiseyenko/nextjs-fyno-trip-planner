import { ProgressBar } from "@/components/ProgressBar";
import { ItineraryType } from "@/types/types";
import React, { FC } from "react";

type RegionInfoProps = {
  data: ItineraryType;
  index: number;
};

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const RegionInfo: FC<RegionInfoProps> = ({
  data: { description, tags, title },
  index,
}) => {
  return (
    <ProgressBar progress={alphabet[index]} isProgressBar>
      <h3 className="mb-1 text-xl font-semibold">{title}</h3>
      <ul className="mb-2 flex gap-4">
        {tags.map((item, index) => (
          <li
            key={`key-${index}${item}`}
            className="mr-4 text-sm font-normal text-text_trinary"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="text-base font-normal text-text_secondary">{description}</p>
    </ProgressBar>
  );
};
