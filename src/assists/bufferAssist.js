/**
 * 转换为十进制的bytes数组
 * @returns {string}
 */
Buffer.prototype.toDecimalArray = function () {
  return [].slice.call(this)
}

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
 * 获取字节数
 */
Buffer.prototype.getBytesLength = function () {
  return this.length
}
