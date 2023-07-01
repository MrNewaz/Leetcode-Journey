/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var output = []
  var left = 1
  var right = 1
  for (var i = nums.length - 1; i >= 0; i--) {
    output[i] = right
    right *= nums[i]
  }
  for (var j = 0; j < nums.length; j++) {
    output[j] *= left
    left *= nums[j]
  }
  return output
}
