

import BigNumber from 'bignumber.js'
import ErrorHelper from '@pefish/js-error'
import BufferUtil from './buffer';
import ArrayUtil from './array';
// 进制计算的结果都要带上相应前缀 二进制0b 八进制0o 十六进制0x

export enum RoundingMode {
  ROUND_UP = 0,  // 直接截断，向上取整
  ROUND_DOWN,  // 直接截断，向下取整
  ROUND_CEIL,
  ROUND_FLOOR,
  ROUND_HALF_UP,  // 遇到.5的情况时往上近似,就是四舍五入
  ROUND_HALF_DOWN,  // 遇到.5的情况时往下近似
  ROUND_HALF_EVEN,
  ROUND_HALF_CEIL,
  ROUND_HALF_FLOOR,
  EUCLID,
}

export default class StringUtil {
  /**
   * 加
   * @param val
   * @returns {any}
   */
  static add_(src: string, val: string | number): string {
    canCastBigNumber(src)
    val = val.toString()
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num1 = new BN(src);
    return num1.plus(val).toString()
  }

  /**
   * 乘以10的几次方
   * @param num
   */
  static shiftedBy_(src: string, num: number): string {
    canCastBigNumber(src)
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num1 = new BN(src)
    return num1.shiftedBy(num).toString()
  }

  static unShiftedBy_(src: string, num: string | number): string {
    canCastBigNumber(src)
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num1 = new BN(src)
    return num1.shiftedBy(this.toNumber_(this.negated_(num.toString()))).toString()
  }

  /**
   * 取相反数
   * @returns {string}
   */
  static negated_(src: string): string {
    canCastBigNumber(src)
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num1 = new BN(src)
    return num1.negated().toString()
  }

  /**
   * 减
   * @param val
   * @returns {any}
   */
  static sub_(src: string, val: string | number): string {
    canCastBigNumber(src)
    val = val.toString()
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num1 = new BN(src)
    return num1.minus(val).toString()
  }

  /**
   * 乘
   * @param val
   * @returns {any}
   */
  static multi_(src: string, val: string | number): string {
    canCastBigNumber(src)
    val = val.toString()
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num1 = new BN(src)
    return num1.times(val).toString()
  }

  /**
   * 乘方
   * @param val
   * @returns {any}
   */
  static pow_(src: string, val: number): string {
    canCastBigNumber(src)
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num1 = new BN(src)
    return num1.exponentiatedBy(val).toString()
  }

  /**
   * 除
   * @param val
   * @returns {string}
   */
  static div_(src: string, val: string | number): string {
    canCastBigNumber(src)
    val = val.toString()
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num1 = new BN(src)
    return num1.div(val).toString()
  }

  /**
   * 求余
   * @param val
   * @returns {string}
   */
  static mod_(src: string, val: string | number): string {
    canCastBigNumber(src)
    val = val.toString()
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num1 = new BN(src)
    return num1.mod(val).toString()
  }

  /**
   * 开根号
   * @returns {string}
   */
  static sqrt_(src: string): string {
    canCastBigNumber(src)
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num1 = new BN(src)
    return num1.sqrt().toString()
  }

  /**
   * 是否大于
   * @param val
   * @returns {boolean}
   */
  static gt_(src: string, val: string | number): boolean {
    canCastBigNumber(src)
    val = val.toString()
    const num1 = new BigNumber(src)
    return num1.comparedTo(val) === 1
  }

  /**
   * 大于或等于
   * @param val
   * @returns {boolean}
   */
  static gte_(src: string, val: string | number): boolean {
    canCastBigNumber(src)
    val = val.toString()
    const num1 = new BigNumber(src)
    const result = num1.comparedTo(val)
    return result === 1 || result === 0
  }

  /**
   * 是否小于
   * @param val
   * @returns {boolean}
   */
  static lt_(src: string, val: string | number): boolean {
    canCastBigNumber(src)
    val = val.toString()
    const num1 = new BigNumber(src)
    return num1.comparedTo(val) === -1
  }

  /**
   * 小于或等于
   * @param val
   * @returns {boolean}
   */
  static lte_(src: string, val: string | number): boolean {
    canCastBigNumber(src)
    val = val.toString()
    const num1 = new BigNumber(src)
    const result = num1.comparedTo(val)
    return result === -1 || result === 0
  }

  /**
   * 是否相等
   * @param val
   * @returns {boolean}
   */
  static eq_(src: string, val: string | number): boolean {
    canCastBigNumber(src)
    val = val.toString()
    const num1 = new BigNumber(src)
    return num1.comparedTo(val) === 0
  }

  /**
   * 加千分号
   * @returns {string}
   */
  static addThousandSign_(src: string): string {
    canCastBigNumber(src)
    const parts = src.split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts[1] === '' ? parts[0] : parts.join('.')
  }

  /**
   * 移除千分号
   * @returns {string}
   */
  static removeThousandSign_(src: string): string {
    canCastBigNumber(src)
    return src.replace(new RegExp(',', 'g'), '')
  }

  /**
   * 保留小数点后几位。默认小数部分最后不带0
   * @param decimalRemain
   * @param remainMethod {number}
   * @returns {string}
   */
  static remainDecimal_(src: string, decimalRemain: number, remainMethod: RoundingMode = RoundingMode.ROUND_HALF_UP, withZero: boolean = false): string {
    canCastBigNumber(src)
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num1 = new BN(src)
    let result = num1.toFixed(decimalRemain, remainMethod as BigNumber.RoundingMode)
    if (result.indexOf(".") !== -1 && withZero === false) {  // 是小数
      while (true) {
        const temp = this.removeLastStr_(result, "0")
        if (result === temp) {
          return result
        }
        result = temp
      }
    }
    return result
  }

  /**
   * 获取小数部分的个数
   */
  static decimalCount_(src: string): number {
    canCastBigNumber(src)
    return src.split('.')[1].length
  }

  /**
   * 取绝对值
   * @returns {string}
   */
  static abs_(src: string): string {
    canCastBigNumber(src)
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num = new BN(src)
    return num.abs().toString()
  }

  /**
   * 转换为二进制字符串
   * @returns {string}
   */
  static decimalToBinString_(src: string): string {
    canCastBigNumber(src)
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num = new BN(src)
    return '0b' + num.toString(2)
  }

  /**
   * 十进制转换为八进制字符串
   * @returns {string}
   */
  static decimalToOctString_(src: string): string {
    canCastBigNumber(src)
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num = new BN(src)
    return '0o' + num.toString(8)
  }

  /**
   * 十进制转换为十六进制字符串
   * @returns {string}
   */
  static decimalToHexString_(src: string, prefix: boolean = true): string {
    canCastBigNumber(src)
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num = new BN(src)
    return (prefix ? '0x' : '') + num.toString(16)
  }

  /**
   * 直接取整
   * @returns {Number}
   */
  static toInt_(src: string): number {
    canCastBigNumber(src)
    return parseInt(src)
  }

  /**
   * 转换为数值
   * @returns {Number}
   */
  static toNumber_(src: string): number {
    canCastBigNumber(src)
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num = new BN(src)
    return num.toNumber()
  }

  /**
   * hex string转换为number
   * @returns {number}
   */
  static hexToNumber_(src: string): number {
    let temp = src
    if (!temp.startsWith('0x')) {
      temp = '0x' + temp
    }
    canCastBigNumber(temp)
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num = new BN(temp)
    return num.toNumber()
  }

  /**
   * '190' --> 'BE'
   * @returns {string}
   */
  static numberStrToHex_(src: string): string {
    const number = this.toNumber_(src)
    return number.toString(16).toUpperCase()
  }

  /**
   * 判断此值用于计算时是否具有精度问题
   */
  static hasPrecisionIssue_(src: string): boolean {
    canCastBigNumber(src)
    return this.gt_(src, '9007199254740992')
  }

  // 字符串处理

  /**
   * 移除开头几位字符串
   * @param num
   * @returns {Array}
   */
  static removeFirst_(src: string, num: number): string {
    return src.substring(num, src.length)
  }

  /**
   * 移除最后几位字符串
   * @param num
   * @returns {string}
   */
  static removeLast_(src: string, num: number): string {
    return src.substring(0, src.length - num)
  }

  /**
   * 获取开头几位
   * @param num
   * @returns {string}
   */
  static getFirst_(src: string, num: number): string {
    return src.substring(0, num)
  }

  /**
   * 获取最后几位
   * @param num
   * @returns {string}
   */
  static getLast_(src: string, num: number): string {
    return src.substring(src.length - num, src.length)
  }

  /**
   * 全部替换(只能简单替换字符串)
   * @param regStr
   * @param replaceStr
   * @returns {string}
   */
  static replaceAll_(src: string, regStr: string, replaceStr: string): string {
    return src.replace(new RegExp(regStr, 'gm'), replaceStr)
  }

  /**
   * 从字符串中分类出指定区间的内容
   * @param splitStr1
   * @param splitStr2
   * @returns {{}}
   */
  static classify_(src: string, splitStr1: string, splitStr2: string): {
    name: string,
    is: boolean,
    index: number
  }[] {
    const results: {
      name: string,
      is: boolean,
      index: number
    }[] = []
    const regStr = `${splitStr1}(.*?)${splitStr2}`
    const targets = this.findAll_(src, regStr)
    for (let i = 0; i < targets.length; i++) {
      if (i === 0) {
        results.push({
          name: src.substring(0, targets[i].index),
          is: false,
          index: results.length
        })
      } else {
        results.push({
          name: src.substring(targets[i - 1].index + targets[i - 1].outputFull.length, targets[i].index),
          is: false,
          index: results.length
        })
      }
      results.push({
        name: targets[i]['output'],
        is: true,
        index: results.length
      })
      if (i === targets.length - 1) {
        results.push({
          name: src.substring(targets[i]['index'] + targets[i]['outputFull'].length, src.length),
          is: false,
          index: results.length
        })
      }
    }
    return results
  }

  static findAll_(src: string, regStr: string): {
    outputFull: string,
    output: string,
    index: number,
    input: string
  }[] {
    const reg = new RegExp(regStr, 'g')
    reg.compile() //作用是能够对正则表达式进行编译，被编译过的正则在使用的时候效率会更高，适合于对一个正则多次调用的情况下
    let results: {
      outputFull: string,
      output: string,
      index: number,
      input: string
    }[] = []
    let a: RegExpExecArray | null
    while (a = reg.exec(src)) {  //数组中第0个元素是匹配的子字符串，第二个元素是正则中的第一个子分组匹配的结果（如果有子分组，即正则中存在用圆括号括起来的分组），第三个是正则中第二个子分组匹配的结果（如果有第二个子分组）
      results.push({
        outputFull: a[0],
        output: a[1],
        index: a['index'],
        input: a['input']
      })
    }
    return results
  }

  /**
   * 十六进制字符串转化为Buffer。与Buffer.toHexString_相反
   * @returns {Array}
   */
  static hexToBuffer_(src: string): Buffer {
    let temp = src
    if (temp.startsWith('0x')) {
      temp = temp.substring(2, temp.length)
    }
    // 长度奇数前面加0
    if (temp.length % 2 !== 0) {
      temp = '0' + temp
    }
    return Buffer.from ? Buffer.from(temp, 'hex') : new Buffer(temp, `hex`)
  }

  /**
   * 普通字符串转buffer
   * @returns {Buffer}
   */
  static toUtf8Buffer_(src: string): Buffer {
    return Buffer.from ? Buffer.from(src) : new Buffer(src)
  }

  /**
   * 十六进制字符串转化为十进制字符串
   * @returns {number|*}
   */
  static hexToDecimalString_(src: string): string {
    let temp = src
    if (!temp.startsWith('0x')) {
      temp = '0x' + temp
    }
    canCastBigNumber(temp)
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num = new BN(temp)
    return num.toString(10)
  }

  /**
   * 二进制字符串转十进制字符串
   * @returns {number}
   */
  static binToDecimalString_(src: string): string {
    let temp = src
    if (!temp.startsWith('0b')) {
      temp = '0b' + temp
    }
    canCastBigNumber(temp)
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num = new BN(temp)
    return num.toString(10)
  }

  /**
   * 检查是否是严格的hex数据
   * @returns {boolean}
   */
  static isStrictHexString_(src: string): boolean {
    return /^(-)?0x[0-9a-f]*$/i.test(src)
  }

  /**
   * 清空hex字符串左边或右边的00
   * @param typeStr {string} left/right/both
   * @returns {string | void | *} 结果不带0x
   */
  static clearHexZeroZero_(src: string, typeStr: string): string {
    let hex = src.replace(/^0x/i, '')
    if (typeStr === 'left') {
      hex = hex.replace(/^(?:00)*/, '')
    } else if (typeStr === 'right') {
      hex = hex.split('').reverse().join('')
      hex = hex.replace(/^(?:00)*/, '')
      hex = hex.split('').reverse().join('')
    } else if (typeStr === 'both') {
      hex = hex.replace(/^(?:00)*/, '')
      hex = hex.split('').reverse().join('')
      hex = hex.replace(/^(?:00)*/, '')
      hex = hex.split('').reverse().join('')
    }
    return hex
  }

  /**
   * 转换成BigNumber对象
   * @returns {BigNumber}
   */
  static toBigNumber_(src: string): BigNumber {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    return new BN(src)
  }

  /**
   * 移除尾随的0
   */
  static removeTrailingZeros_(src: string): string {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num1 = new BN(parseFloat(src))
    return num1.toString()
  }

  static toArray_(src: string, eleLen?: number, arrLen?: number): string[] {
    if (eleLen !== undefined && arrLen === undefined) {
      const num = src.length % eleLen === 0 ? parseInt((src.length / eleLen).toString()) : parseInt((src.length / eleLen).toString()) + 1
      const newArrays: string[] = []
      for (let i = 0; i < num; i++) {
        const arr = src.slice(eleLen * i, eleLen * (i + 1))
        if (arr.length > 0) {
          newArrays.push(arr)
        }
      }
      return newArrays
    } else if (eleLen === undefined && arrLen !== undefined) {
      const newArrays: string[] = []
      const num = parseInt((src.length / arrLen).toString())
      for (let i = 0; i < arrLen; i++) {
        const arr = src.slice(num * i, num * (i + 1))
        if (arr.length > 0) {
          newArrays.push(arr)
        }
      }
      if (num * arrLen < src.length) {
        newArrays[newArrays.length - 1] = newArrays[newArrays.length - 1].concat(src.slice(num * arrLen, src.length))
      }
      return newArrays
    } else {
      throw new Error("eleLen and arrLen must only one to be set!!")
    }
  }

  static hexStrToBase64_(src: string): string {
    return Buffer.from(src, 'hex').toString('base64')
  }

  static base64ToHexStr_(src: string, prefix: boolean = true): string {
    return BufferUtil.toHexString_(Buffer.from(src, 'base64'), prefix)
  }

  static strToBase64_(src: string): string {
    return Buffer.from(src).toString('base64')
  }

  static base64ToStr_(src: string): string {
    return Buffer.from(src, 'base64').toString()
  }

  static removeLastEnter_(src: string): string {
    if (src.endsWith('\r\n')) {
      return this.removeLast_(src, 2)
    }

    if (src.endsWith('\n')) {
      return this.removeLast_(src, 1)
    }
    return src
  }

  /**
   * 移除最后一段字符串
   */
  static removeLastStr_(src: string, str: string): string {
    if (!src.endsWith(str)) {
      return src
    }
    return src.substring(0, src.length - str.length)
  }

  /**
   * 移除开头一段字符串
   */
  static removeFirstStr_(src: string, str: string): string {
    if (!src.startsWith(str)) {
      return src
    }
    return src.substring(str.length, src.length)
  }

  /**
   * 移除字符串最后一段。
   * @param str
   */
  static removeLastByStr_(src: string, str: string): string {
    const arr = src.split(str)
    if (arr.length === 1) {
      return src
    }
    return ArrayUtil.removeLastOne_(arr).join(str)
  }

  static removeFirstByStr_(src: string, str: string): string {
    const arr = src.split(str)
    if (arr.length === 1) {
      return src
    }
    return ArrayUtil.removeFirstOne_(arr).join(str)
  }

  static toNoScientificString_(src: string): string {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e+9
    })
    const num1 = new BN(src)
    return num1.toString()
  }

  static canCastNumber_(src: string): boolean {
    return !isNaN(Number(src))
  }

  static utf8HexStringToString_(src: string): string {
    return this.hexToBuffer_(src).toString('utf8')
  }

  static toUtf8HexString_(src: string, prefix: boolean = true): string {
    return BufferUtil.toHexString_(this.toUtf8Buffer_(src), prefix)
  }

  static toUtf8Uint8Array_(src: string): Uint8Array {
    return new TextEncoder().encode(src)
  }
}


function canCastBigNumber(value: any): void {
  try {
    const _ = new BigNumber(value)
  } catch (err) {
    throw new ErrorHelper(`can not cast to bignumber`)
  }
}

