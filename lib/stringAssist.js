'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by joy on 12/10/2017.
                                                                                                                                                                                                                                                                               */


var _bignumber = require('bignumber.js');

var _bignumber2 = _interopRequireDefault(_bignumber);

var _AssertUtil = require('./common/utils/AssertUtil');

var _AssertUtil2 = _interopRequireDefault(_AssertUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assertType(val) {
  if (typeof val !== 'string') {
    throw new Error('\'string\' type can not compare to \'' + (typeof val === 'undefined' ? 'undefined' : _typeof(val)) + '\' type');
  }
}

String.prototype.equals = function (val) {
  _AssertUtil2.default.isType(val, 'string');
  return this === val;
};

String.prototype.add = function (val) {
  _AssertUtil2.default.isType(val, ['string', _bignumber2.default]);
  var num1 = new _bignumber2.default(this);
  var num2 = val instanceof _bignumber2.default ? val : new _bignumber2.default(val);
  return num1.add(num2).toString();
};