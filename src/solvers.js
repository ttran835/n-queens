/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


//hasAnyRowConflicts
//iterate through board array; 
//Add rook 
//check for conflinct
// use board.hasAnyRowConflicts()
//also use board.hasAnyColConflicts(); 
// else conflict remove rook; 
//if !conflict => rookCounter +=1; 


window.findNRooksSolution = function(n) {
  var board = new Board({'n': n});
  var rookCounter = 0;
  var solution;
  for (var key in board.attributes) {
    if (Array.isArray(board.attributes[key])) {
      for (var i = 0; i < board.attributes[key].length; i++) {
        board.togglePiece(key, i);
        if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
          rookCounter += 1;
        } else {
          board.togglePiece(key, i); 
        }
        if (rookCounter === n) {
          solution = board.rows();
          console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
          return solution;
        }
      }
    }
  }
  //check if has row conflict or col conflict
  // if yes, remove 0,
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
/*
  use continue after for loop
  Need to figure out if there is a toggleAll off function
    after, start at the next location, but need to iterate through it.

*/
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
