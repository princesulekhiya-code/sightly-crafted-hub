import { Link } from "react-router-dom";

/* Fey-style minimal footer - single line */
export function Footer() {
  return (
    <footer className="border-t border-border/50 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026, JOBRA AI Inc.</p>
        <nav className="flex flex-wrap items-center gap-6">
          {[
            { label: "Features", to: "/features" },
            { label: "Resume Analysis", to: "/resume-analysis" },
            { label: "Job Matching", to: "/job-matches" },
            { label: "Interview Prep", to: "/interview" },
            { label: "Pricing", to: "/pricing" },
            { label: "Updates", to: "/updates" },
            { label: "Students", to: "/students" },
          ].map((link) => (
            <Link key={link.label} to={link.to} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
          <span className="text-xs text-border">|</span>
          {["Privacy", "Terms"].map((item) => (
            <a key={item} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{item}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
