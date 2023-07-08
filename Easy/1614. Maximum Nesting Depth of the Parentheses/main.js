/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  // Declare the stack and the max depth
  let stack = []
  let maxDepth = 0

  // Loop through the string
  for (let char of s) {
    if (char === '(') {
      // If the char is an opening bracket, push it to the stack
      stack.push('(')
      // If the stack length is greater than the max depth, set the max depth to the stack length
      maxDepth = Math.max(stack.length, maxDepth)
    } else if (char === ')') {
      // If the char is a closing bracket, pop the stack
      stack.pop()
    }
  }

  // Return the max depth
  return maxDepth
}
