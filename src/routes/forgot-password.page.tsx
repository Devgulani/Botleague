import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { AuthShell, inputCls } from "@/components/Auth/AuthShell";

export default function ForgotPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <AuthShell
      title="Reset your password."
      subtitle="We'll email you a secure reset link."
      footer={
        <Link to="/login" className="inline-flex items-center gap-1 font-semibold text-accent">
          <ArrowLeft className="h-3 w-3" /> Back to login
        </Link>
      }
    >
      {!sent ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setSent(true);
          }}
          className="space-y-4"
        >
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Email
            </span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              className={inputCls}
              placeholder="you@arena.com"
            />
          </label>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="w-full rounded-md bg-accent py-2.5 text-xs font-bold tracking-wider text-accent-foreground glow-red-sm transition hover:brightness-110"
          >
            SEND RESET LINK
          </motion.button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-md border border-cyan/40 bg-cyan/10 p-4 text-sm text-cyan"
        >
          Check <span className="font-semibold">{email}</span> — a reset link is on the way.
        </motion.div>
      )}
    </AuthShell>
  );
}
