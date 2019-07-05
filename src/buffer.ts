/** @module */

import BigNumber from 'bignumber.js'

declare global {
  interface Buffer {
    toDecimalNumberArray_?: () => any[],
    toBinString_?: () => string,
    toHexString_?: (prefix?: boolean) => string,
    toDecimalString_?: () => string,
    toDecimalNumber_?: () => number,
    toHexNumber_?: () => number,
    correctEmptyBuffer_?: () => Buffer,
    getBytesLength_?: () => number,
    reverseBuffer_?: () => Buffer,
    deepCopy_?: () => Buffer,
  }
}

/**
 * 转换为十进制的bytes数组
 * @returns {string}
 */
Buffer.prototype.toDecimalNumberArray_ = function (): any[] {
  const temp = this.correctEmptyBuffer()
  return [].slice.call(temp)
}

/**
 * 转化为二进制字符串
 * @returns {string}
 */
Buffer.prototype.toBinString_ = function (): string {
  const temp = this
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
Buffer.prototype.toHexString_ = function (prefix: boolean = true): string {
  const temp = this.toString('hex')
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
Buffer.prototype.toDecimalString_ = function (): string {
  if (this.getBytesLength_() === 0) {
    return '0'
  }
  return new BigNumber(this.toString('hex'), 16).toString(10)
}

/**
 * 转化为十进制数值
 * @returns {number}
 */
Buffer.prototype.toDecimalNumber_ = function (): number {
  const temp = this.correctEmptyBuffer()
  return new BigNumber(temp.toString('hex'), 16).toNumber()
}

/**
 * 转化为十六进制数值
 * @returns {number | *}
 */
Buffer.prototype.toHexNumber_ = function (): number {
  const temp = this.correctEmptyBuffer()
  return temp.toHexString(false).toNumber()
}

/**
 * 纠正空buffer
 * @returns {correctEmptyBuffer}
 */
Buffer.prototype.correctEmptyBuffer_ = function (): Buffer {
  let temp = this
  if (this.getBytesLength_() === 0) {
    temp = new Buffer('00', 'hex')
  }
  return temp
}

/**
 * 获取字节数
 */
Buffer.prototype.getBytesLength_ = function (): number {
  return this.length
}

/**
 * 反转Buffer, 不改变自身
 * @returns {Buffer}
 */
Buffer.prototype.reverseBuffer_ = function (): Buffer {
  return this.deepCopy_().correctEmptyBuffer_().reverse()
}

/**
 * 深拷贝
 * @returns {*}
 */
Buffer.prototype.deepCopy_ = function (): Buffer {
  const tempBuffer = Buffer.alloc(this.length)
  this.copy(tempBuffer, 0, 0, this.length)
  return tempBuffer
}

export {};
