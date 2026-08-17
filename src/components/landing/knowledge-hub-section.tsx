import { ArrowRight } from "lucide-react";

/**
 * Knowledge Hub — Preview of deep-dive articles.
 * Effect: B (Scroll-Triggered Reveal), E (hover glow on article cards)
 */
export function KnowledgeHubSection() {
  const articles = [
    {
      tag: "Renal Function",
      title: "Why Serum Creatinine Lies to Muscle-Bound Lifters",
      desc: "High muscular mass elevates serum creatinine without actual renal impairment. The case for Cystatin C as a true, unbiased measure of eGFR.",
    },
    {
      tag: "Cardiovascular Risk",
      title: "ApoB vs. LDL-C: What Heavy Lifters Must Know",
      desc: "Standard LDL-C can be misleading. Apolipoprotein B measures the exact concentration of all atherogenic particles — the gold standard.",
    },
    {
      tag: "Hypertrophy Mechanics",
      title: "Long-Length Partials & Myo-Reps: Maximizing Tension",
      desc: "Exploiting stretch-mediated hypertrophy and high-threshold motor unit recruitment without accumulating unnecessary junk volume.",
    },
    {
      tag: "Biochemistry",
      title: "Nutrient Pharmacokinetics: Bypassing First-Pass Metabolism",
      desc: "Transmucosal delivery, liposomal encapsulation, and amino acid chelates — optimizing Cmax and AUC for targeted compounds.",
    },
    {
      tag: "Overtraining",
      title: "When Exercise Becomes Poison: Reading hs-CRP Spikes",
      desc: "How chronic systemic inflammation induces glucocorticoid resistance and blunts mTOR activation — and how to restore anabolic sensitivity.",
    },
  ];

  return (
    <section id="knowledge" className="relative z-10 py-20 sm:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-edge/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4 fade-up">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-a mb-4">
              Deep-Dive Articles
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-heading)] leading-tight">
              Knowledge <span className="text-gradient-cyan">Hub</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-muted hover:text-accent-a transition-colors group"
          >
            View all articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <article
              key={a.title}
              className={`fade-up reveal-item glass-card rounded-xl p-6 group cursor-pointer transition-all duration-300 hover:border-accent-a/40 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] ${
                i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-accent-a/80 bg-accent-a/10 px-2.5 py-1 rounded-full mb-4">
                {a.tag}
              </span>
              <h3 className="text-foreground font-semibold text-base mb-2 font-[family-name:var(--font-heading)] group-hover:text-accent-a transition-colors">
                {a.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{a.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}