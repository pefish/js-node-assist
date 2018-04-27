/** @module */

import BigNumber from 'bignumber.js'
import AssertUtil from '../utils/AssertUtil'


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
  return num1.shiftedBy(num).toString()
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
  return num1.pow(val).toString()
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
  return this.toInt().toString(2)
}

/**
 * 十进制转换为八进制字符串
 * @returns {string}
 */
const decimalToOctString = function () {
  AssertUtil.canCast(this, 'bignumber')
  return this.toInt().toString(8)
}

/**
 * 十进制转换为十六进制字符串
 * @returns {string}
 */
const decimalToHexString = function () {
  AssertUtil.canCast(this, 'bignumber')
  return this.toInt().toString(16)
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
  return num.abs().toNumber()
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
 * 根据多个字符(串)分割
 * @param searchStrs {array}
 * @returns {Array}
 */
const splits = function (searchStrs) {
  const str = searchStrs.join('|')
  return this.split(new RegExp(str, 'gm'))
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
 * 十六进制字符串转化为十进制字符串
 * @returns {number|*}
 */
const hexToDecimalString = function () {
  // return this.hexToBuffer().toDecimal()
  return parseInt(this, 16).toString()
}

/**
 * 二进制字符串转十进制字符串
 * @returns {number}
 */
const binToDecimalString = function () {
  return parseInt(this, 2).toString()
}

/**
 * 检查是否是严格的hex数据
 * @returns {boolean}
 */
const isStrictHexString = function () {
  return /^(-)?0x[0-9a-f]*$/i.test(this)
}

/**
 * 字符串转化为utf8编码的hex, 带0x
 * @returns {string}
 */
const stringToUtf8HexString = function () {
  let str = require('utf8').encode(this)
  let hex = ''
  str = str.replace(/^(?:\u0000)*/,'')
  str = str.split('').reverse().join('')
  str = str.replace(/^(?:\u0000)*/,'')
  str = str.split('').reverse().join('')

  for(let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    const n = code.toString(16)
    hex += n.length < 2 ? '0' + n : n
  }

  return '0x' + hex
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
 * utf8编码的hex转化为字符串, 带0x
 * @returns {*}
 */
const utf8HexStringToString = function () {
  let str = ''
  let code = 0
  let hex = this.replace(/^0x/i,'')

  hex = hex.replace(/^(?:00)*/,'')
  hex = hex.split('').reverse().join('')
  hex = hex.replace(/^(?:00)*/,'')
  hex = hex.split('').reverse().join('')

  const l = hex.length

  for (let i=0; i < l; i+=2) {
    code = parseInt(hex.substr(i, 2), 16)
    str += String.fromCharCode(code)
  }

  return require('utf8').decode(str)
}

const toBigNumber = function () {
  return new BigNumber(this)
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
String.prototype.splits = splits
String.prototype.replaceAll = replaceAll
String.prototype.findAll = findAll
String.prototype.classify = classify
String.prototype.hexToBuffer = hexToBuffer
String.prototype.hexToDecimalString = hexToDecimalString
String.prototype.binToDecimalString = binToDecimalString
String.prototype.stringToUtf8HexString = stringToUtf8HexString
String.prototype.utf8HexStringToString = utf8HexStringToString
String.prototype.isStrictHexString = isStrictHexString
String.prototype.clearZeroZero = clearZeroZero
String.prototype.toBigNumber = toBigNumber
String.prototype.shiftedBy = shiftedBy
