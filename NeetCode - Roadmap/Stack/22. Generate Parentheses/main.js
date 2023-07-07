/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // Declare a result stack
  const res = []

  // Declare a recursive function and pass in the number of open brackets, number of closed brackets, and the combo
  const generate = (openNum, closedNum, combo) => {
    // If the length of the combo is equal to 2 * n, push the combo to the result stack
    if (combo.length === 2 * n) {
      res.push(combo)
      return
    }

    // If the number of open brackets is less than n, call the recursive function with the number of open brackets plus 1, the number of closed brackets, and the combo plus an open bracket
    if (openNum < n) generate(openNum + 1, closedNum, combo + '(')
    // If the number of closed brackets is less than the number of open brackets, call the recursive function with the number of open brackets, the number of closed brackets plus 1, and the combo plus a closed bracket
    if (closedNum < openNum) generate(openNum, closedNum + 1, combo + ')')
  }

  // Call the recursive function with 0 open brackets, 0 closed brackets, and an empty combo
  generate(0, 0, '')

  // Return the result stack
  return res
}
