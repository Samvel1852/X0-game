let board = [
  ["X", "X", "0", "X"],
  ["0", "X", "X", "0"],
  ["0", "X", "0", "0"],
  ["X", "X", "0", "0"],
];

function checkBoard(array) {
  if (array.every((nestArray, index) => !nestArray.includes("0"))) {
    return "You won";
  }
  return false;
}

function bomberMan(index1, index2) {
  if (!checkBoard(board)) {
    if (board[index1][index2] === "X") {
      return "Boom, game over";
    } else {
      board[index1][index2] = "ok";
      return checkBoard(board);
    }
  }
}

while (checkBoard(board) === false) {
  console.log(
    bomberMan(
      Math.floor(Math.random() * board.length),
      Math.floor(Math.random() * board.length)
    ),
    board
  );
}

// console.log(bomberMan(0, 2), board);
// console.log(bomberMan(1, 0), board);
