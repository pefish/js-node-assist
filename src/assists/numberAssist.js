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

Number.prototype.toBinString = toBinString
Number.prototype.toOctString = toOctString
Number.prototype.toHexString = toHexString
