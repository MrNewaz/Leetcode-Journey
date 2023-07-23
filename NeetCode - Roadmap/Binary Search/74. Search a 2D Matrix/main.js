/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // Declare bottom and top pointers for searching the rows
  let top = 0,
    bottom = matrix.length - 1

  while (top <= bottom) {
    // Declare mid pointer for searching the rows
    let mid = Math.floor((top + bottom) / 2)

    // If target is greater than the last element of the row, then search the bottom half
    if (target > matrix[mid][matrix[mid].length - 1]) {
      // Update top pointer to mid + 1 to search the bottom half
      top = mid + 1
    } else if (target < matrix[mid][0]) {
      // Update bottom pointer to mid - 1 to search the top half
      bottom = mid - 1
    } else {
      // Break out of the loop if target is within the range of the row
      break
    }
  }

  // If target is not within the range of the matrix, return false
  if (!(top <= bottom)) return false

  // Declare row pointer for searching the columns of the row
  let row = Math.floor((top + bottom) / 2)
  // Declare left and right pointers for searching the columns of the row
  let left = 0,
    right = matrix[row].length - 1

  // Binary search the last remaining row
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (target > matrix[row][mid]) {
      left = mid + 1
    } else if (target < matrix[row][mid]) {
      right = mid - 1
    } else {
      return true
    }
  }

  // Return false if target is not found
  return false
}

// Time Complexity: O(log(m) + log(n))
// Space Complexity: O(1)
