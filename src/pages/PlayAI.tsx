"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import Navbar from '@/components/Navbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import MobileDashboardNav from '@/components/MobileDashboardNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  RotateCcw, 
  Trophy, 
  User, 
  Cpu, 
  ChevronLeft,
  History,
  Settings2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getSmartMove } from '@/utils/chessAI';
import { showSuccess, showError } from '@/utils/toast';

const PlayAI = () => {
  const [game, setGame] = useState(new Chess());
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [moveHistory, setMoveHistory] = useState<string[]>([]);

  const makeAMove = useCallback((move: any) => {
    try {
      const result = game.move(move);
      setGame(new Chess(game.fen()));
      if (result) {
        setMoveHistory(prev => [...prev, result.san]);
      }
      return result;
    } catch (e) {
      return null;
    }
  }, [game]);

  function onDrop(sourceSquare: string, targetSquare: string) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    });

    if (move === null) return false;
    return true;
  }

  useEffect(() => {
    if (game.turn() === 'b' && !game.isGameOver()) {
      const timer = setTimeout(() => {
        const aiMove = getSmartMove(game);
        if (aiMove) makeAMove(aiMove);
      }, 500);
      return () => clearTimeout(timer);
    }

    if (game.isGameOver()) {
      if (game.isCheckmate()) {
        const winner = game.turn() === 'w' ? 'AI' : 'You';
        if (winner === 'You') showSuccess("Checkmate! You won against the AI!");
        else showError("Checkmate! The AI won this time.");
      } else if (game.isDraw()) {
        showSuccess("The game ended in a draw.");
      }
    }
  }, [game, makeAMove]);

  const resetGame = () => {
    setGame(new Chess());
    setMoveHistory([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="student" />
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/student">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Back to Dashboard
                </Link>
              </Button>
              <h1 className="text-2xl font-bold text-slate-900">Practice vs AI</h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="p-4 bg-white shadow-xl rounded-2xl overflow-hidden border-none">
                  <div className="flex justify-between items-center mb-4 px-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-slate-100 p-2 rounded-lg">
                        <Cpu className="h-5 w-5 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Checkmate AI</p>
                        <Badge variant="outline" className="text-[10px] uppercase">{difficulty} Mode</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400 font-bold uppercase">Time Control</p>
                      <p className="text-sm font-mono font-bold">10:00</p>
                    </div>
                  </div>

                  <div className="aspect-square max-w-[600px] mx-auto">
                    <Chessboard 
                      position={game.fen()} 
                      onPieceDrop={onDrop}
                      boardOrientation="white"
                      customBoardStyle={{
                        borderRadius: '4px',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
                      }}
                    />
                  </div>

                  <div className="flex justify-between items-center mt-4 px-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg">
                        <User className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Michael Chen</p>
                        <p className="text-xs text-slate-500">Rating: 1,240</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400 font-bold uppercase">Time Control</p>
                      <p className="text-sm font-mono font-bold">09:45</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <History className="h-5 w-5 text-indigo-600" />
                    Move History
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-4 h-[300px] overflow-y-auto border">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                      {Array.from({ length: Math.ceil(moveHistory.length / 2) }).map((_, i) => (
                        <React.Fragment key={i}>
                          <div className="flex gap-3 text-sm">
                            <span className="text-slate-400 w-4">{i + 1}.</span>
                            <span className="font-medium text-slate-900">{moveHistory[i * 2]}</span>
                          </div>
                          <div className="text-sm font-medium text-slate-900">
                            {moveHistory[i * 2 + 1] || ''}
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    {moveHistory.length === 0 && (
                      <p className="text-center text-slate-400 text-sm mt-20 italic">No moves yet</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <Button variant="outline" onClick={resetGame}>
                      <RotateCcw className="h-4 w-4 mr-2" />
                      New Game
                    </Button>
                    <Button variant="outline">
                      <Settings2 className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                  </div>
                </Card>

                <Card className="p-6 bg-indigo-900 text-white">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-amber-400" />
                    Practice Goals
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <p className="text-sm text-indigo-100">Play 3 games today</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                      <p className="text-sm text-indigo-100">Win with 80%+ accuracy</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
      <MobileDashboardNav role="student" />
    </div>
  );
};

export default PlayAI;