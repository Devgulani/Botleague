import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { Menu, X, Bot, User, LogOut, LayoutDashboard } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { useSession } from "@/hooks/useSession";
import { clearSession } from "@/lib/guest";

const links = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/categories", label: "Categories" },
  { to: "/disciplines", label: "Disciplines" },
  { to: "/leaderboard", label: "Leaderboard" },
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const session = useSession();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const onLogout = () => {
    clearSession();
    setMenu(false);
    navigate({ to: "/login" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/75 backdrop-blur-xl border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent text-accent-foreground">
            <Bot className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span>
            BOT<span className="text-accent">LEAGUE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {!session && (
            <>
              <Link
                to="/login"
                className="rounded-md border border-border px-4 py-1.5 text-xs font-semibold tracking-wide hover:border-foreground/40"
              >
                LOGIN
              </Link>
              <Link
                to="/signup"
                className="rounded-md bg-accent px-4 py-1.5 text-xs font-bold tracking-wide text-accent-foreground glow-red-sm transition hover:brightness-110"
              >
                SIGN UP
              </Link>
            </>
          )}
          {session && (
            <div className="relative">
              <button
                onClick={() => setMenu((m) => !m)}
                className="flex items-center gap-2 rounded-full border border-border bg-surface-2 py-1 pl-1 pr-3 hover:border-foreground/40"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-accent/20 text-accent">
                  <User className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold">
                  {session.kind === "guest" ? "Guest User" : session.name}
                </span>
              </button>
              <AnimatePresence>
                {menu && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 mt-2 w-48 overflow-hidden rounded-lg border border-hairline bg-surface-1 shadow-xl"
                  >
                    <MenuItem
                      icon={User}
                      label="Profile"
                      onClick={() => {
                        setMenu(false);
                        navigate({ to: "/" });
                      }}
                    />
                    <MenuItem
                      icon={LayoutDashboard}
                      label="Dashboard"
                      onClick={() => {
                        setMenu(false);
                        navigate({ to: "/" });
                      }}
                    />
                    <button
                      onClick={onLogout}
                      className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-surface-2"
                    >
                      <LogOut className="h-4 w-4 text-accent" /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-9 w-9 place-items-center rounded-md border border-border lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-hairline bg-background/95 backdrop-blur lg:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {links.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 text-sm">
                  {l.label}
                </Link>
              ))}
              <div className="mt-3 flex gap-2">
                {!session ? (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setOpen(false)}
                      className="flex-1 rounded-md border border-border py-2 text-center text-xs font-semibold"
                    >
                      LOGIN
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setOpen(false)}
                      className="flex-1 rounded-md bg-accent py-2 text-center text-xs font-bold text-accent-foreground"
                    >
                      SIGN UP
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={onLogout}
                    className="flex-1 rounded-md border border-border py-2 text-xs font-semibold"
                  >
                    LOGOUT ({session.kind === "guest" ? "Guest" : session.name})
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function MenuItem({
  icon: Icon,
  label,
  onClick,
}: {
  icon: typeof User;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-surface-2"
    >
      <Icon className="h-4 w-4 text-muted-foreground" /> {label}
    </button>
  );
}
