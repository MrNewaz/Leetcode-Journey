class Solution {
  int minDeletionSize(List<String> strs) {
    // Initialize a counter for the number of deletions needed
    int deletions = 0;

    // Iterate through the characters of the first string in the array
    for (int i = 0; i < strs[0].length; i++) {
      // Iterate through the rest of the strings in the array
      for (int j = 1; j < strs.length; j++) {
        // If the character at position i of the current string is lexicographically
        // less than the character at position i of the previous string, a deletion
        // is needed at this position
        if (strs[j][i].codeUnitAt(0) < strs[j - 1][i].codeUnitAt(0)) {
          // Increment the deletion counter
          deletions++;
          // Break out of the inner loop, as any further comparisons are unnecessary
          break;
        }
      }
    }

    // Return the number of deletions needed
    return deletions;
  }
}
