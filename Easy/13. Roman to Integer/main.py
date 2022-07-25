class Solution:
    def romanToInt(self, s: str) -> int:
        letters = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
        numbers = [1, 5, 10, 50, 100, 500, 1000]
        mapR = {k: v for k, v in zip(letters, numbers)}

        N = len(s)
        value = 0
        left = 0
        while left < N:
            if left + 1 < N and mapR[s[left]] < mapR[s[left+1]]:
                value += mapR[s[left+1]] - mapR[s[left]]
                left += 2
            else:
                value += mapR[s[left]]
                left += 1
        return value
