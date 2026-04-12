import { Link } from "react-router-dom";
import { LayoutDashboard, Search, FileText, Briefcase, MessageSquare, Users, User, Settings, LogOut, Bell, Sun, ChevronRight } from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Search, label: "Resume Analysis", href: "/resume-analysis" },
  { icon: FileText, label: "Resume Builder", href: "/resume-builder" },
  { icon: Briefcase, label: "Job Matches", href: "/job-matches" },
  { icon: MessageSquare, label: "AI Interview", href: "/interview" },
  { icon: Users, label: "Mentors", href: "/mentors" },
];

const bottomItems = [
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 border-r border-border/50 py-6 px-3">
        <Link to="/" className="px-3 mb-1">
          <span className="text-lg font-bold warm-text">Jobra AI</span>
          <p className="text-[10px] text-muted-foreground tracking-widest uppercase">AI Career Platform</p>
        </Link>

        <nav className="flex-1 mt-6 space-y-0.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = path === item.href;
            return (
              <Link key={item.href} to={item.href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-colors ${isActive ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`}>
                <span className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  {item.label}
                </span>
                {isActive && <ChevronRight className="w-3.5 h-3.5" />}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border/50 pt-4 mt-2 space-y-0.5">
          <p className="px-3 text-[10px] text-muted-foreground uppercase tracking-widest mb-2">Admin</p>
          {bottomItems.map((item) => {
            const Icon = item.icon;
            const isActive = path === item.href;
            return (
              <Link key={item.href} to={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`}>
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
          <Link to="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
            <LogOut className="w-4 h-4" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-border/50">
          <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 border border-border/50">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="Search candidates or jobs..." className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-48" />
            </div>
            <button className="p-2 rounded-xl hover:bg-secondary/50 transition-colors" aria-label="Toggle theme">
              <Sun className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="relative p-2 rounded-xl hover:bg-secondary/50 transition-colors" aria-label="Notifications">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">MV</div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-foreground">Marcus Vane</p>
                <p className="text-[11px] text-muted-foreground">hr@company.com</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 md:p-8 overflow-auto">
          {children}
        </main>

        {/* Footer */}
        <footer className="flex items-center justify-between px-6 py-4 border-t border-border/50 text-xs text-muted-foreground">
          <span>© 2024 JOBRA Inc. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Status</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default DashboardLayout;
