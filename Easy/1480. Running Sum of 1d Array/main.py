from typing import List


class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        num = 0
        newList = []
        for i in nums:
            num += i
            newList.append(num)

        return newList
