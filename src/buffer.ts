/** @module */

import BigNumber from 'bignumber.js'

declare global {
  interface Buffer {
    toDecimalNumberArray_?: () => number[],
    toBinString_?: () => string,
    toHexString_?: (prefix?: boolean) => string,
    toDecimalString_?: () => string,
    toNumber_?: () => number,
    correctEmptyBuffer_?: () => Buffer,
    getBytesLength_?: () => number,
    reverseBuffer_?: () => Buffer,
    deepCopy_?: () => Buffer,
    toUint8Array_: () => Uint8Array,
  }
}

/**
 * 以hex编码转换为十进制的bytes数组
 * @returns {string}
 */
Buffer.prototype.toDecimalNumberArray_ = function (): number[] {
  const temp: Buffer = this.correctEmptyBuffer_()
  return [].slice.call(temp)
}

/**
 * 以hex编码转化为二进制字符串
 * @returns {string}
 */
Buffer.prototype.toBinString_ = function (): string {
  const temp = this
  return temp.toDecimalNumberArray_().map(function (x) {
    let str = x.toString(2)
    while (str.length < 8) {
      str = '0' + str
    }
    return str
  }).join('')
}

/**
 * 字节集直接转化为十六进制字符串。
 * @returns {string}
 */
Buffer.prototype.toHexString_ = function (prefix: boolean = true): string {
  const temp: string = (this as Buffer).toString('hex')
  if (prefix === false) {
    return temp
  } else {
    return '0x' + temp
  }
}

/**
 * 以hex编码转化为十进制字符串
 * @returns {string}
 */
Buffer.prototype.toDecimalString_ = function (): string {
  if (this.getBytesLength_() === 0) {
    return '0'
  }
  return new BigNumber(this.toString('hex'), 16).toString(10)
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

Buffer.prototype.toUint8Array_ = function (): Uint8Array {
  return new Uint8Array(this)
}

export {};
