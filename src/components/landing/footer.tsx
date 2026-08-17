import { Mail, MapPin } from "lucide-react";

/**
 * Footer — Contact info, legal disclaimer, social links.
 * Sticky footer behavior via parent flex container.
 */
export function Footer() {
  return (
    <footer id="contact" className="relative z-10 mt-auto border-t border-edge/20">
      {/* Contact bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-7 w-7 rounded-md bg-accent-a/20 border border-accent-a/40 flex items-center justify-center">
                <span className="text-accent-a font-bold text-xs font-[family-name:var(--font-heading)]">BT</span>
              </div>
              <span className="text-foreground font-semibold text-sm tracking-wide font-[family-name:var(--font-heading)]">
                BEYOND THE TRAINER
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Clinical science, quantitative data analytics, and biochemical optimization
              for ultimate hypertrophy. No gimmicks. No guesswork.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-4 uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Philosophy", href: "#philosophy" },
                { label: "Pillars", href: "#pillars" },
                { label: "Services", href: "#services" },
                { label: "Case Study", href: "#case-study" },
                { label: "Knowledge Hub", href: "#knowledge" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted text-sm hover:text-accent-a transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2.5 text-muted text-sm hover:text-accent-a transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>coaching@beyondthetrainer.com</span>
              </a>
              <div className="flex items-center gap-2.5 text-muted text-sm">
                <MapPin className="w-4 h-4" />
                <span>Remote Coaching — Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-edge/20 pt-6 mb-6">
          <p className="text-foreground/30 text-xs leading-relaxed">
            <strong className="text-foreground/50">Disclaimer:</strong> The content provided
            on this website, including bloodwork analysis and health optimization protocols,
            is strictly for educational, informational, and harm-reduction purposes. It does not
            constitute medical advice, medical diagnosis, or medical treatment. Clients and
            readers should always consult with a licensed healthcare physician regarding any
            medical conditions or pharmacological interventions.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-foreground/20 text-xs">
            &copy; {new Date().getFullYear()} Beyond The Trainer. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialIcon("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z")}
            {socialIcon("M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z")}
            {socialIcon("M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.93 3.78-3.93 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z")}
            {socialIcon("M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z")}
          </div>
        </div>
      </div>
    </footer>
  );
}

function socialIcon(pathD: string) {
  return (
    <svg
      className="h-4 w-4 cursor-pointer text-foreground/30 transition-all duration-300 hover:text-accent-a hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.7)]"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={pathD} />
    </svg>
  );
}
