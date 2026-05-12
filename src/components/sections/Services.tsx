import { motion } from "framer-motion";
import { useRef } from "react";
import {
  Globe, Megaphone, MapPinned, MessageCircle, Receipt,
  Boxes, CalendarCheck, Stethoscope, LifeBuoy,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Premium, lightning-fast sites built for conversions." },
  { icon: Megaphone, title: "Social Media & Branding", desc: "Identity systems and content that actually convert." },
  { icon: MapPinned, title: "Google Business Setup", desc: "Get found locally with optimized listings & reviews." },
  { icon: MessageCircle, title: "WhatsApp Business", desc: "Catalogs, automations and chat funnels that sell." },
  { icon: Receipt, title: "Billing & POS", desc: "Modern point-of-sale with receipts, GST and reports." },
  { icon: Boxes, title: "Inventory Management", desc: "Real-time stock, low-stock alerts and supplier tools." },
  { icon: CalendarCheck, title: "Appointment Booking", desc: "Self-serve scheduling with reminders & deposits." },
  { icon: Stethoscope, title: "Clinic Management", desc: "Patients, prescriptions, billing — one calm dashboard." },
  { icon: LifeBuoy, title: "Support & Maintenance", desc: "Ongoing care so your tech never holds you back." },
];

function Card({ icon: Icon, title, desc, i }: { icon: typeof Globe; title: string; desc: string; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const reset = () => {
    const el = ref.current; if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition-[transform,border-color] duration-300 ease-out hover:border-primary/40 will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: "radial-gradient(400px circle at var(--mx) var(--my), oklch(0.7 0.27 300 / 0.18), transparent 60%)",
          }}
        />
        <div className="relative">
          <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 ring-1 ring-white/10">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/40 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            <Icon className="h-5 w-5 text-accent" />
          </div>
          <h3 className="mt-5 text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          <div className="mt-6 flex items-center gap-2 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
            Learn more <span aria-hidden>→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-accent" /> Services
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Everything you need to <span className="text-gradient-aurora">go digital</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            One studio, end-to-end. Choose what you need today, scale into the rest tomorrow.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => <Card key={s.title} {...s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
