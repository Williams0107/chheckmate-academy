"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import MobileDashboardNav from '@/components/MobileDashboardNav';
import DailyQuests from '@/components/DailyQuests';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Star, 
  Zap, 
  Target,
  Play,
  ArrowRight,
  Award,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="student" />
        <main className="flex-1 p-4 md:p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Welcome Section */}
              <div className="bg-indigo-600 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, Michael! 👋</h1>
                  <p className="text-indigo-100 mb-6 max-w-md">You're on a 5-day streak! Solve today's puzzle or practice with AI to keep it going.</p>
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-white text-indigo-600 hover:bg-indigo-50" asChild>
                      <Link to="/puzzles">Solve Daily Puzzle</Link>
                    </Button>
                    <Button variant="secondary" className="bg-indigo-500 text-white hover:bg-indigo-400 border-none" asChild>
                      <Link to="/play-ai">Practice vs AI</Link>
                    </Button>
                  </div>
                </div>
                <Trophy className="absolute right-4 bottom-[-20px] h-32 w-32 md:h-48 md:w-48 text-indigo-500 opacity-20 rotate-12" />
              </div>

              {/* Current Lesson */}
              <Card className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-slate-900">Continue Learning</h3>
                  <Link to="/curriculum" className="text-sm text-indigo-600 font-medium flex items-center gap-1">
                    View All <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Zap className="h-8 w-8 md:h-10 md:w-10 text-indigo-600" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <Badge className="mb-2 bg-indigo-100 text-indigo-600 hover:bg-indigo-100 border-none">Intermediate</Badge>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">The Power of the Fork</h4>
                    <p className="text-slate-500 text-sm mb-4">Learn how to attack two pieces at once with a single move.</p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-indigo-600 h-full w-[45%]"></div>
                      </div>
                      <span className="text-sm font-bold text-slate-600">45%</span>
                    </div>
                  </div>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 shrink-0 w-full md:w-auto" asChild>
                    <Link to="/lesson/i1">Resume Lesson</Link>
                  </Button>
                </div>
              </Card>

              {/* Practice Modes */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-md transition-shadow border-none bg-white">
                  <div className="bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Trophy className="h-6 w-6 text-amber-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Tactical Puzzles</h4>
                  <p className="text-sm text-slate-500 mb-4">Improve your pattern recognition with 1,000+ curated puzzles.</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/puzzles">Start Puzzles</Link>
                  </Button>
                </Card>
                <Card className="p-6 hover:shadow-md transition-shadow border-none bg-white">
                  <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Cpu className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Play vs AI</h4>
                  <p className="text-sm text-slate-500 mb-4">Test your strategies against our adaptive chess engine.</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/play-ai">Start Practice</Link>
                  </Button>
                </Card>
              </div>
            </div>

            <div className="space-y-8">
              {/* Daily Quests */}
              <DailyQuests />

              {/* Stats Card */}
              <Card className="p-6">
                <h3 className="font-bold text-slate-900 mb-6">Your Stats</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-indigo-50 p-2 rounded-lg">
                        <Star className="h-5 w-5 text-indigo-600" />
                      </div>
                      <span className="text-sm font-medium text-slate-600">Skill Rating</span>
                    </div>
                    <span className="font-bold text-slate-900">1,240</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-50 p-2 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-sm font-medium text-slate-600">Puzzles Solved</span>
                    </div>
                    <span className="font-bold text-slate-900">342</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-amber-50 p-2 rounded-lg">
                        <Target className="h-5 w-5 text-amber-600" />
                      </div>
                      <span className="text-sm font-medium text-slate-600">Accuracy</span>
                    </div>
                    <span className="font-bold text-slate-900">88%</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-8" asChild>
                  <Link to="/student/stats">Detailed Analytics</Link>
                </Button>
              </Card>
            </div>
          </div>
        </main>
      </div>
      <MobileDashboardNav role="student" />
    </div>
  );
};

export default StudentDashboard;