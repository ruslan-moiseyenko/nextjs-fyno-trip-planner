import React, { FC } from "react";
import { ProgressBar } from "@/components/ProgressBar";

import { CardInfoType } from "@/types/types";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import list from "@/assets/svg/list.svg";
import { CardCarousel } from "@/components/CardCarousel";
import { StaticImageData } from "next/image";
import { PoiCard } from "@/components/PoiCard";
import { Modal } from "@/components/Modal";

type PoiHighlightsProps = {
  title: string;
  data: CardInfoType[];
  isProgressBar?: boolean;
  icon?: StaticImageData;
  showDailyButton?: boolean;
};

export const PoiHighlights: FC<PoiHighlightsProps> = ({
  data,
  title,
  icon,
  isProgressBar,
  showDailyButton,
}) => {
  const [isModal, setIsModal] = React.useState(false);
  return (
    <>
      <ProgressBar icon={icon} progress="" isProgressBar={isProgressBar}>
        <div className="mb-6 flex w-full justify-between">
          <h3 className="text-2xl font-medium">{title}</h3>
          {showDailyButton && (
            <ButtonWithIcon
              icon={list}
              text="Show daily plan"
              onClick={() => setIsModal(true)}
            />
          )}
        </div>
        <CardCarousel>
          {data.map((item) => (
            <PoiCard key={item.id} item={item} />
          ))}
        </CardCarousel>
      </ProgressBar>
      <Modal show={isModal} onClose={() => setIsModal(false)} />
    </>
  );
};
