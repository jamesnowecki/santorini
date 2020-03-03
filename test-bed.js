//define the grid objects

class GridSquare {
   constructor(position, height, occupant, adjacencies) {
      this.position = position;
      this.height = height;
      this.occupant = occupant;
      this.adjacencies = adjacencies;
   }

   increaseHeight() {
      this.height++;
   };

   occupiedByPlayer1() {
      this.occupant = "player1Piece";
   };

   occupiedByPlayer2() {
      this.occupant = "player2Piece";
   };

   clearTheSpace() {
      this.occupant = "empty";
   };
};

const a1 = new GridSquare("a1", 0, "empty", ["a2", "b1", "b2"]);
const a2 = new GridSquare("a2", 0, "empty", ["a1", "a3", "b1", "b2", "b3"]);
const a3 = new GridSquare("a3", 0, "empty", ["a2", "a4", "b2", "b3", "b4"]);
const a4 = new GridSquare("a4", 0, "empty", ["a3", "a5", "b3", "b4", "b5"]);
const a5 = new GridSquare("a5", 0, "empty", ["a4", "b4", "b5"]);
const b1 = new GridSquare("b1", 1, "empty", ["a1", "a2", "b2", "c1", "c2"]);
const b2 = new GridSquare("b2", 1, "empty", ["a1", "a2", "a3", "b1", "b3", "c1", "c2", "c3"]);
const b3 = new GridSquare("b3", 1, "empty", ["a2", "a3", "a4", "b2", "b4", "c2", "c3", "c4"]);
const b4 = new GridSquare("b4", 1, "empty", ["a3", "a4", "a5", "b3", "b5", "c3", "c4", "c5"]);
const b5 = new GridSquare("b5", 1, "empty", ["a4", "a5", "b4", "c4", "c5"]);
const c1 = new GridSquare("c1", 2, "empty", ["b1", "b2", "c2", "d1", "d2"]);
const c2 = new GridSquare("c2", 2, "empty", ["b1", "b2", "b3", "c1", "c3", "d1", "d2", "d3"]);
const c3 = new GridSquare("c3", 2, "empty", ["b2", "b3", "b4", "c2", "c4", "d2", "d3", "d4"]);
const c4 = new GridSquare("c4", 2, "empty", ["b3", "b4", "b5", "c3", "c5", "d3", "d4", "d5"]);
const c5 = new GridSquare("c5", 2, "empty", ["b4", "b5", "c4", "d4", "d5"]);
const d1 = new GridSquare("d1", 4, "empty", ["c1", "c2", "d2", "e1", "e2"]);
const d2 = new GridSquare("d2", 4, "empty", ["c1", "c2", "c3", "d1", "d3", "e1", "e2", "e3"]);
const d3 = new GridSquare("d3", 4, "empty", ["c2", "c3", "c4", "d2", "d4", "e2", "e3", "e4"]);
const d4 = new GridSquare("d4", 4, "empty", ["c3", "c4", "c5", "d3", "d5", "e3", "e4", "e5"]);
const d5 = new GridSquare("d5", 4, "empty", ["c4", "c5", "d4", "e4", "e5"]);
const e1 = new GridSquare("e1", 4, "empty", ["d1", "d2", "e2"]);
const e2 = new GridSquare("e2", 4, "empty", ["d1", "d2", "d3", "e1", "e3"]);
const e3 = new GridSquare("e3", 4, "empty", ["d2", "d3", "d4", "e2", "e4"]);
const e4 = new GridSquare("e4", 4, "empty", ["d3", "d4", "d5", "e3", "e5"]);
const e5 = new GridSquare("e5", 4, "empty", ["d4", "d5", "e4"]);

const boardArray = [a1, a2, a3, a4, a5, b1, b2, b3, b4, b5, c1, c2, c3, c4, c5, d1, d2, d3, d4, d5, e1, e2, e3, e4, e5]


// const btn1 = document.getElementById("btn1");
// const answer = document.getElementById("answer");

// const checkEnoughPieces = (height) => {
//    if (height === 0) {
//       return checkPiecesMoreThan0(getRemainingLvl1Pieces());
//    } else if (height === 1) {
//       return checkPiecesMoreThan0(getRemainingLvl2Pieces());
//    } else if (height === 2) {
//       return checkPiecesMoreThan0(getRemainingLvl3Pieces());
//    } else if (height === 3) {
//       return checkPiecesMoreThan0(getRemainingLvl4Pieces());
//    }
//    return false;
// }

// const checkEnoughPieces = (height) => {
//    switch(height) {
//       case height === 0:
//          checkPiecesMoreThan0(getRemainingLvl1Pieces());
//       break;
//       case height === 1:
//          checkPiecesMoreThan0(getRemainingLvl2Pieces());
//       break;
//       case height === 2:
//          checkPiecesMoreThan0(getRemainingLvl3Pieces());
//       break;
//       case height ===3:
//          checkPiecesMoreThan0(getRemainingLvl4Pieces());
//       break;
//       default:
//          false;
//    }
// }


let isCtrlDown = false;

window.addEventListener("keydown", (event) => turnCtrlOn(event));
window.addEventListener("keyup", (event) => turnCtrlOff(event));

const turnCtrlOn = (event) => {
   event.ctrlKey ? isCtrlDown = true : null;
};

const turnCtrlOff = (event) => {
   event.key === "Ctrl" ? isCtrlDown = false : null;
};

const answer = document.getElementById("answer");
btn1.addEventListener("click", () => printIfCtrl())

const printIfCtrl = () => {
   answer.innerHTML = "";
   if (isCtrlDown) {
      return answer.innerHTML = "Ctrl down";
   } else {
      return answer.innerHTML = "ctrl not down, don't work";
   };
}