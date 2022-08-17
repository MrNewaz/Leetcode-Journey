from typing import List


class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:

        morse_code = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..",
                      "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

        res = set()
        for word in words:
            morse = ""
            for letter in word:
                morse += morse_code[ord(letter) - 97]

            res.add(morse)

        return len(res)
