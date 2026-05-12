import { motion } from "framer-motion";
import { MapPin, Wrench, Sparkles, HeartHandshake } from "lucide-react";

const pillars = [
  { icon: MapPin, title: "Local-first", desc: "Built in your neighborhood, supported in your language." },
  { icon: Wrench, title: "Tech, simplified", desc: "No jargon. We translate complex tools into clear outcomes." },
  { icon: Sparkles, title: "Premium craft", desc: "Studio-grade design and engineering for small budgets." },
  { icon: HeartHandshake, title: "Long-term partner", desc: "Maintenance, updates and strategy — every month." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-accent" /> About Nexora
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              A modern studio built to make <span className="text-gradient-aurora">local businesses</span> feel global.
            </h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              We're a local-first technology team helping small businesses modernize without
              the enterprise price tag. From your first website to a complete clinic
              management system — we ship it fast, make it beautiful, and stick around.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Design", "Engineering", "Automation", "Support"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 ring-1 ring-white/10">
                    <p.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
