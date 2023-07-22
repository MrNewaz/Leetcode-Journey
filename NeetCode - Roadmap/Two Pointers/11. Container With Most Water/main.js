/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // Declare max variable, left pointer, right pointer
  let max = 0,
    left = 0,
    right = height.length - 1

  // Loop through height array while left is less than right
  while (left < right) {
    // Calculate area (height * width) and compare to max area and set max to the larger of the two
    const area = (right - left) * Math.min(height[left], height[right])
    max = Math.max(max, area)

    // Increment left or decrement right depending on which is smaller
    height[left] < height[right] ? left++ : right--
  }

  // Return max
  return max
}

// Time Complexity: O(n)
// Space Complexity: O(1)
