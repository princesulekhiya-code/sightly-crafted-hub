import { useState, useRef } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Link } from "react-router-dom";
import {
  User, Briefcase, Code, GraduationCap, FolderOpen, Award, Trophy,
  Plus, MoreVertical, Eye, Download, Sparkles, ChevronLeft, ChevronRight,
  Save
} from "lucide-react";

// ─── Default Resume Data ───
const defaultData = {
  fullName: "PRINCE SULEKHIYA",
  jobTitle: "Full Stack Developer",
  email: "princesulekhiya@gmail.com",
  phone: "+91 87708 66918",
  location: "Bhopal, India",
  linkedin: "linkedin.com/in/prince-sulekhiya",
  summary: "Highly skilled Full-Stack Developer with 2+ years of experience, specializing in building scalable web applications and optimizing their performance and security. Proficient in developing robust backend microservices with Java and Spring Boot, and dynamic frontends using React.js and TypeScript. Expertise includes designing and implementing REST & GraphQL APIs, managing SQL/NoSQL databases, and collaborating effectively with UI/UX designers and DevOps engineers within Agile environments. Leverages Docker, Git, and CI/CD pipelines for streamlined deployments. Seeking a Full-Stack Developer role to deliver high-impact software solutions and contribute to innovative web application development.",
  experiences: [
    {
      title: "Software Development Engineer",
      company: "Cloud Nexus",
      period: "November 2025 - Present",
      bullets: [
        "Developed and maintained robust backend microservices using Java (Spring Boot), resolving over 20 ticket-based bugs and feature requests per sprint, ensuring high system availability.",
        "Mitigated 10+ critical security vulnerabilities in Maven dependencies, significantly reducing system exposure and ensuring stable post-upgrade behavior across applications.",
        "Streamlined centralized pom.xml dependency configuration, eliminating version conflicts and enhancing build stability across 10+ interconnected microservices.",
        "Engineered and rigorously tested Dockerized services prior to release, verifying startup, logging behavior, and stability to ensure robust application performance in production.",
        "Adhered to structured Git and Agile workflows, authoring clean, well-documented pull requests that fostered collaborative development and code quality.",
        "Integrated JUnit testing and static analysis tools into CI/CD pipelines, elevating code quality benchmarks and ensuring reliable, automated deployments.",
      ],
    },
    {
      title: "Junior Developer Intern",
      company: "InnoBimb Infotech Pvt. Ltd.",
      period: "April 2025 - September 2025",
      bullets: [
        "Built and successfully launched the Kookit Admin Panel using React (Vite), Bootstrap 5, and React Router DOM, significantly streamlining administrative operations.",
        "Implemented robust JWT authentication and role-based access control (RBAC), securing the admin panel against unauthorized access and enhancing overall application security.",
        "Integrated Axios REST APIs and optimized CRUD operations for user and device management, reducing data errors by 30% and improving database efficiency.",
        "Developed real-time temperature charts and KPI dashboards, providing instant operational visibility and enabling data-driven decisions for the operations team.",
        "Improved API integration efficiency by approximately 25% through close collaboration with the backend team to streamline and optimize over 8 critical endpoints.",
        "Delivered responsive, cross-browser UI (Chrome, Firefox, Safari) for production-ready deployment of web applications, ensuring broad accessibility.",
      ],
    },
  ],
  skills: [
    "Java", "JavaScript (ES6+)", "TypeScript", "Python", "C++", "C",
    "React.js (Vite)", "Angular (Basic)", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design",
    "Spring Boot", "Microservices", "Spring Security", "JWT Authentication", "REST API Development",
    "MySQL", "PostgreSQL", "MongoDB", "SQL", "NoSQL", "AWS RDS", "AWS DynamoDB",
    "Docker", "Kubernetes (Basic)", "Git", "GitHub", "CI/CD Pipelines", "JUnit", "Axios",
    "AWS EC2", "AWS S3", "Jenkins", "Agile", "OOP", "Data Structures & Algorithms",
    "REST API Design", "Problem Solving", "Scrum", "Kanban",
  ],
  education: [
    { degree: "B.Tech in Computer Science", school: "SAGE University, Bhopal", year: "2021 - 2025" },
    { degree: "Higher Secondary (12th)", school: "MP Board", year: "2020 - 2021" },
    { degree: "Secondary (10th)", school: "MP Board", year: "2018 - 2019" },
  ],
  projects: [
    { title: "Kookit Admin Panel", desc: "Full-stack admin dashboard with React, JWT auth, role-based access, and real-time charts." },
    { title: "Portfolio Website", desc: "Personal portfolio built with React and Tailwind CSS showcasing projects and skills." },
  ],
  certifications: [
    "Web Page Designing & Development - MeitY & BECIL, Government of India",
    "Data Science Distribution (Anaconda) - SAGE University (Winter School Program)",
    "Nexus Program: Development, Blockchain & DSA - Cloud Nexus",
  ],
  achievements: [
    "SAGE Influencer Award — Recognized for outstanding contribution to the college tech and innovation community (2024)",
    "Branding Ambassador — Sagar Institute of Research and Technology (SIRT), 2023 – 2024",
  ],
};

const templateNames = [
  "Classic", "Harvard", "Executive", "Finance", "Legal", "Academic",
  "Starter", "Developer", "Designer", "Analyst", "Marketing", "Product",
  "Startup", "Remote", "Portfolio", "Infographic", "Minimal Art", "Dark Mode",
  "Timeline", "Split", "Gradient", "Card Style",
];

// ─── Mini Template Thumbnail ───
function MiniThumb({ name, active, onClick }: { name: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`shrink-0 w-20 rounded-lg border-2 transition-all duration-200 overflow-hidden ${active ? "border-primary shadow-[0_0_10px_hsl(var(--primary)/0.3)]" : "border-border/50 hover:border-primary/30"}`}>
      <div className="bg-[hsl(0_0%_90%)] aspect-[3/4] p-1.5 flex flex-col gap-0.5">
        <div className="h-1 bg-[hsl(0_0%_30%)] rounded-full w-3/5 mx-auto" />
        <div className="h-0.5 bg-[hsl(0_0%_60%)] rounded-full w-2/5 mx-auto" />
        {[70, 85, 60, 75, 50].map((w, i) => (
          <div key={i} className="h-0.5 bg-[hsl(0_0%_70%)] rounded-full" style={{ width: `${w}%` }} />
        ))}
      </div>
      {active && (
        <div className="bg-primary text-primary-foreground text-[8px] text-center py-0.5 font-medium">{name}</div>
      )}
    </button>
  );
}

// ─── Section Header ───
function SectionHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      </div>
      <div className="flex items-center gap-1">
        <button className="p-1 rounded-lg hover:bg-secondary/50 text-muted-foreground"><Plus className="w-3.5 h-3.5" /></button>
        <button className="p-1 rounded-lg hover:bg-secondary/50 text-muted-foreground"><MoreVertical className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  );
}

// ─── Input Field ───
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 block">{label}</label>
      <input defaultValue={value} className="w-full px-3 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors" />
    </div>
  );
}

// ─── Live Preview ───
function ResumePreview({ data }: { data: typeof defaultData }) {
  return (
    <div className="bg-[hsl(0_0%_100%)] text-[hsl(0_0%_10%)] p-8 text-[11px] leading-relaxed min-h-full" style={{ fontFamily: "Times New Roman, serif" }}>
      <div className="text-center mb-4">
        <h1 className="text-lg font-bold tracking-wide">{data.fullName}</h1>
        <p className="text-xs italic text-[hsl(0_0%_40%)]">{data.jobTitle}</p>
        <p className="text-[9px] mt-1 text-[hsl(0_0%_40%)]">
          📍 {data.location} | ✉ {data.email} | 📞 {data.phone} | 🔗 {data.linkedin}
        </p>
      </div>

      <div className="border-t border-[hsl(0_0%_70%)] pt-2 mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider mb-1">Profile</h2>
        <p className="text-[10px] leading-relaxed text-[hsl(0_0%_25%)]">{data.summary}</p>
      </div>

      <div className="border-t border-[hsl(0_0%_70%)] pt-2 mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider mb-2">Professional Experience</h2>
        {data.experiences.map((exp, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between">
              <div>
                <span className="font-semibold text-[10.5px]">{exp.title}</span>
                <br />
                <span className="italic text-[10px] text-[hsl(0_0%_40%)]">{exp.company}</span>
              </div>
              <span className="text-[9px] text-[hsl(0_0%_40%)] shrink-0">{exp.period}</span>
            </div>
            <ul className="mt-1 space-y-0.5 ml-3">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-[9.5px] leading-snug text-[hsl(0_0%_25%)]">• {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[hsl(0_0%_70%)] pt-2 mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider mb-1">Technical Skills</h2>
        <p className="text-[9.5px] text-[hsl(0_0%_25%)]">{data.skills.join(" • ")}</p>
      </div>

      <div className="border-t border-[hsl(0_0%_70%)] pt-2 mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider mb-1">Education</h2>
        {data.education.map((ed, i) => (
          <div key={i} className="flex justify-between mb-1">
            <div>
              <span className="font-semibold text-[10px]">{ed.degree}</span>
              <br />
              <span className="text-[9px] italic text-[hsl(0_0%_40%)]">{ed.school}</span>
            </div>
            <span className="text-[9px] text-[hsl(0_0%_40%)]">{ed.year}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-[hsl(0_0%_70%)] pt-2 mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider mb-1">Projects</h2>
        {data.projects.map((p, i) => (
          <div key={i} className="mb-1">
            <span className="font-semibold text-[10px]">{p.title}</span>
            <span className="text-[9.5px] text-[hsl(0_0%_30%)]"> — {p.desc}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-[hsl(0_0%_70%)] pt-2 mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider mb-1">Certifications</h2>
        <ul className="space-y-0.5 ml-2">
          {data.certifications.map((c, i) => (
            <li key={i} className="text-[9.5px] text-[hsl(0_0%_25%)]">• {c}</li>
          ))}
        </ul>
      </div>

      <div className="border-t border-[hsl(0_0%_70%)] pt-2">
        <h2 className="text-xs font-bold uppercase tracking-wider mb-1">Achievements & Awards</h2>
        <ul className="space-y-0.5 ml-2">
          {data.achievements.map((a, i) => (
            <li key={i} className="text-[9.5px] text-[hsl(0_0%_25%)]">• {a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Main Page ───
export default function ResumeEditorPage() {
  const [activeTemplate, setActiveTemplate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: number) => {
    carouselRef.current?.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <DashboardLayout>
      <div className="space-y-4 -mt-2">
        {/* Template Carousel */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold text-foreground">Visual Templates</h3>
              <span className="text-[10px] text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">{templateNames.length} Designs</span>
            </div>
            <div className="flex gap-1">
              <button onClick={() => scrollCarousel(-1)} className="p-1.5 rounded-lg border border-border/60 hover:bg-secondary/50 text-muted-foreground"><ChevronLeft className="w-3.5 h-3.5" /></button>
              <button onClick={() => scrollCarousel(1)} className="p-1.5 rounded-lg border border-border/60 hover:bg-secondary/50 text-muted-foreground"><ChevronRight className="w-3.5 h-3.5" /></button>
            </div>
          </div>
          <div ref={carouselRef} className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {templateNames.map((name, i) => (
              <MiniThumb key={name} name={name} active={activeTemplate === i} onClick={() => setActiveTemplate(i)} />
            ))}
          </div>
        </div>

        {/* Editor + Preview */}
        <div className="flex gap-5 items-start">
          {/* Left: Editor */}
          <div className="w-full lg:w-[420px] shrink-0 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-foreground">Editor Workspace</h2>
                <p className="text-[11px] text-muted-foreground">Customize sections and content</p>
              </div>
              <span className="text-[10px] bg-accent text-accent-foreground px-2 py-1 rounded-full flex items-center gap-1">
                <Save className="w-3 h-3" /> Autosave
              </span>
            </div>

            {/* Personal Information */}
            <div className="rounded-xl bg-card border border-border/60 p-4">
              <SectionHeader icon={User} title="Personal Information" />
              <div className="grid grid-cols-2 gap-3">
                <Field label="Full Name" value={defaultData.fullName} />
                <Field label="Job Title" value={defaultData.jobTitle} />
              </div>
              <div className="mt-3">
                <Field label="LinkedIn" value={defaultData.linkedin} />
              </div>
              <div className="mt-3">
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 block">Bio / Summary</label>
                <textarea defaultValue={defaultData.summary} rows={4} className="w-full px-3 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none" />
              </div>
            </div>

            {/* Work Experience */}
            {defaultData.experiences.map((exp, idx) => (
              <div key={idx} className="rounded-xl bg-card border border-border/60 p-4">
                <SectionHeader icon={Briefcase} title={idx === 0 ? "Work Experience" : `Experience ${idx + 1}`} />
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <Field label="Title" value={exp.title} />
                  <Field label="Company" value={exp.company} />
                </div>
                <Field label="Period" value={exp.period} />
                <div className="mt-3 space-y-1.5">
                  {exp.bullets.map((b, j) => (
                    <p key={j} className="text-xs text-secondary-foreground leading-relaxed">• {b}</p>
                  ))}
                </div>
              </div>
            ))}

            <button className="w-full py-2.5 rounded-xl border border-dashed border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors flex items-center justify-center gap-2">
              <Plus className="w-3.5 h-3.5" /> Add Experience
            </button>

            {/* Technical Skills */}
            <div className="rounded-xl bg-card border border-border/60 p-4">
              <SectionHeader icon={Code} title="Technical Skills" />
              <div className="flex flex-wrap gap-1.5">
                {defaultData.skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 rounded-md bg-primary/8 border border-primary/15 text-[10px] text-accent-foreground">{skill}</span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="rounded-xl bg-card border border-border/60 p-4">
              <SectionHeader icon={GraduationCap} title="Education" />
              <div className="space-y-3">
                {defaultData.education.map((ed, i) => (
                  <div key={i} className="grid grid-cols-2 gap-3">
                    <Field label="Degree" value={ed.degree} />
                    <Field label="School" value={ed.school} />
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="rounded-xl bg-card border border-border/60 p-4">
              <SectionHeader icon={FolderOpen} title="Projects" />
              <div className="space-y-3">
                {defaultData.projects.map((p, i) => (
                  <Field key={i} label="Project Title" value={p.title} />
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-xl bg-card border border-border/60 p-4">
              <SectionHeader icon={Award} title="Certifications" />
              <div className="space-y-1.5">
                {defaultData.certifications.map((c, i) => (
                  <p key={i} className="text-xs text-secondary-foreground">• {c}</p>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="rounded-xl bg-card border border-border/60 p-4">
              <SectionHeader icon={Trophy} title="Achievements & Awards" />
              <div className="space-y-1.5">
                {defaultData.achievements.map((a, i) => (
                  <p key={i} className="text-xs text-secondary-foreground">• {a}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Preview */}
          <div className="hidden lg:block flex-1 sticky top-4">
            <div className="flex items-center justify-end gap-2 mb-3">
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border/60 text-sm text-secondary-foreground hover:text-foreground transition-colors">
                <Eye className="w-3.5 h-3.5" /> Preview
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border/60 text-sm text-secondary-foreground hover:text-foreground transition-colors">
                <Download className="w-3.5 h-3.5" /> Export PDF
              </button>
            </div>
            <div className="rounded-xl border border-border/60 overflow-hidden shadow-[0_4px_24px_hsl(0_0%_0%/0.3)]">
              <ResumePreview data={defaultData} />
            </div>

            {/* Bottom CTA */}
            <div className="flex justify-center gap-3 mt-4">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium hover:bg-primary transition-all duration-300">
                <Sparkles className="w-3.5 h-3.5" /> Re-run ATS Check
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-secondary-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300">
                <Sparkles className="w-3.5 h-3.5" /> Job Recommendation
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
