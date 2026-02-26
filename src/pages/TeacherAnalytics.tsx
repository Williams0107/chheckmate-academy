"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Download, Filter, TrendingUp, Users, BookOpen, Target } from 'lucide-react';

const progressData = [
  { name: 'Week 1', avgProgress: 20, activeStudents: 18 },
  { name: 'Week 2', avgProgress: 35, activeStudents: 22 },
  { name: 'Week 3', avgProgress: 48, activeStudents: 20 },
  { name: 'Week 4', avgProgress: 62, activeStudents: 24 },
  { name: 'Week 5', avgProgress: 75, activeStudents: 23 },
];

const topicData = [
  { name: 'Openings', value: 85 },
  { name: 'Tactics', value: 62 },
  { name: 'Endgames', value: 45 },
  { name: 'Strategy', value: 58 },
];

const COLORS = ['#4f46e5', '#818cf8', '#c7d2fe', '#e0e7ff'];

const TeacherAnalytics = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="teacher" />
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Class Analytics</h1>
              <p className="text-slate-500">Deep dive into your students' learning patterns.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <Card className="lg:col-span-2 p-6">
              <h3 className="font-bold text-slate-900 mb-6">Class Progress Over Time</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Line type="monotone" dataKey="avgProgress" stroke="#4f46e5" strokeWidth={3} dot={{ r: 6, fill: '#4f46e5' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-6">Topic Mastery</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={topicData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {topicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {topicData.map((topic, i) => (
                  <div key={topic.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }}></div>
                    <span className="text-xs text-slate-600 font-medium">{topic.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-l-4 border-l-indigo-600">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-5 w-5 text-indigo-600" />
                <h4 className="font-bold text-slate-900">Growth Insight</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your class has shown a <strong>15% increase</strong> in tactical accuracy this month. The "Fork" module was the most successful.
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-l-amber-500">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-5 w-5 text-amber-500" />
                <h4 className="font-bold text-slate-900">Focus Area</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Students are struggling with <strong>Endgame Basics</strong>. Consider scheduling a group review session next week.
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-l-green-500">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-5 w-5 text-green-500" />
                <h4 className="font-bold text-slate-900">Engagement</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>92%</strong> of students logged in at least 3 times this week. Engagement is at an all-time high!
              </p>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherAnalytics;