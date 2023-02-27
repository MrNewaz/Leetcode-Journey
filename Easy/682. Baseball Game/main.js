/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let sum = 0
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'C') {
      operations.splice(i - 1, 2)
      i -= 2
    } else if (operations[i] === 'D') {
      operations[i] = operations[i - 1] * 2
    } else if (operations[i] === '+') {
      operations[i] = parseInt(operations[i - 1]) + parseInt(operations[i - 2])
    }
  }
  for (let i = 0; i < operations.length; i++) {
    sum += parseInt(operations[i])
  }
  return sum
}
