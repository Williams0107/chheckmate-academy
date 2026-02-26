export const puzzlesData = [
  {
    id: 1,
    title: "Find the Fork",
    description: "White to move. Find the move that attacks both the King and the Rook.",
    fen: "r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1",
    solution: "Nxg6",
    difficulty: "Intermediate",
    xp: 15,
    hint: "Look for a move with the Knight that creates a double attack."
  },
  {
    id: 2,
    title: "Back Rank Mate",
    description: "Black to move. The white King is trapped on the back rank. Can you find the checkmate?",
    fen: "5rk1/5ppp/8/8/8/8/5PPP/5RK1 b - - 0 1",
    solution: "Rf1",
    difficulty: "Beginner",
    xp: 10,
    hint: "The back rank is weak. Use your Rook to deliver the final blow."
  },
  {
    id: 3,
    title: "Smothered Mate",
    description: "White to move. The black King is surrounded by its own pieces. Find the winning move.",
    fen: "6rk/5Npp/8/8/8/8/8/7K w - - 0 1",
    solution: "Nf7",
    difficulty: "Advanced",
    xp: 25,
    hint: "The King has no escape squares. A Knight check might be lethal."
  }
];