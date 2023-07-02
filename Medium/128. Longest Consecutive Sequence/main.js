/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // edge case
  if (nums == null || nums.length === 0) return 0

  // declaring max and set
  let max = 0
  let set = new Set(nums)

  // looping through set
  for (let num of set) {
    // if set has the previous number then skip
    if (set.has(num - 1)) {
      continue
    }

    // declaring currMax and currNum
    let currMax = 1
    let currNum = num

    // looping until set no longer has the next number in the sequence
    while (set.has(currNum + 1)) {
      currNum++
      currMax++
    }

    // setting max to the maximum of max and currMax
    max = Math.max(max, currMax)
  }

  // returning max
  return max
}
