/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.length <= 1) {
    return true
  }
  // check if the first letter is capitalized
  if (word[0] === word[0].toUpperCase()) {
    // check if the rest of the letters are capitalized
    if (word.slice(1).toUpperCase() === word.slice(1)) {
      return true
    }
    // check if the rest of the letters are not capitalized
    else if (word.slice(1).toLowerCase() === word.slice(1)) {
      return true
    }
    // if the rest of the letters are not all capitalized or not capitalized at all, the capitalization is incorrect
    else {
      return false
    }
  }
  // if the first letter is not capitalized, all other letters must also not be capitalized
  else if (word.toLowerCase() === word) {
    return true
  }
  // if the first letter is not capitalized and any other letters are capitalized, the capitalization is incorrect
  else {
    return false
  }
}

// The time complexity of the function is O(n), where n is the length of the string. This is because the function needs to iterate through the string to check the capitalization of each letter.

// The space complexity of the function is also O(n), as it creates three new strings (the slice of the original string starting from index 1, the lowercase version of the slice, and the uppercase version of the slice) to store the capitalization of the letters in the string.
