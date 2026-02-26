import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Curriculum from "./pages/Curriculum";
import Lesson from "./pages/Lesson";
import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherClasses from "./pages/TeacherClasses";
import ClassDetails from "./pages/ClassDetails";
import StudentProfile from "./pages/StudentProfile";
import StudentDashboard from "./pages/StudentDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Puzzles from "./pages/Puzzles";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Schools from "./pages/Schools";
import Settings from "./pages/Settings";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Leaderboard from "./pages/Leaderboard";
import Achievements from "./pages/Achievements";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/teacher/classes" element={<TeacherClasses />} />
          <Route path="/teacher/classes/:id" element={<ClassDetails />} />
          <Route path="/teacher/student/:id" element={<StudentProfile />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/parent" element={<ParentDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/puzzles" element={<Puzzles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/achievements" element={<Achievements />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;