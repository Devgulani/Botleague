import { motion } from "motion/react";
import { Boxes, Lightbulb, UserCog, Bitcoin, ArrowRight } from "lucide-react";

const cats = [
  { icon: Boxes, title: "MINI\nMAKERS", desc: "Where Creativity Meets Logic.", highlight: true },
  { icon: Lightbulb, title: "JUNIOR\nINNOVATORS", desc: "Engineering & Strategy Fundamentals." },
  { icon: UserCog, title: "YOUNG\nENGINEERS", desc: "Advanced Wireless & Autonomous Control." },
  { icon: Bitcoin, title: "ROBO\nMINDS", desc: "Elite Professional Sports & Robotics." },
];

export function CategoriesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">CATEGORIES</h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className={`relative flex flex-col rounded-2xl border bg-surface-1 p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_18px_50px_-20px_rgba(255,45,45,0.35)] ${
                c.highlight ? "border-gold/40" : "border-hairline"
              }`}
            >
              <c.icon className="h-9 w-9 text-gold" strokeWidth={1.5} />
              <h3 className="mt-8 whitespace-pre-line font-display text-lg font-bold leading-tight">{c.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{c.desc}</p>
              <a href="#" className="mt-6 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gold">
                Learn more <ArrowRight className="h-3 w-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
