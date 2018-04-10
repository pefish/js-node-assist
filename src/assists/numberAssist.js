/** @module */

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
 * 转换为十六进制字符串
 * @returns {string}
 */
const toHexString = function () {
  return this.toString(16)
}

/**
 * 为了调用此方法时不用区分主体是string还是number
 * @returns {toNumber}
 */
const toNumber = function () {
  return this
}

const toInt = function () {
  return parseInt(this)
}

Number.prototype.toBinString = toBinString
Number.prototype.toOctString = toOctString
Number.prototype.toHexString = toHexString
Number.prototype.toNumber = toNumber
Number.prototype.toInt = toInt
