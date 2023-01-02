/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return left
}

// This function will return the index at which the target should be inserted to maintain the sorted order of the nums array. The time complexity of this function is O(log n), where n is the length of the nums array. This is because the search space is halved on each iteration of the loop. The space complexity is O(1), as the function only uses a constant amount of space regardless of the size of the input.
