class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ransomNote_sorted = (sorted(list(ransomNote)))
        magazine_sorted = (sorted(list(magazine)))

        for char in ransomNote_sorted:
            if char in magazine_sorted:
                magazine_sorted.remove(char)
            else:
                return False
        return True


solution = Solution()

print(solution.canConstruct("fffbfg", "effjfggbffjdgbjjhhdegh"))
