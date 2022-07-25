from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        complementMap = dict()

        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in complementMap:
                return [complementMap[complement], i]
            complementMap[nums[i]] = i

    # def brute_force(self, nums: List[int], target: int) -> List[int]:
    #     for i in range(len(nums)):
    #         for j in range(i+1, len(nums)):
    #             if nums[i] + nums[j] == target:
    #                 return [i, j]
