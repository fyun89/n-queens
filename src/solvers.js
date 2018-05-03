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



window.findNRooksSolution = function(n) {
  const solution = []; //fixme
  const board = new Board({n: n});
  
  var recurse = function(row, board) {
    
    if (row === n) {
      const snapshot = [];
      board.rows().forEach(function(row) {
        const rowCopy = row.slice(0);
        snapshot.push(rowCopy);
      });
      solution.push(snapshot);
      //solution.push(board.rows().slice(0));
      return;
    }
    
    for (let i = 0; i < board.rows()[row].length; i++) {
      board.togglePiece(row, i);
      if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(i)) {
        recurse(row + 1, board);
      }
      board.togglePiece(row, i);
    }
  };
  
  recurse(0, board);
  return solution[0];
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let solutionCount = 0; //fixme
  const board = new Board({n: n});
  
  var recurse = function(row) {
    
    if (row === n) {
      solutionCount++;
      return;
    }
    
    for (let i = 0; i < board.rows()[row].length; i++) {
      board.togglePiece(row, i);
      if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(i)) {
        recurse(row + 1);
      }
      board.togglePiece(row, i);
    }
  };
  
  recurse(0);
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
