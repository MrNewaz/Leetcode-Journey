from typing import Counter


class Solution:
    def reorderedPowerOf2(self, n: int) -> bool:
        counter = Counter([int(i) for i in str(n)])

        n, i = 0, 0

        while n <= 10**9:
            n = 2 ** i
            if Counter([int(i) for i in str(n)]) == counter:
                return True
            i += 1

        return False
