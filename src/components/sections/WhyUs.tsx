import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Zap, BadgeDollarSign, MapPin, Palette, Layers, RefreshCw } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const v = useMotionValue(0);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  useEffect(() => {
    if (!inView) return;
    const c = animate(v, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (val) => {
        if (ref.current) ref.current.textContent = Math.round(val).toLocaleString() + suffix;
      },
    });
    return () => c.stop();
  }, [inView, to, suffix, v]);
  return <span ref={ref}>0{suffix}</span>;
}

const cards = [
  { icon: Zap, title: "Fast Delivery", value: 48, suffix: "h", desc: "First preview in two days." },
  { icon: BadgeDollarSign, title: "Affordable Pricing", value: 60, suffix: "%", desc: "Cheaper than agency rates." },
  { icon: MapPin, title: "Local Support", value: 24, suffix: "/7", desc: "Real humans in your timezone." },
  { icon: Palette, title: "Modern UI/UX", value: 100, suffix: "%", desc: "Studio-grade craft on every job." },
  { icon: Layers, title: "End-to-End", value: 9, suffix: "+", desc: "Services under one roof." },
  { icon: RefreshCw, title: "Ongoing Care", value: 12, suffix: "mo", desc: "Maintenance baked in." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-accent" /> Why choose Nexora
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Numbers that <span className="text-gradient-aurora">earn trust</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl glass p-7"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/15 blur-3xl transition-all group-hover:bg-primary/30" />
              <div className="relative flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 ring-1 ring-white/10">
                  <c.icon className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div className="relative mt-8 text-5xl font-bold tracking-tight text-gradient-aurora">
                <Counter to={c.value} suffix={c.suffix} />
              </div>
              <h3 className="mt-3 text-base font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
