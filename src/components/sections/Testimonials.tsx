import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const items = [
  { name: "Aarav M.", role: "Owner, Brew & Bloom Café", quote: "Bookings doubled in three weeks. The new site finally matches the vibe of our shop." },
  { name: "Dr. Priya N.", role: "Lumen Clinic", quote: "Patients now self-book and pay deposits. Reception is calmer, revenue is up." },
  { name: "Rohan K.", role: "Studio Noir Salon", quote: "From WhatsApp chaos to a clean dashboard. Worth every rupee." },
  { name: "Sana R.", role: "MediStock Pharmacy", quote: "Expiry alerts alone saved us thousands. Felt like an instant upgrade." },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-accent" /> Loved by local owners
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Quiet tech, <span className="text-gradient-aurora">loud results</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="relative overflow-hidden rounded-3xl glass p-8"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/30" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-5 text-lg leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-background">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
