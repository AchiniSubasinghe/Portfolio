import type { ReactNode } from "react";
import { AboutCard } from "@/components/cards/AboutCard";
import { LifeCard } from "@/components/cards/LifeCard";
import { MeCard } from "@/components/cards/MeCard";
import { WorkCard } from "@/components/cards/WorkCard";
import { CARD_META, type CardId } from "./types";

export const DECK_CARDS: { id: CardId; label: string; body: ReactNode }[] = [
  { id: "me", label: CARD_META.me.label, body: <MeCard /> },
  { id: "about", label: CARD_META.about.label, body: <AboutCard /> },
  { id: "work", label: CARD_META.work.label, body: <WorkCard /> },
  { id: "life", label: CARD_META.life.label, body: <LifeCard /> },
];
