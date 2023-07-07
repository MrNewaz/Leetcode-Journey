/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // Declare a result stack
  const res = []

  // Declare a recursive function and pass in the number of open brackets, number of closed brackets, and the comboString
  const generate = (openNum, closedNum, comboString) => {
    // If the length of the comboString is equal to 2 * n, push the comboString to the result stack
    if (comboString.length === 2 * n) {
      res.push(comboString)
      return
    }

    // If the number of open brackets is less than n, call the recursive function with the number of open brackets plus 1, the number of closed brackets, and the comboString plus an open bracket
    if (openNum < n) generate(openNum + 1, closedNum, comboString + '(')
    // If the number of closed brackets is less than the number of open brackets, call the recursive function with the number of open brackets, the number of closed brackets plus 1, and the comboString plus a closed bracket
    if (closedNum < openNum) generate(openNum, closedNum + 1, comboString + ')')
  }

  // Call the recursive function with 0 open brackets, 0 closed brackets, and an empty comboString
  generate(0, 0, '')

  // Return the result stack
  return res
}
