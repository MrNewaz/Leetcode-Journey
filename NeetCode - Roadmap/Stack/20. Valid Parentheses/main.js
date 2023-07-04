/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // returning false if the length of the string is odd
  if (s.length % 2 !== 0) return false

  // creating a stack
  let stack = []

  // creating a map to store the opening and closing brackets
  const map = { '(': ')', '[': ']', '{': '}' }

  // iterating through the string
  for (const char of s) {
    // if the character is an opening bracket, push it to the stack
    if (char in map) {
      stack.push(char)
    } else {
      // if the character is a closing bracket, pop the top element from the stack
      if (map[stack.pop()] !== char) {
        return false
      }
    }
  }

  // if the stack is empty, return true else return false
  return stack.length === 0
}
