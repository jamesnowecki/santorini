//define the grid objects

class GridSquare {
   constructor(position, height, occupant, adjacencies) {
      this.position = position;
      this.height = height;
      this.occupant = occupant;
      this.adjacencies = adjacencies;
   }

   increaseHeight() {
      this.height++
   }
}

const a1 = new GridSquare("a1", 0, "empty", ["a2", "b1", "b2"]);
const a2 = new GridSquare("a2", 0, "empty", ["a1", "a3", "b1", "b2", "b3"]);
const a3 = new GridSquare("a3", 0, "empty", ["a2", "a4", "b2", "b3", "b4"]);
const a4 = new GridSquare("a4", 0, "empty", ["a3", "a5", "b3", "b4", "b5"]);
const a5 = new GridSquare("a5", 0, "empty", ["a4", "b4", "b5"]);
const b1 = new GridSquare("b1", 0, "empty", ["a1", "a2", "b2", "c1", "c2"]);
const b2 = new GridSquare("b2", 0, "empty", ["a1", "a2", "a3", "b1", "b3", "c1", "c2", "c3"]);
const b3 = new GridSquare("b3", 0, "empty", ["a2", "a3", "a4", "b2", "b4", "c2", "c3", "c4"]);
const b4 = new GridSquare("b4", 0, "empty", ["a3", "a4", "a5", "b3", "b5", "c3", "c4", "c5"]);
const b5 = new GridSquare("b5", 0, "empty", ["a4", "a5", "b4", "c4", "c5"]);
const c1 = new GridSquare("c1", 0, "empty", ["b1", "b2", "c2", "d1", "d2"]);
const c2 = new GridSquare("c2", 0, "empty", ["b1", "b2", "b3", "c1", "c3", "d1", "d2", "d3"]);
const c3 = new GridSquare("c3", 0, "empty", ["b2", "b3", "b4", "c2", "c4", "d2", "d3", "d4"]);
const c4 = new GridSquare("c4", 0, "empty", ["b3", "b4", "b5", "c3", "c5", "d3", "d4", "d5"]);
const c5 = new GridSquare("c5", 0, "empty", ["b4", "b5", "c4", "d4", "d5"]);
const d1 = new GridSquare("d1", 0, "empty", ["c1", "c2", "d2", "e1", "e2"]);
const d2 = new GridSquare("d2", 0, "empty", ["c1", "c2", "c3", "d1", "d3", "e1", "e2", "e3"]);
const d3 = new GridSquare("d3", 0, "empty", ["c2", "c3", "c4", "d2", "d4", "e2", "e3", "e4"]);
const d4 = new GridSquare("d4", 0, "empty", ["c3", "c4", "c5", "d3", "d5", "e3", "e4", "e5"]);
const d5 = new GridSquare("d5", 1, "empty", ["c4", "c5", "d4", "e4", "e5"]);
const e1 = new GridSquare("e1", 1, "empty", ["d1", "d2", "e2"]);
const e2 = new GridSquare("e2", 1, "empty", ["d1", "d2", "d3", "e1", "e3"]);
const e3 = new GridSquare("e3", 0, "empty", ["d2", "d3", "d4", "e2", "e4"]);
const e4 = new GridSquare("e4", 0, "empty", ["d3", "d4", "d5", "e3", "e5"]);
const e5 = new GridSquare("e5", 0, "empty", ["d4", "d5", "e4"]);

const boardArray = [a1, a2, a3, a4, a5, b1, b2, b3, b4, b5, c1, c2, c3, c4, c5, d1, d2, d3, d4, d5, e1, e2, e3, e4, e5]




const checkEnoughPieces = (height) => {
   if (height === 0) {
      return checkPiecesMoreThan0(getRemainingLvl1Pieces);
   } else if (height === 1) {
      return checkPiecesMoreThan0(getRemainingLvl2Pieces);
   } else if (height === 2) {
      return checkPiecesMoreThan0(getRemainingLvl3Pieces);
   } else if (height === 3) {
      return checkPiecesMoreThan0(getRemainingLvl4Pieces);
   } 
   return false;
}

const checkPiecesMoreThan0 = (piecesRemaining) => {
   return piecesRemaining > 0;
}

const getRemainingLvl1Pieces = () => {
   const level1PiecesUsed = (boardArray.filter((piece) => {
      return piece.height >= 1;
   }).length);

   return 22 - level1PiecesUsed;
}

const getRemainingLvl2Pieces = () => {
   const level2PiecesUsed = (boardArray.filter((piece) => {
      return piece.height >= 2;
   }).length);

   return 18 - level2PiecesUsed;
}

const getRemainingLvl3Pieces = () => {
   const level3PiecesUsed = (boardArray.filter((piece) => {
      return piece.height >= 3;
   }).length);

   return 14 - level3PiecesUsed;
}

const getRemainingLvl4Pieces = () => {
   const level4PiecesUsed = (boardArray.filter((piece) => {
      return piece.height === 4;
   }).length);

   return 10 - level4PiecesUsed;
}


console.log(getRemainingLvl4Pieces());



// const targetHeight = 1;

// console.log(boardArray.filter((piece) => {
//    return piece.height >= targetHeight;
// }).length)


// const passInTheHeight = (askedHeight) => {
//    return countAllSameHeight(boardArray, askedHeight);
// }

// const countAllSameHeight = (piece, askedHeight) => {
//    return (piece[height] === askedHeight);
// };

// const level0PiecesOnBoard = boardArray.filter(passInTheHeight(0));

// console.log(level0PiecesOnBoard);