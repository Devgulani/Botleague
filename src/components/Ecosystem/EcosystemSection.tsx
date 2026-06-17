import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

const cards = [
  {
    title: "Become a Judge",
    desc: "Evaluate the next generation of robotics talent.",
    cta: "Apply Now",
    to: "/contact",
  },
  {
    title: "Volunteer",
    desc: "Help us run India's biggest robotics league.",
    cta: "Sign Up",
    to: "/contact",
  },
  {
    title: "Community Member",
    desc: "Join a network of 12K+ robotics builders.",
    cta: "Join Free",
    to: "/signup",
  },
];

export function EcosystemSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          JOIN THE ECOSYSTEM
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-hairline bg-surface-1 p-5 transition hover:border-accent/40"
            >
              <div className="text-center text-xs font-bold uppercase tracking-[0.25em] text-foreground">
                {c.title}
              </div>
              <p className="mt-3 text-center text-sm text-muted-foreground">{c.desc}</p>
              <Link
                to={c.to}
                className="mt-5 block w-full rounded-md bg-accent py-2.5 text-center text-sm font-bold tracking-wider text-accent-foreground transition hover:brightness-110"
              >
                {c.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
