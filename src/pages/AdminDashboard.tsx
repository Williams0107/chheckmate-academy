"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  School, 
  Users, 
  BookOpen, 
  Settings, 
  Plus, 
  MoreVertical,
  ShieldCheck,
  Globe
} from 'lucide-react';

const schools = [
  { id: 1, name: 'Greenwood High', teachers: 12, students: 450, plan: 'District' },
  { id: 2, name: 'Oakwood Academy', teachers: 5, students: 120, plan: 'School' },
  { id: 3, name: 'Riverside Middle', teachers: 8, students: 280, plan: 'District' },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">System Administration</h1>
            <p className="text-slate-500">Manage schools, curriculum, and global settings.</p>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Plus className="h-4 w-4 mr-2" />
            Add New School
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Total Schools', value: '42', icon: School, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Total Teachers', value: '156', icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
            { label: 'Active Students', value: '4,240', icon: ShieldCheck, color: 'text-indigo-600', bg: 'bg-indigo-50' },
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

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 overflow-hidden">
            <div className="p-6 border-b bg-white flex justify-between items-center">
              <h3 className="font-bold text-slate-900">Managed Schools</h3>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4 font-medium">School Name</th>
                    <th className="px-6 py-4 font-medium">Teachers</th>
                    <th className="px-6 py-4 font-medium">Students</th>
                    <th className="px-6 py-4 font-medium">Plan</th>
                    <th className="px-6 py-4 font-medium"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {schools.map((school) => (
                    <tr key={school.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-slate-900">{school.name}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{school.teachers}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{school.students}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${school.plan === 'District' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-600'}`}>
                          {school.plan}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-4">Curriculum Management</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm font-medium">Beginner Module</span>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm font-medium">Intermediate Module</span>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
                <Button className="w-full mt-2" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Module
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-slate-900 text-white">
              <h3 className="font-bold mb-4">System Health</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Server Status</span>
                  <span className="text-green-400 font-bold">Operational</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Database Load</span>
                  <span className="font-bold">12%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Active Sessions</span>
                  <span className="font-bold">842</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;