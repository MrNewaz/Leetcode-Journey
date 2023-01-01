class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        # Split the input string into a list of words
        words = s.split()

        # Check if the number of characters in the pattern
        # is not equal to the number of words in the input string
        if len(pattern) != len(words):
            return False

        # Create a dictionary that maps each character in the pattern
        # to a word in the input string
        mapping = {}
        for char, word in zip(pattern, words):
            # If the character is not in the dictionary, add it
            # and map it to the current word
            if char not in mapping:
                mapping[char] = word
            # If the character is already in the dictionary,
            # check if it is mapped to the same word
            elif mapping[char] != word:
                return False

        # Check if any two characters in the pattern map to the same word
        return len(set(mapping.values())) == len(mapping.values())

# This solution has a time complexity of O(n), where n is the number of characters in the pattern, and a space complexity of O(n), where n is the number of unique characters in the pattern.
