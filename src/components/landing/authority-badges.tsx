/**
 * Authority Badges — Horizontal scrollable bar of academic credentials.
 * Effect: B (Scroll-Triggered Reveal), E (hover glow on badges)
 */
export function AuthorityBadges() {
  const badges = [
    { abbr: "B.Sc.", full: "Sports Science" },
    { abbr: "B.Sc.", full: "Physical Therapy" },
    { abbr: "B.Sc.", full: "Medical Technology" },
    { abbr: "M.Sc.", full: "Applied Statistics" },
  ];

  return (
    <section className="relative z-10 py-8 border-y border-edge/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <span className="text-xs uppercase tracking-[0.15em] text-muted/70 mr-2">
            Credentials:
          </span>
          {badges.map((b) => (
            <div
              key={b.full}
              className="fade-up reveal-item"
              style={{ transitionDelay: `${badges.indexOf(b) * 0.08}s` }}
            >
              <div className="glass-card rounded-lg px-4 py-2 flex items-center gap-2 group cursor-default transition-all duration-300 hover:border-accent-a/40 hover:shadow-[0_0_16px_rgba(14,165,233,0.15)]">
                <span className="text-accent-a font-bold text-sm font-[family-name:var(--font-heading)]">
                  {b.abbr}
                </span>
                <span className="text-muted text-xs sm:text-sm">{b.full}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
