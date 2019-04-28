/** @module */

import BigNumber from 'bignumber.js'

declare global {
  interface Number {
    toBinString_?: () => string,
    toOctString_?: () => string,
    toHexString_?: () => string,
    toNumber_?: () => number,
    toInt_?: () => number,
    toNoScientificString_?: () => string,
  }
}

/**
 * 转换为二进制字符串
 * @returns {string}
 */
Number.prototype.toBinString_ = function (): string {
  return this.toString(2)
}

/**
 * 转换为八进制字符串
 * @returns {string}
 */
Number.prototype.toOctString_ = function (): string {
  return this.toString(8)
}

/**
 * 转换为十六进制字符串
 * @returns {string}
 */
Number.prototype.toHexString_ = function (): string {
  return this.toString(16)
}

/**
 * 为了调用此方法时不用区分主体是string还是number
 * @returns {toNumber}
 */
Number.prototype.toNumber_ = function (): number {
  return this
}

Number.prototype.toInt_ = function (): number {
  return parseInt(this)
}

Number.prototype.toNoScientificString_ = function (): string {
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.toString()
}

export {};
