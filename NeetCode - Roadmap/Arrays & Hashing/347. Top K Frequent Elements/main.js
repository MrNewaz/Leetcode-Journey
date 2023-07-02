/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // create a hashmap
  let hashMap = new Map()

  // loop through the array and add the number to the hashmap if it doesn't exist or increment the value if it does
  for (let num of nums) {
    hashMap.get(num)
      ? hashMap.set(num, hashMap.get(num) + 1)
      : hashMap.set(num, 1)
  }

  // sort the hashmap by value
  const sortedHashMap = new Map(
    [...hashMap.entries()].sort((a, b) => b[1] - a[1])
  )

  // return the first k elements of the sorted hashmap
  const slicedArray = Array.from(sortedHashMap.keys()).slice(0, k)

  return slicedArray
}
