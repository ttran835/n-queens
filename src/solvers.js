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
          // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
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
  create storage: this would have to loop through multiple, runTime would be shit; 
  We need to call and create new Board(); 

  //n is going to create new board; 

  //need to iterate through the board; 

*/
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 
  //set new board to work with; 
  var newBoard = new Board({'n': n});
  //We know that we need to iterate through each row and col to get the answer
  //create new function for recurse;
    //what argument should it take in. 
      //we are trying to recurse throught the row and the col; 
  var recurse = function (row) {
    //set row to be either the row or start at 0;
    row = row || 0;
    // console.log('row should be increasing, ',row);
    //increase solution count if there are many rook as there are row;
    if (row === n) {
      solutionCount += 1; 
      // console.log('increase when row is = n ',solutionCount)
      // console.log('line 94 ',newBoard.rows());
    } else { 
    //if not, we set first rook at row (0) & i (0); and check && set the rook; 
    //iterate thru based on n'
      // newBoard.togglePiece(row, 0);
      for (let i = 0; i < n; i++) {
        //set first piece;
        // console.log('should be going thru the board ,',row, i);
        newBoard.togglePiece(row, i);
        //check for collision; 
          //if !collision => set piece; then increase row. 
        if (!newBoard.hasAnyRowConflicts(i) && !newBoard.hasAnyColConflicts(i)) {
          // newBoard.togglePiece(row, i);
          recurse(row + 1);
          newBoard.togglePiece(row, i);
        } else {
          newBoard.togglePiece(row, i);
        }
          
      //if there is not, we set rook, else, we toggle off; 
      // newBoard.togglePiece(row, i);
      }
    }
  } 
  recurse(); 
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
