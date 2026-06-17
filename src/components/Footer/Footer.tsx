import { Link } from "@tanstack/react-router";
import { Play, Camera, ThumbsUp, Send } from "lucide-react";
const Youtube = Play;
const Instagram = Camera;
const Facebook = ThumbsUp;
const Twitter = Send;

const left: { label: string; to: string }[] = [
  { label: "The Arena", to: "/" },
  { label: "Events", to: "/events" },
  { label: "Leaderboard", to: "/leaderboard" },
  { label: "Programs", to: "/categories" },
  { label: "Rulebooks", to: "/disciplines" },
];
const right: { label: string; to: string }[] = [
  { label: "Join the Team", to: "/ecosystem" },
  { label: "Sponsorships", to: "/sponsors" },
  { label: "About", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  { label: "Legal", to: "/" },
];

const socials: { icon: typeof Play; label: string; href: string }[] = [
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface-1/60 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 lg:px-8">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
            Quick Links
          </div>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {left.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-foreground hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {right.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-foreground hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:text-right">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
            Social Media
          </div>
          <div className="mt-5 flex gap-3 md:justify-end">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-hairline bg-surface-2 text-foreground transition hover:border-accent/60 hover:text-accent"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5 text-xs text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} BotLeague. All rights reserved.
      </div>
    </footer>
  );
}
