
# Definition for a Node.
from typing import List


class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children


class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        output = []

        def dfs(node):
            if node:
                output.append(node.val)
                for child in node.children:
                    dfs(child)

        dfs(root)
        return output
