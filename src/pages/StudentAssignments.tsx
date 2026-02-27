"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Play,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const assignments = [
  { 
    id: 'b3', 
    title: 'The Pawns & Promotion', 
    subject: 'Beginner Module', 
    dueDate: 'Oct 15, 2024', 
    status: 'Not Started',
    priority: 'High'
  },
  { 
    id: 'i1', 
    title: 'The Power of the Fork', 
    subject: 'Intermediate Tactics', 
    dueDate: 'Oct 18, 2024', 
    status: 'In Progress',
    priority: 'Medium'
  },
  { 
    id: 'b1', 
    title: 'The Chessboard & Coordinates', 
    subject: 'Beginner Module', 
    dueDate: 'Oct 05, 2024', 
    status: 'Completed',
    priority: 'Low'
  },
];

const StudentAssignments = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="student" />
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900">My Assignments</h1>
              <p className="text-slate-500">Complete your lessons and puzzles to stay on track.</p>
            </div>

            <div className="grid gap-6">
              {assignments.map((a) => (
                <Card key={a.id} className="p-6 border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        a.status === 'Completed' ? 'bg-green-50 text-green-600' : 
                        a.status === 'In Progress' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-400'
                      }`}>
                        {a.status === 'Completed' ? <CheckCircle2 className="h-6 w-6" /> : <BookOpen className="h-6 w-6" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-slate-900">{a.title}</h3>
                          {a.priority === 'High' && a.status !== 'Completed' && (
                            <Badge variant="destructive" className="text-[10px] uppercase">Due Soon</Badge>
                          )}
                        </div>
                        <p className="text-sm text-slate-500 mb-2">{a.subject}</p>
                        <div className="flex items-center gap-4 text-xs font-medium">
                          <span className="flex items-center gap-1 text-slate-400">
                            <Clock className="h-3 w-3" /> Due {a.dueDate}
                          </span>
                          <span className={`flex items-center gap-1 ${
                            a.status === 'Completed' ? 'text-green-600' : 
                            a.status === 'In Progress' ? 'text-indigo-600' : 'text-slate-400'
                          }`}>
                            {a.status === 'In Progress' && <AlertCircle className="h-3 w-3" />}
                            {a.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {a.status === 'Completed' ? (
                        <Button variant="outline" className="text-green-600 border-green-200 hover:bg-green-50" asChild>
                          <Link to={`/lesson/${a.id}`}>Review Lesson</Link>
                        </Button>
                      ) : (
                        <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
                          <Link to={`/lesson/${a.id}`}>
                            <Play className="h-4 w-4 mr-2 fill-current" />
                            {a.status === 'In Progress' ? 'Continue' : 'Start Now'}
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-12 p-8 bg-indigo-900 text-white overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Ready for a challenge?</h3>
                <p className="text-indigo-200 mb-6 max-w-md">Complete all your weekly assignments to unlock the "Scholar" badge and earn bonus XP.</p>
                <Button variant="secondary" asChild>
                  <Link to="/curriculum">Browse All Lessons <ArrowRight className="h-4 w-4 ml-2" /></Link>
                </Button>
              </div>
              <Trophy className="absolute right-[-20px] bottom-[-20px] h-48 w-48 text-indigo-800 opacity-50 rotate-12" />
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentAssignments;