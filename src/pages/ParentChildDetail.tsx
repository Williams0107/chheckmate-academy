"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  Trophy, 
  Target, 
  Zap, 
  Calendar,
  Award,
  TrendingUp,
  BookOpen,
  Clock
} from 'lucide-react';

const ParentChildDetail = () => {
  const { id } = useParams();
  
  // Mock data for Michael
  const child = {
    name: 'Michael Chen',
    grade: '5',
    level: 'Intermediate',
    rating: 1240,
    accuracy: 92,
    lessonsDone: 18,
    totalLessons: 24,
    timeSpent: '12h 45m'
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/parent">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Dashboard
            </Link>
          </Button>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-3xl font-bold text-indigo-600 border-4 border-white shadow-sm">
                {child.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">{child.name}</h1>
                <p className="text-slate-500">Grade {child.grade} • {child.level} Level</p>
              </div>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700">Download Progress PDF</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Skill Rating', value: child.rating, icon: Trophy, color: 'text-amber-600', bg: 'bg-amber-50' },
                { label: 'Puzzle Accuracy', value: `${child.accuracy}%`, icon: Target, color: 'text-green-600', bg: 'bg-green-50' },
                { label: 'Time Learning', value: child.timeSpent, icon: Clock, color: 'text-indigo-600', bg: 'bg-indigo-50' },
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

            {/* Curriculum Progress */}
            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-6">Curriculum Breakdown</h3>
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

            {/* Recent Achievements */}
            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-6">Recent Achievements</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: '5 Day Streak', icon: Zap, color: 'text-orange-500', bg: 'bg-orange-50' },
                  { title: 'Puzzle Master', icon: Award, color: 'text-purple-600', bg: 'bg-purple-50' },
                  { title: 'Scholar', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { title: 'Tactician', icon: Target, color: 'text-green-600', bg: 'bg-green-50' },
                ].map((badge, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-4 rounded-xl border bg-white">
                    <div className={`${badge.bg} p-3 rounded-full mb-3`}>
                      <badge.icon className={`h-6 w-6 ${badge.color}`} />
                    </div>
                    <p className="text-xs font-bold text-slate-900">{badge.title}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Weekly Engagement */}
            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-6">Weekly Engagement</h3>
              <div className="h-32 flex items-end gap-2 mb-4">
                {[40, 60, 30, 80, 90, 20, 10].map((h, i) => (
                  <div key={i} className="flex-1 bg-indigo-100 rounded-t-sm relative group">
                    <div className="absolute bottom-0 left-0 right-0 bg-indigo-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
                <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
              </div>
              <div className="mt-6 pt-6 border-t space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Avg. Session Time</span>
                  <span className="font-bold">22m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Improvement Rate</span>
                  <span className="text-green-600 font-bold">+12%</span>
                </div>
              </div>
            </Card>

            {/* Parent Actions */}
            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-4">Parent Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Set Daily Goal
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Compare with Peers
                </Button>
                <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                  <Settings className="h-4 w-4 mr-2" />
                  Restrict Screen Time
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentChildDetail;