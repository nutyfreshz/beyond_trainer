"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Activity, ArrowRight, Atom, BarChart3, Play, ScanLine } from "lucide-react";
import { useRef } from "react";
import type { PointerEvent } from "react";

type HudCardConfig = {
  label: string;
  sublabel: string;
  value: string;
  detail: string;
  className: string;
  delay: number;
  chart?: string;
  bars?: boolean;
  gauge?: boolean;
  icon?: "atom";
};

const hudCards: HudCardConfig[] = [
  {
    label: "MUSCLE ACTIVATION",
    sublabel: "LATISSIMUS DORSI",
    value: "87%",
    detail: "PEAK ACTIVATION",
    className: "left-[2%] top-[12%] xl:left-[7%]",
    delay: 0.2,
    chart: "M2 34 C12 31, 18 35, 28 26 S44 30, 53 17 S67 24, 78 8 S92 15, 98 3",
  },
  {
    label: "BIOMECHANICS",
    sublabel: "ROM OPTIMAL RANGE",
    value: "122°",
    detail: "SHOULDER ABDUCTION",
    className: "left-[-2%] top-[43%] xl:left-[0%]",
    delay: 0.35,
    chart: "M2 31 C14 33, 20 26, 31 27 S47 19, 58 22 S72 14, 80 16 S91 8, 98 5",
  },
  {
    label: "BIOMARKER MAP",
    sublabel: "MULTI-PANEL SIGNAL",
    value: "LIVE",
    detail: "TREND CORRELATION",
    className: "right-[0%] top-[14%] xl:right-[2%]",
    delay: 0.45,
    icon: "atom",
  },
  {
    label: "PROGRESSION RESPONSE",
    sublabel: "MODEL OUTPUT",
    value: "2.31x",
    detail: "UPREGULATED",
    className: "right-[3%] top-[43%] xl:right-[7%]",
    delay: 0.6,
    bars: true,
  },
  {
    label: "RECOVERY STATUS",
    sublabel: "READINESS MODEL",
    value: "92%",
    detail: "OPTIMAL",
    className: "right-[10%] bottom-[6%] xl:right-[13%]",
    delay: 0.75,
    gauge: true,
  },
];

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 80, damping: 20, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.6 });

  const figureX = useTransform(x, [-1, 1], [-16, 16]);
  const figureY = useTransform(y, [-1, 1], [-8, 8]);
  const ringX = useTransform(x, [-1, 1], [10, -10]);
  const ringY = useTransform(y, [-1, 1], [7, -7]);
  const hudX = useTransform(x, [-1, 1], [-7, 7]);
  const hudY = useTransform(y, [-1, 1], [-5, 5]);

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    rawX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    rawY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const onPointerLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section
      ref={heroRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="hero-stage relative z-10 min-h-[calc(100svh-76px)] overflow-hidden border-b border-cyan-300/10"
    >
      <div className="hero-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="hero-vignette absolute inset-0" aria-hidden="true" />
      <div className="hero-scanline absolute inset-x-0 top-0 h-px" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[calc(100svh-76px)] w-full max-w-[1520px] grid-cols-1 items-center gap-10 px-6 pb-16 pt-14 sm:px-10 lg:grid-cols-[0.92fr_1.25fr] lg:px-16 lg:pb-10 lg:pt-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-30 max-w-[610px] lg:-translate-y-2"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-9 bg-cyan-300/80 shadow-[0_0_16px_rgba(34,211,238,.9)]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-200/90 sm:text-xs">
              Science. Personalized. Results.
            </p>
          </div>

          <h1 className="text-balance font-[family-name:var(--font-heading)] text-[clamp(2.8rem,5.6vw,5.75rem)] font-bold leading-[0.94] tracking-[-0.055em] text-white">
            Anatomy-Tailored
            <br />
            Mechanics.
            <br />
            <span className="hero-gradient-text">Data-Driven</span>
            <br />
            <span className="hero-gradient-text">Biochemistry.</span>
            <br />
            Ultimate Hypertrophy.
          </h1>

          <p className="mt-7 max-w-[520px] text-sm leading-7 text-slate-300/75 sm:text-base">
            Clinical science, biomechanics, biochemical context, and quantitative feedback loops
            combined into one individualized hypertrophy system.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#services" className="neo-button neo-button-primary group">
              <span>Explore Coaching</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#pillars" className="neo-button neo-button-ghost group">
              <span>Explore The System</span>
              <span className="grid h-6 w-6 place-items-center rounded-full border border-cyan-200/35 transition-all group-hover:border-cyan-200/80 group-hover:bg-cyan-200/10">
                <Play className="h-3 w-3 fill-current" />
              </span>
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-cyan-100/10 pt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            <span className="text-cyan-200/75">Evidence-driven framework</span>
            <span>Biomechanics</span>
            <span>Bloodwork</span>
            <span>Statistics</span>
          </div>
        </motion.div>

        <div className="relative z-20 min-h-[610px] w-full sm:min-h-[690px] lg:min-h-[730px]">
          <motion.div style={{ x: ringX, y: ringY }} className="absolute inset-0" aria-hidden="true">
            <div className="scan-ring scan-ring-one" />
            <div className="scan-ring scan-ring-two" />
            <div className="scan-ring scan-ring-three" />
            <div className="scan-crosshair" />
          </motion.div>

          <div className="absolute left-1/2 top-1/2 h-[62%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />
          <div className="absolute left-[52%] top-[48%] h-[38%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/10 blur-[50px]" />

          <motion.div
            style={{ x: figureX, y: figureY }}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-[18%] bottom-[-7%] top-[2%] z-10 sm:inset-x-[21%] lg:inset-x-[20%]"
          >
            <div className="relative h-full w-full">
              <Image
                src="/beyond_trainer.png"
                alt="Beyond The Trainer performance coaching visual"
                fill
                priority
                sizes="(max-width: 1024px) 65vw, 44vw"
                className="hero-athlete object-contain object-bottom"
              />
              <div className="anatomy-sweep" aria-hidden="true" />
              <div className="mesh-shimmer" aria-hidden="true" />
            </div>
          </motion.div>

          <motion.div style={{ x: hudX, y: hudY }} className="absolute inset-0 z-30 hidden sm:block">
            {hudCards.map((card) => (
              <HudCard key={card.label} {...card} reduceMotion={Boolean(reduceMotion)} />
            ))}
          </motion.div>

          <div className="absolute bottom-[7%] left-[4%] z-40 hidden items-center gap-2 rounded-full border border-cyan-300/20 bg-black/35 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-cyan-100/60 backdrop-blur-md sm:flex">
            <ScanLine className="h-3.5 w-3.5 text-cyan-300" />
            Adaptive system scan
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-40 h-16 bg-gradient-to-t from-[#020609] to-transparent" />
    </section>
  );
}

function HudCard({
  label,
  sublabel,
  value,
  detail,
  className,
  delay,
  chart,
  bars,
  gauge,
  icon,
  reduceMotion,
}: HudCardConfig & { reduceMotion: boolean }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`hud-card absolute w-[188px] xl:w-[210px] ${className}`}
    >
      <div className="hud-corner hud-corner-tl" />
      <div className="hud-corner hud-corner-br" />
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[9px] font-bold tracking-[0.14em] text-cyan-200/90">{label}</p>
          <p className="mt-1 text-[8px] uppercase tracking-[0.1em] text-slate-500">{sublabel}</p>
        </div>
        <Activity className="h-3.5 w-3.5 text-cyan-300/55" />
      </div>
      <div className="mt-2 flex items-end justify-between gap-3">
        <div>
          <p className="font-[family-name:var(--font-heading)] text-2xl font-medium tracking-tight text-cyan-200">{value}</p>
          <p className="mt-0.5 text-[7px] uppercase tracking-[0.12em] text-cyan-100/45">{detail}</p>
        </div>
        <div className="h-11 w-[92px]">
          {chart && <MiniLine path={chart} />}
          {bars && <MiniBars />}
          {gauge && <MiniGauge />}
          {icon === "atom" && <Atom className="ml-auto h-10 w-10 text-cyan-200/70" strokeWidth={1.2} />}
        </div>
      </div>
    </motion.div>
  );
}

function MiniLine({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 100 40" className="h-full w-full overflow-visible">
      <path d="M0 35H100" stroke="rgba(103,232,249,.12)" strokeWidth="1" />
      <path d={path} className="hud-chart-line" fill="none" stroke="rgb(103 232 249)" strokeWidth="1.6" />
      <circle cx="98" cy="3" r="2.2" fill="rgb(165 243 252)" className="hud-dot" />
    </svg>
  );
}

function MiniBars() {
  const bars = [10, 16, 12, 23, 19, 30, 27, 36, 42];
  return (
    <div className="flex h-full items-end justify-end gap-1">
      {bars.map((height, i) => (
        <motion.span
          key={`${height}-${i}`}
          initial={{ height: 3, opacity: 0.25 }}
          animate={{ height, opacity: 0.8 }}
          transition={{ duration: 0.5, delay: 0.75 + i * 0.05, ease: "easeOut" }}
          className="w-1.5 rounded-sm bg-gradient-to-t from-cyan-500/35 to-cyan-200"
        />
      ))}
    </div>
  );
}

function MiniGauge() {
  return (
    <div className="relative ml-auto grid h-11 w-11 place-items-center rounded-full border border-cyan-300/25">
      <div className="absolute inset-[3px] rounded-full border-2 border-cyan-300 border-l-transparent shadow-[0_0_12px_rgba(34,211,238,.35)] animate-[spin_7s_linear_infinite]" />
      <BarChart3 className="h-4 w-4 text-cyan-200/75" />
    </div>
  );
}
