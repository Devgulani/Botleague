import { motion } from "motion/react";
import roborace from "@/assets/disc-roborace.jpg";
import linefollower from "@/assets/disc-linefollower.jpg";
import rcracing from "@/assets/disc-rcracing.jpg";
import drone from "@/assets/disc-drone.jpg";
import hockey from "@/assets/disc-hockey.jpg";
import robowar from "@/assets/disc-robowar.jpg";
import { ProgressiveImage } from "@/components/ui/skeletons/ProgressiveImage";

const tiles = [
  { title: "Robo Race", img: roborace },
  { title: "Line Follower", img: linefollower },
  { title: "RC Racing", img: rcracing },
  { title: "FPV Drone Racing & Aeromodelling", img: drone },
  { title: "Robo Hockey", img: hockey },
  { title: "Robo War", img: robowar },
];

export function DisciplinesSection() {
  return (
    <section id="community" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Sports</div>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
          COMPETITION DISCIPLINES
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-hairline bg-surface-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ProgressiveImage
                  src={t.img}
                  alt={t.title}
                  width={768}
                  height={576}
                  containerClassName="h-full w-full"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-3">
                <figcaption className="text-sm font-semibold">{t.title}</figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
