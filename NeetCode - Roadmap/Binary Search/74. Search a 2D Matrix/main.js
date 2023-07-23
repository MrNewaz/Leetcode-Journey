/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let top = 0,
    bottom = matrix.length - 1

  while (top <= bottom) {
    let mid = Math.floor((top + bottom) / 2)

    if (target > matrix[mid][matrix[mid].length - 1]) {
      top = mid + 1
    } else if (target < matrix[mid][0]) {
      bottom = mid - 1
    } else {
      break
    }
  }

  if (!(top <= bottom)) return false

  let row = Math.floor((top + bottom) / 2)
  let left = 0,
    right = matrix[row].length - 1

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

  return false
}
