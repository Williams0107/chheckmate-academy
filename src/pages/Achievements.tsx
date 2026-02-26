"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import MobileDashboardNav from '@/components/MobileDashboardNav';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Zap, Target, Award, Star, Shield, Flame, BookOpen, Lock } from 'lucide-react';

const achievements = [
  { id: 1, title: 'First Move', desc: 'Complete your first lesson.', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50', earned: true, date: 'Oct 1, 2024' },
  { id: 2, title: 'Tactician I', desc: 'Solve 10 tactical puzzles.', icon: Target, color: 'text-amber-600', bg: 'bg-amber-50', earned: true, date: 'Oct 3, 2024' },
  { id: 3, title: '5 Day Streak', desc: 'Log in for 5 consecutive days.', icon: Flame, color: 'text-orange-600', bg: 'bg-orange-50', earned: true, date: 'Oct 5, 2024' },
  { id: 4, title: 'Puzzle Master', desc: 'Solve 50 tactical puzzles.', icon: Award, color: 'text-purple-600', bg: 'bg-purple-50', earned: false, progress: 34 },
  { id: 5, title: 'Grandmaster Path', desc: 'Reach a skill rating of 1500.', icon: Trophy, color: 'text-indigo-600', bg: 'bg-indigo-50', earned: false, progress: 82 },
  { id: 6, title: 'Scholar', desc: 'Complete the entire Beginner module.', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-50', earned: false, progress: 65 },
  { id: 7, title: 'Defender', desc: 'Win 5 games without losing your Queen.', icon: Shield, color: 'text-green-600', bg: 'bg-green-50', earned: false, progress: 20 },
  { id: 8, title: 'Speed Demon', desc: 'Solve a puzzle in under 5 seconds.', icon: Zap, color: 'text-red-600', bg: 'bg-red-50', earned: false, progress: 0 },
];

const Achievements = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="student" />
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900">Achievements</h1>
              <p className="text-slate-500">Track your progress and unlock new badges.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 bg-indigo-600 text-white">
                <p className="text-indigo-100 text-sm font-medium uppercase mb-1">Total Earned</p>
                <p className="text-3xl font-bold">12 / 48</p>
                <div className="mt-4 w-full bg-indigo-500 h-2 rounded-full overflow-hidden">
                  <div className="bg-white h-full w-[25%]"></div>
                </div>
              </Card>
              <Card className="p-6">
                <p className="text-slate-500 text-sm font-medium uppercase mb-1">Current Streak</p>
                <div className="flex items-center gap-2">
                  <Flame className="h-6 w-6 text-orange-500" />
                  <p className="text-3xl font-bold text-slate-900">5 Days</p>
                </div>
              </Card>
              <Card className="p-6">
                <p className="text-slate-500 text-sm font-medium uppercase mb-1">Global Rank</p>
                <div className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-amber-500" />
                  <p className="text-3xl font-bold text-slate-900">#1,240</p>
                </div>
              </Card>
              <Card className="p-6">
                <p className="text-slate-500 text-sm font-medium uppercase mb-1">Total XP</p>
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-indigo-600" />
                  <p className="text-3xl font-bold text-slate-900">4,250</p>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className={`p-6 flex items-start gap-6 ${!achievement.earned ? 'opacity-75' : 'border-indigo-100 bg-white'}`}>
                  <div className={`${achievement.bg} p-4 rounded-2xl shrink-0 relative`}>
                    <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                    {!achievement.earned && (
                      <div className="absolute -top-2 -right-2 bg-slate-200 p-1 rounded-full border-2 border-white">
                        <Lock className="h-3 w-3 text-slate-500" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-slate-900">{achievement.title}</h3>
                      {achievement.earned ? (
                        <Badge className="bg-green-100 text-green-600 border-none text-[10px]">Earned</Badge>
                      ) : (
                        <Badge variant="outline" className="text-[10px]">Locked</Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 mb-4">{achievement.desc}</p>
                    
                    {achievement.earned ? (
                      <p className="text-xs text-slate-400 font-medium">Unlocked on {achievement.date}</p>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-indigo-400 h-full" style={{ width: `${achievement.progress}%` }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
      <MobileDashboardNav role="student" />
    </div>
  );
};

export default Achievements;