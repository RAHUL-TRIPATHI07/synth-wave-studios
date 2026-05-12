import { motion } from "framer-motion";
import cafe from "@/assets/project-cafe.jpg";
import clinic from "@/assets/project-clinic.jpg";
import restaurant from "@/assets/project-restaurant.jpg";
import salon from "@/assets/project-salon.jpg";
import pharmacy from "@/assets/project-pharmacy.jpg";

const items = [
  { img: cafe, tag: "Hospitality", title: "Brew & Bloom", desc: "Café website with menu, reservations and loyalty.", className: "lg:col-span-2 lg:row-span-2" },
  { img: clinic, tag: "Healthcare", title: "Lumen Clinic", desc: "Appointment booking app for a multi-doctor clinic.", className: "" },
  { img: restaurant, tag: "F&B", title: "Sora Kitchen", desc: "Mobile-first ordering with kitchen routing.", className: "" },
  { img: salon, tag: "Beauty", title: "Studio Noir", desc: "Salon dashboard, calendar and SMS reminders.", className: "lg:col-span-2" },
  { img: pharmacy, tag: "Retail", title: "MediStock", desc: "Pharmacy inventory with expiry tracking.", className: "" },
];

export function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-accent" /> Selected work
            </span>
            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight md:text-5xl">
              Demo concepts crafted for <span className="text-gradient-aurora">real local brands</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            A glimpse into the experiences we build — from cafés to clinics, every pixel
            tuned for clarity, speed and conversion.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl glass ${it.className}`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-accent">
                  {it.tag}
                </span>
                <h3 className="mt-3 text-2xl font-bold">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 transition-all group-hover:ring-primary/40" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
