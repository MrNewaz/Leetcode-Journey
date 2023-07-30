/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // Initialize maxProfit to 0 and left and right pointers to 0 and 1
  let maxProfit = 0
  let left = 0
  let right = 1

  // Iterate through the prices array
  while (right < prices.length) {
    // If the right pointer is greater than the left pointer, calculate the profit and update maxProfit
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]
      maxProfit = Math.max(maxProfit, profit)
    } else {
      // If the right pointer is less than the left pointer, update the left pointer to the right pointer
      left = right
    }
    // Increment the right pointer by 1 each iteration
    right++
  }

  // Return maxProfit
  return maxProfit
}

// Time Complexity: O(n)
// Space Complexity: O(1)
