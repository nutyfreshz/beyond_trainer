import { FlowingLinesCanvas } from "@/components/landing/flowing-lines-canvas";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { AuthorityBadges } from "@/components/landing/authority-badges";
import { PhilosophySection } from "@/components/landing/philosophy-section";
import { PillarsSection } from "@/components/landing/pillars-section";
import { CaseStudySection } from "@/components/landing/case-study-section";
import { ServicesSection } from "@/components/landing/services-section";
import { KnowledgeHubSection } from "@/components/landing/knowledge-hub-section";
import { LeadMagnetSection } from "@/components/landing/lead-magnet-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background flex flex-col">
      {/* Layer 0: Page background handled by CSS --background */}

      {/* Layer 1: Canvas animated background (Category A) */}
      <FlowingLinesCanvas />

      {/* Layer 2: Noise texture overlay */}
      <div className="noise-overlay fixed inset-0 pointer-events-none z-[1]" aria-hidden="true" />

      {/* ScrollReveal observer (Category B) */}
      <ScrollReveal />

      {/* Layer X: All content sections */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        <HeroSection />
        <AuthorityBadges />
        <PhilosophySection />
        <PillarsSection />
        <CaseStudySection />
        <ServicesSection />
        <KnowledgeHubSection />
        <LeadMagnetSection />
        <Footer />
      </div>
    </div>
  );
}