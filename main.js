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
const d5 = new GridSquare("d5", 0, "empty", ["c4", "c5", "d4", "e4", "e5"]);
const e1 = new GridSquare("e1", 0, "empty", ["d1", "d2", "e2"]);
const e2 = new GridSquare("e2", 0, "empty", ["d1", "d2", "d3", "e1", "e3"]);
const e3 = new GridSquare("e3", 0, "empty", ["d2", "d3", "d4", "e2", "e4"]);
const e4 = new GridSquare("e4", 0, "empty", ["d3", "d4", "d5", "e3", "e5"]);
const e5 = new GridSquare("e5", 0, "empty", ["d4", "d5", "e4"]);



//funcs to increase height of squares

const printHeight = (gridSquare) => {
   const theGridSquare = document.getElementById(gridSquare.position);
   theGridSquare.innerHTML = gridSquare.height;
}



const buildOnSquare = (gridSquare) => {
   console.log(gridSquare);
   const theGridSquare = document.getElementById(gridSquare.position);
   console.log(theGridSquare)
   theGridSquare.classList.remove("height-" + gridSquare.height);
   gridSquare.increaseHeight();
   theGridSquare.classList.add("height-" + gridSquare.height);
   printHeight(gridSquare);
}

const testyMcTestFace = (id) => {
   const theGridID = id;
   buildOnSquare(theGridID);
}



//Return the remaining pieces

let level1PiecesUsed = 0;
let level2PiecesUsed = 0;
let level3PiecesUsed = 0;
let level4PiecesUsed = 0;


const printLevel1Pieces = () => {
   let level1PiecesRemaining = (22 - level1PiecesUsed);
   let answer = document.getElementById('level-1-remaining');
   return answer.innerHTML = level1PiecesRemaining;
};

const printLevel2Pieces = () => {
   let level2PiecesRemaining = (18 - level2PiecesUsed);
   let answer = document.getElementById('level-2-remaining');
   return answer.innerHTML = level2PiecesRemaining;
};

const printLevel3Pieces = () => {
   let level3PiecesRemaining = (14 - level3PiecesUsed);
   let answer = document.getElementById('level-3-remaining');
   return answer.innerHTML = level3PiecesRemaining;
};

const printLevel4Pieces = () => {
   let level4PiecesRemaining = (10 - level4PiecesUsed);
   let answer = document.getElementById('level-4-remaining');
   return answer.innerHTML = level4PiecesRemaining;
}

const calcRemainingBlocks = () => {
   printLevel1Pieces();
   printLevel2Pieces();
   printLevel3Pieces();
   printLevel4Pieces();
}