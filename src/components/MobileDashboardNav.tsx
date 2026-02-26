"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Trophy, 
  Settings,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  role: 'teacher' | 'student';
}

const MobileDashboardNav = ({ role }: MobileNavProps) => {
  const location = useLocation();

  const links = role === 'teacher' ? [
    { icon: LayoutDashboard, label: 'Home', path: '/teacher' },
    { icon: Users, label: 'Classes', path: '/teacher/classes' },
    { icon: BookOpen, label: 'Curriculum', path: '/curriculum' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ] : [
    { icon: LayoutDashboard, label: 'Home', path: '/student' },
    { icon: BookOpen, label: 'Lessons', path: '/curriculum' },
    { icon: Trophy, label: 'Puzzles', path: '/puzzles' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50 px-4 py-2 flex justify-around items-center shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={cn(
            "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",
            location.pathname === link.path 
              ? "text-indigo-600" 
              : "text-slate-400 hover:text-slate-600"
          )}
        >
          <link.icon className="h-5 w-5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default MobileDashboardNav;