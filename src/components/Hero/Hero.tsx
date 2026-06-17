import { motion } from "motion/react";
import { Play } from "lucide-react";
import heroArena from "@/assets/hero-arena.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-hairline">
          <img
            src={heroArena}
            alt="Two robots clashing in the arena"
            width={1536}
            height={896}
            className="h-[420px] w-full object-cover sm:h-[480px] md:h-[560px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          {/* Live pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-black/70 px-3 py-1.5 text-[11px] font-medium backdrop-blur md:right-6 md:top-6"
          >
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-bold text-accent">LIVE</span>
            </span>
            <span className="text-muted-foreground">: Episode 14 · Bengaluru Regionals</span>
            <span className="ml-1 flex items-center gap-1 font-semibold text-foreground">
              <Play className="h-3 w-3 fill-current" /> WATCH LIVE
            </span>
          </motion.div>

          {/* Content */}
          <div className="absolute inset-0 flex items-end p-6 md:items-center md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-xl"
            >
              <h1 className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                INDIA&apos;S ULTIMATE
                <br />
                ROBOTICS ARENA
              </h1>
              <p className="mt-4 max-w-md text-sm text-muted-foreground md:text-base">
                Build. Compete. Rank. The National Ecosystem for Robotics Arena.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-md bg-accent px-5 py-2.5 text-xs font-bold tracking-wide text-accent-foreground glow-red-sm transition hover:brightness-110"
                >
                  CREATE ACCOUNT
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-md border border-foreground/30 bg-background/40 px-5 py-2.5 text-xs font-bold tracking-wide text-foreground backdrop-blur transition hover:border-foreground/60"
                >
                  EXPLORE EVENTS
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
