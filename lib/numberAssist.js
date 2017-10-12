'use strict';

var _AssertUtil = require('./common/utils/AssertUtil');

var _AssertUtil2 = _interopRequireDefault(_AssertUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Number.prototype.equals = function (val) {
  _AssertUtil2.default.isType(val, 'number');
  return this === val;
}; /**
    * Created by joy on 12/10/2017.
    */