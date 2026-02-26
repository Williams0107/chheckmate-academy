"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Play, Lock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const levels = [
  {
    id: 'beginner',
    title: 'Beginner: The Fundamentals',
    description: 'Master the board, piece movements, and basic rules.',
    lessons: [
      { id: 'b1', title: 'The Chessboard & Coordinates', duration: '15m', completed: true },
      { id: 'b2', title: 'The King & The Goal', duration: '20m', completed: true },
      { id: 'b3', title: 'The Pawns & Promotion', duration: '25m', completed: false },
      { id: 'b4', title: 'The Minor Pieces: Knights & Bishops', duration: '30m', completed: false },
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate: Tactics & Strategy',
    description: 'Learn forks, pins, skewers, and basic opening principles.',
    lessons: [
      { id: 'i1', title: 'The Power of the Fork', duration: '30m', locked: true },
      { id: 'i2', title: 'Pins & Skewers', duration: '35m', locked: true },
      { id: 'i3', title: 'Basic Opening Principles', duration: '40m', locked: true },
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced: Mastery',
    description: 'Complex endgames, positional play, and deep calculation.',
    lessons: [
      { id: 'a1', title: 'Rook Endgames', duration: '45m', locked: true },
      { id: 'a2', title: 'Positional Sacrifices', duration: '50m', locked: true },
    ]
  }
];

const Curriculum = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Chess Curriculum</h1>
          <p className="text-lg text-slate-600">Follow our structured path from absolute beginner to advanced master.</p>
        </div>

        <div className="space-y-12">
          {levels.map((level) => (
            <div key={level.id}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{level.title}</h2>
                  <p className="text-slate-600">{level.description}</p>
                </div>
                <Badge variant="outline" className="bg-white">
                  {level.lessons.length} Lessons
                </Badge>
              </div>

              <div className="grid gap-4">
                {level.lessons.map((lesson) => (
                  <Card key={lesson.id} className={`p-4 flex items-center justify-between ${lesson.locked ? 'opacity-60' : 'hover:border-indigo-300 transition-colors'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${lesson.completed ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                        {lesson.completed ? <CheckCircle2 className="h-6 w-6" /> : <BookOpen className="h-5 w-5" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{lesson.title}</h4>
                        <p className="text-sm text-slate-500">{lesson.duration}</p>
                      </div>
                    </div>
                    
                    {lesson.locked ? (
                      <Lock className="h-5 w-5 text-slate-400 mr-4" />
                    ) : (
                      <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50" asChild>
                        <Link to={`/lesson/${lesson.id}`}>
                          <Play className="h-4 w-4 mr-2 fill-current" />
                          Start
                        </Link>
                      </Button>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;