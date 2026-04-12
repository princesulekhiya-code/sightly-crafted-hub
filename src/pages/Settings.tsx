import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Bell, Lock, Trash2, Palette, Globe } from "lucide-react";

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button onClick={() => setOn(!on)} className={`relative w-10 h-5.5 rounded-full transition-all duration-300 ${on ? "bg-primary/80" : "bg-secondary"}`}>
      <div className={`absolute top-0.5 w-4.5 h-4.5 rounded-full transition-transform duration-300 ${on ? "left-5 bg-primary-foreground" : "left-0.5 bg-muted-foreground"}`} />
    </button>
  );
}

function SettingsSection({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-card border border-border/60 p-5">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl space-y-5">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-1">Account Settings</h2>
          <p className="text-sm text-secondary-foreground">Manage your preferences, security and privacy</p>
        </div>

        <SettingsSection icon={Bell} title="Notifications">
          <div className="space-y-4">
            {[
              { label: "Email notifications", desc: "Receive updates via email", on: true },
              { label: "Push notifications", desc: "Real-time alerts on device", on: true },
              { label: "Job match alerts", desc: "Notify when new matches found", on: true },
              { label: "Weekly summary", desc: "Weekly digest of activity", on: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-1">
                <div>
                  <p className="text-sm text-foreground">{item.label}</p>
                  <p className="text-[11px] text-muted-foreground">{item.desc}</p>
                </div>
                <Toggle defaultOn={item.on} />
              </div>
            ))}
          </div>
        </SettingsSection>

        <SettingsSection icon={Palette} title="Appearance">
          <div className="flex items-center justify-between py-1">
            <div>
              <p className="text-sm text-foreground">Dark mode</p>
              <p className="text-[11px] text-muted-foreground">Use dark theme across the application</p>
            </div>
            <Toggle defaultOn={true} />
          </div>
        </SettingsSection>

        <SettingsSection icon={Globe} title="Language & Region">
          <div className="flex items-center justify-between py-1">
            <div>
              <p className="text-sm text-foreground">Language</p>
              <p className="text-[11px] text-muted-foreground">Select your preferred language</p>
            </div>
            <span className="text-xs text-accent-foreground bg-secondary/50 px-3 py-1.5 rounded-lg border border-border/50">English</span>
          </div>
        </SettingsSection>

        <SettingsSection icon={Lock} title="Security">
          <div className="space-y-4">
            <button className="px-4 py-2 rounded-xl bg-secondary/50 border border-border/50 text-foreground text-xs font-medium hover:border-primary/30 transition-all duration-300">Change Password</button>
            <div className="flex items-center justify-between py-1">
              <div>
                <p className="text-sm text-foreground">Two-factor authentication</p>
                <p className="text-[11px] text-muted-foreground">Add extra security to your account</p>
              </div>
              <Toggle />
            </div>
          </div>
        </SettingsSection>

        <div className="rounded-2xl bg-card border border-destructive/15 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Trash2 className="w-4 h-4 text-destructive/70" />
            <h3 className="text-sm font-semibold text-destructive/70">Danger Zone</h3>
          </div>
          <p className="text-xs text-secondary-foreground mb-4">Permanently delete your account and all data. This action cannot be undone.</p>
          <button className="px-4 py-2 rounded-xl bg-destructive/10 text-destructive/80 text-xs font-medium hover:bg-destructive/20 transition-all duration-300">Delete Account</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
