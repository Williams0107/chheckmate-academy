"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  Award,
  ChevronRight,
  MessageSquare,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ParentDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="student" /> {/* Reusing student sidebar for now */}
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Parent Dashboard</h1>
              <p className="text-slate-500">Monitoring Michael's chess journey.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Coach
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Upgrade Plan
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Child Overview */}
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-2xl font-bold text-indigo-600">
                    M
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Michael Chen</h3>
                    <p className="text-sm text-slate-500">Grade 5 • Intermediate Level</p>
                  </div>
                  <Badge className="ml-auto bg-green-100 text-green-600 border-none">Active Now</Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 py-6 border-y">
                  <div className="text-center">
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">Lessons</p>
                    <p className="text-xl font-bold text-slate-900">12/24</p>
                  </div>
                  <div className="text-center border-x">
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">Puzzles</p>
                    <p className="text-xl font-bold text-slate-900">342</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">Rating</p>
                    <p className="text-xl font-bold text-indigo-600">1,240</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-bold text-slate-900 mb-4">Weekly Activity</h4>
                  <div className="flex items-end gap-2 h-24">
                    {[40, 60, 30, 80, 90, 20, 10].map((height, i) => (
                      <div key={i} className="flex-1 bg-indigo-100 rounded-t-sm relative group">
                        <div 
                          className="absolute bottom-0 left-0 right-0 bg-indigo-500 rounded-t-sm transition-all group-hover:bg-indigo-600" 
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold uppercase">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </Card>

              {/* Recent Progress */}
              <Card className="p-6">
                <h3 className="font-bold text-slate-900 mb-6">Recent Progress</h3>
                <div className="space-y-6">
                  {[
                    { title: 'Completed Lesson: The Power of the Fork', time: '2 hours ago', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { title: 'Earned Badge: Puzzle Master', time: 'Yesterday', icon: Award, color: 'text-purple-600', bg: 'bg-purple-50' },
                    { title: 'Reached 1200 Rating Milestone', time: '2 days ago', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className={`${item.bg} p-2 rounded-lg shrink-0`}>
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.time}</p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-300" />
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-6 text-indigo-600">View Full History</Button>
              </Card>
            </div>

            <div className="space-y-8">
              {/* Recommendations */}
              <Card className="p-6 bg-indigo-900 text-white">
                <h3 className="font-bold mb-4">Coach's Recommendation</h3>
                <p className="text-indigo-200 text-sm mb-6">
                  "Michael is showing great tactical awareness. I recommend focusing on 'Endgame Basics' next week to round out his skills."
                </p>
                <Button variant="secondary" className="w-full">Assign Recommended Lesson</Button>
              </Card>

              {/* Upcoming Events */}
              <Card className="p-6">
                <h3 className="font-bold text-slate-900 mb-6">Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-slate-50 rounded-xl border">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-4 w-4 text-indigo-600" />
                      <span className="text-xs font-bold text-slate-500 uppercase">Tournament</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">School Chess Championship</p>
                    <p className="text-xs text-slate-500">Saturday, Oct 12 • 10:00 AM</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="h-4 w-4 text-indigo-600" />
                      <span className="text-xs font-bold text-slate-500 uppercase">Group Lesson</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">Advanced Tactics Workshop</p>
                    <p className="text-xs text-slate-500">Wednesday, Oct 16 • 4:30 PM</p>
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

export default ParentDashboard;