/**
 * @param {Object} obj
 * @return {Object}
 **/
var compactObject = function (obj) {
  // These three if statements deal with when obj is not an iterable object
  // Steps 1-3 as described above
  if (obj == null) return null
  if (Array.isArray(obj)) return obj.filter((item) => item).map(compactObject)
  if (typeof obj !== 'object') return obj

  const compacted = {}

  // This for loop deals with when obj is an iterable object
  // Steps 4-5 as described above
  for (const key in obj) {
    let value = compactObject(obj[key])
    if (Boolean(value)) compacted[key] = value
  }

  return compacted
}
