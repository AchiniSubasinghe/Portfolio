"use client";

interface StarConfig {
  left: string;
  top: string;
  size: number;
  delay: number;
  twinkleDuration: number;
  floatDuration: number;
}

const stars: StarConfig[] = [
  { left: "5%", top: "10%", size: 2, delay: 0, twinkleDuration: 3, floatDuration: 8 },
  { left: "15%", top: "30%", size: 1.5, delay: 1.5, twinkleDuration: 2.5, floatDuration: 6 },
  { left: "25%", top: "70%", size: 2, delay: 0.7, twinkleDuration: 4, floatDuration: 7 },
  { left: "35%", top: "15%", size: 1, delay: 2, twinkleDuration: 3.5, floatDuration: 9 },
  { left: "45%", top: "55%", size: 2.5, delay: 1, twinkleDuration: 3, floatDuration: 5 },
  { left: "55%", top: "20%", size: 1.5, delay: 0.3, twinkleDuration: 2.8, floatDuration: 7 },
  { left: "65%", top: "65%", size: 2, delay: 2.5, twinkleDuration: 3.2, floatDuration: 6 },
  { left: "75%", top: "40%", size: 1, delay: 1.8, twinkleDuration: 4, floatDuration: 8 },
  { left: "85%", top: "80%", size: 2, delay: 0.5, twinkleDuration: 3, floatDuration: 7 },
  { left: "92%", top: "5%", size: 1.5, delay: 3, twinkleDuration: 2.5, floatDuration: 6 },
  { left: "10%", top: "85%", size: 2, delay: 1.2, twinkleDuration: 3.8, floatDuration: 9 },
  { left: "48%", top: "90%", size: 1, delay: 2.2, twinkleDuration: 3, floatDuration: 5 },
  { left: "70%", top: "8%", size: 1.5, delay: 0.8, twinkleDuration: 3.3, floatDuration: 7 },
  { left: "80%", top: "50%", size: 2, delay: 1.6, twinkleDuration: 2.7, floatDuration: 6 },
  { left: "20%", top: "50%", size: 1, delay: 2.8, twinkleDuration: 3.6, floatDuration: 8 },
  { left: "60%", top: "75%", size: 2, delay: 0.2, twinkleDuration: 3.1, floatDuration: 7 },
  { left: "95%", top: "35%", size: 1, delay: 1.4, twinkleDuration: 2.9, floatDuration: 6 },
  { left: "30%", top: "95%", size: 1.5, delay: 2.1, twinkleDuration: 3.4, floatDuration: 8 },
  { left: "50%", top: "45%", size: 2, delay: 0.9, twinkleDuration: 2.6, floatDuration: 5 },
  { left: "8%", top: "60%", size: 1, delay: 3.2, twinkleDuration: 3.7, floatDuration: 7 },
  { left: "40%", top: "5%", size: 1.5, delay: 1.1, twinkleDuration: 3, floatDuration: 6 },
  { left: "68%", top: "88%", size: 2, delay: 2.4, twinkleDuration: 3.5, floatDuration: 9 },
  { left: "82%", top: "25%", size: 1, delay: 0.6, twinkleDuration: 2.8, floatDuration: 5 },
  { left: "18%", top: "18%", size: 2, delay: 1.9, twinkleDuration: 3.2, floatDuration: 7 },
  { left: "53%", top: "68%", size: 1.5, delay: 2.7, twinkleDuration: 3.9, floatDuration: 6 },
  { left: "88%", top: "70%", size: 1, delay: 0.4, twinkleDuration: 2.5, floatDuration: 8 },
  { left: "35%", top: "38%", size: 2, delay: 1.3, twinkleDuration: 3.1, floatDuration: 7 },
  { left: "72%", top: "55%", size: 1.5, delay: 2.9, twinkleDuration: 3.4, floatDuration: 6 },
  { left: "12%", top: "42%", size: 1, delay: 3.5, twinkleDuration: 3.6, floatDuration: 9 },
  { left: "58%", top: "12%", size: 2, delay: 1.7, twinkleDuration: 2.9, floatDuration: 5 },
];

export function StarBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s, ${star.delay}s`,
            animationDuration: `${star.twinkleDuration}s, ${star.floatDuration}s`,
          }}
        />
      ))}
    </div>
  );
}
