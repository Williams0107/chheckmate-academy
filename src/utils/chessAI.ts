import { Chess } from 'chess.js';

// A very simple AI that picks a random legal move
// In a production app, this would be replaced by a Stockfish WASM worker
export const getRandomMove = (game: Chess) => {
  const possibleMoves = game.moves();
  if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * possibleMoves.length);
  return possibleMoves[randomIndex];
};

// A slightly better AI that prioritizes captures
export const getSmartMove = (game: Chess) => {
  const possibleMoves = game.moves({ verbose: true });
  if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0) return null;

  // Prioritize captures
  const captures = possibleMoves.filter(m => m.flags.includes('c'));
  if (captures.length > 0) {
    return captures[Math.floor(Math.random() * captures.length)].san;
  }

  // Otherwise random
  return possibleMoves[Math.floor(Math.random() * possibleMoves.length)].san;
};