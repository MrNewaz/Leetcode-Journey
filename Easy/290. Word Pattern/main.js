/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  // Split the input string into an array of words
  const words = s.split(' ')

  // Check if the number of characters in the pattern
  // is not equal to the number of words in the input string
  if (pattern.length !== words.length) {
    return false
  }

  // Create a dictionary that maps each character in the pattern
  // to a word in the input string
  const mapping = {}
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]
    const word = words[i]
    // If the character is not in the dictionary, add it
    // and map it to the current word
    if (!mapping.hasOwnProperty(char)) {
      mapping[char] = word
    }
    // If the character is already in the dictionary,
    // check if it is mapped to the same word
    else if (mapping[char] !== word) {
      return false
    }
  }

  // Check if any two characters in the pattern map to the same word
  return Object.values(mapping).length === new Set(Object.values(mapping)).size
}

// This solution has a time complexity of O(n), where n is the number of characters in the pattern, and a space complexity of O(n), where n is the number of unique characters in the pattern.
