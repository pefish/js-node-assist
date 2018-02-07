/** @module */

import BigNumber from 'bignumber.js'

/**
 * 转换为十进制的bytes数组
 * @returns {string}
 */
const toDecimalNumberArray = function () {
  let temp = this.correctEmptyBuffer()
  return [].slice.call(temp)
}

/**
 * 转化为二进制字符串
 * @returns {string}
 */
const toBinString = function () {
  let temp = this
  return temp.toDecimalArray().map(function (x) {
    let str = x.toString(2)
    while (str.length < 8) {
      str = '0' + str
    }
    return str
  }).join('')
}

/**
 * 转化为十六进制字符串
 * @returns {string}
 */
const toHexString = function (prefix = true) {
  let temp = this.toString('hex')
  if (prefix === false) {
    return temp
  } else {
    return '0x' + temp
  }
}

/**
 * 转化为十进制字符串
 * @returns {string}
 */
const toDecimalString = function () {
  if (this.getBytesLength() === 0) {
    return ''
  }
  return new BigNumber(this.toString('hex'), 16).toString()
}

/**
 * 转化为十进制数值
 * @returns {number}
 */
const toDecimalNumber = function () {
  let temp = this.correctEmptyBuffer()
  return new BigNumber(temp.toString('hex'), 16).toNumber()
}

/**
 * 转化为十六进制数值
 * @returns {number | *}
 */
const toHexNumber = function () {
  let temp = this.correctEmptyBuffer()
  return temp.toHexString(false).toNumber()
}

/**
 * 纠正空buffer
 * @returns {correctEmptyBuffer}
 */
const correctEmptyBuffer = function () {
  let temp = this
  if (this.getBytesLength() === 0) {
    temp = new Buffer('00', 'hex')
  }
  return temp
}

/**
 * 获取字节数
 */
const getBytesLength = function () {
  return this.length
}

/**
 * 反转Buffer
 * @returns {Buffer}
 */
const reverseBuffer = function () {
  let temp = this.correctEmptyBuffer()
  return temp.reverse()
}


Buffer.prototype.toDecimalNumberArray = toDecimalNumberArray
Buffer.prototype.toBinString = toBinString
Buffer.prototype.toHexString = toHexString
Buffer.prototype.toDecimalNumber = toDecimalNumber
Buffer.prototype.getBytesLength = getBytesLength
Buffer.prototype.correctEmptyBuffer = correctEmptyBuffer
Buffer.prototype.reverseBuffer = reverseBuffer
Buffer.prototype.toHexNumber = toHexNumber
Buffer.prototype.toDecimalString = toDecimalString
