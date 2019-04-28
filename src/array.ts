/** @module */

import ErrorHelper from 'p-js-error'

declare global {
  interface Array<T> {
    toTwoDimen_?: (spliceNum?: number, arrayNum?: number) => any[],
    uniq_?: () => any[],
    removeEmpty_?: () => any[],
    getAverage_?: () => string,
    getLastOne_?: () => any,
    removeLastOne_?: () => any[],
    getFirstOne_?: () => any,
    removeFirstOne_?: () => any[],
    removeStart_?: (num: number) => any[],
    removeEnd_?: (num: number) => any[],
    removeByIndex_?: (index: number) => any[],
    removeByValue_?: (value: number) => any[],
    deepCopy_?: () => any[],
    append_?: (arr: any[]) => any[],
    getMax_?: () => object,
    getMin_?: () => object,
    getSum_?: () => string,
    select_?: (indexes: number[]) => any[],
    toUpperCase_?: () => string[],
    toLowerCase_?: () => string[],
    random_?: () => any,
    numberArrayToHexString_?: () => string,
    subArray_?: (start: number, end: number) => any,
  }
}

/**
 * 转换为二维数组
 * @param spliceNum 每个小数组几个元素
 * @param arrayNum 分成几个小数组
 * @returns {*}
 */
Array.prototype.toTwoDimen_ = function (spliceNum: number = null, arrayNum: number = null): any[] {
  if (spliceNum !== null && arrayNum === null) {
    const num = this.length % spliceNum === 0 ? parseInt((this.length / spliceNum).toString()) : parseInt((this.length / spliceNum).toString()) + 1
    const newArrays = []
    for (let i = 0; i < num; i++) {
      const arr = this.slice(spliceNum * i, spliceNum * (i + 1))
      if (arr.length > 0) {
        newArrays.push(arr)
      }
    }
    return newArrays
  } else if (spliceNum === null && arrayNum !== null) {
    const newArrays = []
    const num = parseInt((this.length / arrayNum).toString())
    for (let i = 0; i < arrayNum; i++) {
      const arr = this.slice(num * i, num * (i + 1))
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
Array.prototype.uniq_ = function (): any[] {
  return [...new Set(this)]
}

/**
 * 移除null、undefined以及空字符串
 * @returns {Array}
 */
Array.prototype.removeEmpty_ = function (): any[] {
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
Array.prototype.getAverage_ = function (): string {
  let sum = '0'
  this.forEach((ele) => {
    sum = sum.add_(ele)
  })
  return sum.div_(this.length.toString())
}

/**
 * 取数组最后一个元素
 * @returns {*}
 */
Array.prototype.getLastOne_ = function (): any {
  return this[this.length - 1]
}

Array.prototype.removeLastOne_ = function (): any[] {
  if (this.length === 0) {
    return []
  }
  return this.slice(0, this.length - 1)
}

/**
 * 取数组第一个元素
 * @returns {*}
 */
Array.prototype.getFirstOne_ = function (): any {
  return this[0]
}

Array.prototype.removeFirstOne_ = function (): any[] {
  if (this.length === 0) {
    return []
  }
  return this.slice(1, this.length)
}

Array.prototype.removeStart_ = function (num: number): any[] {
  return this.slice(num, this.length)
}

Array.prototype.removeEnd_ = function (num: number): any[] {
  return this.slice(0, this.length - num)
}

Array.prototype.removeByIndex_ = function (index: number): any[] {
  if (index > this.length - 1) {
    throw ErrorHelper(`索引超过数组长度`)
  }
  const temp = this.deepCopy_()
  temp.splice(index, 1)
  return temp
}

Array.prototype.removeByValue_ = function (value: any): any[] {
  const temp = this.deepCopy_()
  const index = temp.indexOf(value)
  if (index === -1) {
    throw ErrorHelper(`没有找到 ${value}`)
  }
  temp.splice(index, 1)
  return temp
}

Array.prototype.deepCopy_ = function (): any[] {
  return Array.from(this)
}

Array.prototype.append_ = function (arr: any[]): any[] {
  return this.concat(arr)
}

/**
 * 取出最大值（值以及索引）,只适用于数值数组以及字符串数组, 返回值为字符串
 */
Array.prototype.getMax_ = function (): object {
  if (this.length === 0) {
    throw ErrorHelper(`空数组`)
  }

  let maxValue = this[0].toString()

  for (let i = 1; i < this.length; i++) {
    if (this[i].toString().gt_(maxValue)) {
      maxValue = this[i].toString()
    }
  }

  const maxIndex = []
  for (let i = 0; i < this.length; i++) {
    if (this[i].toString().eq_(maxValue)) {
      maxIndex.push(i)
    }
  }

  return {
    value: maxValue,
    indexes: maxIndex
  }
}

Array.prototype.getMin_ = function (): object {
  if (this.length === 0) {
    throw ErrorHelper(`空数组`)
  }

  let minValue = this[0].toString()

  for (let i = 1; i < this.length; i++) {
    if (this[i].toString().lt_(minValue)) {
      minValue = this[i].toString()
    }
  }

  const minIndex = []
  for (let i = 0; i < this.length; i++) {
    if (this[i].toString().eq_(minValue)) {
      minIndex.push(i)
    }
  }

  return {
    value: minValue,
    indexes: minIndex
  }
}

Array.prototype.getSum_ = function (): string {
  return this.reduce((acc, val) => {
    return val.toString().add_(acc)
  })
}

Array.prototype.select_ = function (indexes: number[]): any[] {
  if (indexes === null || indexes === undefined) {
    return this
  }
  const result = []
  indexes.forEach((index) => {
    result.push(this[index])
  })
  return result
}

Array.prototype.toUpperCase_ = function (): string[] {
  return this.map((element) => {
    return element.toString().toUpperCase()
  })
}

Array.prototype.toLowerCase_ = function (): string[] {
  return this.map((element) => {
    return element.toString().toLowerCase()
  })
}

Array.prototype.random_ = function (): any {
  if (this.length === 0) {
    throw ErrorHelper(`空数组`)
  }
  return this[Math.floor(Math.random() * 1E4) % this.length]
}

/**
 * [190, 190] --> BEBE
 * @returns {string}
 */
Array.prototype.numberArrayToHexString_ = function (): string {
  if (this.length === 0) {
    throw ErrorHelper(`空数组`)
  }
  return this.map((byte) => {
    return byte.toString().numberStrToHex_()
  }).join('')
}

/**
 * 取子数组。[start, end)
 * @param start
 * @param end
 */
Array.prototype.subArray_ = function (start: number, end: number): any[] {
  if (this.length === 0) {
    throw ErrorHelper(`空数组`)
  }
  return this.slice(start, end)
}

export {};