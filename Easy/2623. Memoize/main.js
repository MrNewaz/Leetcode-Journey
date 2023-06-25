/**
 * @param {Function} fn
 */
function memoize(fn) {
  let cache = {}
  return function (...args) {
    let cacheKey = args.join('#').toString()
    let savedCache = cache[cacheKey]

    if (savedCache !== undefined) {
      return savedCache
    } else {
      return (cache[cacheKey] = fn(...args))
    }
  }
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
