/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // create a map to store the value and index
  const hashMap = {}

  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // find the complement
    let complement = target - nums[i]

    // if the complement is in the map, return the index
    if (complement in hashMap) {
      return [hashMap[complement], i]
    }

    // if not, add the current value and index to the map
    hashMap[nums[i]] = i
  }
}
