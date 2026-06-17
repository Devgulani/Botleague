import { motion } from "motion/react";
import { Cog, Cpu, Briefcase, Settings2 } from "lucide-react";

const items = [
  {
    n: "1.",
    title: "STRUCTURED EVENTS",
    desc: "From one-off events to a year-round competitive season.",
  },
  {
    n: "2.",
    title: "DIGITAL IDENTITY",
    desc: "Your professional robotics legacy, tracked and verified.",
  },
  {
    n: "3.",
    title: "NATIONAL RANKING",
    desc: "Benchmark your skills against the best engineers in India.",
  },
  {
    n: "4.",
    title: "CAREER PATHWAY",
    desc: "Turning arena victories into real-world industry opportunities.",
  },
];

export function WhatIsBotLeague() {
  return (
    <section id="programs" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          WHAT IS BOTLEAGUE?
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="font-display text-xl font-bold text-accent">{it.n}</div>
                <div className="mt-1 font-display text-base font-bold tracking-wide">
                  {it.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">&quot;{it.desc}&quot;</p>
              </motion.div>
            ))}
          </div>

          <div className="relative hidden items-center justify-center lg:flex">
            <div className="absolute inset-0 -z-10 rounded-full bg-accent/5 blur-3xl" />
            <div className="grid grid-cols-2 gap-6 text-muted-foreground">
              <Cpu className="h-20 w-20" strokeWidth={1} />
              <Cog className="h-20 w-20" strokeWidth={1} />
              <Briefcase className="h-20 w-20" strokeWidth={1} />
              <Settings2 className="h-20 w-20" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
