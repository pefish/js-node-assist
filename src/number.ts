

import BigNumber from 'bignumber.js'

export default class NumberUtil {
  /**
   * 转换成BigNumber对象
   * @returns {BigNumber}
   */
  static toBigNumber_(src: number): BigNumber {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    return new BN(src)
  }

  /**
   * 转换为二进制字符串
   * @returns {string}
   */
  static toBinString_(src: number): string {
    return src.toString(2)
  }

  /**
   * 转换为八进制字符串
   * @returns {string}
   */
  static toOctString_(src: number): string {
    return src.toString(8)
  }

  /**
   * 转换为十六进制字符串
   * @returns {string}
   */
  static toHexString_(src: number): string {
    return src.toString(16)
  }

  /**
   * 为了调用此方法时不用区分主体是string还是number
   * @returns {toNumber}
   */
  static toNumber_(src: number): number {
    return src
  }

  // 转成int类型，直接溢出截取
  static toInt_(src: number): number {
    return parseInt(src.toString(10), 10)
  }

  // number写入字节集
  static toBuffer_(src: number, endian: EndianType = EndianType.Big_Endian): Buffer {
    const buf = Buffer.alloc(8)
    if (endian === EndianType.Big_Endian) {
      buf.writeDoubleBE(src, 0)
    } else if (endian === EndianType.Little_Endian) {
      buf.writeDoubleLE(src, 0)
    } else {
      throw new Error(`endian error`)
    }
    return buf
  }

  static toNoScientificString_(src: number): string {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num1 = new BN(src)
    return num1.toString()
  }

}


export enum EndianType {
  Big_Endian = 0,
  Little_Endian,
}
