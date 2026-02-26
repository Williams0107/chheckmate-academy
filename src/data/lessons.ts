export const lessonsData = {
  'b1': {
    title: 'The Chessboard & Coordinates',
    level: 'Beginner',
    content: 'The chessboard is an 8x8 grid of 64 squares. Each square has a unique name like "e4" or "h8". Files are columns (a-h) and ranks are rows (1-8).',
    proTip: 'Always ensure the bottom-right square is a light-colored square. "White on right!"',
    fen: 'start',
    drill: 'Try moving a piece to the e4 square.',
    quiz: [
      {
        id: 1,
        text: "How many squares are on a standard chessboard?",
        options: ["32", "64", "81", "100"],
        correctIndex: 1,
        explanation: "A standard chessboard is an 8x8 grid, which equals 64 squares."
      },
      {
        id: 2,
        text: "Which square should always be a light-colored square for both players?",
        options: ["Bottom-left", "Top-left", "Bottom-right", "Center"],
        correctIndex: 2,
        explanation: "The rule is 'White on right' - the bottom-right square must be light-colored."
      }
    ]
  },
  'b2': {
    title: 'The King & The Goal',
    level: 'Beginner',
    content: 'The King is the most important piece. The goal of chess is to "Checkmate" the opponent\'s King, meaning it is under attack and cannot escape.',
    proTip: 'Protect your King at all costs! It only moves one square in any direction.',
    fen: '4k3/8/8/8/8/8/8/4K3 w - - 0 1',
    drill: 'Move your King to the center of the board.',
    quiz: [
      {
        id: 1,
        text: "How many squares can a King move at a time?",
        options: ["1", "2", "As many as it wants", "It can't move"],
        correctIndex: 0,
        explanation: "The King moves exactly one square in any direction (horizontal, vertical, or diagonal)."
      }
    ]
  },
  'i1': {
    title: 'The Power of the Fork',
    level: 'Intermediate',
    content: 'A fork is a tactical move where a single piece attacks two or more of the opponent\'s pieces at the same time.',
    proTip: 'Knights are the masters of forks because of their unique L-shaped move!',
    fen: 'r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1',
    drill: 'Find the move that forks the King and the Rook.',
    quiz: [
      {
        id: 1,
        text: "Which piece is most famous for creating forks?",
        options: ["Bishop", "Rook", "Knight", "Pawn"],
        correctIndex: 2,
        explanation: "While any piece can fork, the Knight's ability to jump over pieces makes its forks particularly dangerous and hard to spot."
      }
    ]
  }
};