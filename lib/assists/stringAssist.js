'use strict';

var _bignumber = require('bignumber.js');

var _bignumber2 = _interopRequireDefault(_bignumber);

var _AssertUtil = require('../utils/AssertUtil');

var _AssertUtil2 = _interopRequireDefault(_AssertUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Number处理

/**
 * 加
 * @param val
 * @param retBigNumber
 * @returns {any}
 */
String.prototype.add = function (val) {
  var retBigNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  _AssertUtil2.default.isType(val, ['string', _bignumber2.default]);
  _AssertUtil2.default.canCast(this, 'bignumber');
  var BN = _bignumber2.default.another({
    EXPONENTIAL_AT: 1e+9
  });
  var num1 = new BN(this);
  return retBigNumber === true ? num1.add(val) : num1.add(val).toString();
};

/**
 * 减
 * @param val
 * @param retBigNumber
 * @returns {any}
 */
String.prototype.sub = function (val) {
  var retBigNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  _AssertUtil2.default.isType(val, ['string', _bignumber2.default]);
  _AssertUtil2.default.canCast(this, 'bignumber');
  var BN = _bignumber2.default.another({
    EXPONENTIAL_AT: 1e+9
  });
  var num1 = new BN(this);
  return retBigNumber === true ? num1.sub(val) : num1.sub(val).toString();
};

/**
 * 乘
 * @param val
 * @param retBigNumber
 * @returns {any}
 */
String.prototype.multi = function (val) {
  var retBigNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  _AssertUtil2.default.isType(val, ['string', _bignumber2.default]);
  _AssertUtil2.default.canCast(this, 'bignumber');
  var BN = _bignumber2.default.another({
    EXPONENTIAL_AT: 1e+9
  });
  var num1 = new BN(this);
  return retBigNumber === true ? num1.times(val) : num1.times(val).toString();
};

/**
 * 除
 * @param val
 * @param retBigNumber
 * @returns {any}
 */
String.prototype.div = function (val) {
  var retBigNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  _AssertUtil2.default.isType(val, ['string', _bignumber2.default]);
  _AssertUtil2.default.canCast(this, 'bignumber');
  var BN = _bignumber2.default.another({
    EXPONENTIAL_AT: 1e+9
  });
  var num1 = new BN(this);
  return retBigNumber === true ? num1.div(val) : num1.div(val).toString();
};

/**
 * 是否大于
 * @param val
 * @returns {boolean}
 */
String.prototype.gt = function (val) {
  _AssertUtil2.default.isType(val, ['string', _bignumber2.default]);
  _AssertUtil2.default.canCast(this, 'bignumber');
  var num1 = new _bignumber2.default(this);
  return num1.comparedTo(val) === 1;
};

/**
 * 是否小于
 * @param val
 * @returns {boolean}
 */
String.prototype.lt = function (val) {
  _AssertUtil2.default.isType(val, ['string', _bignumber2.default]);
  _AssertUtil2.default.canCast(this, 'bignumber');
  var num1 = new _bignumber2.default(this);
  return num1.comparedTo(val) === -1;
};

/**
 * 是否相等
 * @param val
 * @returns {boolean}
 */
String.prototype.eq = function (val) {
  _AssertUtil2.default.isType(val, ['string', _bignumber2.default]);
  _AssertUtil2.default.canCast(this, 'bignumber');
  var num1 = new _bignumber2.default(this);
  return num1.comparedTo(val) === 0;
};

/**
 * 加千分号
 * @param decimalRemain
 * @param remainMethod
 * @returns {string}
 */
String.prototype.addThousandSign = function () {
  var decimalRemain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var remainMethod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _bignumber2.default.ROUND_HALF_UP;

  _AssertUtil2.default.canCast(this, 'bignumber');
  var parts = this.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts[1] === '' ? parts[0] : parts.join(".");
  // return new BigNumber(this).toFormat(decimalRemain, remainMethod)
};

/**
 * 移除千分号
 * @returns {string}
 */
String.prototype.removeThousandSign = function () {
  _AssertUtil2.default.canCast(this, 'bignumber');
  return this.replace(new RegExp(',', 'g'), '');
};

/**
 * 保留小数点后几位
 * @param decimalRemain
 * @param remainMethod
 * @returns {string}
 */
String.prototype.remainDecimal = function () {
  var decimalRemain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var remainMethod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _bignumber2.default.ROUND_HALF_UP;

  _AssertUtil2.default.canCast(this, 'bignumber');
  var BN = _bignumber2.default.another({
    EXPONENTIAL_AT: 1e+9
  });
  var num1 = new BN(this);
  return num1.toFixed(decimalRemain, remainMethod);
};

/**
 * 获取小数部分的个数
 */
String.prototype.decimalCount = function () {
  _AssertUtil2.default.canCast(this, 'bignumber');
  return this.split('.')[1].length;
};

/**
 * 取绝对值
 * @returns {string}
 */
String.prototype.abs = function () {
  _AssertUtil2.default.canCast(this, 'bignumber');
  var BN = _bignumber2.default.another({
    EXPONENTIAL_AT: 1e+9
  });
  var num = new BN(this);
  return num.abs().toString();
};

/**
 * 转换为二进制字符串
 * @returns {string}
 */
String.prototype.toBinString = function () {
  _AssertUtil2.default.canCast(this, 'bignumber');
  return this.toInt().toString(2);
};

/**
 * 转换为八进制字符串
 * @returns {string}
 */
String.prototype.toOctString = function () {
  _AssertUtil2.default.canCast(this, 'bignumber');
  return this.toInt().toString(8);
};

/**
 * 转换为十六进制字符串
 * @returns {string}
 */
String.prototype.toHexString = function () {
  _AssertUtil2.default.canCast(this, 'bignumber');
  return this.toInt().toString(16);
};

/**
 * 直接取整
 * @returns {Number}
 */
String.prototype.toInt = function () {
  _AssertUtil2.default.canCast(this, 'bignumber');
  return parseInt(this);
};

/**
 * 转换为float
 * @returns {Number}
 */
String.prototype.toFloat = function () {
  _AssertUtil2.default.canCast(this, 'bignumber');
  return parseFloat(this);
};

/**
 * 判断此值用于计算时是否具有精度问题
 */
String.prototype.hasPrecisionIssue = function () {
  _AssertUtil2.default.canCast(this, 'bignumber');
  return this.gt('9007199254740992');
};

// 字符串处理

/**
 * 根据多个字符(串)分割
 * @param searchStrs
 * @returns {Array}
 */
String.prototype.splits = function (searchStrs) {
  var str = searchStrs.join('|');
  return this.split(new RegExp(str, 'gm'));
};

/**
 * 全部替换
 * @param regStr
 * @param replaceStr
 * @returns {string}
 */
String.prototype.replaceAll = function (regStr, replaceStr) {
  return this.replace(new RegExp(regStr, 'gm'), replaceStr);
};

String.prototype.findAll = function (regStr) {
  var reg = new RegExp(regStr, 'g');
  reg.compile(reg); //作用是能够对正则表达式进行编译，被编译过的正则在使用的时候效率会更高，适合于对一个正则多次调用的情况下
  var results = [];
  var a = null;
  while (a = reg.exec(this)) {
    //数组中第0个元素是匹配的子字符串，第二个元素是正则中的第一个子分组匹配的结果（如果有子分组，即正则中存在用圆括号括起来的分组），第三个是正则中第二个子分组匹配的结果（如果有第二个子分组）
    results.push({
      outputFull: a[0],
      output: a[1],
      index: a['index'],
      input: a['input']
    });
  }
  return results;
};

/**
 * 从字符串中分类出指定区间的内容
 * @param splitStr1
 * @param splitStr2
 * @returns {{}}
 */
String.prototype.classify = function (splitStr1, splitStr2) {
  var results = [];
  var regStr = splitStr1 + '(.*?)' + splitStr2;
  var targets = this.findAll(regStr);
  for (var i = 0; i < targets.length; i++) {
    if (i === 0) {
      results.push({
        name: this.substring(0, targets[i]['index']),
        is: false,
        index: results.length
      });
    } else {
      results.push({
        name: this.substring(targets[i - 1]['index'] + targets[i - 1]['outputFull'].length, targets[i]['index']),
        is: false,
        index: results.length
      });
    }
    results.push({
      name: targets[i]['output'],
      is: true,
      index: results.length
    });
    if (i === targets.length - 1) {
      results.push({
        name: this.substring(targets[i]['index'] + targets[i]['outputFull'].length, this.length),
        is: false,
        index: results.length
      });
    }
  }
  return results;
};