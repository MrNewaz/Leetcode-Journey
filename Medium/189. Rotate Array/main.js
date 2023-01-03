/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // step 1: ensure that the number of steps taken is always less than the length of nums
  k %= nums.length

  // step 2: reverse the entire list
  nums = reverse(nums, 0, nums.length - 1)

  // step 3: reverse the first k elements of the list
  nums = reverse(nums, 0, k - 1)

  // step 4: reverse the remaining elements of the list
  nums = reverse(nums, k, nums.length - 1)
}

function reverse(nums, start, end) {
  // reverse the elements in the sublist nums[start:end+1]
  while (start < end) {
    let temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
  return nums
}

// This approach has a time complexity of O(n) and a space complexity of O(1), since we are simply reversing the elements of the list in place and not using any additional data structures.
