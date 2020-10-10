

import BigNumber from 'bignumber.js'

export default class BufferUtil {
  /**
   * 以hex编码转换为十进制的bytes数组
   * @returns {string}
   */
  static toDecimalNumberArray(src: Buffer): number[] {
    const temp: Buffer = this.correctEmptyBuffer(src)
    return [].slice.call(temp)
  }

  /**
   * 以hex编码转化为二进制字符串
   * @returns {string}
   */
  static toBinString(src: Buffer): string {
    const temp = src
    return this.toDecimalNumberArray(temp).map(function (x) {
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
  static toHexString(src: Buffer, prefix: boolean = true): string {
    const temp: string = src.toString('hex')
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
  static toDecimalString(src: Buffer): string {
    if (this.getBytesLength(src) === 0) {
      return '0'
    }
    return new BigNumber(src.toString('hex'), 16).toString(10)
  }

  /**
   * 纠正空buffer
   * @returns {correctEmptyBuffer}
   */
  static correctEmptyBuffer(src: Buffer): Buffer {
    let temp = src
    if (this.getBytesLength(src) === 0) {
      temp = new Buffer('00', 'hex')
    }
    return temp
  }

  /**
   * 获取字节数
   */
  static getBytesLength(src: Buffer): number {
    return src.length
  }

  /**
   * 反转Buffer, 不改变自身
   * @returns {Buffer}
   */
  static reverseBuffer(src: Buffer): Buffer {
    return this.correctEmptyBuffer(this.deepCopy(src)).reverse()
  }

  /**
   * 深拷贝
   * @returns {*}
   */
  static deepCopy(src: Buffer): Buffer {
    const tempBuffer = Buffer.alloc(src.length)
    src.copy(tempBuffer, 0, 0, src.length)
    return tempBuffer
  }

  static toUint8Array(src: Buffer): Uint8Array {
    return new Uint8Array(src)
  }

  static toUtf8String(src: Buffer): string {
    return src.toString()
  }

}

