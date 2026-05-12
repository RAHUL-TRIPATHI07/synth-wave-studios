import { motion } from "framer-motion";
import { Coffee, Stethoscope, UtensilsCrossed, Scissors, Dumbbell, Pill, ShoppingBag, GraduationCap } from "lucide-react";

const items = [
  { icon: Coffee, label: "Cafés" },
  { icon: Stethoscope, label: "Clinics" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Scissors, label: "Salons" },
  { icon: Dumbbell, label: "Gyms" },
  { icon: Pill, label: "Pharmacies" },
  { icon: ShoppingBag, label: "Retail Shops" },
  { icon: GraduationCap, label: "Coaching Centers" },
];

export function Industries() {
  const loop = [...items, ...items];
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-accent" /> Industries we serve
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Built for <span className="text-gradient-aurora">main street</span>.
          </h2>
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          className="flex gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {loop.map((it, i) => (
            <div
              key={i}
              className="group flex min-w-[220px] flex-col items-start gap-4 rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/30 to-primary/20 ring-1 ring-white/10">
                <it.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-base font-semibold">{it.label}</div>
                <div className="text-xs text-muted-foreground">Tailored playbook</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
