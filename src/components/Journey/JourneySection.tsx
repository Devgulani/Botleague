import { motion } from "motion/react";
import { Wrench, Landmark, Users, UserCheck } from "lucide-react";

const steps = [
  { icon: Wrench, label: "BUILD YOUR\nTEAM" },
  { icon: Landmark, label: "COMPETE ACROSS\nINDIA" },
  { icon: Users, label: "EARN NATIONAL\nRANKING & VALUE" },
  { icon: UserCheck, label: "JOIN THE\nLEAGUE" },
];

export function JourneySection() {
  return (
    <section className="relative border-y border-hairline bg-surface-1/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 text-center lg:px-8">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">User Journey</div>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-4xl">
          YOUR PATH TO THE LEAGUE
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>

        <div className="relative mt-14">
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-accent/40 md:block" />
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative flex flex-col items-center"
              >
                <div className="relative grid h-16 w-16 place-items-center rounded-full border-2 border-accent bg-surface-2 shadow-[0_0_24px_rgba(255,45,45,0.35)]">
                  <s.icon className="h-6 w-6 text-foreground" strokeWidth={1.8} />
                </div>
                <div className="mt-4 text-xs font-bold tracking-[0.2em] text-accent">STEP {i + 1}</div>
                <div className="mt-1 whitespace-pre-line text-xs font-semibold leading-tight">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
