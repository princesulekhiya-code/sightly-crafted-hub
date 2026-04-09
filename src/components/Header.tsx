import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, FileSearch, FileText, Mic, Briefcase, Sparkles } from "lucide-react";

const FEATURE_ITEMS = [
  { label: "Resume Analysis", href: "/resume-analysis", desc: "AI-powered ATS score & optimization", icon: FileSearch },
  { label: "Resume Builder", href: "/resume-builder", desc: "Build ATS-friendly professional resumes", icon: FileText },
  { label: "Interview Prep", href: "/interview", desc: "AI mock interview simulator", icon: Mic },
  { label: "Job Matching", href: "/job-matches", desc: "Smart role compatibility scoring", icon: Briefcase },
];

function NavDropdown({ trigger, children }: { trigger: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const enter = () => { clearTimeout(timeout.current); setOpen(true); };
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
        {trigger}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-72 glass-card rounded-xl p-2 z-50">
          {children}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground">JOBRA</span>
        </Link>

        {/* Desktop Nav - Fey style: simple text links */}
        <nav className="hidden md:flex items-center gap-8">
          <NavDropdown trigger="Features">
            {FEATURE_ITEMS.map((item) => (
              <Link key={item.label} to={item.href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </Link>
            ))}
          </NavDropdown>
          <Link to="/pricing" className={`text-sm transition-colors ${isActive("/pricing") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Pricing</Link>
          <Link to="/updates" className={`text-sm transition-colors ${isActive("/updates") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Updates</Link>
          <Link to="/students" className={`text-sm transition-colors ${isActive("/students") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Students</Link>
          <Link to="/dashboard" className={`text-sm transition-colors ${isActive("/dashboard") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>App</Link>
        </nav>

        {/* Right side - announcement pill like Fey */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50">
            <span className="text-xs text-muted-foreground">AI Resume Builder is live</span>
            <Link to="/resume-builder" className="text-xs font-medium text-foreground hover:text-primary transition-colors px-3 py-1 rounded-full bg-foreground/10">
              Try it
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border p-6 space-y-3">
          {FEATURE_ITEMS.map((item) => (
            <Link key={item.label} to={item.href} className="block text-sm text-muted-foreground hover:text-foreground py-2">
              {item.label}
            </Link>
          ))}
          <div className="h-px bg-border my-2" />
          <Link to="/pricing" className="block text-sm text-muted-foreground hover:text-foreground py-2">Pricing</Link>
          <Link to="/updates" className="block text-sm text-muted-foreground hover:text-foreground py-2">Updates</Link>
          <Link to="/students" className="block text-sm text-muted-foreground hover:text-foreground py-2">Students</Link>
          <Link to="/dashboard" className="block text-sm text-muted-foreground hover:text-foreground py-2">App</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
