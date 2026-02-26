"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Trophy, 
  Settings, 
  LogOut,
  BarChart3,
  Cpu
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  role: 'teacher' | 'student';
}

const DashboardSidebar = ({ role }: SidebarProps) => {
  const location = useLocation();
  
  const teacherLinks = [
    { icon: LayoutDashboard, label: 'Overview', path: '/teacher' },
    { icon: Users, label: 'My Classes', path: '/teacher/classes' },
    { icon: BookOpen, label: 'Curriculum', path: '/curriculum' },
    { icon: BarChart3, label: 'Analytics', path: '/teacher/analytics' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const studentLinks = [
    { icon: LayoutDashboard, label: 'My Progress', path: '/student' },
    { icon: BookOpen, label: 'Lessons', path: '/curriculum' },
    { icon: Trophy, label: 'Puzzles', path: '/puzzles' },
    { icon: Cpu, label: 'Play AI', path: '/play-ai' },
    { icon: BarChart3, label: 'Stats', path: '/student/stats' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const links = role === 'teacher' ? teacherLinks : studentLinks;

  return (
    <div className="w-64 bg-white border-r h-[calc(100vh-64px)] sticky top-16 hidden md:flex flex-col p-4">
      <div className="space-y-1 flex-1">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              location.pathname === link.path 
                ? "bg-indigo-50 text-indigo-600" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </Link>
        ))}
      </div>
      
      <div className="pt-4 border-t">
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 w-full transition-colors">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;