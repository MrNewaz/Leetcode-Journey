/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  // declare two pointers at the start and end of the array
  let left = 0
  let right = numbers.length - 1

  // loop through the array until the sum of the two pointers is equal to the target
  while (numbers[left] + numbers[right] !== target) {
    // if the sum is greater than the target, move the right pointer to the left
    if (numbers[left] + numbers[right] > target) {
      right--
    } else {
      // if the sum is less than the target, move the left pointer to the right
      left++
    }
  }

  // return the indices of the two pointers + 1
  return [left + 1, right + 1]
}

// Space: O(1)
// Time: O(n)
