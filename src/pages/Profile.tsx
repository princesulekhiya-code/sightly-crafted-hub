import { DashboardLayout } from "@/components/DashboardLayout";
import { Save, User, Briefcase, Mail, Phone, MapPin, Clock } from "lucide-react";

function Field({ label, value, icon: Icon }: { label: string; value: string; icon?: React.ElementType }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 block">{label}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />}
        <input type="text" defaultValue={value} className={`w-full ${Icon ? "pl-9" : "px-3"} pr-3 py-2.5 rounded-lg bg-secondary/30 border border-border/50 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors`} />
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl space-y-5">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-1">Profile Settings</h2>
          <p className="text-sm text-secondary-foreground">Manage your personal information and career goals</p>
        </div>

        {/* Avatar Card */}
        <div className="rounded-2xl bg-gradient-to-br from-[hsl(var(--primary)/0.08)] via-[hsl(var(--card))] to-[hsl(var(--primary)/0.04)] border border-border/60 p-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center text-lg font-bold text-primary">MV</div>
          <div>
            <p className="text-sm font-semibold text-foreground">Marcus Vane</p>
            <p className="text-xs text-secondary-foreground">marcus.vane@email.com</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Member since Jan 2024</p>
          </div>
        </div>

        {/* Personal Info */}
        <div className="rounded-2xl bg-card border border-border/60 p-5">
          <div className="flex items-center gap-2 mb-4">
            <User className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Personal Info</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="First Name" value="Marcus" />
            <Field label="Last Name" value="Vane" />
            <Field label="Email" value="marcus.vane@email.com" icon={Mail} />
            <Field label="Phone" value="+1 (555) 123-4567" icon={Phone} />
          </div>
        </div>

        {/* Professional */}
        <div className="rounded-2xl bg-card border border-border/60 p-5">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Professional</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Job Title" value="Senior Product Designer" icon={Briefcase} />
            <Field label="Company" value="TechCorp Inc." />
            <Field label="Location" value="San Francisco, CA" icon={MapPin} />
            <Field label="Experience" value="8 years" icon={Clock} />
          </div>
        </div>

        <button className="px-6 py-2.5 rounded-xl bg-primary/90 text-primary-foreground text-sm font-medium hover:bg-primary transition-all duration-300 flex items-center gap-2">
          <Save className="w-3.5 h-3.5" /> Save Changes
        </button>
      </div>
    </DashboardLayout>
  );
}
