/**
 * Case Study Section — The hs-CRP Warning Sign.
 * Effect: B (Scroll-Triggered Reveal), G (atmospheric gradient glow behind the card)
 */
export function CaseStudySection() {
  return (
    <section id="case-study" className="relative z-10 py-20 sm:py-28 overflow-hidden">
      {/* Background atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-b/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">
        <div className="max-w-4xl mx-auto fade-up">
          <div className="glass-card rounded-2xl p-8 sm:p-12 border-accent-b/20">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-accent-b/30" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-b">
                Featured Case Study
              </span>
              <div className="h-px flex-1 bg-accent-b/30" />
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)] leading-tight mb-6">
              &ldquo;When My hs-CRP Hit 30+:&nbsp;
              <span className="text-gradient-crimson">
                How Data Saved My Anabolic Potential
              </span>
              &rdquo;
            </h2>

            {/* Story content */}
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Ignoring early fatigue signals, laboratory diagnostic testing revealed a
                High-Sensitivity C-Reactive Protein (hs-CRP) spiking above 30 mg/L. This
                indicated severe, chronic systemic neuroendocrine and muscle inflammation
                that was silently destroying anabolic capacity.
              </p>
              <p>
                Extreme systemic inflammation induces glucocorticoid resistance, blunts
                anabolic signaling pathways (mTOR activation failure), disrupts sleep
                architecture, and prevents hyperplastic and hypertrophic adaptations. The
                very training intended to build muscle had become the mechanism destroying
                it.
              </p>
            </div>

            {/* Resolution callout */}
            <div className="mt-8 rounded-xl bg-accent-a/5 border border-accent-a/15 p-5">
              <div className="flex items-start gap-3">
                <span className="text-accent-a font-bold text-lg mt-0.5">→</span>
                <div>
                  <p className="text-foreground font-semibold text-sm mb-1">The Resolution</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Implementing statistical fatigue modeling, targeted deload protocols,
                    and biochemical recovery strategies suppressed the inflammatory cascade
                    and restored full anabolic sensitivity — validated through follow-up
                    bloodwork analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
