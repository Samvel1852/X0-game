// // let size = 5;
// let arr = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

// function checkForStatus(array) {
//   if (
//     (array[0][0] === "X" && array[0][1] === "X" && array[0][2] === "X") ||
//     (array[1][0] === "X" && array[1][1] === "X" && array[1][2] === "X") ||
//     (array[2][0] === "X" && array[2][1] === "X" && array[2][2] === "X")
//   ) {
//     return "X won";
//   } else if (
//     (array[0][0] === "0" && array[0][1] === "0" && array[0][2] === "0") ||
//     (array[1][0] === "0" && array[1][1] === "0" && array[1][2] === "0") ||
//     (array[2][0] === "0" && array[2][1] === "0" && array[2][2] === "0")
//   ) {
//     return "0 won";
//   } else if (
//     (array[0][0] === "X" && array[1][0] === "X" && array[2][0] === "X") ||
//     (array[0][1] === "X" && array[1][1] === "X" && array[2][1] === "X") ||
//     (array[0][2] === "X" && array[1][2] === "X" && array[2][2] === "X")
//   ) {
//     return "X won";
//   } else if (
//     (array[0][0] === "0" && array[1][0] === "0" && array[2][0] === "0") ||
//     (array[0][1] === "0" && array[1][1] === "0" && array[2][1] === "0") ||
//     (array[0][2] === "0" && array[1][2] === "0" && array[2][2] === "0")
//   ) {
//     return "0 won";
//   } else if (
//     (array[0][0] === "X" && array[1][1] === "X" && array[2][2] === "X") ||
//     (array[0][2] === "X" && array[1][1] === "X" && array[2][0] === "X")
//   ) {
//     return "X won";
//   } else if (
//     (array[0][0] === "0" && array[1][1] === "0" && array[2][2] === "0") ||
//     (array[0][2] === "0" && array[1][1] === "0" && array[2][0] === "0")
//   ) {
//     return "0 won";
//   } else if (
//     !array[0].includes(null) &&
//     !array[1].includes(null) &&
//     !array[2].includes(null)
//   ) {
//     return "Draw";
//   }
//   return false;
// }

// let player = true;

// function runTicTacToe(index1, index2) {
//   let player1 = "X";
//   let player2 = "0";
//   if (checkForStatus(arr)) {
//     console.log(arr);
//     return checkForStatus(arr);
//   }
//   if (arr[index1][index2] === null && index1 < 3 && index2 < 3) {
//     if (player) {
//       arr[index1][index2] = player1;
//       player = false;
//       if (checkForStatus(arr)) {
//         console.log(arr);
//         return checkForStatus(arr);
//       }
//       return arr;
//     } else {
//       arr[index1][index2] = player2;
//       player = true;
//       if (checkForStatus(arr)) {
//         console.log(arr);
//         return checkForStatus(arr);
//       }
//       return arr;
//     }
//   } else {
//     return "Not empty or out of board";
//   }
// }

// while (!checkForStatus(arr)) {
//   console.log(
//     runTicTacToe(Math.floor(Math.random() * 3), Math.floor(Math.random() * 3))
//   );
//   console.log(arr);
// }

//*****************
// for (let i = 0; i < 3; i += 1) {
//   for (let j = 0; j < 3; j += 1) {
//     if (checkForStatus(arr)) {
//       break;
//     }
//     console.log(runTicTacToe(i, j));
//   }
// }

// let arrForAll = [
//   [null, "0", null, null, null, null],
//   [null, "0", null, null, null, null],
//   [null, "0", null, null, null, null],
//   [null, "0", null, null, null, null],
//   [null, "0", null, null, null, null],
//   [null, "0", null, null, null, null],
// ];

// let arrForAll = [
//   ["0", null, null, null, null, null],
//   [null, "0", null, null, null, null],
//   [null, "0", "0", null, null, null],
//   [null, "0", null, "0", null, null],
//   [null, "0", null, null, "0", null],
//   [null, "0", null, null, null, "0"],
// ];

// let arrForAll = [
//   [null, null, null, null, null, "0"],
//   [null, "0", null, null, "0", null],
//   [null, "0", null, "0", null, null],
//   [null, "0", "0", null, null, null],
//   [null, "0", null, null, null, null],
//   ["0", "0", null, null, null, null],
// ];

let arrForAll = [];

function checkStatusForAll(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].every((elm) => elm === "X")) {
      return "X won";
    } else if (array[i].every((elm) => elm === "0")) {
      return "0 won";
    } else if (array.every((each) => each[i] === "X")) {
      return "X won";
    } else if (array.every((each) => each[i] === "0")) {
      return "0 won";
    } else if (array.some((each) => each[i] !== null)) {
      return "draw";
    }
  }
  let countX = 0;
  let countY = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i][i] === "X") {
      countX += 1;
      if (countX === array.length) {
        return "X won";
      }
      continue;
    } else if (array[i][i] === "0") {
      countY += 1;
      if (countY === array.length) {
        return "0 won";
      }
      continue;
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i][array.length - 1 - i] === "X") {
      countX += 1;
      if (countX === array.length) {
        return "X won";
      }
      continue;
    } else if (array[i][array.length - 1 - i] === "0") {
      countY += 1;
      if (countY === array.length) {
        return "0 won";
      }
      continue;
    }
  }
  return false;
}

let player = true;

function runTicTacToeForAll(index1, index2) {
  let player1 = "X";
  let player2 = "0";
  if (checkStatusForAll(arrForAll)) {
    // console.log(arrForAll);
    return checkStatusForAll(arrForAll);
  }
  if (arrForAll[index1][index2] === null && index1 < 3 && index2 < 3) {
    if (player) {
      arrForAll[index1][index2] = player1;
      player = false;
      if (checkStatusForAll(arrForAll)) {
        // console.log(arrForAll);
        return checkStatusForAll(arrForAll);
      }
      return arrForAll;
    } else {
      arrForAll[index1][index2] = player2;
      player = true;
      if (checkStatusForAll(arrForAll)) {
        // console.log(arrForAll);
        return checkStatusForAll(arrForAll);
      }
      return arrForAll;
    }
  } else {
    return "Not empty or out of board";
  }
}

function arrayConstructor(size) {
  for (let i = 0; i < size; i += 1) {
    let tempArr = [];
    for (let j = 0; j < size; j += 1) {
      tempArr.push(null);
    }
    arrForAll.push(tempArr);
  }
  return arrForAll;
}

// console.log(arrayConstructor(6));
// console.log(Math.floor(Math.random() * arrForAll.length - 1));

// while (!checkStatusForAll(arrForAll)) {
//   console.log(
//     runTicTacToeForAll(
//       Math.floor(Math.random() * arrayConstructor(6).length - 1),
//       Math.floor(Math.random() * arrayConstructor(6).length - 1)
//     )
//   );
//   console.log(arrForAll);
// }

// console.log(checkStatusForAll(arrayConstructor(6)));
// console.log(runTicTacToeForAll(arrForAll));
