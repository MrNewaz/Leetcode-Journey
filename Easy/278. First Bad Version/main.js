/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1
    let right = n

    while (left < right) {
      let mid = Math.floor((left + right) / 2)
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left = mid + 1
      }
    }

    return left
  }
}

// This function will return the first bad version in the sequence of versions from 1 to n. The time complexity of this function is O(log n), where n is the number of versions. This is because the search space is halved on each iteration of the loop. The space complexity is O(1), as the function only uses a constant amount of space regardless of the size of the input.
