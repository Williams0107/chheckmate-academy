"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  Video, 
  BookOpen, 
  Printer,
  Search,
  ChevronRight
} from 'lucide-react';

const resources = [
  { title: 'Beginner Lesson Plans', type: 'PDF Bundle', size: '4.2 MB', category: 'Curriculum' },
  { title: 'Classroom Tournament Bracket', type: 'Printable', size: '1.1 MB', category: 'Tools' },
  { title: 'Chess Notation Cheat Sheet', type: 'Worksheet', size: '800 KB', category: 'Handouts' },
  { title: 'Teaching the Sicilian Defense', type: 'Video Guide', size: '15 min', category: 'Training' },
  { title: 'Student Progress Report Template', type: 'Excel', size: '2.4 MB', category: 'Admin' },
];

const TeacherResources = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="teacher" />
        <main className="flex-1 p-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Teacher Resources</h1>
                <p className="text-slate-500">Downloadable materials and guides for your classroom.</p>
              </div>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search resources..." 
                  className="w-full pl-10 pr-4 py-2 rounded-xl border bg-white focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-indigo-600 text-white">
                <BookOpen className="h-8 w-8 mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-2">Full Curriculum Guide</h3>
                <p className="text-indigo-100 text-sm mb-6">A comprehensive 40-week guide for school chess programs.</p>
                <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50">Download Guide</Button>
              </Card>
              <Card className="p-6">
                <Printer className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Printable Puzzles</h3>
                <p className="text-slate-500 text-sm mb-6">Weekly worksheets with 10 puzzles each for offline practice.</p>
                <Button variant="outline" className="w-full">Browse Worksheets</Button>
              </Card>
              <Card className="p-6">
                <Video className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Teacher Training</h3>
                <p className="text-slate-500 text-sm mb-6">Video series on how to effectively teach chess to children.</p>
                <Button variant="outline" className="w-full">Watch Videos</Button>
              </Card>
            </div>

            <h3 className="font-bold text-slate-900 mb-6">Recent Downloads</h3>
            <div className="space-y-3">
              {resources.map((res, idx) => (
                <Card key={idx} className="p-4 flex items-center justify-between hover:shadow-md transition-shadow border-none bg-white">
                  <div className="flex items-center gap-4">
                    <div className="bg-slate-100 p-3 rounded-xl">
                      <FileText className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{res.title}</h4>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span>{res.type}</span>
                        <span>•</span>
                        <span>{res.size}</span>
                        <span>•</span>
                        <Badge variant="secondary" className="text-[10px]">{res.category}</Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-indigo-600">
                    <Download className="h-5 w-5" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherResources;