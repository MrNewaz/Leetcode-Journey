/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // return 0 if height is empty
  if (height.length === 0) return 0

  // initialize left and right pointers
  let left = 0,
    right = height.length - 1

  // initialize left and right max
  let leftMax = height[left],
    rightMax = height[right]

  // initialize result
  let result = 0

  // loop until left and right pointers meet
  while (left < right) {
    if (leftMax < rightMax) {
      // move left pointer if leftMax is smaller than rightMax
      left++
      // update leftMax if current height is greater than leftMax
      leftMax = Math.max(height[left], leftMax)
      // add the difference between leftMax and current height to result
      result += leftMax - height[left]
    } else {
      // move right pointer if rightMax is smaller than leftMax
      right--
      // update rightMax if current height is greater than rightMax
      rightMax = Math.max(height[right], rightMax)
      // add the difference between rightMax and current height to result
      result += rightMax - height[right]
    }
  }

  // return result
  return result
}

// Time Complexity: O(n)
// Space Complexity: O(1)
