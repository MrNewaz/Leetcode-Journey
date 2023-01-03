/**
 * @param {number[]} nums
 * @return {number[]}
 */
// This function takes in an array of numbers (nums) and returns an array of the squares
// of the numbers, sorted in ascending order
var sortedSquares = function (nums) {
  // Create a new array to hold the squares
  const squares = []

  // Iterate through the input array
  for (const num of nums) {
    // Square the current number and add it to the squares array
    squares.push(num * num)
  }

  // Sort the squares array in ascending order
  squares.sort((a, b) => a - b)

  // Return the sorted array
  return squares
}

// The time complexity of this function is O(n * log n), where n is the length of the nums array. This is because the sort() function has a time complexity of O(n * log n). The space complexity is O(n), as the function creates a new array to hold the squares of the input numbers.
