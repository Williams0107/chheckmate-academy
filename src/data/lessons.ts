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
  'b3': {
    title: 'The Pawns & Promotion',
    level: 'Beginner',
    content: 'Pawns move forward one square, but capture diagonally. If a pawn reaches the other side of the board, it can "promote" to any piece (usually a Queen).',
    proTip: 'Pawns are the only pieces that cannot move backwards!',
    fen: '8/P7/8/8/8/8/p7/8 w - - 0 1',
    drill: 'Advance your pawn to the 8th rank to promote it.',
    quiz: [
      {
        id: 1,
        text: "How does a pawn capture an enemy piece?",
        options: ["Forward", "Sideways", "Diagonally", "L-shape"],
        correctIndex: 2,
        explanation: "Pawns move forward but capture one square diagonally."
      }
    ]
  },
  'b4': {
    title: 'The Minor Pieces: Knights & Bishops',
    level: 'Beginner',
    content: 'Knights move in an "L" shape and can jump over other pieces. Bishops move diagonally as many squares as they want, but stay on their starting color.',
    proTip: 'A Bishop can never move to a square of a different color than it started on!',
    fen: 'rnbqkbnr/8/8/8/8/8/8/RNBQKBNR w KQkq - 0 1',
    drill: 'Move your Knight to jump over a pawn.',
    quiz: [
      {
        id: 1,
        text: "Which piece can jump over other pieces?",
        options: ["Rook", "Bishop", "Knight", "Queen"],
        correctIndex: 2,
        explanation: "The Knight is the only piece that can jump over other pieces on the board."
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
  },
  'i2': {
    title: 'Pins & Skewers',
    level: 'Intermediate',
    content: 'A pin happens when an attacked piece cannot move without exposing a more valuable piece. A skewer is the opposite: the more valuable piece is in front.',
    proTip: 'Think of a pin as "trapping" a piece against its own King!',
    fen: '4k3/8/8/4r3/8/8/4R3/4K3 w - - 0 1',
    drill: 'Pin the opponent\'s Rook to their King.',
    quiz: [
      {
        id: 1,
        text: "What is the main difference between a pin and a skewer?",
        options: ["The pieces involved", "The order of the pieces", "The color of the pieces", "There is no difference"],
        correctIndex: 1,
        explanation: "In a pin, the less valuable piece is in front. In a skewer, the more valuable piece is in front."
      }
    ]
  },
  'i3': {
    title: 'Basic Opening Principles',
    level: 'Intermediate',
    content: 'The three main goals of the opening are: Control the center, develop your pieces, and get your King to safety (usually by castling).',
    proTip: 'Don\'t move the same piece twice in the opening if you can avoid it!',
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    drill: 'Make a move that controls the center of the board.',
    quiz: [
      {
        id: 1,
        text: "Which of these is NOT a primary goal of the opening?",
        options: ["Control the center", "Develop pieces", "Checkmate in 3 moves", "King safety"],
        correctIndex: 2,
        explanation: "While early checkmates can happen, the primary goals are center control, development, and King safety."
      }
    ]
  },
  'a1': {
    title: 'Rook Endgames',
    level: 'Advanced',
    content: 'Rook endgames are the most common type of endgame. Mastering the "Lucena Position" and "Philidor Position" is essential for high-level play.',
    proTip: 'Keep your Rook active! An active Rook is often worth more than a pawn.',
    fen: '8/8/8/8/8/2k5/1r6/R3K3 w - - 0 1',
    drill: 'Find the best square for your Rook to prevent the enemy King from advancing.',
    quiz: [
      {
        id: 1,
        text: "What is the most important rule in Rook endgames?",
        options: ["Keep the Rook passive", "Keep the Rook active", "Trade Rooks immediately", "Move the King to the corner"],
        correctIndex: 1,
        explanation: "Rook activity is the single most important factor in Rook endgames."
      }
    ]
  },
  'a2': {
    title: 'Positional Sacrifices',
    level: 'Advanced',
    content: 'A positional sacrifice is giving up material not for an immediate checkmate, but for long-term strategic advantages like better piece coordination or board control.',
    proTip: 'Only sacrifice material if you can clearly see the long-term compensation!',
    fen: 'r1bqk2r/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PP2BPPP/R1BQK2R w KQkq - 0 1',
    drill: 'Identify a square where a sacrifice could lead to a dominant position.',
    quiz: [
      {
        id: 1,
        text: "What is the goal of a positional sacrifice?",
        options: ["Immediate checkmate", "Winning back material immediately", "Long-term strategic advantage", "To confuse the opponent"],
        correctIndex: 2,
        explanation: "Positional sacrifices are made for long-term benefits like space, activity, or structural weaknesses in the opponent's camp."
      }
    ]
  }
};