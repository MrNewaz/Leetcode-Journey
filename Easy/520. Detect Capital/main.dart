class Solution {
  bool detectCapitalUse(String word) {
    if (word.length <= 1) {
      return true;
    }
    // check if the first letter is capitalized
    if (word[0] == word[0].toUpperCase()) {
      // check if the rest of the letters are capitalized
      if (word.substring(1).toUpperCase() == word.substring(1)) {
        return true;
      }
      // check if the rest of the letters are not capitalized
      else if (word.substring(1).toLowerCase() == word.substring(1)) {
        return true;
      }
      // if the rest of the letters are not all capitalized or not capitalized at all, the capitalization is incorrect
      else {
        return false;
      }
    }
    // if the first letter is not capitalized, all other letters must also not be capitalized
    else if (word.toLowerCase() == word) {
      return true;
    }
    // if the first letter is not capitalized and any other letters are capitalized, the capitalization is incorrect
    else {
      return false;
    }
  }
}
