"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import ChessBoard from '@/components/ChessBoard';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  Search, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2,
  History,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

const analysisData = [
  { move: 'e4', evaluation: '+0.3', type: 'book', comment: 'Standard opening move.' },
  { move: 'e5', evaluation: '+0.3', type: 'book', comment: 'The most common response.' },
  { move: 'Nf3', evaluation: '+0.4', type: 'best', comment: 'Developing the knight and attacking e5.' },
  { move: 'Nc6', evaluation: '+0.4', type: 'best', comment: 'Defending the pawn.' },
  { move: 'Bb5', evaluation: '+0.5', type: 'best', comment: 'The Ruy Lopez opening.' },
  { move: 'a6', evaluation: '+0.4', type: 'good', comment: 'Challenging the bishop.' },
  { move: 'Bxc6', evaluation: '+0.2', type: 'inaccuracy', comment: 'Giving up the bishop pair early.' },
];

const GameAnalysis = () => {
  const [currentMoveIndex, setCurrentMoveIndex] = useState(analysisData.length - 1);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <DashboardSidebar role="student" />
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/student">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back
                  </Link>
                </Button>
                <h1 className="text-2xl font-bold text-slate-900">Game Analysis</h1>
              </div>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export PGN
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white p-6 rounded-3xl shadow-sm border">
                  <ChessBoard interactive={false} />
                  
                  <div className="mt-8 grid grid-cols-4 gap-4">
                    <Card className="p-4 text-center border-none bg-blue-50">
                      <p className="text-[10px] font-bold text-blue-600 uppercase mb-1">Accuracy</p>
                      <p className="text-xl font-bold text-blue-900">94%</p>
                    </Card>
                    <Card className="p-4 text-center border-none bg-green-50">
                      <p className="text-[10px] font-bold text-green-600 uppercase mb-1">Best Moves</p>
                      <p className="text-xl font-bold text-green-900">12</p>
                    </Card>
                    <Card className="p-4 text-center border-none bg-amber-50">
                      <p className="text-[10px] font-bold text-amber-600 uppercase mb-1">Inaccuracies</p>
                      <p className="text-xl font-bold text-amber-900">2</p>
                    </Card>
                    <Card className="p-4 text-center border-none bg-red-50">
                      <p className="text-[10px] font-bold text-red-600 uppercase mb-1">Blunders</p>
                      <p className="text-xl font-bold text-red-900">0</p>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 h-[600px] flex flex-col">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <History className="h-5 w-5 text-indigo-600" />
                    Move Breakdown
                  </h3>
                  <div className="flex-1 overflow-y-auto space-y-2 pr-2">
                    {analysisData.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentMoveIndex(idx)}
                        className={`w-full p-3 rounded-xl text-left transition-all border ${
                          currentMoveIndex === idx 
                            ? 'bg-indigo-50 border-indigo-200 ring-1 ring-indigo-200' 
                            : 'bg-white border-slate-100 hover:border-slate-200'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-400">{idx + 1}.</span>
                            <span className="font-bold text-slate-900">{item.move}</span>
                            {item.type === 'best' && <CheckCircle2 className="h-3 w-3 text-green-500" />}
                            {item.type === 'inaccuracy' && <AlertTriangle className="h-3 w-3 text-amber-500" />}
                          </div>
                          <Badge variant="outline" className="text-[10px] font-mono">{item.evaluation}</Badge>
                        </div>
                        <p className="text-xs text-slate-500 italic">{item.comment}</p>
                      </button>
                    ))}
                  </div>
                  <div className="pt-4 border-t mt-4">
                    <div className="bg-slate-900 rounded-xl p-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-indigo-400" />
                        <span className="text-xs font-bold uppercase tracking-wider">Engine Evaluation</span>
                      </div>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold">+0.4</span>
                        <span className="text-xs text-slate-400 mb-1">Slight advantage for White</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GameAnalysis;