// let size = 5;
let arr = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function checkForStatus(array) {
  if (
    (array[0][0] === "X" && array[0][1] === "X" && array[0][2] === "X") ||
    (array[1][0] === "X" && array[1][1] === "X" && array[1][2] === "X") ||
    (array[2][0] === "X" && array[2][1] === "X" && array[2][2] === "X")
  ) {
    return "X won";
  } else if (
    (array[0][0] === "0" && array[0][1] === "0" && array[0][2] === "0") ||
    (array[1][0] === "0" && array[1][1] === "0" && array[1][2] === "0") ||
    (array[2][0] === "0" && array[2][1] === "0" && array[2][2] === "0")
  ) {
    return "0 won";
  } else if (
    (array[0][0] === "X" && array[1][0] === "X" && array[2][0] === "X") ||
    (array[0][1] === "X" && array[1][1] === "X" && array[2][1] === "X") ||
    (array[0][2] === "X" && array[1][2] === "X" && array[2][2] === "X")
  ) {
    return "X won";
  } else if (
    (array[0][0] === "0" && array[1][0] === "0" && array[2][0] === "0") ||
    (array[0][1] === "0" && array[1][1] === "0" && array[2][1] === "0") ||
    (array[0][2] === "0" && array[1][2] === "0" && array[2][2] === "0")
  ) {
    return "0 won";
  } else if (
    (array[0][0] === "X" && array[1][1] === "X" && array[2][2] === "X") ||
    (array[0][2] === "X" && array[1][1] === "X" && array[2][0] === "X")
  ) {
    return "X won";
  } else if (
    (array[0][0] === "0" && array[1][1] === "0" && array[2][2] === "0") ||
    (array[0][2] === "0" && array[1][1] === "0" && array[2][0] === "0")
  ) {
    return "0 won";
  } else if (
    !array[0].includes(null) &&
    !array[1].includes(null) &&
    !array[2].includes(null)
  ) {
    return "Draw";
  }
  return false;
}

let player = true;

function runTicTacToe(index1, index2) {
  let player1 = "X";
  let player2 = "0";
  if (checkForStatus(arr)) {
    console.log(arr);
    return checkForStatus(arr);
  }
  if (arr[index1][index2] === null && index1 < 3 && index2 < 3) {
    if (player) {
      arr[index1][index2] = player1;
      player = false;
      if (checkForStatus(arr)) {
        console.log(arr);
        return checkForStatus(arr);
      }
      return arr;
    } else {
      arr[index1][index2] = player2;
      player = true;
      if (checkForStatus(arr)) {
        console.log(arr);
        return checkForStatus(arr);
      }
      return arr;
    }
  } else {
    return "Not empty or out of board";
  }
}

while (!checkForStatus(arr)) {
  console.log(
    runTicTacToe(Math.floor(Math.random() * 3), Math.floor(Math.random() * 3))
  );
  console.log(arr);
}

// for (let i = 0; i < 3; i += 1) {
//   for (let j = 0; j < 3; j += 1) {
//     if (checkForStatus(arr)) {
//       break;
//     }
//     console.log(runTicTacToe(i, j));
//   }
// }
