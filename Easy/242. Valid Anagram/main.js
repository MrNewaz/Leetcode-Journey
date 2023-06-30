/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  let newS = s.split('').sort().toString()
  let newT = t.split('').sort().toString()
  return newS === newT
}
