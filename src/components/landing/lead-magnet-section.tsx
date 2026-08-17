/**
 * Lead Magnet CTA — Free downloadable guide.
 * Effect: B (Scroll-Triggered Reveal), G (background gradient atmosphere)
 */
export function LeadMagnetSection() {
  return (
    <section className="relative z-10 py-20 sm:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent-a/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-a mb-4">
            Free Download
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-heading)] leading-tight mb-6">
            The No-BS Guide to Hypertrophy
            <br />
            <span className="text-gradient-cyan">& Biomarker Optimization</span>
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            A comprehensive 12-page guide covering biomechanical self-assessment checklists,
            the top 5 eco-budget supplements that actually work, and the essential blood
            markers every serious lifter must monitor.
          </p>

          <a
            href="#"
            className="inline-block btn-glow-cyan rounded-full bg-accent-a px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#0B1120] transition-all duration-300 hover:bg-accent-a/90"
          >
            Download Free Guide
          </a>
        </div>
      </div>
    </section>
  );
}
