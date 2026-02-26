"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ChessBoard from '@/components/ChessBoard';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Lightbulb, 
  RotateCcw, 
  ChevronRight,
  CheckCircle2,
  XCircle,
  ChevronLeft
} from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';
import { puzzlesData } from '@/data/puzzles';

const Puzzles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [showHint, setShowHint] = useState(false);

  const currentPuzzle = puzzlesData[currentIndex];

  const handleMove = (move: any) => {
    // In a real app, we'd validate the move against the solution
    // For this demo, we'll simulate success if they make a move
    setStatus('correct');
    showSuccess(`Great job! You earned ${currentPuzzle.xp} XP.`);
  };

  const nextPuzzle = () => {
    if (currentIndex < puzzlesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setStatus('idle');
      setShowHint(false);
    } else {
      showSuccess("You've completed all available puzzles! Check back later for more.");
      setCurrentIndex(0);
      setStatus('idle');
    }
  };

  const prevPuzzle = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setStatus('idle');
      setShowHint(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Tactical Puzzles</h1>
            <p className="text-slate-500">Solve puzzles to improve your pattern recognition.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevPuzzle} disabled={currentIndex === 0}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="flex items-center px-4 bg-white border rounded-lg font-bold text-sm">
              {currentIndex + 1} / {puzzlesData.length}
            </span>
            <Button variant="outline" size="icon" onClick={nextPuzzle} disabled={currentIndex === puzzlesData.length - 1 && status !== 'correct'}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex justify-center py-8 bg-white rounded-3xl shadow-sm border">
              <ChessBoard key={currentPuzzle.id} fen={currentPuzzle.fen} onMove={handleMove} />
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex justify-between items-start mb-4">
                <Badge className="bg-indigo-100 text-indigo-600 hover:bg-indigo-100 border-none">
                  {currentPuzzle.difficulty}
                </Badge>
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Trophy className="h-4 w-4" />
                  +{currentPuzzle.xp} XP
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{currentPuzzle.title}</h2>
              <p className="text-slate-600 mb-8">{currentPuzzle.description}</p>

              {status === 'correct' && (
                <div className="bg-green-50 border border-green-100 p-4 rounded-xl flex items-center gap-3 mb-6">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-bold text-green-900">Correct!</p>
                    <p className="text-sm text-green-700">Excellent tactical vision.</p>
                  </div>
                </div>
              )}

              {showHint && (
                <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex items-center gap-3 mb-6">
                  <Lightbulb className="h-6 w-6 text-amber-600" />
                  <p className="text-sm text-amber-900">{currentPuzzle.hint}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full" onClick={() => setStatus('idle')}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Retry
                </Button>
                <Button variant="outline" className="w-full" onClick={() => setShowHint(true)}>
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Hint
                </Button>
              </div>
              
              {status === 'correct' && (
                <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700" onClick={nextPuzzle}>
                  Next Puzzle
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </Card>

            <Card className="p-6 bg-slate-900 text-white">
              <h3 className="font-bold mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Puzzles Solved</span>
                  <span className="font-bold">{currentIndex + (status === 'correct' ? 1 : 0)} / {puzzlesData.length}</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-green-500 h-full transition-all duration-500" 
                    style={{ width: `${((currentIndex + (status === 'correct' ? 1 : 0)) / puzzlesData.length) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Daily Goal</span>
                  <span className="font-bold">3/5</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puzzles;