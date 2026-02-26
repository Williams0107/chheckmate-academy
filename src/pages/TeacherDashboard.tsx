"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AssignLessonModal from '@/components/AssignLessonModal';
import { 
  Users, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  MoreVertical,
  ArrowUpRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Mon', puzzles: 45 },
  { name: 'Tue', puzzles: 52 },
  { name: 'Wed', puzzles: 38 },
  { name: 'Thu', puzzles: 65 },
  { name: 'Fri', puzzles: 48 },
  { name: 'Sat', puzzles: 24 },
  { name: 'Sun', puzzles: 18 },
];

const students = [
  { id: 1, name: 'Alex Johnson', progress: 85, accuracy: 92, lastActive: '2h ago' },
  { id: 2, name: 'Sarah Williams', progress: 72, accuracy: 88, lastActive: '5h ago' },
  { id: 3, name: 'Michael Chen', progress: 94, accuracy: 96, lastActive: '10m ago' },
  { id: 4, name: 'Emma Davis', progress: 45, accuracy: 75, lastActive: '1d ago' },
];

const TeacherDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="teacher" />
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Class Overview: Grade 5 Chess</h1>
              <p className="text-slate-500">Monitoring 24 students across 3 active modules.</p>
            </div>
            <AssignLessonModal>
              Assign New Lesson
            </AssignLessonModal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Students', value: '24', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
              { label: 'Avg. Progress', value: '68%', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
              { label: 'Avg. Accuracy', value: '84%', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { label: 'Active Today', value: '18', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
            ].map((stat, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`${stat.bg} p-3 rounded-xl`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <Card className="lg:col-span-2 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-900">Weekly Puzzle Activity</h3>
                <Button variant="ghost" size="sm" className="text-indigo-600">View Report</Button>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Bar dataKey="puzzles" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-6">Top Performers</h3>
              <div className="space-y-6">
                {students.slice(0, 3).map((student) => (
                  <div key={student.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{student.name}</p>
                        <p className="text-xs text-slate-500">{student.accuracy}% Accuracy</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-indigo-600">{student.progress}%</p>
                      <p className="text-xs text-slate-400">Progress</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-8">View All Students</Button>
            </Card>
          </div>

          <Card className="overflow-hidden">
            <div className="p-6 border-b bg-white flex justify-between items-center">
              <h3 className="font-bold text-slate-900">Student Progress Details</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Export CSV</Button>
                <Button variant="outline" size="sm">Filter</Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4 font-medium">Student Name</th>
                    <th className="px-6 py-4 font-medium">Module Progress</th>
                    <th className="px-6 py-4 font-medium">Puzzle Accuracy</th>
                    <th className="px-6 py-4 font-medium">Last Active</th>
                    <th className="px-6 py-4 font-medium"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-slate-900">{student.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 bg-slate-100 h-1.5 rounded-full overflow-hidden max-w-[100px]">
                            <div className="bg-indigo-600 h-full" style={{ width: `${student.progress}%` }}></div>
                          </div>
                          <span className="text-sm text-slate-600">{student.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm font-medium ${student.accuracy > 90 ? 'text-green-600' : 'text-slate-600'}`}>
                          {student.accuracy}%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{student.lastActive}</td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;