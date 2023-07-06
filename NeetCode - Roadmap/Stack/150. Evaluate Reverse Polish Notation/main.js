/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // declare a stack
  let stack = []

  // declare the set of operators
  let operators = ['+', '-', '*', '/']

  // iterate through the tokens
  for (let token of tokens) {
    // if the token is an operator
    if (operators.includes(token)) {
      // pop the last two elements from the stack
      let right = parseInt(stack.pop())
      let left = parseInt(stack.pop())

      // perform the operation
      switch (token) {
        case '+':
          stack.push(left + right)
          break
        case '-':
          stack.push(left - right)
          break
        case '*':
          stack.push(left * right)
          break
        // if the division is negative, round down & if positive, round up
        case '/':
          stack.push(
            left / right >= 0
              ? Math.floor(left / right)
              : Math.ceil(left / right)
          )
          break
      }
    } else {
      // if the token is a number, push it to the stack
      stack.push(parseInt(token))
    }
  }

  // return the last element in the stack
  return stack[0]
}
