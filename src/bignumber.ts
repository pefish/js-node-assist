/** @module */
import BigNumber from 'bignumber.js'

declare module 'bignumber.js' {
  interface BigNumber {
    toBinString_?: () => string,
    toOctString_?: () => string,
    toDecimalString_?: () => string,
    toHexString_?: () => string,
  }
}

/**
 * 转换为二进制字符串
 * @returns {string}
 */
BigNumber.prototype.toBinString_ = function (): string {
  return this.toString(2)
}

/**
 * 转换为八进制字符串
 * @returns {string}
 */
BigNumber.prototype.toOctString_ = function (): string {
  return this.toString(8)
}

/**
 * 转换为十进制字符串
 * @returns {string}
 */
BigNumber.prototype.toDecimalString_ = function (): string {
  return this.toString(10)
}

/**
 * 转换为十六进制字符串
 * @returns {string}
 */
BigNumber.prototype.toHexString_ = function (): string {
  return this.toString(16)
}

export {};