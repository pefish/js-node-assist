/**
 * Created by joy on 12/10/2017.
 */
import AssertUtil from '../utils/AssertUtil'

/**
 *
 * @param spliceNum
 * @returns {Array}
 */
Object.prototype.toTwoDimen = function (spliceNum) {
  // {
  //   a: 7,
  //   b: 6,
  //   c: 4
  // }
  // [ { a: 7, b: 6 }, { c: 4 } ]
  const entries = Object.entries(this)
  const length = entries.length
  let newArrays = [], tempObj = {}
  for (let i = 0; i < length; i++) {
    const [key, value] = entries[i]
    if (i === spliceNum * (newArrays.length + 1)) {
      newArrays.push(tempObj)
      tempObj = {}
    }
    tempObj[key] = value
    if (i === length - 1) {
      newArrays.push(tempObj)
    }
  }
  return newArrays
}

Object.prototype.removeEmpty = function () {
  for (let [key, value] of Object.entries(this)) {
    if (value === null || value === undefined) {
      delete this[key]
    }
  }
  return this
}

Object.prototype.assign = function (obj) {
  Object.assign(this, obj)
  return this
}

