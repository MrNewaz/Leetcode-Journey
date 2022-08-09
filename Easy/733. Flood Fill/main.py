from typing import List


class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        curr_color = image[sr][sc]

        def dfs(image, sr, sc, color):
            if image[sr][sc] == curr_color:
                image[sr][sc] = color
                if sr > 0:
                    dfs(image, sr-1, sc, color)
                if sr < len(image)-1:
                    dfs(image, sr+1, sc, color)
                if sc > 0:
                    dfs(image, sr, sc-1, color)
                if sc < len(image[0])-1:
                    dfs(image, sr, sc+1, color)

        if curr_color == color:
            return image
        dfs(image, sr, sc, color)
        return image
