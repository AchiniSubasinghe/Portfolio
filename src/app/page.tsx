import { Suspense } from "react";
import { Deck } from "@/components/deck/Deck";

export default function Home() {
  return (
    <Suspense fallback={<main className="bg-desk h-dvh w-full" />}>
      <Deck />
    </Suspense>
  );
}
