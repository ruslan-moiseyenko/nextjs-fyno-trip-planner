import { ButtonCreate } from "@/components/ButtonCreate";
import { TripleButton } from "@/components/TripleButton";
import React from "react";

export const Navigation = () => {
  return (
    <div className="flex w-full py-5">
      <TripleButton />
      <ButtonCreate />
    </div>
  );
};
