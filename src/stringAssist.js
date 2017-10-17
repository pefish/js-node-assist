/**
 * Created by joy on 12/10/2017.
 */
import BigNumber from 'bignumber.js'
import AssertUtil from './common/utils/AssertUtil'

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

String.prototype.multi = function (val, retBigNumber = false) {
  AssertUtil.isType(val, ['string', BigNumber])
  const BN = BigNumber.another({
    EXPONENTIAL_AT: 1e+9
  })
  const num1 = new BN(this)
  return retBigNumber === true ? num1.multi(val) : num1.multi(val).toString()
}

// 加千分号
String.prototype.addThousandSign = function (decimalRemain = null, remainMethod = BigNumber.ROUND_HALF_UP) {
  return new BigNumber(this).toFormat(decimalRemain, remainMethod)
}




