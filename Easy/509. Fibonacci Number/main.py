from functools import lru_cache


class Solution:
    # Recursive solution
    @lru_cache(maxsize=None)
    def fib(self, n: int) -> int:
        if n == 0:
            return 0
        if n == 1:
            return 1
        return self.fib(n-1) + self.fib(n-2)

    # Iterative solution
    def fib_iter(self, n: int) -> int:
        if n == 0:
            return 0
        if n == 1:
            return 1
        a, b = 0, 1
        for i in range(2, n+1):
            a, b = b, a+b
        return b
