/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // Declare the left and right pointer to search the array and the result
  let result = nums[0]
  let left = 0, right = nums.length - 1

  // Start the binary search
  while (left <= right) {
    // If the array is already sorted, return the first element
    if (nums[left] < nums[right]) {
      result = Math.min(result, nums[left])
      break
    }

    // Find the middle element
    let mid = Math.floor((left + right) / 2)

    // Update the result if the middle element is smaller than the current result
    result = Math.min(result, nums[mid])

    // If the left part is sorted, search the right part else search the left part
    if (nums[mid] >= nums[left]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  // Return the result
  return result
}

// Time complexity: O(log n)
// Space complexity: O(1)
