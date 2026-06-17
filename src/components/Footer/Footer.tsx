import { Play, Camera, ThumbsUp, Send } from "lucide-react";
const Youtube = Play;
const Instagram = Camera;
const Facebook = ThumbsUp;
const Twitter = Send;

const left = ["The Arena", "Episodes", "National Rankings", "Programs", "Rulebooks"];
const right = ["Join the Team", "Sponsorships", "Help Center", "Contact Us", "Legal"];

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
              <li key={l}><a href="#" className="text-foreground hover:text-accent">{l}</a></li>
            ))}
          </ul>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {right.map((l) => (
              <li key={l}><a href="#" className="text-foreground hover:text-accent">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="md:text-right">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
            Social Media
          </div>
          <div className="mt-5 flex gap-3 md:justify-end">
            {[Youtube, Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-hairline bg-surface-2 text-foreground transition hover:border-accent/60 hover:text-accent"
              >
                <Icon className="h-4 w-4" />
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
