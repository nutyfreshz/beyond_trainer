export function PhilosophySection() {
  const items = [
    {
      title: "No Gimmicks",
      desc: "Rejection of fancy instability exercises, fad diets, and commercial fitness illusions. Every protocol is backed by peer-reviewed science and clinical evidence.",
    },
    {
      title: "No Blind Ego Lifting",
      desc: "Prioritizing mechanical tension, eccentric control, and anatomical alignment over raw uncalibrated weight. Results over reps.",
    },
    {
      title: "No Supplement Scam",
      desc: "Exposing overhyped, under-dosed supplements. Advocating strictly for clinically validated, eco-budget protocols with proven mechanistic efficacy.",
    },
    {
      title: "No Guesswork",
      desc: "Utilizing statistical modeling, volumetric load tracking, and bloodwork biomarkers instead of subjective guesswork and bro-science.",
    },
  ];

  return (
    <section id="philosophy" className="relative z-10 py-20 sm:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-a/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-b mb-4">
            The Anti-BS Manifesto
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-heading)] leading-tight mb-6">
            Why Conventional Personal Training{" "}
            <span className="text-gradient-crimson">Fails</span>
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            The fitness industry is built on pseudoscience, ego, and profit-driven
            misinformation. Beyond The Trainer bridges the gap between clinical
            health science, quantitative data analytics, and biochemical optimization
            to deliver true physique transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="fade-up reveal-item glass-card rounded-xl p-6 group transition-all duration-300 hover:border-accent-b/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <h3 className="text-foreground font-semibold text-lg mb-2 font-[family-name:var(--font-heading)]">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
