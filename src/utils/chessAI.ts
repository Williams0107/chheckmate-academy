import { Chess } from 'chess.js';

// A very simple AI that picks a random legal move
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

// AI Coach logic to provide hints
export const getCoachHint = (game: Chess, lessonTitle: string) => {
  const moves = game.moves({ verbose: true });
  
  if (lessonTitle.includes('Fork')) {
    const forkMoves = moves.filter(m => {
      const tempGame = new Chess(game.fen());
      tempGame.move(m.san);
      // A simple heuristic for a fork: attacking two pieces of higher value
      // This is a mock implementation for the demo
      return m.piece === 'n' && m.flags.includes('c');
    });
    if (forkMoves.length > 0) return "Look for a Knight move that attacks two pieces at once!";
  }

  if (lessonTitle.includes('King')) {
    return "Remember, the King is your most valuable piece. Keep it safe and look for ways to restrict the opponent's King.";
  }

  if (moves.length > 0) {
    const bestMove = moves[0]; // Mocking "best" move
    return `Try focusing on the ${bestMove.from} to ${bestMove.to} area. What happens if you move there?`;
  }

  return "Take your time to analyze the board. Look for unprotected pieces!";
};