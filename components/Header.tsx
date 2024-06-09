"use client";
import { ButtonCreate } from "@/components/ButtonCreate";
import { TripleButton } from "@/components/TripleButton";
import React from "react";

export const Header = () => {
  return (
    <header className="flex w-full py-5">
      <TripleButton />
      <ButtonCreate />
    </header>
  );
};
