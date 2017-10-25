/**
 * Created by joy on 12/10/2017.
 */
import BigNumber from 'bignumber.js'
import AssertUtil from './AssertUtil'

String.prototype.equals = function (val) {
  AssertUtil.isType(val, 'string')
  return this === val
}

String.prototype.add = function (val, retBigNumber = false) {
  AssertUtil.isType(val, ['string', BigNumber])
  const BN = BigNumber.another({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return retBigNumber === true ? num1.add(val) : num1.add(val).toString()
}

String.prototype.sub = function (val, retBigNumber = false) {
  AssertUtil.isType(val, ['string', BigNumber])
  const BN = BigNumber.another({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return retBigNumber === true ? num1.sub(val) : num1.sub(val).toString()
}

String.prototype.multi = function (val, retBigNumber = false) {
  AssertUtil.isType(val, ['string', BigNumber])
  const BN = BigNumber.another({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return retBigNumber === true ? num1.times(val) : num1.times(val).toString()
}

String.prototype.div = function (val, retBigNumber = false) {
  AssertUtil.isType(val, ['string', BigNumber])
  const BN = BigNumber.another({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return retBigNumber === true ? num1.div(val) : num1.div(val).toString()
}

String.prototype.gt = function (val) {
  AssertUtil.isType(val, ['string', BigNumber])
  const num1 = new BigNumber(this)
  return num1.comparedTo(val) === 1
}

String.prototype.lt = function (val) {
  AssertUtil.isType(val, ['string', BigNumber])
  const num1 = new BigNumber(this)
  return num1.comparedTo(val) === -1
}

String.prototype.eq = function (val) {
  AssertUtil.isType(val, ['string', BigNumber])
  const num1 = new BigNumber(this)
  return num1.comparedTo(val) === 0
}

// 加千分号
String.prototype.addThousandSign = function (decimalRemain = null, remainMethod = BigNumber.ROUND_HALF_UP) {
  const parts = this.split(".")
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return parts[1] === '' ? parts[0] : parts.join(".")
  // return new BigNumber(this).toFormat(decimalRemain, remainMethod)
}

// 移除千分号
String.prototype.removeThousandSign = function () {
  return this.replace(new RegExp(',', 'g'), '')
}

String.prototype.remainDecimal = function (decimalRemain = null, remainMethod = BigNumber.ROUND_HALF_UP) {
  const BN = BigNumber.another({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return num1.toFixed(decimalRemain, remainMethod)
}

String.prototype.replaceAll = function (regStr, replaceStr) {
  return this.replace(new RegExp(regStr, 'gm'), replaceStr)
}

String.prototype.decimalCount = function () {
  const num1 = new BigNumber(this)
  return this.split('.')[1].length
}



