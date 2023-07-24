/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // Define the left and right pointers
  let left = 1,
    right = Math.max(...piles)

  // Define the result as Max
  let res = right

  // Start Binary Search
  while (left <= right) {
    // Define the middle pointer
    let k = Math.floor((left + right) / 2)
    // Define the hours
    let hours = 0
    // Calculate the hours
    for (let pile of piles) {
      hours += Math.ceil(pile / k)
    }

    // If the hours is less than or equal to h then update the result and move the right pointer
    if (hours <= h) {
      res = Math.min(res, k)
      right = k - 1
    } else {
      // Else move the left pointer
      left = k + 1
    }
  }

  // Return the result
  return res
}
