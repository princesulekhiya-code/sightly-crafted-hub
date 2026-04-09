import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ_DATA = [
  { q: "How does JOBRA compare with free tools?", a: "Free tools often give generic advice—no ATS scoring, no AI-powered insights, no personalized job matching. JOBRA gives you premium career intelligence, real-time resume analysis, and AI interview coaching in a beautifully simple experience." },
  { q: "Why does it cost $19?", a: "Your subscription goes toward premium AI models, real-time job market data, and continuous platform improvements—so JOBRA stays fast, ad-free, and beautifully designed." },
  { q: "Can I cancel anytime?", a: "Yes. One click, no questions asked. Head to Settings → Subscription → Cancel." },
  { q: "Can't I just use ChatGPT for resume help?", a: "AI tools like ChatGPT weren't designed for ATS analysis or real-time job matching. JOBRA has specialized career AI built-in—every insight is accurate, current, and tailored to your profile." },
  { q: "Will the price go up?", a: "We don't plan to increase prices. If they ever change, your current rate stays locked as long as your subscription is active." },
  { q: "How long is the trial?", a: "7 days free to explore everything. We'll email you 24 hours before your trial ends—no surprise charges." },
  { q: "How many AI analyses do I get?", a: "Free plan: 3 resume scans/month. Pro plan: Unlimited scans, unlimited job matches, and full AI interview coaching." },
  { q: "Is JOBRA good for career changers?", a: "Absolutely. Whether you're switching industries or leveling up, JOBRA gives you depth without the learning curve." },
  { q: "Is my data secure?", a: "Always. We don't sell your data, and everything is encrypted end-to-end." },
];

const FEATURES = [
  "AI Resume Analysis",
  "ATS Score & Optimization",
  "Smart Job Matching",
  "AI Interview Coach",
  "Resume Builder",
  "Cover Letter Generator",
  "Skill Gap Analysis",
  "Career Path Insights",
  "Mentor Network Access",
  "Priority Support",
  "Export to PDF/DOCX",
  "Unlimited Scans",
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/30">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="text-sm font-medium text-foreground">{q}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="text-sm text-muted-foreground pb-5 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero - Fey style with big number */}
      <section className="pt-28 pb-16 px-6 text-center cosmic-bg">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
          What it costs.
        </h1>

        {/* Big number */}
        <div className="relative my-12">
          <div className="text-[12rem] md:text-[18rem] font-bold text-foreground/[0.03] leading-none select-none tracking-tighter">
            19
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl md:text-9xl font-bold text-foreground/10 tracking-tighter">19</span>
          </div>
        </div>

        <p className="text-muted-foreground">
          <span className="line-through text-muted-foreground/50">$39</span>{" "}
          $19/month or $190/year.
        </p>

        <p className="text-sm text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
          JOBRA delivers premium, AI-powered career intelligence with real-time job market data. We continuously refine our platform to ensure accuracy and reliability. Unlike scattered free tools or expensive career coaches, JOBRA strikes the perfect balance of affordability and excellence.
        </p>
      </section>

      {/* Everything you need section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Everything you need.<br />For less than a coffee a day.
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            No complex tiers. No locked features. Just the full platform—trusted by professionals who say one successful job change covers the price many times over.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{f}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/login" className="inline-block px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-accent/30 transition-all">
              Start free trial
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-sm text-muted-foreground tracking-wide mb-8">General questions</h3>
          {FAQ_DATA.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Get started with JOBRA.
        </h2>
        <Link to="/login" className="inline-block px-8 py-4 rounded-full border border-border text-foreground font-semibold text-lg hover:bg-accent/30 transition-all">
          Try it free
        </Link>
      </section>

      <Footer />
    </div>
  );
}
