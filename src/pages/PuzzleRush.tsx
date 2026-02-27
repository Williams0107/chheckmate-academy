"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ChessBoard from '@/components/ChessBoard';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Timer, 
  Zap, 
  Trophy, 
  XCircle, 
  CheckCircle2,
  RotateCcw,
  Play
} from 'lucide-react';
import { puzzlesData } from '@/data/puzzles';
import { showSuccess } from '@/utils/toast';

const PuzzleRush = () => {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'finished'>('idle');
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer: any;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 || strikes >= 3) {
      setGameState('finished');
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft, strikes]);

  const startRush = () => {
    setGameState('playing');
    setTimeLeft(60);
    setScore(0);
    setStrikes(0);
    setCurrentIndex(Math.floor(Math.random() * puzzlesData.length));
  };

  const handleMove = (move: any) => {
    if (gameState !== 'playing') return;

    // Simulated logic: 80% chance of being correct for demo purposes
    const isCorrect = Math.random() > 0.2;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      setCurrentIndex(prev => (prev + 1) % puzzlesData.length);
    } else {
      setStrikes(prev => prev + 1);
      if (strikes + 1 >= 3) {
        setGameState('finished');
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-12">
        {gameState === 'idle' ? (
          <div className="text-center py-20">
            <div className="bg-indigo-600 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-indigo-500/20">
              <Zap className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-extrabold mb-4">Puzzle Rush</h1>
            <p className="text-slate-400 text-xl mb-12 max-w-md mx-auto">Solve as many puzzles as you can in 60 seconds. Three strikes and you're out!</p>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-12 py-8 text-2xl font-bold rounded-2xl" onClick={startRush}>
              <Play className="h-6 w-6 mr-3 fill-current" />
              Start Rush
            </Button>
          </div>
        ) : gameState === 'playing' ? (
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
                <ChessBoard key={currentIndex} fen={puzzlesData[currentIndex].fen} onMove={handleMove} />
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-8 bg-slate-800 border-slate-700 text-white">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <Timer className={`h-6 w-6 ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-indigo-400'}`} />
                    <span className="text-3xl font-mono font-bold">{timeLeft}s</span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map(i => (
                      <XCircle key={i} className={`h-6 w-6 ${strikes >= i ? 'text-red-500' : 'text-slate-600'}`} />
                    ))}
                  </div>
                </div>
                
                <div className="text-center py-8 bg-slate-900/50 rounded-2xl border border-slate-700 mb-6">
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Current Score</p>
                  <p className="text-6xl font-black text-indigo-400">{score}</p>
                </div>

                <div className="flex items-center gap-3 text-slate-400 text-sm justify-center">
                  <Trophy className="h-4 w-4" />
                  <span>Personal Best: 24</span>
                </div>
              </Card>

              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className={`h-2 rounded-full ${i < score ? 'bg-green-500' : 'bg-slate-800'}`} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-slate-800 p-12 rounded-3xl border border-slate-700 max-w-md mx-auto shadow-2xl">
              <h2 className="text-3xl font-bold mb-2">Rush Over!</h2>
              <p className="text-slate-400 mb-8">Great effort! You solved {score} puzzles.</p>
              
              <div className="text-6xl font-black text-indigo-400 mb-12">{score}</div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-700" onClick={() => setGameState('idle')}>
                  Menu
                </Button>
                <Button className="bg-indigo-600 hover:bg-indigo-700" onClick={startRush}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PuzzleRush;