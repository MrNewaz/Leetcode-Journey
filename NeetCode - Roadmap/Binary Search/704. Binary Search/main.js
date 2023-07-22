/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // Define the left and right pointers
  let left = 0,
    right = nums.length - 1

  while (left <= right) {
    // Find the mid index
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > target) {
      // If the target is less than the mid value, then the target must be in the left half
      right = mid - 1
    } else if (nums[mid] < target) {
      // If the target is greater than the mid value, then the target must be in the right half
      left = mid + 1
    } else {
      // If the target is equal to the mid value, then we found the target
      return mid
    }
  }

  // If we get here, then the target is not in the array
  return -1
}

// Time complexity: O(log n)
// Space complexity: O(1)