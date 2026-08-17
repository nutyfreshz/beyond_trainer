/**
 * Services Section — 3 Tier service cards.
 * Effect: B (Scroll-Triggered Reveal), E (hover border glow)
 */
export function ServicesSection() {
  const tiers = [
    {
      tier: "Tier 1",
      title: "Anatomical Profiling & Movement Tailoring",
      subtitle: "Biomechanics Overhaul",
      target: "Lifters with chronic pain or stubborn lagging muscle groups.",
      deliverables: [
        "Structural joint assessment & limb-length analysis",
        "Custom line-of-pull exercise prescription",
        "Video form analysis with eccentric control guidelines",
        "Long-Length Partials & Myo-Reps programming",
      ],
      accent: "cyan" as const,
      featured: false,
    },
    {
      tier: "Tier 2",
      title: "Biochemical Health & Bloodwork Optimization",
      subtitle: "Lab Review & Supplement Protocol",
      target: "Performance lifters wanting health optimization and deep blood panel analysis.",
      deliverables: [
        "Comprehensive blood panel analysis (Cystatin C, ApoB, GGT, hs-CRP)",
        "Complete hormone & metabolic profile review",
        "Eco-budget evidence-based supplement protocol",
        "Fatigue management & harm-reduction strategy",
      ],
      accent: "crimson" as const,
      featured: true,
    },
    {
      tier: "Tier 3",
      title: "The Ultimate Hypertrophy Coaching",
      subtitle: "Full Hybrid Package",
      target: "Serious lifters seeking end-to-end science-backed optimization.",
      deliverables: [
        "Everything in Tier 1 & Tier 2 combined",
        "Statistical volume/RIR tracking & progressive overload modeling",
        "Continuous autoregulation & periodic check-ins",
        "Personalized beyond-failure stimulus programming",
      ],
      accent: "cyan" as const,
      featured: false,
    },
  ];

  return (
    <section id="services" className="relative z-10 py-20 sm:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-edge/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-16 fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-a mb-4">
            Programs
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-heading)] leading-tight">
            Services & <span className="text-gradient-cyan">Packages</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {tiers.map((t, i) => (
            <div
              key={t.tier}
              className={`fade-up reveal-item rounded-2xl p-7 sm:p-8 flex flex-col transition-all duration-300 ${
                t.featured
                  ? "glass-card border-accent-b/30 shadow-[0_0_30px_rgba(34,211,238,0.08)] lg:scale-105 lg:my-0"
                  : "glass-card"
              } ${
                t.accent === "crimson"
                  ? "hover:border-accent-b/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
                  : "hover:border-accent-a/40 hover:shadow-[0_0_24px_rgba(14,165,233,0.12)]"
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Tier badge */}
              <span
                className={`inline-block self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 ${
                  t.featured
                    ? "bg-accent-b/15 text-accent-b"
                    : "bg-accent-a/15 text-accent-a"
                }`}
              >
                {t.featured && "★ "}{t.tier}
              </span>

              <h3 className="text-xl font-bold text-foreground font-[family-name:var(--font-heading)] mb-1">
                {t.title}
              </h3>
              <p className={`text-sm mb-4 ${t.accent === "crimson" ? "text-accent-b/80" : "text-accent-a/80"}`}>
                {t.subtitle}
              </p>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {t.target}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {t.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        t.accent === "crimson" ? "text-accent-b" : "text-accent-a"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/80">{d}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center rounded-full py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                  t.featured
                    ? "bg-accent-b text-white btn-glow-crimson hover:bg-accent-b/90"
                    : "border border-accent-a/50 text-accent-a btn-glow-cyan hover:bg-accent-a/10"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}