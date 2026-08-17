/**
 * Pillars of Excellence — 3 core methodology cards.
 * Effect: B (Scroll-Triggered Reveal), E (hover glow/border)
 */
export function PillarsSection() {
  const pillars = [
    {
      number: "01",
      title: "Anatomy-Tailored Mechanics",
      accent: "cyan",
      desc: "Custom movement design based on individual joint structures. We evaluate anthropometry, limb-to-torso ratios, joint socket orientation, and muscle insertion points to tailor exercises so the resistance vector directly matches muscle fiber orientation — maximizing mechanical tension while minimizing joint stress.",
      details: [
        "Structural joint assessment & limb-length analysis",
        "Custom line-of-pull exercise prescription",
        "Long-Length Partials (LLPs) & Myo-Reps protocols",
        "Eccentric overload & beyond-failure loading",
      ],
    },
    {
      number: "02",
      title: "Biochemical & Bloodwork Optimization",
      accent: "crimson",
      desc: "Advanced biomarker analysis for health and performance. We go beyond standard panels — utilizing Cystatin C for renal function, ApoB for cardiovascular risk, GGT for hepatic stress, and pharmacokinetic analysis for supplement bioavailability optimization.",
      details: [
        "Cystatin C, ApoB, GGT, hs-CRP analysis",
        "Eco-budget evidence-based supplement protocols",
        "Pharmacokinetic & bioavailability optimization",
        "Fatigue management & recovery strategy",
      ],
    },
    {
      number: "03",
      title: "Data-Driven Hypertrophy",
      accent: "cyan",
      desc: "Statistical autoregulation and volumetric load modeling. Using M.Sc.-level applied statistics to track volume load, RIR decay, RPE variance, and autoregulation metrics — preventing overtraining before it appears in bloodwork.",
      details: [
        "Volumetric load & progressive overload modeling",
        "RIR decay & RPE variance tracking",
        "Statistical fatigue modeling & deload protocols",
        "Continuous autoregulation & check-ins",
      ],
    },
  ];

  return (
    <section id="pillars" className="relative z-10 py-20 sm:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-edge/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-16 fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-a mb-4">
            Methodology
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-heading)] leading-tight">
            Three Pillars of <span className="text-gradient-cyan">Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.number}
              className={`fade-up reveal-item glass-card rounded-2xl p-7 sm:p-8 flex flex-col transition-all duration-300 group ${
                p.accent === "crimson"
                  ? "hover:border-accent-b/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
                  : "hover:border-accent-a/40 hover:shadow-[0_0_24px_rgba(14,165,233,0.12)]"
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Number + title */}
              <div className="mb-5">
                <span
                  className={`text-4xl font-bold font-[family-name:var(--font-heading)] ${
                    p.accent === "crimson" ? "text-accent-b/30" : "text-accent-a/30"
                  }`}
                >
                  {p.number}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2 font-[family-name:var(--font-heading)]">
                  {p.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                {p.desc}
              </p>

              {/* Details list */}
              <ul className="space-y-2.5">
                {p.details.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                        p.accent === "crimson" ? "bg-accent-b" : "bg-accent-a"
                      }`}
                    />
                    <span className="text-foreground/80">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
