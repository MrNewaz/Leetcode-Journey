/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // remove all non-alphanumeric characters with regex
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '')

  // loop through the string with a for loop with two variables as pointers
  for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
    // if the two pointers are not equal, return false
    if (s[i] !== s[j]) return false
  }

  // if the string is a palindrome, return true
  return true
}

// Time and Space Complexity Analysis
// Time: O(n)
// Space: O(1)
