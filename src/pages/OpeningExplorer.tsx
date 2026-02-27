"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ChessBoard from '@/components/ChessBoard';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  BookOpen, 
  ChevronRight, 
  Info,
  Star,
  History
} from 'lucide-react';

const openings = [
  { id: 'ruy', name: 'Ruy Lopez', moves: '1. e4 e5 2. Nf3 Nc6 3. Bb5', desc: 'One of the oldest and most popular openings, focusing on rapid development and central control.', difficulty: 'Intermediate' },
  { id: 'italian', name: 'Italian Game', moves: '1. e4 e5 2. Nf3 Nc6 3. Bc4', desc: 'A classic opening that aims for a quick attack on the f7 square.', difficulty: 'Beginner' },
  { id: 'sicilian', name: 'Sicilian Defense', moves: '1. e4 c5', desc: 'The most popular and best-scoring response to 1. e4, leading to sharp, asymmetrical positions.', difficulty: 'Advanced' },
  { id: 'queens', name: "Queen's Gambit", moves: '1. d4 d5 2. c4', desc: 'A solid opening where White offers a pawn to gain control of the center.', difficulty: 'Intermediate' },
];

const OpeningExplorer = () => {
  const [selectedOpening, setSelectedOpening] = useState(openings[0]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Opening Explorer</h1>
            <p className="text-slate-600">Master the first phase of the game.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search openings..." 
              className="w-full pl-10 pr-4 py-2 rounded-xl border bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-indigo-600" />
              Popular Openings
            </h3>
            {openings.map((o) => (
              <button
                key={o.id}
                onClick={() => setSelectedOpening(o)}
                className={`w-full p-4 rounded-2xl text-left transition-all border ${
                  selectedOpening.id === o.id 
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200' 
                    : 'bg-white border-slate-100 hover:border-indigo-200 text-slate-900'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold">{o.name}</span>
                  <Badge variant={selectedOpening.id === o.id ? 'secondary' : 'outline'} className="text-[10px]">
                    {o.difficulty}
                  </Badge>
                </div>
                <p className={`text-xs ${selectedOpening.id === o.id ? 'text-indigo-100' : 'text-slate-500'}`}>{o.moves}</p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <Card className="p-8 bg-white shadow-xl border-none rounded-3xl">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <ChessBoard interactive={false} />
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-3xl font-bold text-slate-900">{selectedOpening.name}</h2>
                      <Star className="h-5 w-5 text-amber-400 fill-current" />
                    </div>
                    <p className="text-slate-600 leading-relaxed">{selectedOpening.desc}</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-dashed">
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                      <History className="h-3 w-3" />
                      Main Line Moves
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedOpening.moves.split(' ').map((move, i) => (
                        <span key={i} className={`px-3 py-1 rounded-lg text-sm font-mono ${
                          move.includes('.') ? 'text-slate-400 font-bold' : 'bg-white border shadow-sm text-slate-900'
                        }`}>
                          {move}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 flex gap-3">
                    <Info className="h-5 w-5 text-indigo-600 shrink-0" />
                    <p className="text-xs text-indigo-900">
                      <strong>Why play this?</strong> This opening leads to open positions with lots of tactical opportunities for both sides.
                    </p>
                  </div>

                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 py-6 rounded-2xl text-lg font-bold">
                    Practice this Opening
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningExplorer;