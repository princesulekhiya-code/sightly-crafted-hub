import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const Login = lazy(() => import("./pages/Login.tsx"));
const ResumeAnalysis = lazy(() => import("./pages/ResumeAnalysis.tsx"));
const ResumeBuilder = lazy(() => import("./pages/ResumeBuilder.tsx"));
const JobMatches = lazy(() => import("./pages/JobMatches.tsx"));
const Interview = lazy(() => import("./pages/Interview.tsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const Profile = lazy(() => import("./pages/Profile.tsx"));
const Settings = lazy(() => import("./pages/Settings.tsx"));
const Mentors = lazy(() => import("./pages/Mentors.tsx"));

const queryClient = new QueryClient();

const Loading = () => <div className="min-h-screen bg-background" />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resume-analysis" element={<ResumeAnalysis />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/job-matches" element={<JobMatches />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
