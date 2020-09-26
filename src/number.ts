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
    toBuffer_?: (endian?: Endian) => Buffer,
    toBigNumber_?: () => BigNumber,
  }
}

/**
 * 转换成BigNumber对象
 * @returns {BigNumber}
 */
String.prototype.toBigNumber_ = function (): BigNumber {
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  return new BN(this)
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

// 转成int类型，直接溢出截取
Number.prototype.toInt_ = function (): number {
  return parseInt(this.toString(10), 10)
}

// number写入字节集
Number.prototype.toBuffer_ = function (endian: Endian = Endian.Big_Endian): Buffer {
  const buf = Buffer.alloc(8)
  if (endian === Endian.Big_Endian) {
    buf.writeDoubleBE(this, 0)
  } else if (endian === Endian.Little_Endian) {
    buf.writeDoubleLE(this, 0)
  } else {
    throw new Error(`endian error`)
  }
  return buf
}

Number.prototype.toNoScientificString_ = function (): string {
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.toString()
}

export {};

export enum Endian {
  Big_Endian = 0,
  Little_Endian,
}
