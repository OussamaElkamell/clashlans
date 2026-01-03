import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NewInvestigation from "./pages/NewInvestigation";
import Progress from "./pages/Progress";
import Results from "./pages/Results";
import DeepDive from "./pages/DeepDive";
import Investigations from "./pages/Investigations";
import Settings from "./pages/Settings";
import ExpertResponse from "./pages/ExpertResponse";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-investigation" element={<NewInvestigation />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/results/:id" element={<Results />} />
          <Route path="/demo" element={<Results />} />
          <Route path="/deep-dive/:contradictionId" element={<DeepDive />} />
          <Route path="/investigations" element={<Investigations />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/expert-response" element={<ExpertResponse />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
