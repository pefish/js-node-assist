'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 28/09/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _errorCodes = require('../constants/errorCodes');

var _errorCodes2 = _interopRequireDefault(_errorCodes);

var _ErrorHelper = require('../helpers/ErrorHelper');

var _ErrorHelper2 = _interopRequireDefault(_ErrorHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AssertUtil = function () {
  function AssertUtil() {
    _classCallCheck(this, AssertUtil);
  }

  _createClass(AssertUtil, null, [{
    key: 'notEmpty',
    value: function notEmpty(value) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if ('' === value || null === value || undefined === value) {
        throw new _ErrorHelper2.default('notEmpty except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_EMPTY_ERROR);
      }
    }
  }, {
    key: 'noMysqlInject',
    value: function noMysqlInject(value) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      ['=', '{', '}', ',', ':', ';', '|', '>', '<', '/', '"', '[', ']', '-', '+'].forEach(function (symbol) {
        if (typeof value === 'string' && value.includes(symbol)) {
          throw new _ErrorHelper2.default('noMysqlInject except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_NO_INJECT_ERROR);
        }
      });
    }

    // 判断参数是否是不合法的

  }, {
    key: '_isIllegal',
    value: function _isIllegal(value) {
      var result = false;
      if (JSON.stringify(value).includes('$')) {
        result = true;
      }
      return result;
    }
  }, {
    key: 'oneUpperAtLeast',
    value: function oneUpperAtLeast(value) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!/[A-Z]/.test(value)) {
        throw new _ErrorHelper2.default('oneUpperAtLeast except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_ONEUPPER_ATLEAST_ERROR);
      }
    }
  }, {
    key: 'noSpace',
    value: function noSpace(value) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (/\s/.test(value)) {
        throw new _ErrorHelper2.default('noSpace except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_NOSPACE_ERROR);
      }
    }
  }, {
    key: 'oneNumberAtLeast',
    value: function oneNumberAtLeast(value) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!/[0-9]/.test(value)) {
        throw new _ErrorHelper2.default('oneNumberAtLeast except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_ONENUMBER_ATLEAST_ERROR);
      }
    }
  }, {
    key: 'oneSymbolAtLeast',
    value: function oneSymbolAtLeast(value) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(value)) {
        throw new _ErrorHelper2.default('oneSymbolAtLeast except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_ONESYMBOL_ATLEAST_ERROR);
      }
    }
  }, {
    key: '_isType',
    value: function _isType(value, typeName) {
      if (typeof typeName === 'function') {
        return value instanceof typeName;
      }
      var result = false;
      switch (typeName) {
        case 'boolean':
          result = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === typeName;
          break;
        case 'string':
          result = typeof value === 'string';
          break;
        case 'number':
          result = value instanceof Number || !isNaN(Number(value));
          break;
        case 'integer':
          result = (value instanceof Number || !isNaN(Number(value))) && Number.isInteger(Number(value));
          break;
        case 'object':
          if (value instanceof Object) {
            if (this._isIllegal(value)) {
              throw new _ErrorHelper2.default('isType-illegal except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_ILLEGAL);
            } else {
              result = true;
            }
          } else {
            result = false;
          }
          break;
        case 'array':
          result = value instanceof Array;
          break;
      }
      return result;
    }
  }, {
    key: 'isType',
    value: function isType(value, typeName) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var result = false;
      if (typeName instanceof Array) {
        result = typeName.some(function (type_) {
          return AssertUtil._isType(value, type_);
        });
      } else {
        result = AssertUtil._isType(value, typeName);
      }
      if (result === false) {
        throw new _ErrorHelper2.default('isType except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_TYPE_ERROR);
      }
    }
  }, {
    key: 'gt',
    value: function gt(value, num) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (value instanceof Number || !isNaN(Number(value))) {
        if (value <= num) {
          throw new _ErrorHelper2.default('gt except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_GT_ERROR);
        }
      } else {
        throw new _ErrorHelper2.default('gt except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_TYPE_ERROR);
      }
    }
  }, {
    key: 'lt',
    value: function lt(value, num) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (value instanceof Number || !isNaN(Number(value))) {
        if (value >= num) {
          throw new _ErrorHelper2.default('lt except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_LT_ERROR);
        }
      } else {
        throw new _ErrorHelper2.default('lt except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_TYPE_ERROR);
      }
    }
  }, {
    key: 'lengthLt',
    value: function lengthLt(value, num) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (value.toString().length >= num) {
        throw new _ErrorHelper2.default('lengthLt except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_LENGTHLT_ERROR);
      }
    }
  }, {
    key: 'lengthGt',
    value: function lengthGt(value, num) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (value.toString().length <= num) {
        throw new _ErrorHelper2.default('lengthGt except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_LENGTHGT_ERROR);
      }
    }
  }, {
    key: 'lengthEq',
    value: function lengthEq(value, length) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (length instanceof Array) {
        if (!length.includes(value.toString().length)) {
          throw new _ErrorHelper2.default('lengthEq except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_LENGTHEQ_ERROR);
        }
      } else {
        if (value.toString().length !== length) {
          throw new _ErrorHelper2.default('lengthEq except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_LENGTHEQ_ERROR);
        }
      }
    }
  }, {
    key: 'in',
    value: function _in(value, array) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!array.includes(value)) {
        throw new _ErrorHelper2.default('request_value: ' + value + ', allow_array: ' + array + ', in except: ' + JSON.stringify(opts), _errorCodes2.default.PARAM_IN_ERROR);
      }
    }
  }, {
    key: 'isCustomType',
    value: function isCustomType(value, arrayOr) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var regexList = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        mobile: /^1[34578]\d{9}$/,
        vcode: /^\d{6}$/,
        number: /^\d+$/
      };
      var result = void 0;
      if (arrayOr instanceof Array) {
        result = arrayOr.map(function (regex) {
          return regexList[regex];
        }).some(function (regex) {
          return regex.test(value);
        });
      } else {
        result = regexList[arrayOr].test(value);
      }

      if (result === false) {
        throw new _ErrorHelper2.default('regex except: ' + JSON.stringify(opts) + ', value: ' + value, _errorCodes2.default.PARAM_REGEX_ERROR);
      }
    }
  }]);

  return AssertUtil;
}();

exports.default = AssertUtil;