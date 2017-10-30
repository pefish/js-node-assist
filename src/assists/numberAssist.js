import AssertUtil from '../utils/AssertUtil'

Number.prototype.equals = function (val) {
  AssertUtil.isType(val, 'number')
  return this === val
}


