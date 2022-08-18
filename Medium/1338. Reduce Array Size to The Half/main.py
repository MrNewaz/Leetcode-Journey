from collections import Counter
from typing import List


class Solution:
    def minSetSize(self, arr: List[int]) -> int:
        counter = Counter(arr)
        length = len(arr)
        count = 0
        output = 0

        for _, v in sorted(counter.items(), key=lambda x: -x[1]):
            count += v
            output += 1
            if count >= length / 2:
                break

        return output
