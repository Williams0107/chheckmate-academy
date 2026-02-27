"use client";

import React, { useState, useEffect, useCallback } from 'react';
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
  const [moveSquares, setMoveSquares] = useState({});
  const [optionSquares, setOptionSquares] = useState({});

  // Sync game state when FEN prop changes
  useEffect(() => {
    setGame(new Chess(fen === 'start' ? undefined : fen));
    setMoveSquares({});
    setOptionSquares({});
  }, [fen]);

  const makeAMove = useCallback((move: any) => {
    try {
      const gameCopy = new Chess(game.fen());
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
  }, [game, onMove]);

  function onDrop(sourceSquare: string, targetSquare: string) {
    if (!interactive) return false;
    
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    });
    
    if (move === null) return false;
    
    setMoveSquares({
      [sourceSquare]: { backgroundColor: 'rgba(255, 255, 0, 0.4)' },
      [targetSquare]: { backgroundColor: 'rgba(255, 255, 0, 0.4)' },
    });
    return true;
  }

  function onMouseOverSquare(square: string) {
    if (!interactive) return;
    
    const moves = game.moves({
      square,
      verbose: true,
    });
    
    if (moves.length === 0) return;

    const newSquares: any = {};
    moves.map((move) => {
      newSquares[move.to] = {
        background:
          game.get(move.to as any) && game.get(move.to as any).color !== game.get(square as any).color
            ? 'radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)'
            : 'radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)',
        borderRadius: '50%',
      };
      return move;
    });
    
    newSquares[square] = {
      background: 'rgba(255, 255, 0, 0.4)',
    };
    setOptionSquares(newSquares);
  }

  function onMouseOutSquare() {
    setOptionSquares({});
  }

  const resetGame = () => {
    const newGame = new Chess(fen === 'start' ? undefined : fen);
    setGame(newGame);
    setMoveSquares({});
    setOptionSquares({});
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-[500px] mx-auto">
      <Card className="p-2 bg-slate-100 shadow-xl rounded-xl overflow-hidden border-none">
        <Chessboard 
          position={game.fen()} 
          onPieceDrop={onDrop}
          onMouseOverSquare={onMouseOverSquare}
          onMouseOutSquare={onMouseOutSquare}
          boardOrientation="white"
          customSquareStyles={{
            ...moveSquares,
            ...optionSquares,
          }}
          customBoardStyle={{
            borderRadius: '4px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
          }}
        />
      </Card>
      
      <div className="flex justify-between items-center bg-white p-3 rounded-lg border shadow-sm">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="ghost" size="sm" onClick={resetGame} className="text-slate-500 hover:text-indigo-600">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset Board
        </Button>
      </div>
    </div>
  );
};

export default ChessBoard;