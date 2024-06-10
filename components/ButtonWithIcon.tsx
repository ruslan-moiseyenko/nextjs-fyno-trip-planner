import Image from "next/image";
import React, { FC } from "react";

type ButtonWithIconProps = {
  icon: string;
  text: string;
  styles?: string;
  onClick?: () => void;
};

export const ButtonWithIcon: FC<ButtonWithIconProps> = ({
  text,
  icon,
  styles = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`mb-4 flex items-center rounded-lg border-[1px] border-border_gray bg-transparent px-3 py-1 text-[15px] font-semibold ${styles}`}
    >
      <Image src={icon} alt="avatar" className="mr-2" />
      {text}
    </button>
  );
};
