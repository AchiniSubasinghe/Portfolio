export const CARD_IDS = ["me", "about", "work", "life"] as const;

export type CardId = (typeof CARD_IDS)[number];

export const CARD_META: Record<CardId, { label: string; index: string }> = {
  me: { label: "Me", index: "01" },
  about: { label: "About", index: "02" },
  work: { label: "Work", index: "03" },
  life: { label: "Life", index: "04" },
};

export function isCardId(value: string | null): value is CardId {
  return CARD_IDS.includes(value as CardId);
}

export const HEADER_HEIGHT = 52;
export const NARROW_BREAKPOINT = 800;
export const FLIGHT_MS = 380;
