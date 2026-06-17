import { motion } from "motion/react";

const cards = ["Become In Judge", "Volunteer", "Community Member"];

export function EcosystemSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          JOIN THE ECOSYSTEM
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.form
              key={c}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-hairline bg-surface-1 p-5"
            >
              <div className="text-center text-xs font-bold uppercase tracking-[0.25em] text-foreground">
                {c}
              </div>
              <div className="mt-5 space-y-3">
                {["Name", "Location", "Enroll"].map((p) => (
                  <input
                    key={p}
                    placeholder={p}
                    className="w-full rounded-md border border-hairline bg-surface-2 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent/60 focus:outline-none"
                  />
                ))}
                <button
                  type="submit"
                  className="w-full rounded-md bg-accent py-2.5 text-sm font-bold tracking-wider text-accent-foreground transition hover:brightness-110"
                >
                  SIGN UP
                </button>
              </div>
            </motion.form>
          ))}
        </div>
      </div>
    </section>
  );
}
