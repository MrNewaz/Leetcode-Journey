/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const map = new Map()

  for (let obj of arr1) {
    map.set(obj.id, obj)
  }

  for (let obj of arr2) {
    if (!map.has(obj.id)) {
      map.set(obj.id, obj)
    } else {
      const prevObj = map.get(obj.id)
      for (let key of Object.keys(obj)) {
        prevObj[key] = obj[key]
      }
    }
  }

  const joinedArray = new Array()

  for (let key of map.keys()) {
    joinedArray.push(map.get(key))
  }

  return joinedArray.sort((a, b) => a.id - b.id)
}
