import { Sparkles, Instagram, MessageCircle, Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-md bg-primary blur-md opacity-60" />
            <div className="relative flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent">
              <Sparkles className="h-4 w-4 text-background" />
            </div>
          </div>
          <div>
            <div className="font-display text-lg font-bold">Techify</div>
            <div className="text-xs text-muted-foreground">Local-first digital studio</div>
          </div>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#work" className="hover:text-foreground">Work</a>
          <a href="#why" className="hover:text-foreground">Why us</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          {[MessageCircle, Instagram, Linkedin, Mail].map((I, i) => (
            <a
              key={i}
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full glass text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-accent"
            >
              <I className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl px-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Techify Studio. Crafted with care for local brands.
      </div>
    </footer>
  );
}
