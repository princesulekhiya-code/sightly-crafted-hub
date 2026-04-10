import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight shrink-0">
          <span className="warm-text">JOBRA</span>
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <Link to="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
          <Link to="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Updates</Link>
          <Link to="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Students</Link>
          <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">App</Link>
        </nav>

        {/* Right CTA - pill style like fey */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-0 rounded-full border border-border/60 bg-muted/30 backdrop-blur-sm">
            <span className="text-sm text-muted-foreground px-5 py-2">AI-Powered Career Tools</span>
            <Link
              to="/login"
              className="text-sm font-medium bg-foreground text-background rounded-full px-5 py-2 hover:opacity-90 transition-opacity"
            >
              Get Started
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
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border p-6 space-y-4">
          <a href="#pricing" className="block text-sm text-muted-foreground hover:text-foreground py-2" onClick={() => setMobileOpen(false)}>Pricing</a>
          <a href="#features" className="block text-sm text-muted-foreground hover:text-foreground py-2" onClick={() => setMobileOpen(false)}>Updates</a>
          <a href="#testimonials" className="block text-sm text-muted-foreground hover:text-foreground py-2" onClick={() => setMobileOpen(false)}>Students</a>
          <Link to="/dashboard" className="block text-sm text-muted-foreground hover:text-foreground py-2" onClick={() => setMobileOpen(false)}>App</Link>
          <div className="pt-4 border-t border-border">
            <Link to="/login" className="block px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold text-center" onClick={() => setMobileOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
