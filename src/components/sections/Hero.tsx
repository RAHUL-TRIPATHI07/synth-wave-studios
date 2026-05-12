import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Particles } from "@/components/site/Particles";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      <div className="absolute inset-0 -z-10 grid-bg" />
      <Particles count={50} />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -left-20 top-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl float" />
      <div className="pointer-events-none absolute right-0 top-60 h-96 w-96 rounded-full bg-accent/20 blur-3xl float" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Local-first technology partner
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]"
        >
          <span className="text-gradient">Transforming Local</span>
          <br />
          <span className="text-gradient-aurora">Businesses</span>{" "}
          <span className="text-gradient">Into</span>
          <br />
          <span className="text-gradient">Digital Brands.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-7 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          We help cafés, clinics, salons, gyms and pharmacies modernize affordably —
          with premium websites, smart POS, booking systems and inventory tools,
          all backed by trusted local support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-aurora to-accent px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary to-accent opacity-70 blur-xl transition-opacity group-hover:opacity-100" />
            Book Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
          >
            <Play className="h-4 w-4 text-accent" />
            View Our Work
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4"
        >
          {[
            { k: "120+", v: "Local brands launched" },
            { k: "9", v: "Industries served" },
            { k: "48h", v: "Avg. first preview" },
            { k: "99%", v: "Client retention" },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl p-4 text-left">
              <div className="text-2xl font-bold text-gradient-aurora md:text-3xl">{s.k}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
