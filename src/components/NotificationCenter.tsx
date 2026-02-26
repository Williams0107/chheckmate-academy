"use client";

import React from 'react';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Bell, CheckCircle2, Trophy, MessageSquare, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const notifications = [
  { id: 1, title: 'New Achievement!', desc: 'You earned the "5 Day Streak" badge.', icon: Trophy, color: 'text-amber-500', time: '2m ago', unread: true },
  { id: 2, title: 'Assignment Due', desc: 'The "Pawn Promotion" lesson is due tomorrow.', icon: Clock, color: 'text-indigo-600', time: '1h ago', unread: true },
  { id: 3, title: 'Coach Message', desc: 'Great job on your last puzzle session!', icon: MessageSquare, color: 'text-blue-600', time: '3h ago', unread: false },
  { id: 4, title: 'Lesson Completed', desc: 'Michael finished "The King & The Goal".', icon: CheckCircle2, color: 'text-green-600', time: '5h ago', unread: false },
];

const NotificationCenter = () => {
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-slate-600" />
          {unreadCount > 0 && (
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-bold text-slate-900">Notifications</h3>
          <Badge variant="secondary" className="text-[10px]">{unreadCount} New</Badge>
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {notifications.map((n) => (
            <div key={n.id} className={`p-4 border-b last:border-none hover:bg-slate-50 transition-colors cursor-pointer ${n.unread ? 'bg-indigo-50/30' : ''}`}>
              <div className="flex gap-3">
                <div className={`mt-1 ${n.color}`}>
                  <n.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-bold ${n.unread ? 'text-slate-900' : 'text-slate-600'}`}>{n.title}</p>
                  <p className="text-xs text-slate-500 mb-1">{n.desc}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{n.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t text-center">
          <Button variant="ghost" size="sm" className="text-indigo-600 text-xs w-full">Mark all as read</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationCenter;