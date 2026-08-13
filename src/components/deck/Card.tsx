"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CARD_META, FLIGHT_MS, HEADER_HEIGHT, type CardId } from "./types";

type CardProps = {
  id: CardId;
  placement: "stage" | "rail";
  x: number;
  y: number;
  width: number;
  height: number;
  scale: number;
  zIndex: number;
  onActivate: (id: CardId) => void;
  children: React.ReactNode;
};

export function Card({
  id,
  placement,
  x,
  y,
  width,
  height,
  scale,
  zIndex,
  onActivate,
  children,
}: CardProps) {
  const reduceMotion = useReducedMotion();
  const { label, index } = CARD_META[id];
  const [hovered, setHovered] = useState(false);
  const isRail = placement === "rail";
  const lift = isRail && hovered && !reduceMotion ? -6 : 0;

  return (
    <motion.div
      initial={false}
      animate={{ x, y: y + lift, scale }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { type: "tween", duration: FLIGHT_MS / 1000, ease: [0.22, 1, 0.36, 1] }
      }
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width,
        height,
        zIndex,
        transformOrigin: "top left",
      }}
      data-placement={placement}
      className={`bg-page text-ink flex flex-col overflow-hidden rounded-sm outline-none ${
        isRail ? "cursor-pointer" : ""
      } ${hovered && isRail ? "paper-shadow-lift" : "paper-shadow"} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-page`}
      role={isRail ? "button" : undefined}
      tabIndex={isRail ? 0 : -1}
      aria-label={isRail ? `Open ${label}` : undefined}
      onClick={isRail ? () => onActivate(id) : undefined}
      onKeyDown={
        isRail
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onActivate(id);
              }
            }
          : undefined
      }
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <header
        className="flex shrink-0 items-center gap-4 border-b border-ink px-6"
        style={{ height: HEADER_HEIGHT }}
      >
        <span className="font-mono text-[11px] tracking-[0.2em]">{index}</span>
        <span className="text-[1.35rem] leading-none">{label}</span>
      </header>
      <div
        className={
          isRail
            ? "pointer-events-none min-h-0 flex-1 overflow-hidden"
            : "paper-scroll min-h-0 flex-1 overflow-y-auto"
        }
      >
        {children}
      </div>
    </motion.div>
  );
}
