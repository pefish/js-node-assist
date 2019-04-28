/** @module */

import BigNumber from 'bignumber.js'
import AssertUtil from 'p-js-assert'
// 进制计算的结果都要带上相应前缀 二进制0b 八进制0o 十六进制0x

declare global {
  interface String {
    add_?: (val: string | number) => string,
    shiftedBy_?: (num: string | number) => string,
    unShiftedBy_?: (num: string | number) => string,
    negated_?: () => string,
    sub_?: (val: string | number) => string,
    multi_?: (val: string | number) => string,
    pow_?: (val: string | number) => string,
    div_?: (val: string | number) => string,
    mod_?: (val: string | number) => string,
    sqrt_?: () => string,
    gt_?: (val: string | number) => boolean,
    gte_?: (val: string | number) => boolean,
    lt_?: (val: string | number) => boolean,
    lte_?: (val: string | number) => boolean,
    eq_?: (val: string | number) => boolean,
    addThousandSign_?: () => string,
    removeThousandSign_?: () => string,
    remainDecimal_?: (decimalRemain: number, remainMethod?: number) => string,
    decimalCount_?: () => number,
    abs_?: () => string,
    decimalToBinString_?: () => string,
    decimalToOctString_?: () => string,
    decimalToHexString_?: (prefix?: boolean) => string,
    toInt_?: () => number,
    toNumber_?: () => number,
    hexToNumber_?: () => number,
    numberStrToHex_?: () => string,
    hasPrecisionIssue_?: () => boolean,
    removeFirst_?: (num: number) => string,
    removeLast_?: (num: number) => string,
    getFirst_?: (num: number) => string,
    getLast_?: (num: number) => string,
    replaceAll_?: (regStr: string, replaceStr: string) => string,
    findAll_?: (regStr: string) => object[],
    classify_?: (splitStr1: string, splitStr2: string) => object[],
    hexToBuffer_?: () => Buffer,
    toBuffer_?: () => Buffer,
    hexToDecimalString_?: () => string,
    binToDecimalString_?: () => string,
    isStrictHexString_?: () => boolean,
    clearHexZeroZero_?: (typeStr: string) => string,
    toBigNumber_?: () => BigNumber,
    removeTrailingZeros_?: () => string,
    toArray_?: (len?: number, arrLen?: number) => any[],
    hexStrToBase64_?: () => string,
    base64ToHexStr_?: (prefix?: boolean) => string,
    strToBase64_?: () => string,
    base64ToStr_?: () => string,
    removeLastEnter_?: () => string,
    removeLastByStr_?: (str: string) => string,
    removeFirstByStr_?: (str: string) => string,
    toNoScientificString_?: () => string,
    canCastNumber_?: () => boolean,
    utf8HexStringToString_?: () => string,
    stringToUtf8HexString_?: (prefix?: boolean) => string,
  }
}


/**
 * 加
 * @param val
 * @returns {any}
 */
String.prototype.add_ = function (val: string | number): string {
  AssertUtil.canCast(this, 'bignumber')
  val = val.toString()
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this);
  return num1.plus(val).toString()
}

/**
 * 乘以10的几次方
 * @param num
 */
String.prototype.shiftedBy_ = function (num: string | number): string {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.shiftedBy(num.toNumber_()).toString()
}

String.prototype.unShiftedBy_ = function (num: string | number): string {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.shiftedBy(num.toString().negated_().toNumber_()).toString()
}

/**
 * 取相反数
 * @returns {string}
 */
String.prototype.negated_ = function (): string {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.negated().toString()
}

/**
 * 减
 * @param val
 * @returns {any}
 */
String.prototype.sub_ = function (val: string | number): string {
  AssertUtil.canCast(this, 'bignumber')
  val = val.toString()
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.minus(val).toString()
}

/**
 * 乘
 * @param val
 * @returns {any}
 */
String.prototype.multi_ = function (val: string | number): string {
  AssertUtil.canCast(this, 'bignumber')
  val = val.toString()
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.times(val).toString()
}

/**
 * 乘方
 * @param val
 * @returns {any}
 */
String.prototype.pow_ = function (val: string | number): string {
  AssertUtil.canCast(this, 'bignumber')
  val = val.toNumber_()
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.exponentiatedBy(val).toString()
}

/**
 * 除
 * @param val
 * @returns {string}
 */
String.prototype.div_ = function (val: string | number): string {
  AssertUtil.canCast(this, 'bignumber')
  val = val.toString()
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.div(val).toString()
}

/**
 * 求余
 * @param val
 * @returns {string}
 */
String.prototype.mod_ = function (val: string | number): string {
  AssertUtil.canCast(this, 'bignumber')
  val = val.toString()
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.mod(val).toString()
}

/**
 * 开根号
 * @returns {string}
 */
String.prototype.sqrt_ = function (): string {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.sqrt().toString()
}

/**
 * 是否大于
 * @param val
 * @returns {boolean}
 */
String.prototype.gt_ = function (val: string | number): boolean {
  AssertUtil.canCast(this, 'bignumber')
  val = val.toString()
  const num1 = new BigNumber(this)
  return num1.comparedTo(val) === 1
}

/**
 * 大于或等于
 * @param val
 * @returns {boolean}
 */
String.prototype.gte_ = function (val: string | number): boolean {
  AssertUtil.canCast(this, 'bignumber')
  val = val.toString()
  const num1 = new BigNumber(this)
  const result = num1.comparedTo(val)
  return result === 1 || result === 0
}

/**
 * 是否小于
 * @param val
 * @returns {boolean}
 */
String.prototype.lt_ = function (val: string | number): boolean {
  AssertUtil.canCast(this, 'bignumber')
  val = val.toString()
  const num1 = new BigNumber(this)
  return num1.comparedTo(val) === -1
}

/**
 * 小于或等于
 * @param val
 * @returns {boolean}
 */
String.prototype.lte_ = function (val: string | number): boolean {
  AssertUtil.canCast(this, 'bignumber')
  val = val.toString()
  const num1 = new BigNumber(this)
  const result = num1.comparedTo(val)
  return result === -1 || result === 0
}

/**
 * 是否相等
 * @param val
 * @returns {boolean}
 */
String.prototype.eq_ = function (val: string | number): boolean {
  AssertUtil.canCast(this, 'bignumber')
  val = val.toString()
  const num1 = new BigNumber(this)
  return num1.comparedTo(val) === 0
}

/**
 * 加千分号
 * @returns {string}
 */
String.prototype.addThousandSign_ = function (): string {
  AssertUtil.canCast(this, 'bignumber')
  const parts = this.split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts[1] === '' ? parts[0] : parts.join('.')
}

/**
 * 移除千分号
 * @returns {string}
 */
String.prototype.removeThousandSign_ = function (): string {
  AssertUtil.canCast(this, 'bignumber')
  return this.replace(new RegExp(',', 'g'), '')
}

/**
 * 保留小数点后几位
 * @param decimalRemain
 * @param remainMethod {number} ROUND_UP 0(直接截断，向上取整), ROUND_DOWN 1(直接截断，向下取整), ROUND_CEIL 2, ROUND_FLOOR 3, ROUND_HALF_UP 4(遇到.5的情况时往上近似,就是四舍五入), ROUND_HALF_DOWN 5(遇到.5的情况时往下近似), ROUND_HALF_EVEN 6, ROUND_HALF_CEIL 7, ROUND_HALF_FLOOR 8, EUCLID 9
 * @returns {string}
 */
String.prototype.remainDecimal_ = function (decimalRemain: number, remainMethod: number = BigNumber.ROUND_HALF_UP): string {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.toFixed(decimalRemain, remainMethod as BigNumber.RoundingMode)
}

/**
 * 获取小数部分的个数
 */
String.prototype.decimalCount_ = function (): number {
  AssertUtil.canCast(this, 'bignumber')
  return this.split('.')[1].length
}

/**
 * 取绝对值
 * @returns {string}
 */
String.prototype.abs_ = function (): string {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num = new BN(this)
  return num.abs().toString()
}

/**
 * 转换为二进制字符串
 * @returns {string}
 */
String.prototype.decimalToBinString_ = function (): string {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num = new BN(this)
  return '0b' + num.toString(2)
}

/**
 * 十进制转换为八进制字符串
 * @returns {string}
 */
String.prototype.decimalToOctString_ = function (): string {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num = new BN(this)
  return '0o' + num.toString(8)
}

/**
 * 十进制转换为十六进制字符串
 * @returns {string}
 */
String.prototype.decimalToHexString_ = function (prefix: boolean = true): string {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num = new BN(this)
  return (prefix ? '0x' : '') + num.toString(16)
}

/**
 * 直接取整
 * @returns {Number}
 */
String.prototype.toInt_ = function (): number {
  AssertUtil.canCast(this, 'bignumber')
  return parseInt(this)
}

/**
 * 转换为数值
 * @returns {Number}
 */
String.prototype.toNumber_ = function (): number {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num = new BN(this)
  return num.toNumber()
}

/**
 * hex string转换为number
 * @returns {number}
 */
String.prototype.hexToNumber_ = function (): number {
  let temp = this
  if (!temp.startsWith('0x')) {
    temp = '0x' + temp
  }
  AssertUtil.canCast(temp, 'bignumber')
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
String.prototype.numberStrToHex_ = function (): string {
  const byte = this.toNumber_()
  const hexByteMap = '0123456789ABCDEF'
  let str = ''
  str += hexByteMap.charAt(byte >> 4)
  str += hexByteMap.charAt(byte & 0x0f)
  return str
}

/**
 * 判断此值用于计算时是否具有精度问题
 */
String.prototype.hasPrecisionIssue_ = function (): boolean {
  AssertUtil.canCast(this, 'bignumber')
  return this.gt('9007199254740992')
}

// 字符串处理

/**
 * 移除开头几位字符串
 * @param num
 * @returns {Array}
 */
String.prototype.removeFirst_ = function (num: number): string {
  return this.substring(num, this.length)
}

/**
 * 移除最后几位字符串
 * @param num
 * @returns {string}
 */
String.prototype.removeLast_ = function (num: number): string {
  return this.substring(0, this.length - num)
}

/**
 * 获取开头几位
 * @param num
 * @returns {string}
 */
String.prototype.getFirst_ = function (num: number): string {
  return this.substring(0, num)
}

/**
 * 获取最后几位
 * @param num
 * @returns {string}
 */
String.prototype.getLast_ = function (num: number): string {
  return this.substring(this.length - num, this.length)
}

/**
 * 全部替换(只能简单替换字符串)
 * @param regStr
 * @param replaceStr
 * @returns {string}
 */
String.prototype.replaceAll_ = function (regStr: string, replaceStr: string): string {
  return this.replace(new RegExp(regStr, 'gm'), replaceStr)
}

/**
 * 正则查找所有
 * @param regStr
 * @returns {Array}
 */
String.prototype.findAll_ = function (regStr: string): object[] {
  const reg = new RegExp(regStr, 'g')
  reg.compile() // 作用是能够对正则表达式进行编译，被编译过的正则在使用的时候效率会更高，适合于对一个正则多次调用的情况下
  const results = []
  let a = null
  while (a = reg.exec(this)) {  // 数组中第0个元素是匹配的子字符串，第二个元素是正则中的第一个子分组匹配的结果（如果有子分组，即正则中存在用圆括号括起来的分组），第三个是正则中第二个子分组匹配的结果（如果有第二个子分组）
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
 * 从字符串中分类出指定区间的内容
 * @param splitStr1
 * @param splitStr2
 * @returns {{}}
 */
String.prototype.classify_ = function (splitStr1: string, splitStr2: string): object[] {
  const results = []
  const regStr = `${splitStr1}(.*?)${splitStr2}`
  const targets = this.findAll(regStr)
  for (let i = 0; i < targets.length; i++) {
    if (i === 0) {
      results.push({
        name: this.substring(0, targets[i]['index']),
        is: false,
        index: results.length
      })
    } else {
      results.push({
        name: this.substring(targets[i - 1]['index'] + targets[i - 1]['outputFull'].length, targets[i]['index']),
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
        name: this.substring(targets[i]['index'] + targets[i]['outputFull'].length, this.length),
        is: false,
        index: results.length
      })
    }
  }
  return results
}

/**
 * 十六进制字符串转化为Buffer
 * @returns {Array}
 */
String.prototype.hexToBuffer_ = function (): Buffer {
  let temp = this
  if (temp.startsWith('0x')) {
    temp = temp.substring(2, temp.length)
  }
  // 长度奇数前面加0
  if (temp.length % 2 !== 0) {
    temp = '0' + temp
  }
  return Buffer.from ? Buffer.from(temp, 'hex') : new Buffer(temp)
}

/**
 * 普通字符串转buffer
 * @returns {Buffer}
 */
String.prototype.toBuffer_ = function (): Buffer {
  return new Buffer(this)
}

/**
 * 十六进制字符串转化为十进制字符串
 * @returns {number|*}
 */
String.prototype.hexToDecimalString_ = function (): string {
  let temp = this
  if (!temp.startsWith('0x')) {
    temp = '0x' + temp
  }
  AssertUtil.canCast(temp, 'bignumber')
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
String.prototype.binToDecimalString_ = function (): string {
  let temp = this
  if (!temp.startsWith('0b')) {
    temp = '0b' + temp
  }
  AssertUtil.canCast(temp, 'bignumber')
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
String.prototype.isStrictHexString_ = function (): boolean {
  return /^(-)?0x[0-9a-f]*$/i.test(this)
}

/**
 * 清空hex字符串左边或右边的00
 * @param typeStr {string} left/right/both
 * @returns {string | void | *} 结果不带0x
 */
String.prototype.clearHexZeroZero_ = function (typeStr: string): string {
  let hex = this.replace(/^0x/i, '')
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
String.prototype.toBigNumber_ = function (): BigNumber {
  return new BigNumber(this)
}

/**
 * 移除尾随的0
 */
String.prototype.removeTrailingZeros_ = function (): string {
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(parseFloat(this))
  return num1.toString()
}

String.prototype.toArray_ = function (len: number = null, arrLen: number = null): any[] {
  if (len !== null && arrLen === null) {
    const num = this.length % len === 0 ? parseInt((this.length / len).toString()) : parseInt((this.length / len).toString()) + 1
    const newArrays = []
    for (let i = 0; i < num; i++) {
      const arr = this.slice(len * i, len * (i + 1))
      if (arr.length > 0) {
        newArrays.push(arr)
      }
    }
    return newArrays
  } else if (len === null && arrLen !== null) {
    const newArrays = []
    const num = parseInt((this.length / arrLen).toString())
    for (let i = 0; i < arrLen; i++) {
      const arr = this.slice(num * i, num * (i + 1))
      if (arr.length > 0) {
        newArrays.push(arr)
      }
    }
    if (num * arrLen < this.length) {
      newArrays[newArrays.length - 1] = newArrays[newArrays.length - 1].concat(this.slice(num * arrLen, this.length))
    }
    return newArrays
  } else {
    return []
  }
}

String.prototype.hexStrToBase64_ = function (): string {
  return Buffer.from(this, 'hex').toString('base64')
}

String.prototype.base64ToHexStr_ = function (prefix: boolean = true): string {
  return Buffer.from(this, 'base64').toHexString_(prefix)
}

String.prototype.strToBase64_ = function (): string {
  return Buffer.from(this).toString('base64')
}

String.prototype.base64ToStr_ = function (): string {
  return Buffer.from(this, 'base64').toString()
}

String.prototype.removeLastEnter_ = function (): string {
  if (this.endsWith('\r\n')) {
    return this.removeLast_(2)
  }

  if (this.endsWith('\n')) {
    return this.removeLast_(1)
  }
  return this
}

/**
 * 移除字符串最后一段。
 * @param str
 */
String.prototype.removeLastByStr_ = function (str: string): string {
  return this.split(str).removeLastOne_().join(str)
}

String.prototype.removeFirstByStr_ = function (str: string): string {
  return this.split(str).removeFirstOne_().join(str)
}

String.prototype.toNoScientificString_ = function (): string {
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.toString()
}

String.prototype.canCastNumber_ = function (): boolean {
  return AssertUtil.canCast(this, 'number', null, false)
}

String.prototype.utf8HexStringToString_ = function (): string {
  return this.hexToBuffer_().toString('utf8')
}

String.prototype.stringToUtf8HexString_ = function (prefix: boolean = true): string {
  return this.toBuffer_().toHexString_(prefix)
}

export {};
