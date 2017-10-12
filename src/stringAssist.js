/**
 * Created by joy on 12/10/2017.
 */
import BigNumber from 'bignumber.js'
import AssertUtil from './common/utils/AssertUtil'

function assertType (val) {
  if (typeof val !== 'string') {
    throw new Error(`'string' type can not compare to '${typeof val}' type`)
  }
}

String.prototype.equals = function (val) {
  AssertUtil.isType(val, 'string')
  return this === val
}

String.prototype.add = function (val) {
  AssertUtil.isType(val, ['string', BigNumber])
  const num1 = new BigNumber(this)
  const num2 = (val instanceof BigNumber) ? val : new BigNumber(val)
  return num1.add(num2).toString()
}



