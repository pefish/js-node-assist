'use strict';

var _bignumber = require('bignumber.js');

var _bignumber2 = _interopRequireDefault(_bignumber);

var _AssertUtil = require('./AssertUtil');

var _AssertUtil2 = _interopRequireDefault(_AssertUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by joy on 12/10/2017.
 */
String.prototype.equals = function (val) {
  _AssertUtil2.default.isType(val, 'string');
  return this === val;
};

String.prototype.add = function (val) {
  var retBigNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  _AssertUtil2.default.isType(val, ['string', _bignumber2.default]);
  var BN = _bignumber2.default.another({
    EXPONENTIAL_AT: 1e+9
  });
  var num1 = new BN(this);
  return retBigNumber === true ? num1.add(val) : num1.add(val).toString();
};

String.prototype.sub = function (val) {
  var retBigNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  _AssertUtil2.default.isType(val, ['string', _bignumber2.default]);
  var BN = _bignumber2.default.another({
    EXPONENTIAL_AT: 1e+9
  });
  var num1 = new BN(this);
  return retBigNumber === true ? num1.sub(val) : num1.sub(val).toString();
};

String.prototype.multi = function (val) {
  var retBigNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  _AssertUtil2.default.isType(val, ['string', _bignumber2.default]);
  var BN = _bignumber2.default.another({
    EXPONENTIAL_AT: 1e+9
  });
  var num1 = new BN(this);
  return retBigNumber === true ? num1.times(val) : num1.times(val).toString();
};

String.prototype.div = function (val) {
  var retBigNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  _AssertUtil2.default.isType(val, ['string', _bignumber2.default]);
  var BN = _bignumber2.default.another({
    EXPONENTIAL_AT: 1e+9
  });
  var num1 = new BN(this);
  return retBigNumber === true ? num1.div(val) : num1.div(val).toString();
};

String.prototype.gt = function (val) {
  _AssertUtil2.default.isType(val, ['string', _bignumber2.default]);
  var num1 = new _bignumber2.default(this);
  return num1.comparedTo(val) === 1;
};

String.prototype.lt = function (val) {
  _AssertUtil2.default.isType(val, ['string', _bignumber2.default]);
  var num1 = new _bignumber2.default(this);
  return num1.comparedTo(val) === -1;
};

String.prototype.eq = function (val) {
  _AssertUtil2.default.isType(val, ['string', _bignumber2.default]);
  var num1 = new _bignumber2.default(this);
  return num1.comparedTo(val) === 0;
};

// 加千分号
String.prototype.addThousandSign = function () {
  var decimalRemain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var remainMethod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _bignumber2.default.ROUND_HALF_UP;

  var parts = this.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts[1] === '' ? parts[0] : parts.join(".");
  // return new BigNumber(this).toFormat(decimalRemain, remainMethod)
};

// 移除千分号
String.prototype.removeThousandSign = function () {
  return this.replace(new RegExp(',', 'g'), '');
};

String.prototype.remainDecimal = function () {
  var decimalRemain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var remainMethod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _bignumber2.default.ROUND_HALF_UP;

  var BN = _bignumber2.default.another({
    EXPONENTIAL_AT: 1e+9
  });
  var num1 = new BN(this);
  return num1.round(decimalRemain, remainMethod).toString();
};