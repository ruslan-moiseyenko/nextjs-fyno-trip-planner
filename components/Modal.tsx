import { DailyPlan } from "@/components/DailyPlan";
import React, { useEffect, ReactNode } from "react";

interface ModalProps {
  show: boolean;

  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const disableScroll = (e: Event) => {
      e.preventDefault();
    };

    // prevent scrolling
    if (show) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keyup", handleKeyUp);
      window.addEventListener("wheel", disableScroll, { passive: false });
      window.addEventListener("touchmove", disableScroll, { passive: false });
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("wheel", disableScroll);
      window.removeEventListener("touchmove", disableScroll);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("wheel", disableScroll);
      window.removeEventListener("touchmove", disableScroll);
    };
  }, [show, onClose]);

  return show ? (
    <div
      className="fixed inset-0 z-50 flex w-full items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div
        className="relative max-h-full overflow-y-auto rounded bg-white p-6"
        role="dialog"
      >
        <button className="absolute right-0 top-0 m-2" onClick={onClose}>
          &times;
        </button>
        <DailyPlan />
      </div>
    </div>
  ) : null;
};
