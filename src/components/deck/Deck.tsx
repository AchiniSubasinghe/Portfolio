"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Card } from "./Card";
import { DECK_CARDS } from "./cards";
import { CARD_META, HEADER_HEIGHT, NARROW_BREAKPOINT, type CardId } from "./types";
import { useDeckFocus } from "./useDeckFocus";

type Pane = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type DeskLayout = {
  stage: Pane;
  rail: Pane;
  scale: number;
  peek: number;
  narrow: boolean;
};

function useNarrow(breakpoint: number) {
  const [narrow, setNarrow] = useState(false);

  useLayoutEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const sync = () => setNarrow(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [breakpoint]);

  return narrow;
}

function measureFromSize(
  width: number,
  height: number,
  narrow: boolean,
): DeskLayout {
  const pad = narrow ? 12 : 24;
  const strip = narrow ? HEADER_HEIGHT : 0;
  const gap = 24;
  const innerWidth = Math.max(width - pad * 2, 1);
  const innerHeight = Math.max(height - pad * 2 - strip, 1);

  if (narrow) {
    const stage = {
      x: pad,
      y: pad + strip,
      width: innerWidth,
      height: innerHeight,
    };
    return { stage, rail: stage, scale: 1, peek: 0, narrow };
  }

  const stageWidth = (innerWidth - gap) * (1.55 / 2.55);
  const railWidth = innerWidth - gap - stageWidth;
  const stage = { x: pad, y: pad, width: stageWidth, height: innerHeight };
  const rail = {
    x: pad + stageWidth + gap,
    y: pad,
    width: railWidth,
    height: innerHeight,
  };

  return {
    stage,
    rail,
    scale: railWidth / stageWidth,
    peek: HEADER_HEIGHT * (railWidth / stageWidth),
    narrow,
  };
}

function measureDesk(element: HTMLElement, narrow: boolean): DeskLayout {
  return measureFromSize(element.clientWidth, element.clientHeight, narrow);
}

export function Deck() {
  const deskRef = useRef<HTMLElement>(null);
  const narrow = useNarrow(NARROW_BREAKPOINT);
  const { activeId, railIds, activate } = useDeckFocus();
  const [layout, setLayout] = useState<DeskLayout>(() =>
    measureFromSize(1440, 900, false),
  );

  useLayoutEffect(() => {
    const element = deskRef.current;
    if (!element) return;

    const update = () => setLayout(measureDesk(element, narrow));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [narrow]);

  function positionFor(id: CardId) {
    if (id === activeId || layout.narrow) {
      return {
        x: layout.stage.x,
        y: layout.stage.y,
        width: layout.stage.width,
        height: layout.stage.height,
        scale: 1,
        zIndex: 20,
      };
    }

    const stackIndex = railIds.indexOf(id);
    const fromBack = railIds.length - 1 - stackIndex;

    return {
      x: layout.rail.x,
      y: layout.rail.y + fromBack * layout.peek,
      width: layout.stage.width,
      height: layout.stage.height,
      scale: layout.scale,
      zIndex: 1 + (railIds.length - stackIndex),
    };
  }

  return (
    <main ref={deskRef} className="bg-desk relative h-dvh w-full overflow-hidden">
      {narrow ? (
        <nav
          aria-label="Cards"
          className="absolute right-0 left-0 z-30 flex items-stretch px-3"
          style={{ top: 12, height: HEADER_HEIGHT }}
        >
          {DECK_CARDS.map((card) => {
            const current = card.id === activeId;
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => activate(card.id)}
                aria-current={current ? "page" : undefined}
                className={`font-mono flex-1 text-[11px] tracking-[0.16em] uppercase ${
                  current ? "text-page" : "text-page/45"
                }`}
              >
                {CARD_META[card.id].label}
              </button>
            );
          })}
        </nav>
      ) : null}

      {DECK_CARDS.map((card) => {
        const placement = card.id === activeId || narrow ? "stage" : "rail";
        const hiddenOnMobile = narrow && card.id !== activeId;
        const pos = positionFor(card.id);

        return (
          <div
            key={card.id}
            className={hiddenOnMobile ? "invisible" : undefined}
            aria-hidden={hiddenOnMobile || undefined}
          >
            <Card
              id={card.id}
              placement={placement}
              onActivate={activate}
              {...pos}
            >
              {card.body}
            </Card>
          </div>
        );
      })}
    </main>
  );
}
