import { Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, Search, FileText, Briefcase, MessageSquare, Users, User, Settings, LogOut, Bell } from "lucide-react";

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

export function DashboardLayout({ children, title }: { children: React.ReactNode; title?: string }) {
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 border-r border-border/50 p-4">
        <Link to="/" className="text-xl font-bold tracking-tight mb-8 px-3">
          <span className="warm-text">JOBRA</span>
        </Link>
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = path === item.href;
            return (
              <Link key={item.href} to={item.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent/50"}`}>
                <Icon className="w-4.5 h-4.5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-border/50 pt-4 space-y-1">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            const isActive = path === item.href;
            return (
              <Link key={item.href} to={item.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent/50"}`}>
                <Icon className="w-4.5 h-4.5" />
                {item.label}
              </Link>
            );
          })}
          <Link to="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
            <LogOut className="w-4.5 h-4.5" />
            Log out
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 md:p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
