"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Users, 
  Calendar, 
  Clock, 
  ChevronRight,
  Medal,
  Sword
} from 'lucide-react';

const tournaments = [
  { 
    id: 1, 
    title: 'Fall Scholastic Open', 
    type: 'School-wide', 
    date: 'Oct 24, 2024', 
    players: 48, 
    status: 'Registering',
    prize: 'Gold Medal + 500 XP'
  },
  { 
    id: 2, 
    title: 'District Blitz Championship', 
    type: 'District', 
    date: 'Nov 02, 2024', 
    players: 124, 
    status: 'Upcoming',
    prize: 'Trophy + 1000 XP'
  },
  { 
    id: 3, 
    title: 'Beginner Rapid Arena', 
    type: 'Global', 
    date: 'Oct 18, 2024', 
    players: 850, 
    status: 'Live',
    prize: 'Exclusive Badge'
  },
];

const Tournaments = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="student" />
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Tournaments</h1>
                <p className="text-slate-500">Compete with others and climb the ranks.</p>
              </div>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <Sword className="h-4 w-4 mr-2" />
                Create Tournament
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {tournaments.map((t) => (
                  <Card key={t.id} className="p-6 hover:shadow-md transition-shadow border-none bg-white">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex gap-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${
                          t.status === 'Live' ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-indigo-50 text-indigo-600'
                        }`}>
                          <Trophy className="h-8 w-8" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold text-slate-900">{t.title}</h3>
                            <Badge variant={t.status === 'Live' ? 'destructive' : 'secondary'} className="text-[10px] uppercase">
                              {t.status}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {t.date}</span>
                            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {t.players} Players</span>
                            <span className="flex items-center gap-1 text-indigo-600 font-medium"><Medal className="h-4 w-4" /> {t.prize}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Button className={t.status === 'Live' ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700'}>
                          {t.status === 'Registering' ? 'Register Now' : t.status === 'Live' ? 'Join Arena' : 'View Details'}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-slate-900 text-white">
                  <h3 className="font-bold mb-6 flex items-center gap-2">
                    <Medal className="h-5 w-5 text-amber-500" />
                    Your Tournament Stats
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Tournaments Played</span>
                      <span className="font-bold">12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Podium Finishes</span>
                      <span className="font-bold text-amber-400">3</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Win Rate</span>
                      <span className="font-bold">58%</span>
                    </div>
                  </div>
                  <Button variant="secondary" className="w-full mt-8">View History</Button>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-slate-900 mb-6">Recent Winners</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Sarah W.', event: 'Weekly Blitz', rank: 1 },
                      { name: 'Michael C.', event: 'Fall Open', rank: 2 },
                      { name: 'Alex J.', event: 'Fall Open', rank: 3 },
                    ].map((winner, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-bold ${i === 0 ? 'text-amber-500' : 'text-slate-400'}`}>#{winner.rank}</span>
                          <span className="text-sm font-medium text-slate-700">{winner.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold">{winner.event}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tournaments;