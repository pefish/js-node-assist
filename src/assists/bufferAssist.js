import BigNumber from 'bignumber.js'

/**
 * 转换为十进制的bytes数组
 * @returns {string}
 */
Buffer.prototype.toDecimalArray = function () {
  return [].slice.call(this)
}

/**
 * 转化为二进制字符串
 * @returns {string}
 */
Buffer.prototype.toBinString = function () {
  return this.toDecimalArray().map(function (x) {
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
Buffer.prototype.toHexString = function (prefix = true) {
  let temp = this.toString('hex')
  temp === '' && (temp = '00')
  if (prefix === false) {
    return temp
  } else {
    return '0x' + temp
  }
}

/**
 * 转化为十进制数值
 * @returns {number}
 */
Buffer.prototype.toDecimal = function () {
  return new BigNumber(this.toString('hex'), 16).toNumber()
}

/**
 * 获取字节数
 */
Buffer.prototype.getBytesLength = function () {
  return this.length
}