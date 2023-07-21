/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // return empty array if nums length is less than 3
  if (nums.length < 3) return []

  // declare result array
  let result = []

  // sort nums array
  nums.sort((a, b) => a - b)

  // loop through nums array
  for (let i = 0; i < nums.length; i++) {
    // if i is greater than 0 and nums[i] is equal to nums[i - 1], continue
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // declare left and right pointers
    let left = i + 1,
      right = nums.length - 1

    // loop while left pointer is less than right pointer
    while (left < right) {
      // declare sum variable
      const sum = nums[i] + nums[left] + nums[right]
      if (sum > 0) {
        // if sum is greater than 0, decrement right pointer
        right--
      } else if (sum < 0) {
        // if sum is less than 0, increment left pointer
        left++
      } else {
        // if sum is equal to 0, push [nums[i], nums[left], nums[right]] to result array
        result.push([nums[i], nums[left], nums[right]])
        // increment left pointer
        left++
        // while left pointer is less than right pointer and nums[left] is equal to nums[left - 1], increment left pointer
        while (nums[left] === nums[left - 1] && left < right) {
          left++
        }
      }
    }
  }

  // return result array
  return result
}

// Time and Space Complexity Analysis
// Time Complexity: O(n^2)
// Space Complexity: O(n)
