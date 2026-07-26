import Image from "next/image";
import { achievements } from "@/data/achievements";

export function AchievementGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {achievements.map((achievement, i) => (
        <div key={i} className="flex flex-col items-center gap-4">
          <Image
            src={achievement.image}
            alt={achievement.title || `Achievement ${i + 1}`}
            width={200}
            height={200}
            className="rounded-2xl border-2 border-white object-cover aspect-square w-full"
          />
          {/* Reserved space for future description */}
          <div className="min-h-[4rem] w-full text-center">
            {achievement.title && (
              <p className="text-base font-semibold">{achievement.title}</p>
            )}
            {achievement.description ? (
              <p className="text-sm text-gray-400 mt-1">
                {achievement.description}
              </p>
            ) : (
              <p className="text-sm text-gray-600 italic">
                Add description...
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
