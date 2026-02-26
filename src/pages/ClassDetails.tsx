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
  Users, 
  BookOpen, 
  Trophy, 
  BarChart3,
  MoreVertical,
  Mail,
  ArrowRight
} from 'lucide-react';

const ClassDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="teacher" />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link to="/teacher/classes">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Classes
              </Link>
            </Button>
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Grade 5 - Section A</h1>
                <p className="text-slate-500">24 Students • Beginner Level • Active since Sept 2024</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Message Class
                </Button>
                <Button className="bg-indigo-600 hover:bg-indigo-700">Edit Class</Button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-indigo-600" />
                Current Assignment
              </h3>
              <div className="bg-slate-50 p-4 rounded-xl border mb-4">
                <p className="text-sm font-bold text-slate-900">The Pawns & Promotion</p>
                <p className="text-xs text-slate-500">Due: Oct 15, 2024</p>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-500">Completion Rate</span>
                <span className="font-bold">18/24</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[75%]"></div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-amber-500" />
                Class Performance
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Avg. Puzzle Accuracy</span>
                  <span className="text-lg font-bold text-slate-900">82%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Avg. Lessons Completed</span>
                  <span className="text-lg font-bold text-slate-900">12.4</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-indigo-600" />
                Engagement
              </h3>
              <div className="h-24 flex items-end gap-1">
                {[30, 45, 60, 25, 80, 90, 40].map((h, i) => (
                  <div key={i} className="flex-1 bg-indigo-100 rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-2 uppercase font-bold">Last 7 Days Activity</p>
            </Card>
          </div>

          <Card className="overflow-hidden">
            <div className="p-6 border-b bg-white">
              <h3 className="font-bold text-slate-900">Student Roster</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4 font-medium">Student</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Progress</th>
                    <th className="px-6 py-4 font-medium">Last Active</th>
                    <th className="px-6 py-4 font-medium"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { id: '1', name: 'Alex Johnson', status: 'On Track', progress: 85, last: '2h ago' },
                    { id: '2', name: 'Sarah Williams', status: 'Needs Help', progress: 42, last: '5h ago' },
                    { id: '3', name: 'Michael Chen', status: 'Advanced', progress: 98, last: '10m ago' },
                  ].map((student) => (
                    <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <Link to={`/teacher/student/${student.id}`} className="font-medium text-slate-900 hover:text-indigo-600 flex items-center gap-2">
                          {student.name}
                          <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <Badge className={
                          student.status === 'Advanced' ? 'bg-indigo-100 text-indigo-600' :
                          student.status === 'Needs Help' ? 'bg-red-100 text-red-600' :
                          'bg-green-100 text-green-600'
                        }>
                          {student.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-indigo-600 h-full" style={{ width: `${student.progress}%` }}></div>
                          </div>
                          <span className="text-xs font-bold">{student.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{student.last}</td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="icon" asChild>
                          <Link to={`/teacher/student/${student.id}`}>
                            <MoreVertical className="h-4 w-4" />
                          </Link>
                        </Button>
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

export default ClassDetails;