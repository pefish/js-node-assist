
import BigNumber from 'bignumber.js'

export default class BigNumberUtil {
  /**
   * 转换为二进制字符串
   * @returns {string}
   */
  static toBinString_(src: BigNumber): string {
    return src.toString(2)
  }

  /**
   * 转换为八进制字符串
   * @returns {string}
   */
  static toOctString_(src: BigNumber): string {
    return src.toString(8)
  }

  /**
   * 转换为十进制字符串
   * @returns {string}
   */
  static toDecimalString_(src: BigNumber): string {
    return src.toString(10)
  }

  /**
   * 转换为十六进制字符串
   * @returns {string}
   */
  static toHexString_(src: BigNumber): string {
    return src.toString(16)
  }
}
