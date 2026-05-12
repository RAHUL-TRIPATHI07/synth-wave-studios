import { useEffect, useRef } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);
  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 transition-transform duration-[800ms] ease-out">
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 3 + 1;
        const dur = Math.random() * 8 + 6;
        const delay = Math.random() * 5;
        const hue = Math.random() > 0.5 ? "var(--neon)" : "var(--cyan-glow)";
        return (
          <span
            key={i}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: size,
              height: size,
              borderRadius: "9999px",
              background: hue,
              boxShadow: `0 0 ${size * 4}px ${hue}`,
              opacity: 0.6,
              animation: `float ${dur}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
