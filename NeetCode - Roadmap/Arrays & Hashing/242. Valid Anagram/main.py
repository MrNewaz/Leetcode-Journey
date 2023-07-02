from typing import Counter


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # Solution 1: sorted
        return sorted(s) == sorted(t)

        # Solution 2: Counter
        # return Counter(s) == Counter(t)

        # Solution 3: hashmap
        # return len(s) == len(t) and all(s.count(c) == t.count(c) for c in set(s))
