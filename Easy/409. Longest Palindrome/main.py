from typing import Counter


class Solution:
    def longestPalindrome(self, s: str) -> int:
        c = Counter(s)
        output = 0

        for count in c.values():
            output += count // 2 * 2
            if output % 2 == 0 and count % 2 == 1:
                output += 1

        return output
