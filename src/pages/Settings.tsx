import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Bell, Lock, Trash2 } from "lucide-react";

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button onClick={() => setOn(!on)} className={`relative w-11 h-6 rounded-full transition-colors ${on ? "bg-primary" : "bg-switch-background"}`}>
      <div className={`absolute top-1 w-4 h-4 rounded-full bg-foreground transition-transform ${on ? "left-6" : "left-1"}`} />
    </button>
  );
}

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold text-foreground mb-1">Account Settings</h2>
        <p className="text-muted-foreground mb-8">Manage your preferences, security and privacy</p>

        <div className="glass-card rounded-2xl p-6 mb-6">
          <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2"><Bell className="w-4 h-4 text-primary" /> Notifications</h3>
          <div className="space-y-4">
            {[
              { label: "Email notifications", desc: "Receive updates via email", on: true },
              { label: "Push notifications", desc: "Real-time alerts on device", on: true },
              { label: "Job match alerts", desc: "Notify when new matches found", on: true },
              { label: "Weekly summary", desc: "Weekly digest of activity", on: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <Toggle defaultOn={item.on} />
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 mb-6">
          <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2"><Lock className="w-4 h-4 text-primary" /> Security</h3>
          <button className="px-5 py-2.5 rounded-full bg-secondary text-foreground text-sm font-semibold hover:bg-accent transition-all mb-4">Change Password</button>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground">Two-factor authentication</p>
              <p className="text-xs text-muted-foreground">Add extra security to your account</p>
            </div>
            <Toggle />
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-destructive/20">
          <h3 className="text-destructive font-semibold mb-2 flex items-center gap-2"><Trash2 className="w-4 h-4" /> Danger Zone</h3>
          <p className="text-sm text-muted-foreground mb-4">Permanently delete your account and all data.</p>
          <button className="px-5 py-2.5 rounded-full bg-destructive text-destructive-foreground text-sm font-semibold hover:opacity-90 transition-all">Delete Account</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
