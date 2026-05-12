import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] glass-strong p-8 md:p-14">
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />

          <div className="relative grid gap-12 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-accent" /> Let's talk
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-5 text-4xl font-bold leading-tight md:text-5xl"
              >
                Let's build your <span className="text-gradient-aurora">digital future</span> together.
              </motion.h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Tell us about your business — we'll send a tailored plan within 24 hours.
                Or jump straight to chat.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <a href="https://wa.me/919110172843" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl glass px-5 py-4 transition-all hover:border-accent/40">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/30 to-primary/20 ring-1 ring-white/10">
                      <MessageCircle className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">+91 91101 72843</div>
                      <div className="text-xs text-muted-foreground">WhatsApp — fastest reply</div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </a>
                <a href="mailto:hello@nexora.studio" className="group flex items-center justify-between rounded-2xl glass px-5 py-4 transition-all hover:border-accent/40">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/30 to-primary/20 ring-1 ring-white/10">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">hello@nexora.studio</div>
                      <div className="text-xs text-muted-foreground">For proposals & briefs</div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl glass p-6 md:p-8"
            >
              <div className="grid gap-4">
                <Field label="Your name" name="name" placeholder="Aisha Khan" />
                <Field label="Business" name="business" placeholder="Brew & Bloom Café" />
                <Field label="Email or phone" name="contact" placeholder="hello@yourbiz.com" />
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Tell us what you need</label>
                  <textarea
                    rows={4}
                    placeholder="A new website, booking system, or just exploring..."
                    className="mt-1.5 w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60 focus:bg-white/10"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary via-aurora to-accent px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
                >
                  <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary to-accent opacity-70 blur-xl transition-opacity group-hover:opacity-100" />
                  {sent ? "Thanks — we'll be in touch ✨" : "Send my brief"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, placeholder }: { label: string; name: string; placeholder: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60 focus:bg-white/10"
      />
    </div>
  );
}
