var MinStack = function () {
  this.items = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  // save the minimum value at the time of pushing by comparing the current value with the previous minimum value
  return this.items.push({
    value: val,
    min: this.items.length === 0 ? val : Math.min(val, this.getMin()),
  })
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.items.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1].value
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.items[this.items.length - 1].min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
