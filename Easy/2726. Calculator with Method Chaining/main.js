class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.sum = value
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    return (this.sum += value)
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    return (this.sum -= value)
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    return (this.sum *= value)
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value == 0) {
      throw new Error('Division by zero is not allowed')
    }
    return (this.sum /= value)
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    return (this.sum = Math.pow(this.sum, value))
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.sum
  }
}
