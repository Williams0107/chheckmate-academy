"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import MobileDashboardNav from '@/components/MobileDashboardNav';
import { Card } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import { Trophy, Target, Zap, Star, TrendingUp, Calendar } from 'lucide-react';

const skillData = [
  { subject: 'Tactics', A: 120, fullMark: 150 },
  { subject: 'Openings', A: 98, fullMark: 150 },
  { subject: 'Endgames', A: 86, fullMark: 150 },
  { subject: 'Strategy', A: 99, fullMark: 150 },
  { subject: 'Calculation', A: 85, fullMark: 150 },
];

const activityData = [
  { day: 'Mon', puzzles: 12 },
  { day: 'Tue', puzzles: 18 },
  { day: 'Wed', puzzles: 8 },
  { day: 'Thu', puzzles: 25 },
  { day: 'Fri', puzzles: 15 },
  { day: 'Sat', puzzles: 30 },
  { day: 'Sun', puzzles: 22 },
];

const StudentStats = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="student" />
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900">My Statistics</h1>
              <p className="text-slate-500">Track your progress and identify areas for improvement.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <Card className="lg:col-span-2 p-6">
                <h3 className="font-bold text-slate-900 mb-6">Weekly Puzzle Activity</h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activityData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                      />
                      <Bar dataKey="puzzles" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-slate-900 mb-6">Skill Radar</h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 150]} />
                      <Radar
                        name="Michael"
                        dataKey="A"
                        stroke="#4f46e5"
                        fill="#4f46e5"
                        fillOpacity={0.6}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Best Win Streak', value: '8 Games', icon: Zap, color: 'text-orange-500', bg: 'bg-orange-50' },
                { label: 'Avg. Accuracy', value: '88%', icon: Target, color: 'text-green-600', bg: 'bg-green-50' },
                { label: 'Total XP', value: '4,250', icon: Star, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { label: 'Global Rank', value: '#1,240', icon: Trophy, color: 'text-amber-500', bg: 'bg-amber-50' },
              ].map((stat, idx) => (
                <Card key={idx} className="p-6">
                  <div className={`${stat.bg} w-10 h-10 rounded-lg flex items-center justify-center mb-4`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
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

export default StudentStats;