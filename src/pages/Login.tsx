import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [tab, setTab] = useState<"signup" | "signin">("signup");
  const [showPw, setShowPw] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Link to="/" className="block text-center text-2xl font-bold tracking-tight mb-8">
          <span className="warm-text">JOBRA</span> <span className="text-foreground">AI</span>
        </Link>

        <div className="glass-card rounded-2xl p-8">
          <div className="flex bg-secondary rounded-lg p-1 mb-6">
            {(["signup", "signin"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${tab === t ? "bg-card text-primary" : "text-muted-foreground"}`}>
                {t === "signup" ? "Sign up" : "Sign in"}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-foreground mb-6">{tab === "signup" ? "Create an account" : "Welcome back"}</h2>

          <div className="space-y-4">
            {tab === "signup" && (
              <input type="text" placeholder="Full name" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            )}
            <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            <div className="relative">
              <input type={showPw ? "text" : "password"} placeholder="Password" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors pr-10" />
              <button onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button className="w-full mt-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2">
            {tab === "signup" ? "Create Account" : "Sign In"} <ArrowRight className="w-4 h-4" />
          </button>

          <div className="relative my-6">
            <div className="divider-gradient" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-xs text-muted-foreground">or continue with</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {["Google", "Apple"].map((p) => (
              <button key={p} className="py-2.5 rounded-xl bg-secondary border border-border text-sm text-foreground hover:bg-accent/50 transition-colors">{p}</button>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            By continuing, you agree to our <a href="#" className="text-primary hover:underline">Terms & Service</a>
          </p>
        </div>
      </div>
    </div>
  );
}
