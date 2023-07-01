/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // Declaring a hashMap
  let hashMap = {}

  //   Looping through the strs array
  for (let str of strs) {
    //   Splitting the string into an array, sorting it and joining it back to a string
    let key = str.split('').sort().join(',')
    //   If the key exists in the hashMap, push the string to the array, else create a new array with the string
    hashMap[key] ? hashMap[key].push(str) : (hashMap[key] = [str])
  }

  //   Return the values of the hashMap as an array
  return Object.values(hashMap)
}
