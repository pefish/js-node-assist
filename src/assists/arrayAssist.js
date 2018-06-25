/** @module */

import ErrorHelper from '../utils/ErrorHelper'

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

const removeByIndex = function (index) {
  if (index > this.length - 1) {
    throw ErrorHelper(`索引超过数组长度`)
  }
  const temp = this.deepCopy()
  temp.splice(index, 1)
  return temp
}

const removeByValue = function (value) {
  const temp = this.deepCopy()
  const index = temp.indexOf(value)
  if (index === -1) {
    throw ErrorHelper(`没有找到 ${value}`)
  }
  temp.splice(index, 1)
  return temp
}

const deepCopy = function () {
  return Array.from(this)
}

const append = function (arr) {
  return this.concat(arr)
}

/**
 * 取出最大值（值以及索引）,只适用于数值数组以及字符串数组, 返回值为字符串
 */
const getMax = function () {
  if (this.length === 0) {
    throw ErrorHelper(`空数组`)
  }

  let maxValue = this[0].toString()

  for (let i = 1; i < this.length; i++) {
    if (this[i].toString().gt(maxValue)) {
      maxValue = this[i].toString()
    }
  }

  let maxIndex = []
  for (let i = 0; i < this.length; i++) {
    if (this[i].toString().eq(maxValue)) {
      maxIndex.push(i)
    }
  }

  return {
    value: maxValue,
    index: maxIndex
  }
}

const getMin = function () {
  if (this.length === 0) {
    throw ErrorHelper(`空数组`)
  }

  let minValue = this[0].toString()

  for (let i = 1; i < this.length; i++) {
    if (this[i].toString().lt(minValue)) {
      minValue = this[i].toString()
    }
  }

  let minIndex = []
  for (let i = 0; i < this.length; i++) {
    if (this[i].toString().eq(minValue)) {
      minIndex.push(i)
    }
  }

  return {
    value: minValue,
    index: minIndex
  }
}

/**
 * 取出最大值（值以及索引）,只适用于数值数组以及字符串数组, 返回值为字符串
 */
const getMaxV2 = function () {
  if (this.length === 0) {
    throw ErrorHelper(`空数组`)
  }

  let maxValue = this[0].toString()

  for (let i = 1; i < this.length; i++) {
    if (this[i].toString().gt(maxValue)) {
      maxValue = this[i].toString()
    }
  }

  let maxIndex = []
  for (let i = 0; i < this.length; i++) {
    if (this[i].toString().eq(maxValue)) {
      maxIndex.push(i)
    }
  }

  return {
    value: maxValue,
    indexes: maxIndex
  }
}

const getMinV2 = function () {
  if (this.length === 0) {
    throw ErrorHelper(`空数组`)
  }

  let minValue = this[0].toString()

  for (let i = 1; i < this.length; i++) {
    if (this[i].toString().lt(minValue)) {
      minValue = this[i].toString()
    }
  }

  let minIndex = []
  for (let i = 0; i < this.length; i++) {
    if (this[i].toString().eq(minValue)) {
      minIndex.push(i)
    }
  }

  return {
    value: minValue,
    indexes: minIndex
  }
}

const getSum = function () {
  return this.reduce((acc, val) => {
    return val.toString().add(acc)
  })
}

const select = function (indexes) {
  if (indexes === null || indexes === undefined) {
    return this
  }
  const result = []
  indexes.forEach((index) => {
    result.push(this[index])
  })
  return result
}

const toUpperCase = function () {
  return this.map((element) => {
    return element.toString().toUpperCase()
  })
}

const toLowerCase = function () {
  return this.map((element) => {
    return element.toString().toLowerCase()
  })
}

const random = function () {
  if (this.length === 0) {
    throw ErrorHelper(`空数组`)
  }
  return this[Math.floor(Math.random() * 1E4) % this.length]
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
Array.prototype.removeByIndex = removeByIndex
Array.prototype.deepCopy = deepCopy
Array.prototype.removeByValue = removeByValue
Array.prototype.append = append
Array.prototype.getMax = getMax
Array.prototype.getMin = getMin
Array.prototype.getMaxV2 = getMaxV2
Array.prototype.getMinV2 = getMinV2
Array.prototype.getSum = getSum
Array.prototype.select = select
Array.prototype.toUpperCase = toUpperCase
Array.prototype.toLowerCase = toLowerCase
Array.prototype.random = random
