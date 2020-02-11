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
   let level4PiecesRemaining = (18 - level4PiecesUsed);
   let answer = document.getElementById('level-4-remaining');
   return answer.innerHTML = level4PiecesRemaining;
}

const calcRemainingBlocks = () => {
   printLevel1Pieces();
   printLevel2Pieces();
   printLevel3Pieces();
   printLevel4Pieces();
}
