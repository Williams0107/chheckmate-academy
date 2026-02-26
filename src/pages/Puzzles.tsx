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
  XCircle
} from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';

const puzzles = [
  {
    id: 1,
    title: "Find the Fork",
    description: "White to move. Find the move that attacks both the King and the Rook.",
    fen: "r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1",
    solution: "Nxg6", // Simplified for demo
    difficulty: "Intermediate"
  }
];

const Puzzles = () => {
  const [currentPuzzle, setCurrentPuzzle] = useState(puzzles[0]);
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const handleMove = (move: any) => {
    // In a real app, we'd validate against the solution FEN or move sequence
    // For MVP, we'll simulate a correct move for any valid move
    setStatus('correct');
    showSuccess("Great job! That's the best move.");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex justify-center py-8 bg-white rounded-3xl shadow-sm border">
              <ChessBoard fen={currentPuzzle.fen} onMove={handleMove} />
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
                  +15 XP
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{currentPuzzle.title}</h2>
              <p className="text-slate-600 mb-8">{currentPuzzle.description}</p>

              {status === 'correct' && (
                <div className="bg-green-50 border border-green-100 p-4 rounded-xl flex items-center gap-3 mb-6">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-bold text-green-900">Correct!</p>
                    <p className="text-sm text-green-700">You found the tactical fork.</p>
                  </div>
                </div>
              )}

              {status === 'wrong' && (
                <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-center gap-3 mb-6">
                  <XCircle className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-bold text-red-900">Not quite...</p>
                    <p className="text-sm text-red-700">Try looking for a double attack.</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full" onClick={() => setStatus('idle')}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Retry
                </Button>
                <Button variant="outline" className="w-full">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Hint
                </Button>
              </div>
              
              {status === 'correct' && (
                <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700">
                  Next Puzzle
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </Card>

            <Card className="p-6 bg-slate-900 text-white">
              <h3 className="font-bold mb-4">Puzzle Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Success Rate</span>
                  <span className="font-bold">78%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[78%]"></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Avg. Time</span>
                  <span className="font-bold">24s</span>
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