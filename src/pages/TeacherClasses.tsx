"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Users, BookOpen, MoreVertical, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const classes = [
  { id: 1, name: 'Grade 5 - Section A', students: 24, level: 'Beginner', progress: 65 },
  { id: 2, name: 'Grade 5 - Section B', students: 22, level: 'Beginner', progress: 42 },
  { id: 3, name: 'Advanced Chess Club', students: 12, level: 'Intermediate', progress: 88 },
];

const TeacherClasses = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="teacher" />
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">My Classes</h1>
              <p className="text-slate-500">Manage your student groups and assignments.</p>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Plus className="h-4 w-4 mr-2" />
              Create New Class
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <Card key={cls.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-indigo-50 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{cls.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{cls.level} Level</p>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Students</span>
                    <span className="font-bold">{cls.students}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Avg. Progress</span>
                      <span className="font-bold">{cls.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full" style={{ width: `${cls.progress}%` }}></div>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6" variant="outline" asChild>
                  <Link to={`/teacher/classes/${cls.id}`}>
                    View Class Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherClasses;