from bisect import bisect_left, bisect_right
from typing import List


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        # Solution only for python
        if not nums:
            return [-1, -1]
        n = len(nums)
        start, end = -1, -1
        l = bisect_left(nums, target)
        r = bisect_right(nums, target)

        if l < n and nums[l] == target:
            start = l
        if r > 0 and nums[r-1] == target:
            end = r-1
        return [start, end]

    # def regularSolution(self, nums: List[int], target: int) -> List[int]:
    #     if not nums:
    #         return [-1, -1]
    #     n = len(nums)
    #     start, end = -1, -1
    #     l, r = 0, n
    #     # Binary search for left
    #     while l < r:
    #         mid = (l + r) // 2
    #         if nums[mid] >= target:
    #             r = mid
    #         else:
    #             l = mid + 1
    #     if l < n and nums[l] == target:
    #         start = l

    #     # Binary search for right
    #     l, r = 0, n
    #     while l < r:
    #         mid = (l + r) // 2
    #         if nums[mid] <= target:
    #             l = mid + 1
    #         else:
    #             r = mid

    #     if nums[r-1] == target:
    #         end = r - 1

    #     return [start, end]
