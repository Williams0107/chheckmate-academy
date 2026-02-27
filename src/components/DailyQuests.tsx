"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Circle, Zap, Target, Trophy } from 'lucide-react';

const quests = [
  { id: 1, title: 'Tactical Warmup', desc: 'Solve 5 puzzles', progress: 3, total: 5, xp: 50, icon: Target, color: 'text-blue-500' },
  { id: 2, title: 'Daily Lesson', desc: 'Complete 1 new lesson', progress: 0, total: 1, xp: 100, icon: Zap, color: 'text-amber-500' },
  { id: 3, title: 'Arena Warrior', desc: 'Play 2 games vs AI', progress: 2, total: 2, xp: 75, icon: Trophy, color: 'text-indigo-500' },
];

const DailyQuests = () => {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-900">Daily Quests</h3>
        <span className="text-xs font-bold text-slate-400 uppercase">Resets in 14h</span>
      </div>
      
      <div className="space-y-6">
        {quests.map((quest) => (
          <div key={quest.id} className="space-y-2">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className={`mt-1 ${quest.progress === quest.total ? 'text-green-500' : quest.color}`}>
                  {quest.progress === quest.total ? <CheckCircle2 className="h-5 w-5" /> : <quest.icon className="h-5 w-5" />}
                </div>
                <div>
                  <p className={`text-sm font-bold ${quest.progress === quest.total ? 'text-slate-400 line-through' : 'text-slate-900'}`}>
                    {quest.title}
                  </p>
                  <p className="text-xs text-slate-500">{quest.desc}</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-600">+{quest.xp} XP</span>
            </div>
            <div className="flex items-center gap-3">
              <Progress value={(quest.progress / quest.total) * 100} className="h-1.5" />
              <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">{quest.progress}/{quest.total}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DailyQuests;