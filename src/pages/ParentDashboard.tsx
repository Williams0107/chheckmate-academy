"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
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
  BookOpen,
  Plus,
  Settings,
  CreditCard
} from 'lucide-react';
import { Link } from 'react-router-dom';

const children = [
  { id: '1', name: 'Michael Chen', grade: '5', level: 'Intermediate', progress: 78, accuracy: 92, rating: 1240, active: true },
  { id: '2', name: 'Sophie Chen', grade: '2', level: 'Beginner', progress: 45, accuracy: 85, rating: 820, active: false },
];

const ParentDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Parent Dashboard</h1>
            <p className="text-slate-500">Manage your family's chess education and track progress.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="bg-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Child
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <CreditCard className="h-4 w-4 mr-2" />
              Manage Subscription
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Children Overview */}
            <div className="grid md:grid-cols-2 gap-6">
              {children.map((child) => (
                <Card key={child.id} className="p-6 hover:shadow-md transition-shadow border-none bg-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-600">
                      {child.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{child.name}</h3>
                      <p className="text-xs text-slate-500">Grade {child.grade} • {child.level}</p>
                    </div>
                    {child.active && <Badge className="ml-auto bg-green-100 text-green-600 border-none">Active</Badge>}
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Curriculum Progress</span>
                      <span className="font-bold">{child.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full" style={{ width: `${child.progress}%` }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50 p-3 rounded-xl text-center">
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Rating</p>
                      <p className="text-lg font-bold text-indigo-600">{child.rating}</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl text-center">
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Accuracy</p>
                      <p className="text-lg font-bold text-slate-900">{child.accuracy}%</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/parent/child/${child.id}`}>
                      View Detailed Report
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>

            {/* Recent Activity Feed */}
            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-6">Recent Family Activity</h3>
              <div className="space-y-6">
                {[
                  { child: 'Michael', action: 'Completed Lesson: The Power of the Fork', time: '2 hours ago', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { child: 'Sophie', action: 'Earned Badge: First Move', time: 'Yesterday', icon: Award, color: 'text-purple-600', bg: 'bg-purple-50' },
                  { child: 'Michael', action: 'Reached 1200 Rating Milestone', time: '2 days ago', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className={`${item.bg} p-2 rounded-lg shrink-0`}>
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-900">
                        <span className="text-indigo-600">{item.child}</span> {item.action}
                      </p>
                      <p className="text-xs text-slate-500">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Coach Communication */}
            <Card className="p-6 bg-indigo-900 text-white">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-indigo-300" />
                Coach's Corner
              </h3>
              <p className="text-indigo-200 text-sm mb-6">
                "Michael is showing great tactical awareness. I recommend focusing on 'Endgame Basics' next week to round out his skills."
              </p>
              <div className="space-y-3">
                <Button variant="secondary" className="w-full">Reply to Coach</Button>
                <Button variant="ghost" className="w-full text-indigo-200 hover:text-white hover:bg-indigo-800">Schedule 1-on-1</Button>
              </div>
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

            {/* Quick Settings */}
            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-4">Account Settings</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-slate-600 hover:text-indigo-600">
                  <Settings className="h-4 w-4 mr-2" />
                  Notification Preferences
                </Button>
                <Button variant="ghost" className="w-full justify-start text-slate-600 hover:text-indigo-600">
                  <Users className="h-4 w-4 mr-2" />
                  Family Sharing
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;