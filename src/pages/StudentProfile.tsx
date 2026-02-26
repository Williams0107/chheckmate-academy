"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  Trophy, 
  Target, 
  Zap, 
  Calendar,
  Mail,
  Award,
  TrendingUp,
  BookOpen
} from 'lucide-react';

const StudentProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="teacher" />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link to="/teacher/classes/1">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Class
              </Link>
            </Button>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-3xl font-bold text-indigo-600 border-4 border-white shadow-sm">
                  M
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">Michael Chen</h1>
                  <p className="text-slate-500">Grade 5 • Student ID: #MC2024</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Message Parent
                </Button>
                <Button className="bg-indigo-600 hover:bg-indigo-700">Generate Report</Button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Performance Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Skill Rating', value: '1,240', icon: Trophy, color: 'text-amber-600', bg: 'bg-amber-50' },
                  { label: 'Puzzle Accuracy', value: '92%', icon: Target, color: 'text-green-600', bg: 'bg-green-50' },
                  { label: 'Lessons Done', value: '18/24', icon: BookOpen, color: 'text-indigo-600', bg: 'bg-indigo-50' },
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

              {/* Learning Progress */}
              <Card className="p-6">
                <h3 className="font-bold text-slate-900 mb-6">Curriculum Progress</h3>
                <div className="space-y-6">
                  {[
                    { name: 'Beginner Fundamentals', progress: 100, status: 'Completed' },
                    { name: 'Intermediate Tactics', progress: 65, status: 'In Progress' },
                    { name: 'Advanced Strategy', progress: 0, status: 'Locked' },
                  ].map((module, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-slate-700">{module.name}</span>
                        <Badge variant={module.status === 'Completed' ? 'default' : 'outline'} className={module.status === 'Completed' ? 'bg-green-100 text-green-600 border-none' : ''}>
                          {module.status}
                        </Badge>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${module.status === 'Completed' ? 'bg-green-500' : 'bg-indigo-600'}`} 
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recent Activity */}
              <Card className="p-6">
                <h3 className="font-bold text-slate-900 mb-6">Recent Activity</h3>
                <div className="space-y-6">
                  {[
                    { action: 'Solved "Find the Fork" puzzle', time: '10 minutes ago', icon: Target, color: 'text-green-600' },
                    { action: 'Completed Lesson: The King & The Goal', time: '2 hours ago', icon: BookOpen, color: 'text-indigo-600' },
                    { action: 'Earned Badge: 5 Day Streak', time: 'Yesterday', icon: Award, color: 'text-orange-600' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-1">
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{item.action}</p>
                        <p className="text-xs text-slate-500">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              {/* Teacher Notes */}
              <Card className="p-6">
                <h3 className="font-bold text-slate-900 mb-4">Teacher Notes</h3>
                <textarea 
                  className="w-full h-32 p-3 text-sm border rounded-xl bg-slate-50 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="Add a private note about this student..."
                ></textarea>
                <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700">Save Note</Button>
              </Card>

              {/* Attendance/Engagement */}
              <Card className="p-6">
                <h3 className="font-bold text-slate-900 mb-6">Engagement</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-600">Days Active (Last 30)</span>
                    </div>
                    <span className="font-bold">24/30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-600">Avg. Session Time</span>
                    </div>
                    <span className="font-bold">22m</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-600">Improvement Rate</span>
                    </div>
                    <span className="text-green-600 font-bold">+12%</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentProfile;