/** @module */

import BigNumber from 'bignumber.js'
import AssertUtil from 'p-js-assert'
// 进制计算的结果都要带上相应前缀 二进制0b 八进制0o 十六进制0x

/**
 * 加
 * @param val
 * @returns {any}
 */
const add = function (val) {
  AssertUtil.canCast(this, 'bignumber')
  val = val.toString()
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.plus(val).toString()
}

/**
 * 乘以10的几次方
 * @param num
 */
const shiftedBy = function (num) {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.shiftedBy(num.toNumber()).toString()
}

const unShiftedBy = function (num) {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.shiftedBy(num.toString().negated().toNumber()).toString()
}

/**
 * 取相反数
 * @returns {string}
 */
const negated = function () {
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
const sub = function (val) {
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
const multi = function (val) {
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
const pow = function (val) {
  AssertUtil.canCast(this, 'bignumber')
  val = val.toNumber()
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
const div = function (val) {
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
const mod = function (val) {
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
const sqrt = function () {
  AssertUtil.canCast(this, 'bignumber')
  val = val.toString()
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
const gt = function (val) {
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
const gtOrEq = function (val) {
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
const lt = function (val) {
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
const ltOrEq = function (val) {
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
const eq = function (val) {
  AssertUtil.canCast(this, 'bignumber')
  val = val.toString()
  const num1 = new BigNumber(this)
  return num1.comparedTo(val) === 0
}

/**
 * 加千分号
 * @returns {string}
 */
const addThousandSign = function () {
  AssertUtil.canCast(this, 'bignumber')
  const parts = this.split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts[1] === '' ? parts[0] : parts.join('.')
}

/**
 * 移除千分号
 * @returns {string}
 */
const removeThousandSign = function () {
  AssertUtil.canCast(this, 'bignumber')
  return this.replace(new RegExp(',', 'g'), '')
}

/**
 * 保留小数点后几位
 * @param decimalRemain
 * @param remainMethod {number} ROUND_UP 0(直接截断，向上取整), ROUND_DOWN 1(直接截断，向下取整), ROUND_CEIL 2, ROUND_FLOOR 3, ROUND_HALF_UP 4(遇到.5的情况时往上近似,就是四舍五入), ROUND_HALF_DOWN 5(遇到.5的情况时往下近似), ROUND_HALF_EVEN 6, ROUND_HALF_CEIL 7, ROUND_HALF_FLOOR 8, EUCLID 9
 * @returns {string}
 */
const remainDecimal = function (decimalRemain = null, remainMethod = BigNumber.ROUND_HALF_UP) {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.toFixed(decimalRemain, remainMethod)
}

/**
 * 获取小数部分的个数
 */
const decimalCount = function () {
  AssertUtil.canCast(this, 'bignumber')
  return this.split('.')[1].length
}

/**
 * 取绝对值
 * @returns {string}
 */
const abs = function () {
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
const decimalToBinString = function () {
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
const decimalToOctString = function () {
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
const decimalToHexString = function () {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num = new BN(this)
  return '0x' + num.toString(16)
}

/**
 * 直接取整
 * @returns {Number}
 */
const toInt = function () {
  AssertUtil.canCast(this, 'bignumber')
  return parseInt(this)
}

/**
 * 转换为数值
 * @returns {Number}
 */
const toNumber = function () {
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
const hexToNumber = function () {
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
const numberStrToHex = function () {
  const byte = this.toNumber()
  const hexByteMap = '0123456789ABCDEF'
  let str = ''
  str += hexByteMap.charAt(byte >> 4)
  str += hexByteMap.charAt(byte & 0x0f)
  return str
}

/**
 * 判断此值用于计算时是否具有精度问题
 */
const hasPrecisionIssue = function () {
  AssertUtil.canCast(this, 'bignumber')
  return this.gt('9007199254740992')
}

// 字符串处理

/**
 * 移除开头几位字符串
 * @param num
 * @returns {Array}
 */
const removeFirst = function (num) {
  return this.substring(num, this.length)
}

/**
 * 移除最后几位字符串
 * @param num
 * @returns {string}
 */
const removeLast = function (num) {
  return this.substring(0, this.length - num)
}

/**
 * 获取开头几位
 * @param num
 * @returns {string}
 */
const getFirst = function (num) {
  return this.substring(0, num)
}

/**
 * 获取最后几位
 * @param num
 * @returns {string}
 */
const getLast = function (num) {
  return this.substring(this.length - num, this.length)
}

/**
 * 全部替换(只能简单替换字符串)
 * @param regStr
 * @param replaceStr
 * @returns {string}
 */
const replaceAll = function (regStr, replaceStr) {
  return this.replace(new RegExp(regStr, 'gm'), replaceStr)
}

/**
 * 正则查找所有
 * @param regStr
 * @returns {Array}
 */
const findAll = function (regStr) {
  const reg = new RegExp(regStr, 'g')
  reg.compile(reg) //作用是能够对正则表达式进行编译，被编译过的正则在使用的时候效率会更高，适合于对一个正则多次调用的情况下
  let results = []
  let a = null
  while (a = reg.exec(this)) {  //数组中第0个元素是匹配的子字符串，第二个元素是正则中的第一个子分组匹配的结果（如果有子分组，即正则中存在用圆括号括起来的分组），第三个是正则中第二个子分组匹配的结果（如果有第二个子分组）
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
const classify = function (splitStr1, splitStr2) {
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
const hexToBuffer = function () {
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
const toBuffer = function () {
  return new Buffer(this)
}

/**
 * 十六进制字符串转化为十进制字符串
 * @returns {number|*}
 */
const hexToDecimalString = function () {
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
const binToDecimalString = function () {
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
const isStrictHexString = function () {
  return /^(-)?0x[0-9a-f]*$/i.test(this)
}

/**
 * 清空hex字符串左边或右边的00
 * @param typeStr {string} left/right/both
 * @returns {string | void | *} 结果不带0x
 */
const clearZeroZero = function (typeStr) {
  let hex = this.replace(/^0x/i, '')
  if (typeStr === 'left') {
    hex = hex.replace(/^(?:00)*/, '')
  } else if (typeStr === 'right') {
    hex = hex.split('').reverse().join('')
    hex = hex.replace(/^(?:00)*/,'')
    hex = hex.split('').reverse().join('')
  } else if (typeStr === 'both') {
    hex = hex.replace(/^(?:00)*/, '')
    hex = hex.split('').reverse().join('')
    hex = hex.replace(/^(?:00)*/,'')
    hex = hex.split('').reverse().join('')
  }
  return hex
}

/**
 * 转换成BigNumber对象
 * @returns {BigNumber}
 */
const toBigNumber = function () {
  return new BigNumber(this)
}

/**
 * 移除尾随的0
 */
const removeTrailingZeros = function () {
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(parseFloat(this))
  return num1.toString()
}

const toArray = function (len = null, arrLen = null) {
  if (len !== null && arrLen === null) {
    let num = this.length % len === 0 ? parseInt(this.length / len) : parseInt(this.length / len) + 1
    let newArrays = []
    for (let i = 0; i < num; i++) {
      let arr = this.slice(len * i, len * (i + 1))
      if (arr.length > 0) {
        newArrays.push(arr)
      }
    }
    return newArrays
  } else if (len === null && arrLen !== null) {
    let newArrays = []
    const num = parseInt(this.length / arrLen)
    for (let i = 0; i < arrLen; i++) {
      let arr = this.slice(num * i, num * (i + 1))
      if (arr.length > 0) {
        newArrays.push(arr)
      }
    }
    if (num * arrLen < this.length) {
      newArrays[newArrays.length - 1] = newArrays[newArrays.length - 1].concat(this.slice(num * arrLen, this.length))
    }
    return newArrays
  } else {
    return null
  }
}

const hexStrToBase64 = function () {
  return Buffer.from(this, 'hex').toString('base64')
}

const base64ToHexStr = function () {
  return Buffer.from(this, 'base64').toString('hex')
}

const strToBase64 = function () {
  return Buffer.from(this).toString('base64')
}

const base64ToStr = function () {
  return Buffer.from(this, 'base64').toString()
}

const removeLastEnter = function () {
  if (this.endsWith('\r\n')) {
    return this.removeLast(2)
  }

  if (this.endsWith('\n')) {
    return this.removeLast(1)
  }
  return this
}

/**
 * 移除字符串最后一段。
 * @param str
 */
const removeLastByStr = function (str) {
  return this.split(str).removeLastOne().join(str)
}

const removeFirstByStr = function (str) {
  return this.split(str).removeFirstOne().join(str)
}

const toNoScientificString = function () {
  const BN = BigNumber.clone({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.toString()
}

const canCastNumber = function () {
  return AssertUtil.canCast(this, 'number', null, false)
}

const utf8HexStringToString = function () {
  return this.hexToBuffer().toString('utf8')
}

const stringToUtf8HexString = function () {
  return this.toBuffer().toHexString()
}

String.prototype.add = add
String.prototype.sub = sub
String.prototype.multi = multi
String.prototype.pow = pow
String.prototype.div = div
String.prototype.mod = mod
String.prototype.gt = gt
String.prototype.gtOrEq = gtOrEq
String.prototype.gte = gtOrEq
String.prototype.lt = lt
String.prototype.ltOrEq = ltOrEq
String.prototype.lte = ltOrEq
String.prototype.eq = eq
String.prototype.addThousandSign = addThousandSign
String.prototype.removeThousandSign = removeThousandSign
String.prototype.remainDecimal = remainDecimal
String.prototype.decimalCount = decimalCount
String.prototype.abs = abs
String.prototype.decimalToBinString = decimalToBinString
String.prototype.decimalToOctString = decimalToOctString
String.prototype.decimalToHexString = decimalToHexString
String.prototype.toInt = toInt
String.prototype.toNumber = toNumber
String.prototype.hasPrecisionIssue = hasPrecisionIssue
String.prototype.removeFirst = removeFirst
String.prototype.removeLast = removeLast
String.prototype.replaceAll = replaceAll
String.prototype.findAll = findAll
String.prototype.classify = classify
String.prototype.hexToBuffer = hexToBuffer
String.prototype.toBuffer = toBuffer
String.prototype.hexToDecimalString = hexToDecimalString
String.prototype.binToDecimalString = binToDecimalString
String.prototype.isStrictHexString = isStrictHexString
String.prototype.clearZeroZero = clearZeroZero
String.prototype.toBigNumber = toBigNumber
String.prototype.shiftedBy = shiftedBy
String.prototype.unShiftedBy = unShiftedBy
String.prototype.negated = negated
String.prototype.removeTrailingZeros = removeTrailingZeros
String.prototype.toArray = toArray
String.prototype.hexToNumber = hexToNumber
String.prototype.numberStrToHex = numberStrToHex
String.prototype.getFirst = getFirst
String.prototype.getLast = getLast
String.prototype.hexStrToBase64 = hexStrToBase64
String.prototype.strToBase64 = strToBase64
String.prototype.base64ToHexStr = base64ToHexStr
String.prototype.base64ToStr = base64ToStr
String.prototype.sqrt = sqrt
String.prototype.removeLastEnter = removeLastEnter
String.prototype.removeLastByStr = removeLastByStr
String.prototype.removeFirstByStr = removeFirstByStr
String.prototype.toNoScientificString = toNoScientificString
String.prototype.canCastNumber = canCastNumber
String.prototype.utf8HexStringToString = utf8HexStringToString
String.prototype.stringToUtf8HexString = stringToUtf8HexString