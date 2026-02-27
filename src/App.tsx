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
import ParentChildDetail from "./pages/ParentChildDetail";
import AdminDashboard from "./pages/AdminDashboard";
import Puzzles from "./pages/Puzzles";
import PlayAI from "./pages/PlayAI";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Schools from "./pages/Schools";
import Parents from "./pages/Parents";
import Settings from "./pages/Settings";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Leaderboard from "./pages/Leaderboard";
import Achievements from "./pages/Achievements";
import TeacherAnalytics from "./pages/TeacherAnalytics";
import StudentStats from "./pages/StudentStats";
import GameAnalysis from "./pages/GameAnalysis";
import Tournaments from "./pages/Tournaments";
import StudentAssignments from "./pages/StudentAssignments";
import PuzzleRush from "./pages/PuzzleRush";
import OpeningExplorer from "./pages/OpeningExplorer";
import TeacherResources from "./pages/TeacherResources";
import StudentPortfolio from "./pages/StudentPortfolio";

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
          <Route path="/teacher/analytics" element={<TeacherAnalytics />} />
          <Route path="/teacher/resources" element={<TeacherResources />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/stats" element={<StudentStats />} />
          <Route path="/student/assignments" element={<StudentAssignments />} />
          <Route path="/student/portfolio" element={<StudentPortfolio />} />
          <Route path="/parent" element={<ParentDashboard />} />
          <Route path="/parent/child/:id" element={<ParentChildDetail />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/puzzles" element={<Puzzles />} />
          <Route path="/puzzle-rush" element={<PuzzleRush />} />
          <Route path="/openings" element={<OpeningExplorer />} />
          <Route path="/play-ai" element={<PlayAI />} />
          <Route path="/analysis" element={<GameAnalysis />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;