import BigNumber from 'bignumber.js'
import AssertUtil from '../utils/AssertUtil'

// Number处理

/**
 * 加
 * @param val
 * @param retBigNumber
 * @returns {any}
 */
String.prototype.add = function (val, retBigNumber = false) {
  AssertUtil.isType(val, 'string')
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.another({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return retBigNumber === true ? num1.add(val) : num1.add(val).toString()
}

/**
 * 减
 * @param val
 * @param retBigNumber
 * @returns {any}
 */
String.prototype.sub = function (val, retBigNumber = false) {
  AssertUtil.isType(val, 'string')
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.another({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return retBigNumber === true ? num1.sub(val) : num1.sub(val).toString()
}

/**
 * 乘
 * @param val
 * @param retBigNumber
 * @returns {any}
 */
String.prototype.multi = function (val, retBigNumber = false) {
  AssertUtil.isType(val, 'string')
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.another({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return retBigNumber === true ? num1.times(val) : num1.times(val).toString()
}

/**
 * 除
 * @param val
 * @param retBigNumber
 * @returns {any}
 */
String.prototype.div = function (val, retBigNumber = false) {
  AssertUtil.isType(val, 'string')
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.another({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return retBigNumber === true ? num1.div(val) : num1.div(val).toString()
}

/**
 * 是否大于
 * @param val
 * @returns {boolean}
 */
String.prototype.gt = function (val) {
  AssertUtil.isType(val, 'string')
  AssertUtil.canCast(this, 'bignumber')
  const num1 = new BigNumber(this)
  return num1.comparedTo(val) === 1
}

/**
 * 是否小于
 * @param val
 * @returns {boolean}
 */
String.prototype.lt = function (val) {
  AssertUtil.isType(val, 'string')
  AssertUtil.canCast(this, 'bignumber')
  const num1 = new BigNumber(this)
  return num1.comparedTo(val) === -1
}

/**
 * 是否相等
 * @param val
 * @returns {boolean}
 */
String.prototype.eq = function (val) {
  AssertUtil.isType(val, 'string')
  AssertUtil.canCast(this, 'bignumber')
  const num1 = new BigNumber(this)
  return num1.comparedTo(val) === 0
}

/**
 * 加千分号
 * @param decimalRemain
 * @param remainMethod
 * @returns {string}
 */
String.prototype.addThousandSign = function (decimalRemain = null, remainMethod = BigNumber.ROUND_HALF_UP) {
  AssertUtil.canCast(this, 'bignumber')
  const parts = this.split(".")
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return parts[1] === '' ? parts[0] : parts.join(".")
}

/**
 * 移除千分号
 * @returns {string}
 */
String.prototype.removeThousandSign = function () {
  AssertUtil.canCast(this, 'bignumber')
  return this.replace(new RegExp(',', 'g'), '')
}

/**
 * 保留小数点后几位
 * @param decimalRemain
 * @param remainMethod
 * @returns {string}
 */
String.prototype.remainDecimal = function (decimalRemain = null, remainMethod = BigNumber.ROUND_HALF_UP) {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.another({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.toFixed(decimalRemain, remainMethod)
}

/**
 * 获取小数部分的个数
 */
String.prototype.decimalCount = function () {
  AssertUtil.canCast(this, 'bignumber')
  return this.split('.')[1].length
}

/**
 * 取绝对值
 * @returns {string}
 */
String.prototype.abs = function () {
  AssertUtil.canCast(this, 'bignumber')
  const BN = BigNumber.another({
    EXPONENTIAL_AT: 1e+9
  })
  const num = new BN(this)
  return num.abs().toString()
}

/**
 * 转换为二进制字符串
 * @returns {string}
 */
String.prototype.decimalToBin = function () {
  AssertUtil.canCast(this, 'bignumber')
  return this.toInt().toString(2)
}

/**
 * 十进制转换为八进制字符串
 * @returns {string}
 */
String.prototype.decimalToOct = function () {
  AssertUtil.canCast(this, 'bignumber')
  return this.toInt().toString(8)
}

/**
 * 十进制转换为十六进制字符串
 * @returns {string}
 */
String.prototype.decimalToHex = function () {
  AssertUtil.canCast(this, 'bignumber')
  return this.toInt().toString(16)
}

/**
 * 直接取整
 * @returns {Number}
 */
String.prototype.toInt = function () {
  AssertUtil.canCast(this, 'bignumber')
  return parseInt(this)
}

/**
 * 转换为float
 * @returns {Number}
 */
String.prototype.toFloat = function () {
  AssertUtil.canCast(this, 'bignumber')
  return parseFloat(this)
}

/**
 * 判断此值用于计算时是否具有精度问题
 */
String.prototype.hasPrecisionIssue = function () {
  AssertUtil.canCast(this, 'bignumber')
  return this.gt('9007199254740992')
}

// 字符串处理

/**
 * 移除开头几位字符串
 * @param num
 * @returns {Array}
 */
String.prototype.removeFirst = function (num) {
  return this.substring(num, this.length)
}

/**
 * 移除最后几位字符串
 * @param num
 * @returns {string}
 */
String.prototype.removeLast = function (num) {
  return this.substring(0, this.length - num)
}

/**
 * 根据多个字符(串)分割
 * @param searchStrs
 * @returns {Array}
 */
String.prototype.splits = function (searchStrs) {
  const str = searchStrs.join('|')
  return this.split(new RegExp(str, 'gm'))
}

/**
 * 全部替换
 * @param regStr
 * @param replaceStr
 * @returns {string}
 */
String.prototype.replaceAll = function (regStr, replaceStr) {
  return this.replace(new RegExp(regStr, 'gm'), replaceStr)
}

String.prototype.findAll = function (regStr) {
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
String.prototype.classify = function (splitStr1, splitStr2) {
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
String.prototype.hexToBuffer = function () {
  let temp = this
  if (temp.startsWith('0x')) {
    temp = temp.substring(2, temp.length)
  }
  return Buffer.from(temp, 'hex')
}
