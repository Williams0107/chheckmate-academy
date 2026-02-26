"use client";

import React, { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

interface ChessBoardProps {
  fen?: string;
  onMove?: (move: any) => void;
  interactive?: boolean;
}

const ChessBoard = ({ fen = 'start', onMove, interactive = true }: ChessBoardProps) => {
  const [game, setGame] = useState(new Chess(fen === 'start' ? undefined : fen));

  function makeAMove(move: any) {
    const gameCopy = new Chess(game.fen());
    try {
      const result = gameCopy.move(move);
      if (result) {
        setGame(gameCopy);
        if (onMove) onMove(result);
        return result;
      }
    } catch (e) {
      return null;
    }
    return null;
  }

  function onDrop(sourceSquare: string, targetSquare: string) {
    if (!interactive) return false;
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // always promote to queen for simplicity in MVP
    });
    return move !== null;
  }

  const resetGame = () => {
    setGame(new Chess(fen === 'start' ? undefined : fen));
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-[500px] mx-auto">
      <Card className="p-2 bg-slate-100 shadow-xl rounded-xl overflow-hidden">
        <Chessboard 
          position={game.fen()} 
          onPieceDrop={onDrop}
          boardOrientation="white"
          customBoardStyle={{
            borderRadius: '4px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
          }}
        />
      </Card>
      
      <div className="flex justify-between items-center bg-white p-3 rounded-lg border shadow-sm">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => {}}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => {}}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="ghost" size="sm" onClick={resetGame} className="text-gray-500">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ChessBoard;