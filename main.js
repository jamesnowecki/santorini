//define the grid objects

class GridSquare {
   constructor(position, height, occupant, adjacencies) {
      this.position = position;
      this.height = height;
      this.occupant = occupant;
      this.adjacencies = adjacencies;
   };

   increaseHeight() {
      this.height++;
   };

   occupiedByPlayer1() {
      this.occupant == "player1Piece";
   };

   occupiedByPlayer2() {
      this.occupant == "player2Piece";
   };

   clearTheSpace() {
      this.occupant == "empty";
   };
};

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
const d5 = new GridSquare("d5", 0, "empty", ["c4", "c5", "d4", "e4", "e5"]);
const e1 = new GridSquare("e1", 0, "empty", ["d1", "d2", "e2"]);
const e2 = new GridSquare("e2", 0, "empty", ["d1", "d2", "d3", "e1", "e3"]);
const e3 = new GridSquare("e3", 0, "empty", ["d2", "d3", "d4", "e2", "e4"]);
const e4 = new GridSquare("e4", 0, "empty", ["d3", "d4", "d5", "e3", "e5"]);
const e5 = new GridSquare("e5", 0, "empty", ["d4", "d5", "e4"]);

const boardArray = [a1, a2, a3, a4, a5, b1, b2, b3, b4, b5, c1, c2, c3, c4, c5, d1, d2, d3, d4, d5, e1, e2, e3, e4, e5];

const adjacencyObject = {
   "a1": a1,
   "a2": a2,
   "a3": a3,
   "a4": a4,
   "a5": a5,
   "b1": b1,
   "b2": b2,
   "b3": b3,
   "b4": b4,
   "b5": b5,
   "c1": c1,
   "c2": c2,
   "c3": c3,
   "c4": c4,
   "c5": c5,
   "d1": d1,
   "d2": d2,
   "d3": d3,
   "d4": d4,
   "d5": d5,
   "e1": e1,
   "e2": e2,
   "e3": e3,
   "e4": e4,
   "e5": e5,
};

// Turn checking and switching:

let isItPlayer1Turn = true;

const switchTurn = () => {
   isItPlayer1Turn ? isItPlayer1Turn = false : isItPlayer1Turn = true; 
};

// const turnNotifier = document.getElementById('turn-tracker');

const displayTurnNotifier = () => {
   if (isItPlayer1Turn = true) {
      turnNotifier.innerHTML = "Player 1's turn";
   }  turnNotifier.innerHTML = "Player 2's turn";
};

// Storage variable for last place a piece was placed (e.g. current piece to perform build action)
let pieceToBuild;


// Piece counting

const checkPiecesMoreThan0 = (piecesRemaining) => {
   return piecesRemaining > 0;
};

const getRemainingLvl1Pieces = () => {
   const level1PiecesUsed = (boardArray.filter((piece) => {
      return piece.height >= 1;
   }).length);

   return 22 - level1PiecesUsed;
};

const getRemainingLvl2Pieces = () => {
   const level2PiecesUsed = (boardArray.filter((piece) => {
      return piece.height >= 2;
   }).length);

   return 18 - level2PiecesUsed;
};

const getRemainingLvl3Pieces = () => {
   const level3PiecesUsed = (boardArray.filter((piece) => {
      return piece.height >= 3;
   }).length);

   return 14 - level3PiecesUsed;
};

const getRemainingLvl4Pieces = () => {
   const level4PiecesUsed = (boardArray.filter((piece) => {
      return piece.height === 4;
   }).length);

   return 10 - level4PiecesUsed;
};

const checkEnoughPieces = (height) => {
   if (height === 0) {
      return checkPiecesMoreThan0(getRemainingLvl1Pieces());
   } else if (height === 1) {
      return checkPiecesMoreThan0(getRemainingLvl2Pieces());
   } else if (height === 2) {
      return checkPiecesMoreThan0(getRemainingLvl3Pieces());
   } else if (height === 3) {
      return checkPiecesMoreThan0(getRemainingLvl4Pieces());
   }
   return false;
};

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

//Return the remaining pieces

const calcRemainingBlocks = () => {

   const level1PiecesUsed = (boardArray.filter((piece) => {
      return piece.height >= 1;
   }).length);

   const level2PiecesUsed = (boardArray.filter((piece) => {
      return piece.height >= 2;
   }).length);

   const level3PiecesUsed = (boardArray.filter((piece) => {
      return piece.height >= 3;
   }).length);

   const level4PiecesUsed = (boardArray.filter((piece) => {
      return piece.height === 4;
   }).length);

   const printLevel1Pieces = () => {
      const level1PiecesRemaining = (22 - level1PiecesUsed);
      const answer = document.getElementById('level-1-remaining');
      return answer.innerHTML = level1PiecesRemaining;
   };

   const printLevel2Pieces = () => {
      const level2PiecesRemaining = (18 - level2PiecesUsed);
      const answer = document.getElementById('level-2-remaining');
      return answer.innerHTML = level2PiecesRemaining;
   };

   const printLevel3Pieces = () => {
      const level3PiecesRemaining = (14 - level3PiecesUsed);
      const answer = document.getElementById('level-3-remaining');
      return answer.innerHTML = level3PiecesRemaining;
   };

   const printLevel4Pieces = () => {
      const level4PiecesRemaining = (10 - level4PiecesUsed);
      const answer = document.getElementById('level-4-remaining');
      return answer.innerHTML = level4PiecesRemaining;
   };

   printLevel1Pieces();
   printLevel2Pieces();
   printLevel3Pieces();
   printLevel4Pieces();
};

//funcs to increase height of squares

const printHeight = (gridSquare) => {
   const theGridSquare = document.getElementById(gridSquare.position);
   theGridSquare.innerHTML = gridSquare.height;
};

const buildOnSquare = (gridSquare) => {
   const theGridSquare = document.getElementById(gridSquare.position);
   theGridSquare.classList.remove("height-" + gridSquare.height);
   gridSquare.increaseHeight();
   theGridSquare.classList.add("height-" + gridSquare.height);
   printHeight(gridSquare);
   calcRemainingBlocks();
   clearLegality();
};

const buildWhenClicked = (id) => {
   calcRemainingBlocks();
   const theGridID = id;
   if (theGridID.occupant === "empty" && theGridID.height <= 3 && checkEnoughPieces(theGridID.height) === true) {
      buildOnSquare(theGridID);
   } else {
      return alert("Cannot build on an occupied square, a 4th-level square, or if there are not enough pieces of the required level");
   };
};

// move pieces around

const triggerOccupationP1 = (gridSquare) => {
   if (gridSquare.occupant === "empty" && gridSquare.height <= 3) {
      const theGridSquare = document.getElementById(gridSquare.position);
      theGridSquare.classList.add("occupied-P1");
      gridSquare.occupiedByPlayer1();
      // let pieceToBuild = gridSquare;
      displayLegalBuilds(gridSquare);
   } else {
      return alert("Cannot move to a 4th-level square or to an occupied space")
   };
};

//Funcs to display and undisplay legal build squares and moves

const translateStringToVariable = (stringGridSquare) => {
   return adjacencyObject[stringGridSquare];
};

const getAdjacencyArray = (pieceToBuildGridID) => {
   const stringAdjacencyArray = pieceToBuildGridID.adjacencies;
   const variableAdjacencyArray = stringAdjacencyArray.map(translateStringToVariable);
   return variableAdjacencyArray;
};

const checkLegalBuilds = (gridSquare) => {
   if (gridSquare.height < 4 && gridSquare.occupant === "empty" && checkEnoughPieces(gridSquare.height) === true) {
      return true;
   } return false;
};

const filterOutIllegalBuilds = (pieceToBuildGridID) => {
   const variableAdjacencyArray = getAdjacencyArray(pieceToBuildGridID);
   return variableAdjacencyArray.filter(checkLegalBuilds);
};

const addLegalClass = (gridSquare) => {
   const theGridSquare = document.getElementById(gridSquare.position);
   return theGridSquare.classList.add('legal-choice');
};

const removeLegalClass = (gridSquare) => {
   const theGridSquare = document.getElementById(gridSquare.position);
   return theGridSquare.classList.remove('legal-choice');
};

const displayLegalBuilds = (lastMovedPieceLocation) => {
   const legalChoicesArray = filterOutIllegalBuilds(lastMovedPieceLocation);
   return legalChoicesArray.forEach(addLegalClass);
};

const checkLegalMoves = (gridSquare, heightOfPiece) => {
   if(gridSquare.height != 4 && gridSquare.occupant === "empty" && gridSquare.height <= (heightOfPiece + 1)) {
      return true;
   } return false;
};

const filterOutIllegalMoves = (pieceToMove) => {
   const variableAdjacencyArray = getAdjacencyArray(pieceToMove);
   return variableAdjacencyArray.filter(squares => checkLegalMoves(squares, pieceToMove.height));
};

const displayLegalMoves = (pieceLocation) => {
   const legalChoicesArray = filterOutIllegalMoves(pieceLocation);
   return legalChoicesArray.forEach(addLegalClass);
};

const clearLegality = () => {
   return boardArray.forEach(removeLegalClass);
};

// defines grid elements in DOM

const gsA1 = document.getElementById("a1");
const gsA2 = document.getElementById("a2");
const gsA3 = document.getElementById("a3");
const gsA4 = document.getElementById("a4");
const gsA5 = document.getElementById("a5");
const gsB1 = document.getElementById("b1");
const gsB2 = document.getElementById("b2");
const gsB3 = document.getElementById("b3");
const gsB4 = document.getElementById("b4");
const gsB5 = document.getElementById("b5");
const gsC1 = document.getElementById("c1");
const gsC2 = document.getElementById("c2");
const gsC3 = document.getElementById("c3");
const gsC4 = document.getElementById("c4");
const gsC5 = document.getElementById("c5");
const gsD1 = document.getElementById("d1");
const gsD2 = document.getElementById("d2");
const gsD3 = document.getElementById("d3");
const gsD4 = document.getElementById("d4");
const gsD5 = document.getElementById("d5");
const gsE1 = document.getElementById("e1");
const gsE2 = document.getElementById("e2");
const gsE3 = document.getElementById("e3");
const gsE4 = document.getElementById("e4");
const gsE5 = document.getElementById("e5");

//Event listeners
// Leftclick to build
gsA1.addEventListener("click", () => checkBuildOrPlace(a1));
gsA2.addEventListener("click", () => checkBuildOrPlace(a2));
gsA3.addEventListener("click", () => checkBuildOrPlace(a3));
gsA4.addEventListener("click", () => checkBuildOrPlace(a4));
gsA5.addEventListener("click", () => checkBuildOrPlace(a5));
gsB1.addEventListener("click", () => checkBuildOrPlace(b1));
gsB2.addEventListener("click", () => checkBuildOrPlace(b2));
gsB3.addEventListener("click", () => checkBuildOrPlace(b3));
gsB4.addEventListener("click", () => checkBuildOrPlace(b4));
gsB5.addEventListener("click", () => checkBuildOrPlace(b5));
gsC1.addEventListener("click", () => checkBuildOrPlace(c1));
gsC2.addEventListener("click", () => checkBuildOrPlace(c2));
gsC3.addEventListener("click", () => checkBuildOrPlace(c3));
gsC4.addEventListener("click", () => checkBuildOrPlace(c4));
gsC5.addEventListener("click", () => checkBuildOrPlace(c5));
gsD1.addEventListener("click", () => checkBuildOrPlace(d1));
gsD2.addEventListener("click", () => checkBuildOrPlace(d2));
gsD3.addEventListener("click", () => checkBuildOrPlace(d3));
gsD4.addEventListener("click", () => checkBuildOrPlace(d4));
gsD5.addEventListener("click", () => checkBuildOrPlace(d5));
gsE1.addEventListener("click", () => checkBuildOrPlace(e1));
gsE2.addEventListener("click", () => checkBuildOrPlace(e2));
gsE3.addEventListener("click", () => checkBuildOrPlace(e3));
gsE4.addEventListener("click", () => checkBuildOrPlace(e4));
gsE5.addEventListener("click", () => checkBuildOrPlace(e5));

let isShiftDown = false;

window.addEventListener("keydown", (event) => turnShiftOn(event));
window.addEventListener("keyup", (event) => turnShiftOff(event));


// shiftclick to place piece
const turnShiftOn = (event) => {
   event.shiftKey ? isShiftDown = true : null;
};

const turnShiftOff = (event) => {
   event.key === "Shift" ? isShiftDown = false : null;
};

const checkBuildOrPlace = (gridSquare) => {
   if (isShiftDown === true) {
      return triggerOccupationP1(gridSquare);
   } else {
      return buildWhenClicked(gridSquare);
   };
};