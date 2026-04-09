import { DashboardLayout } from "@/components/DashboardLayout";
import { Save } from "lucide-react";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold text-foreground mb-1">Profile Settings</h2>
        <p className="text-muted-foreground mb-8">Manage your personal information and career goals</p>

        <div className="glass-card rounded-2xl p-6 mb-6 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">MV</div>
          <div>
            <p className="text-foreground font-semibold">Marcus Vane</p>
            <p className="text-sm text-muted-foreground">marcus.vane@email.com</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 mb-6">
          <h3 className="text-foreground font-semibold mb-4">Personal Info</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[["First Name", "Marcus"], ["Last Name", "Vane"], ["Email", "marcus.vane@email.com"], ["Phone", "+1 (555) 123-4567"]].map(([label, val], i) => (
              <div key={i}>
                <label className="text-xs text-muted-foreground mb-1 block">{label}</label>
                <input type="text" defaultValue={val} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 mb-6">
          <h3 className="text-foreground font-semibold mb-4">Professional</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[["Job Title", "Senior Product Designer"], ["Company", "TechCorp Inc."], ["Location", "San Francisco, CA"], ["Experience", "8 years"]].map(([label, val], i) => (
              <div key={i}>
                <label className="text-xs text-muted-foreground mb-1 block">{label}</label>
                <input type="text" defaultValue={val} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>

        <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center gap-2">
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>
    </DashboardLayout>
  );
}
