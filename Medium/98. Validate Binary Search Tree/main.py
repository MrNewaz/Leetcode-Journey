# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def dfs(node: Optional[TreeNode], lower: int, upper: int) -> bool:
            if not node:
                return True
            val = node.val
            if val <= lower or val >= upper:
                return False
            return dfs(node.left, lower, val) and dfs(node.right, val, upper)

        return dfs(root, -float('inf'), float('inf'))
