import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, FileSearch, FileText, Mic, Briefcase, Zap, Crown, Building2, Users, Lightbulb, Award } from "lucide-react";

const SERVICE_ITEMS = [
  { label: "Resume Analysis", href: "/resume-analysis", desc: "AI-powered ATS score & optimization", icon: FileSearch },
  { label: "Resume Builder", href: "/resume-builder", desc: "Build ATS-friendly professional resumes", icon: FileText },
  { label: "Interview Prep", href: "/interview", desc: "AI mock interview simulator", icon: Mic },
  { label: "Job Matching", href: "/job-matches", desc: "Smart role compatibility scoring", icon: Briefcase },
];

const PRICE_ITEMS = [
  { label: "Free", href: "#pricing", desc: "Basic ATS analysis, 3 scans/month", icon: Zap, tag: "Current" },
  { label: "Pro", href: "#pricing", desc: "Unlimited scans, AI resume builder", icon: Crown, tag: "$19/mo" },
  { label: "Enterprise", href: "#pricing", desc: "Team analytics, priority support", icon: Building2, tag: "Custom" },
];

const ABOUT_ITEMS = [
  { label: "About Us", href: "#about", desc: "Our mission to revolutionize hiring", icon: Users },
  { label: "How It Works", href: "#features", desc: "See JOBRA's AI engine in action", icon: Lightbulb },
  { label: "Success Stories", href: "#testimonials", desc: "Real results from real professionals", icon: Award },
];

function NavDropdown({ trigger, children }: { trigger: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const enter = () => { clearTimeout(timeout.current); setOpen(true); };
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors" aria-label={`Open ${trigger} menu`}>
        {trigger}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-72 glass-card rounded-xl p-2 z-50">
          {children}
        </div>
      )}
    </div>
  );
}

function DropdownItem({ item }: { item: { label: string; href: string; desc: string; icon: React.ElementType; tag?: string } }) {
  const Icon = item.icon;
  const isHash = item.href.startsWith("#");

  const handleClick = (e: React.MouseEvent) => {
    if (isHash) {
      e.preventDefault();
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const content = (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
      <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
      <div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">{item.label}</span>
          {item.tag && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary">{item.tag}</span>}
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
      </div>
    </div>
  );
  return isHash ? <a href={item.href} onClick={handleClick}>{content}</a> : <Link to={item.href}>{content}</Link>;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20" : "bg-background/60 backdrop-blur-md"}`}>
      <div className="w-full px-8 md:px-16 lg:px-24 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight shrink-0">
          <span className="warm-text">JOBRA</span>
        </Link>

        {/* Center Nav - Services, Pricing, About with dropdowns */}
        <nav className="hidden md:flex items-center gap-8">
          <NavDropdown trigger="Services">
            {SERVICE_ITEMS.map((item) => <DropdownItem key={item.label} item={item} />)}
          </NavDropdown>
          <NavDropdown trigger="Pricing">
            {PRICE_ITEMS.map((item) => <DropdownItem key={item.label} item={item} />)}
          </NavDropdown>
          <NavDropdown trigger="About">
            {ABOUT_ITEMS.map((item) => <DropdownItem key={item.label} item={item} />)}
          </NavDropdown>
        </nav>

        {/* Right CTA - pill style */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-0 rounded-full border border-border/60 bg-muted/30 backdrop-blur-sm">
            <span className="text-sm text-muted-foreground px-5 py-2">AI-Powered Career Tools</span>
            <Link
              to="/login"
              aria-label="Get Started with JOBRA"
              className="text-sm font-medium bg-foreground text-background rounded-full px-5 py-2 hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border p-6 space-y-4">
          {SERVICE_ITEMS.map((item) => (
            <Link key={item.label} to={item.href} className="block text-sm text-muted-foreground hover:text-foreground py-2" onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-border">
            <Link to="/login" className="block px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold text-center" onClick={() => setMobileOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
