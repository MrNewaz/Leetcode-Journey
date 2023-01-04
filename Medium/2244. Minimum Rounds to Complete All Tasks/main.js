/**
 * @param {number[]} tasks - an array of integers representing the difficulty level of each task
 * @return {number} - the minimum number of rounds required to complete all tasks, or -1 if it is not possible
 */
const minimumRounds = function (tasks) {
  // initialize the minimum number of rounds to 0
  let res = 0

  // create a mapping of difficulty levels to task counts
  const hash = {}

  // iterate through the tasks array and update the task counts for each difficulty level
  for (let e of tasks) {
    if (hash[e] == null) hash[e] = 0
    hash[e]++
  }

  // get the difficulty levels (keys of the hash object)
  const keys = Object.keys(hash).map((e) => +e)

  // iterate through the difficulty levels
  for (const k of keys) {
    // if there are at least 3 tasks of the same difficulty, add the number of rounds required to complete those tasks to the result
    if (hash[k] / 3 >= 1) res += ~~(hash[k] / 3)

    // if there are 2 tasks of the same difficulty, add 1 round to the result
    if (hash[k] % 3 === 2) res++

    // if there is 1 task of the same difficulty, check if there are at least 4 tasks of that difficulty
    // if there are, add 1 round to the result
    // if there are not, return -1
    if (hash[k] % 3 === 1) {
      if (hash[k] >= 4) res++
      else return -1
    }
  }

  // return the minimum number of rounds
  return res
}
