"use client";
import React, { FC } from "react";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import { Avatar } from "@/components/Avatar";
import bookmark from "@/assets/svg/bookmark_black.svg";
import share from "@/assets/svg/share.svg";

type HighlightsProps = {
  data: {
    avatarImg: string;
    title: string;
    description: string;
    curator: string;
    role: string;
  };
};
export const Highlights: FC<HighlightsProps> = ({
  data: { avatarImg, title, description, curator, role },
}) => {
  return (
    <section className="w-full py-8">
      <div className="flex">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="ml-auto flex gap-2">
          <ButtonWithIcon icon={bookmark} text="Add to wishlist" />
          <ButtonWithIcon icon={share} text="Share" />
        </div>
      </div>
      <Avatar avatar={avatarImg} curatedBy={curator} role={role} />
      <p className="mt-4 text-base font-normal">{description}</p>
    </section>
  );
};
