/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    const results = []
    let resolvedCount = 0
    let rejected = false

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((res) => {
          if (!rejected) {
            results[i] = res
            resolvedCount++

            if (resolvedCount === functions.length) {
              resolve(results)
            }
          }
        })
        .catch((err) => {
          if (!rejected) {
            rejected = true
            reject(err)
          }
        })
    }
  })
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
