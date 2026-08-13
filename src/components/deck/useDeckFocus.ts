"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  CARD_IDS,
  FLIGHT_MS,
  type CardId,
  isCardId,
} from "./types";

const DEFAULT_ORDER: CardId[] = ["me", "about", "work", "life"];

function orderFrom(id: CardId): CardId[] {
  return [id, ...DEFAULT_ORDER.filter((item) => item !== id)];
}

export function useDeckFocus() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cardParam = searchParams.get("card");

  const [order, setOrder] = useState<CardId[]>(() =>
    orderFrom(isCardId(cardParam) ? cardParam : "me"),
  );

  const animatingRef = useRef(false);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      reduceMotionRef.current = media.matches;
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const activate = useCallback(
    (id: CardId) => {
      if (animatingRef.current) return;

      setOrder((prev) => {
        if (prev[0] === id) return prev;
        animatingRef.current = true;
        window.setTimeout(
          () => {
            animatingRef.current = false;
          },
          reduceMotionRef.current ? 0 : FLIGHT_MS,
        );
        return [id, ...prev.filter((item) => item !== id)];
      });

      if (cardParam !== id) {
        router.replace(`?card=${id}`, { scroll: false });
      }
    },
    [cardParam, router],
  );

  useEffect(() => {
    if (!cardParam) {
      router.replace("?card=me", { scroll: false });
    }
  }, [cardParam, router]);

  useEffect(() => {
    if (!isCardId(cardParam)) return;
    setOrder((prev) =>
      prev[0] === cardParam ? prev : [cardParam, ...prev.filter((id) => id !== cardParam)],
    );
  }, [cardParam]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        const index = CARD_IDS.indexOf(order[0]);
        activate(CARD_IDS[(index + 1) % CARD_IDS.length]);
        return;
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        const index = CARD_IDS.indexOf(order[0]);
        activate(CARD_IDS[(index - 1 + CARD_IDS.length) % CARD_IDS.length]);
        return;
      }

      if (/^[1-4]$/.test(event.key)) {
        activate(CARD_IDS[Number(event.key) - 1]);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activate, order]);

  return {
    activeId: order[0],
    stageId: order[0],
    railIds: order.slice(1),
    activate,
  };
}
