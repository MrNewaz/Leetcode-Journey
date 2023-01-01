class Solution {
  bool wordPattern(String pattern, String s) {
    // Split the input string into a list of words
    List<String> words = s.split(" ");

    // Check if the number of characters in the pattern
    // is not equal to the number of words in the input string
    if (pattern.length != words.length) {
      return false;
    }

    // Create a map that maps each character in the pattern
    // to a word in the input string
    Map<String, String> mapping = {};
    for (int i = 0; i < pattern.length; i++) {
      String char = pattern[i];
      String word = words[i];
      // If the character is not in the map, add it
      // and map it to the current word
      if (!mapping.containsKey(char)) {
        mapping[char] = word;
      }
      // If the character is already in the map,
      // check if it is mapped to the same word
      else if (mapping[char] != word) {
        return false;
      }
    }

    // Check if any two characters in the pattern map to the same word
    return mapping.values.toSet().length == mapping.values.length;
  }
}

// This solution has a time complexity of O(n), where n is the number of characters in the pattern, and a space complexity of O(n), where n is the number of unique characters in the pattern.