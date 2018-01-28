/** @module */
import BigNumber from 'bignumber.js'

/**
 * 转换为二进制字符串
 * @returns {string}
 */
const toBinString = function () {
  return this.toString(2)
}

/**
 * 转换为八进制字符串
 * @returns {string}
 */
const toOctString = function () {
  return this.toString(8)
}

/**
 * 转换为十进制字符串
 * @returns {string}
 */
const toDecimalString = function () {
  return this.toString(10)
}

/**
 * 转换为十六进制字符串
 * @returns {string}
 */
const toHexString = function () {
  return this.toString(16)
}

BigNumber.prototype.toBinString = toBinString
BigNumber.prototype.toOctString = toOctString
BigNumber.prototype.toHexString = toHexString
