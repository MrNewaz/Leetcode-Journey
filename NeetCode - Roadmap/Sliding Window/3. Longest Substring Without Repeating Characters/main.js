/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  /// return if string is empty or only has one character
  if (s.length < 2) return s.length

  /// use a hash to store the index of each character
  const hash = {}

  /// use two pointers to mark the start and end of the substring
  let max = 0
  for (let i = 0, j = -1, len = s.length; i < len; i++) {
    /// if the character is already in the hash, move the start pointer to the index of the character
    const cur = s[i]
    if (hash[cur] != null) j = Math.max(j, hash[cur])

    /// update the index of the character
    hash[cur] = i

    /// update the max length
    max = Math.max(max, i - j)
  }

  /// return the max length
  return max
}

/// Time Complexity: O(n)
/// Space Complexity: O(n)
