import Image from "next/image";
import React, { FC } from "react";

type AvatarProps = {
  avatar: string;
  curatedBy: string;
  role: string;
};
export const Avatar: FC<AvatarProps> = ({ curatedBy, avatar, role }) => {
  return (
    <div className="flex items-center justify-start">
      <Image
        src={avatar}
        alt="avatar"
        className="mr-4 rounded-full"
        width={32}
        height={32}
      />
      <div>
        <p className="text-sm font-semibold">{`Curated by ${curatedBy}`}</p>
        <p className="text-sm font-normal text-text_secondary">{role}</p>
      </div>
    </div>
  );
};
