import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Bot } from "lucide-react";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(255,45,45,0.18),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(42,215,255,0.10),transparent_55%)]" />
      <motion.div
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        animate={{ y: [0, 40, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan/15 blur-3xl"
        animate={{ y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 11, repeat: Infinity }}
      />

      <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 py-10">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent text-accent-foreground">
            <Bot className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span>
            BOT<span className="text-accent">LEAGUE</span>
          </span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl border border-hairline bg-surface-1/80 p-7 backdrop-blur-xl"
        >
          <h1 className="font-display text-3xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
          <div className="mt-6">{children}</div>
        </motion.div>

        {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
      </div>
    </div>
  );
}

export const inputCls =
  "w-full rounded-md border border-hairline bg-surface-2 px-3 py-2.5 text-sm placeholder:text-muted-foreground/70 focus:border-accent/60 focus:outline-none";
