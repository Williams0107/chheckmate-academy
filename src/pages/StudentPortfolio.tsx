"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import MobileDashboardNav from '@/components/MobileDashboardNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  History, 
  Trophy, 
  Share2, 
  ChevronRight,
  Play,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const savedGames = [
  { id: 1, opponent: 'Checkmate AI (Level 4)', result: 'Win', date: 'Oct 08, 2024', accuracy: '94%', moves: 32 },
  { id: 2, opponent: 'Sarah Williams', result: 'Draw', date: 'Oct 05, 2024', accuracy: '88%', moves: 45 },
];

const StudentPortfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="student" />
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900">My Portfolio</h1>
              <p className="text-slate-500">Your best games, favorite puzzles, and learning milestones.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                      <Star className="h-5 w-5 text-amber-500 fill-current" />
                      Saved Games
                    </h3>
                    <Button variant="ghost" size="sm" className="text-indigo-600">View All</Button>
                  </div>
                  <div className="space-y-4">
                    {savedGames.map((game) => (
                      <Card key={game.id} className="p-6 hover:shadow-md transition-shadow border-none bg-white">
                        <div className="flex flex-col md:flex-row justify-between gap-6">
                          <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                              <History className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900">vs {game.opponent}</h4>
                              <p className="text-xs text-slate-500 mb-2">{game.date} • {game.moves} moves</p>
                              <div className="flex gap-2">
                                <Badge className={game.result === 'Win' ? 'bg-green-100 text-green-600 border-none' : 'bg-slate-100 text-slate-600 border-none'}>
                                  {game.result}
                                </Badge>
                                <Badge variant="outline" className="text-[10px]">{game.accuracy} Accuracy</Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link to="/analysis">Analyze</Link>
                            </Button>
                            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                              <Play className="h-3 w-3 mr-2 fill-current" />
                              Review
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Target className="h-5 w-5 text-indigo-600" />
                    Favorite Puzzles
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: 'The Smothered Mate', difficulty: 'Advanced', xp: 25 },
                      { title: 'Back Rank Weakness', difficulty: 'Beginner', xp: 10 },
                    ].map((puzzle, idx) => (
                      <Card key={idx} className="p-4 border-none bg-white hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                          <Badge variant="secondary" className="text-[10px]">{puzzle.difficulty}</Badge>
                          <span className="text-[10px] font-bold text-amber-500">+{puzzle.xp} XP</span>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-4">{puzzle.title}</h4>
                        <Button variant="ghost" size="sm" className="w-full text-indigo-600">
                          Solve Again <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Card>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <Card className="p-6 bg-indigo-900 text-white overflow-hidden relative">
                  <div className="relative z-10">
                    <h3 className="font-bold mb-4">Share Your Progress</h3>
                    <p className="text-indigo-200 text-sm mb-6">Generate a public link to show your coach or parents your latest achievements.</p>
                    <Button variant="secondary" className="w-full">
                      <Share2 className="h-4 w-4 mr-2" />
                      Generate Link
                    </Button>
                  </div>
                  <Trophy className="absolute right-[-20px] bottom-[-20px] h-32 w-32 text-indigo-800 opacity-50 rotate-12" />
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-slate-900 mb-6">Milestones</h3>
                  <div className="space-y-6">
                    {[
                      { title: 'Reached 1200 Rating', date: 'Oct 02, 2024', icon: Trophy, color: 'text-amber-500' },
                      { title: '100 Puzzles Solved', date: 'Sept 28, 2024', icon: Target, color: 'text-indigo-600' },
                      { title: 'First Tournament Win', date: 'Sept 15, 2024', icon: Star, color: 'text-purple-500' },
                    ].map((m, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="mt-1">
                          <m.icon className={`h-5 w-5 ${m.color}`} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{m.title}</p>
                          <p className="text-xs text-slate-500">{m.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
      <MobileDashboardNav role="student" />
    </div>
  );
};

export default StudentPortfolio;