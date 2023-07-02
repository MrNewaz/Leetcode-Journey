/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // check each row, column, and box
  for (let i = 0; i < 9; i++) {
    // initialize a set for each row, column, and box
    let cols = new Set()
    let rows = new Set()
    let boxes = new Set()

    // check each row, column, and box
    for (let j = 0; j < 9; j++) {
      // check each row
      let row = board[i][j]
      // check each column
      let col = board[j][i]
      // check each box
      let box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]

      // check if the value is already in the set and return false if it is not in the row
      if (row !== '.') {
        if (rows.has(row)) return false
        rows.add(row)
      }

      // check if the value is already in the set and return false if it is not in the column
      if (col != '.') {
        if (cols.has(col)) return false
        cols.add(col)
      }

      // check if the value is already in the set and return false if it is not in the box
      if (box != '.') {
        if (boxes.has(box)) return false
        boxes.add(box)
      }
    }
  }

  // return true if the board is valid
  return true
}

// Time Complexity = O(1) because the board is always 9x9
// Space Complexity = O(1) because the board is always 9x9
