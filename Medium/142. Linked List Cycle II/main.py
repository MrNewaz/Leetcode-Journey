# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cur = head
        lookup = set()

        while cur:
            if cur in lookup:
                return cur
            lookup.add(cur)
            cur = cur.next
        return None
