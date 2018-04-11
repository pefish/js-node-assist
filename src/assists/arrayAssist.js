/** @module */

/**
 * 转换为二维数组
 * @param spliceNum 每个小数组几个元素
 * @param arrayNum 分成几个小数组
 * @returns {*}
 */
const toTwoDimen = function (spliceNum = null, arrayNum = null) {
  if (spliceNum !== null && arrayNum === null) {
    let num = this.length % spliceNum === 0 ? parseInt(this.length / spliceNum) : parseInt(this.length / spliceNum) + 1
    let newArrays = []
    for (let i = 0; i < num; i++) {
      let arr = this.slice(spliceNum * i, spliceNum * (i + 1))
      if (arr.length > 0) {
        newArrays.push(arr)
      }
    }
    return newArrays
  } else if (spliceNum === null && arrayNum !== null) {
    let newArrays = []
    const num = parseInt(this.length / arrayNum)
    for (let i = 0; i < arrayNum; i++) {
      let arr = this.slice(num * i, num * (i + 1))
      if (arr.length > 0) {
        newArrays.push(arr)
      }
    }
    if (num * arrayNum < this.length) {
      newArrays[newArrays.length - 1] = newArrays[newArrays.length - 1].concat(this.slice(num * arrayNum, this.length))
    }
    return newArrays
  } else {
    return null
  }
}

/**
 * 简单去重
 */
const uniq = function () {
  return [...new Set(this)]
}

/**
 * 移除null、undefined以及空字符串
 * @returns {Array}
 */
const removeEmpty = function () {
  const results = []
  this.forEach((ele) => {
    if (ele !== null && ele !== undefined && ele !== '') {
      results.push(ele)
    }
  })
  return results
}

/**
 * 计算平均数
 * @returns {any}
 */
const getAverage = function () {
  let sum = '0'
  this.forEach((ele) => {
    sum = sum.add(ele)
  })
  return sum.div(this.length.toString())
}

/**
 * 取数组最后一个元素
 * @returns {*}
 */
const getLastOne = function () {
  return this[this.length - 1]
}

const removeLastOne = function () {
  if (this.length === 0) {
    return []
  }
  return this.slice(0, this.length - 1)
}

/**
 * 取数组第一个元素
 * @returns {*}
 */
const getFirstOne = function () {
  return this[0]
}

const removeFirstOne = function () {
  if (this.length === 0) {
    return []
  }
  return this.slice(1, this.length)
}

const removeStart = function (num) {
  return this.slice(num, this.length)
}

const removeEnd = function (num) {
  return this.slice(0, this.length - num)
}

Array.prototype.toTwoDimen = toTwoDimen
Array.prototype.uniq = uniq
Array.prototype.removeEmpty = removeEmpty
Array.prototype.getAverage = getAverage
Array.prototype.getLastOne = getLastOne
Array.prototype.getFirstOne = getFirstOne
Array.prototype.removeFirstOne = removeFirstOne
Array.prototype.removeLastOne = removeLastOne
Array.prototype.removeStart = removeStart
Array.prototype.removeEnd = removeEnd
