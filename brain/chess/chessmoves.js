// ==========================================
// DUO CHESS BRAIN
// ==========================================

function getChessReply(message) {

  const text = message.toLowerCase().trim();

  // Chess basics
  if (text.includes("checkmate")) {
    return "Checkmate! ♟️🦉";
  }

  if (text.includes("stalemate")) {
    return "That's a stalemate! ♟️🦉";
  }

  if (text.includes("check")) {
    return "Check! The king is under attack. ♟️🦉";
  }

  // Common chess moves
  const moves = [
    "e4", "d4", "Nf3", "Nc3",
    "Bb5", "Bc4", "O-O",
    "Qd2", "Re1"
  ];

  // If someone asks for a good move
  if (
    text.includes("best move") ||
    text.includes("good move") ||
    text.includes("what should i play") ||
    text.includes("what move")
  ) {
    const move = moves[
      Math.floor(Math.random() * moves.length)
    ];

    return `A good move to consider is ${move}. ♟️🦉`;
  }

  return null;
}
