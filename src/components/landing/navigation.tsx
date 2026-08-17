"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "PHILOSOPHY", href: "#philosophy" },
  { label: "METHOD", href: "#pillars" },
  { label: "COACHING", href: "#services" },
  { label: "CASE STUDY", href: "#case-study" },
  { label: "KNOWLEDGE", href: "#knowledge" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-[90] w-full transition-all duration-500 ${scrolled ? "nav-scrolled" : "nav-top"}`}>
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/[0.055]" />
      <div className="absolute bottom-0 left-0 h-px bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.85)]" style={{ width: `${progress}%` }} />

      <div className="mx-auto flex h-[76px] max-w-[1520px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <a href="#" className="group flex items-center gap-3">
          <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.045] shadow-[inset_0_0_18px_rgba(34,211,238,.04)] transition-all duration-300 group-hover:border-cyan-300/60 group-hover:shadow-[0_0_24px_rgba(34,211,238,.12)]">
            <svg viewBox="0 0 36 36" className="h-7 w-7 text-cyan-300" fill="none" aria-hidden="true">
              <path d="M18 2.8 31.2 10v16L18 33.2 4.8 26V10L18 2.8Z" stroke="currentColor" strokeWidth="1.3" />
              <path d="m5.2 10.2 12.8 7.2 12.8-7.2M18 17.4v15.1M11.2 6.6 24.9 14v15.2M24.8 6.6 11.1 14v15.2" stroke="currentColor" strokeWidth="1" opacity=".72" />
            </svg>
            <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-cyan-300/0 transition group-hover:ring-cyan-300/20" />
          </span>
          <span className="hidden sm:block">
            <span className="block font-[family-name:var(--font-heading)] text-sm font-bold tracking-[0.23em] text-white">BEYOND</span>
            <span className="mt-0.5 block text-[8px] font-semibold tracking-[0.38em] text-cyan-100/55">THE TRAINER</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="nav-link group relative py-3 text-[10px] font-semibold tracking-[0.16em] text-slate-400 transition-colors hover:text-cyan-100">
                {item.label}
                <span className="absolute inset-x-0 bottom-1 mx-auto h-px w-0 bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,.9)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="#contact" className="neo-button neo-button-nav">Apply Now</a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-100/10 bg-white/[0.03] text-cyan-100 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="border-t border-cyan-100/10 bg-[#02080c]/95 px-6 py-5 backdrop-blur-2xl sm:px-10">
          <ul className="grid gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-3 text-xs font-semibold tracking-[0.15em] text-slate-300 transition hover:bg-cyan-300/[0.06] hover:text-cyan-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="neo-button neo-button-primary mt-4 w-full justify-center">Apply Now</a>
        </div>
      </div>
    </nav>
  );
}
