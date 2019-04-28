/** @module */

// const test = await Promise.allKeys({
//   a: Promise.resolve(1),
//   b: {
//     c: Promise.resolve(2),
//     d: Promise.resolve(3)
//   },
//   e: {
//     f: Promise.resolve(4)
//   },
//   g: [Promise.resolve(5), Promise.resolve(6), Promise.resolve(7)]
// })
Object.defineProperty(Promise, 'allKeys', {
  configurable: true,
  writable: true,
  /**
   * 并行处理Promise, 传入对象，是对Promise.all()的补充
   * @param object
   * @returns {Promise<{}>}
   */
  value: async (object) => {
    const resolved = {}
    const promises = Object.entries(object).map(async ([key, value]) => {
      if (value instanceof Promise) {
        resolved[key] = await value
      } else if (value instanceof Array) {
        resolved[key] = await Promise.all(value)
      } else {
        const promises1 = Object.entries(value).map(async ([key1, promise]) => {
          !resolved[key] && (resolved[key] = {})
          resolved[key][key1] = await promise
        })
        await Promise.all(promises1)
      }
    })
    await Promise.all(promises)
    return resolved
  }
})

export {};
