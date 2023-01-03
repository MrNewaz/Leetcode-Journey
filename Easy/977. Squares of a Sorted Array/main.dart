class Solution {
  List<int> sortedSquares(List<int> nums) {
    // Create a new list to hold the squares
    List<int> squares = [];

    // Iterate through the input list
    for (int num in nums) {
      // Square the current number and add it to the squares list
      squares.add(num * num);
    }

    // Sort the squares list in ascending order
    squares.sort();

    // Return the sorted list
    return squares;
  }
}

// The time complexity of this function is O(n * log n), where n is the length of the nums array. This is because the sort() function has a time complexity of O(n * log n). The space complexity is O(n), as the function creates a new array to hold the squares of the input numbers.