import Image from "next/image";
import { achievements } from "@/data/achievements";

export function AchievementGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-6 xl:gap-8">
      {achievements.map((achievement, i) => (
        <figure
          key={i}
          className="group flex flex-col gap-2 sm:gap-3"
        >
          <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-soft)] transition-[border-color,box-shadow,transform] duration-300 group-hover:border-accent/30 group-hover:shadow-[var(--shadow-glow)]">
            <Image
              src={achievement.image}
              alt={achievement.title || `Achievement photo ${i + 1}`}
              width={400}
              height={400}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:aspect-square"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
          {(achievement.title || achievement.description) && (
            <figcaption className="px-0.5 text-center sm:text-left md:text-center">
              {achievement.title && (
                <p className="text-sm font-medium tracking-tight text-foreground">
                  {achievement.title}
                </p>
              )}
              {achievement.description && (
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {achievement.description}
                </p>
              )}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
