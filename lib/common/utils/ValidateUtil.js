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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidateUtil = function () {
  function ValidateUtil() {
    _classCallCheck(this, ValidateUtil);
  }

  _createClass(ValidateUtil, null, [{
    key: 'notEmpty',


    /**
     *
     * @param argName 参数名
     * @param value client传过来的值
     * @param bool 配置中的值
     */
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(argName, value, bool) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!bool) {
                  _context.next = 5;
                  break;
                }

                if (!('' === value || null === value || undefined === value)) {
                  _context.next = 3;
                  break;
                }

                throw {
                  debugMsg: 'notEmpty except: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_EMPTY_ERROR
                };

              case 3:
                _context.next = 6;
                break;

              case 5:
                return _context.abrupt('return', -1);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function notEmpty(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return notEmpty;
    }()
  }, {
    key: 'noMysqlInject',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(argName, value, val) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (value) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return', -1);

              case 2:
                if (val === true || val === undefined) {
                  ['=', '{', '}', ',', ':', ';', '|', '>', '<', '/', '"', '[', ']', '-', '+'].forEach(function (symbol) {
                    if (typeof value === 'string' && value.includes(symbol)) {
                      throw {
                        debugMsg: 'noMysqlInject except: ' + argName,
                        errorCode: _errorCodes2.default.PARAM_NO_INJECT_ERROR
                      };
                    }
                  });
                }

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function noMysqlInject(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return noMysqlInject;
    }()

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
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(argName, value, bool) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (value) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return', -1);

              case 2:
                if (!(bool && !/[A-Z]/.test(value))) {
                  _context3.next = 4;
                  break;
                }

                throw {
                  debugMsg: 'oneUpperAtLeast except: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_ONEUPPER_ATLEAST_ERROR
                };

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function oneUpperAtLeast(_x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
      }

      return oneUpperAtLeast;
    }()
  }, {
    key: 'noSpace',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(argName, value, bool) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (value) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt('return', -1);

              case 2:
                if (!(bool && /\s/.test(value))) {
                  _context4.next = 4;
                  break;
                }

                throw {
                  debugMsg: 'noSpace except: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_NOSPACE_ERROR
                };

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function noSpace(_x10, _x11, _x12) {
        return _ref4.apply(this, arguments);
      }

      return noSpace;
    }()
  }, {
    key: 'oneNumberAtLeast',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(argName, value, bool) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (value) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt('return', -1);

              case 2:
                if (!(bool && !/[0-9]/.test(value))) {
                  _context5.next = 4;
                  break;
                }

                throw {
                  debugMsg: 'oneNumberAtLeast except: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_ONENUMBER_ATLEAST_ERROR
                };

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function oneNumberAtLeast(_x13, _x14, _x15) {
        return _ref5.apply(this, arguments);
      }

      return oneNumberAtLeast;
    }()
  }, {
    key: 'oneSymbolAtLeast',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(argName, value, bool) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (value) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt('return', -1);

              case 2:
                if (!(bool && !/[$&+,:;=?@#|'<>.^*()%!-]/.test(value))) {
                  _context6.next = 4;
                  break;
                }

                throw {
                  debugMsg: 'oneSymbolAtLeast except: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_ONESYMBOL_ATLEAST_ERROR
                };

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function oneSymbolAtLeast(_x16, _x17, _x18) {
        return _ref6.apply(this, arguments);
      }

      return oneSymbolAtLeast;
    }()
  }, {
    key: 'isType',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(argName, value, typeName) {
        var result;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (value) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt('return', -1);

              case 2:
                result = false;
                _context7.t0 = typeName;
                _context7.next = _context7.t0 === 'boolean' ? 6 : _context7.t0 === 'string' ? 8 : _context7.t0 === 'number' ? 10 : _context7.t0 === 'integer' ? 12 : _context7.t0 === 'object' ? 14 : _context7.t0 === 'array' ? 24 : 26;
                break;

              case 6:
                result = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === typeName;
                return _context7.abrupt('break', 26);

              case 8:
                result = typeof value === 'string';
                return _context7.abrupt('break', 26);

              case 10:
                result = value instanceof Number || !isNaN(Number(value));
                return _context7.abrupt('break', 26);

              case 12:
                result = (value instanceof Number || !isNaN(Number(value))) && Number.isInteger(Number(value));
                return _context7.abrupt('break', 26);

              case 14:
                if (!(value instanceof Object)) {
                  _context7.next = 22;
                  break;
                }

                if (!this._isIllegal(value)) {
                  _context7.next = 19;
                  break;
                }

                throw {
                  debugMsg: 'param illegal: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_ILLEGAL
                };

              case 19:
                result = true;

              case 20:
                _context7.next = 23;
                break;

              case 22:
                result = false;

              case 23:
                return _context7.abrupt('break', 26);

              case 24:
                result = value instanceof Array;
                return _context7.abrupt('break', 26);

              case 26:
                if (result) {
                  _context7.next = 28;
                  break;
                }

                throw {
                  debugMsg: 'isType except: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_TYPE_ERROR
                };

              case 28:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function isType(_x19, _x20, _x21) {
        return _ref7.apply(this, arguments);
      }

      return isType;
    }()
  }, {
    key: 'gt',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(argName, value, limitNum) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (value) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt('return', -1);

              case 2:
                if (!(value instanceof Number || !isNaN(Number(value)))) {
                  _context8.next = 7;
                  break;
                }

                if (!(value <= limitNum)) {
                  _context8.next = 5;
                  break;
                }

                throw {
                  debugMsg: 'gt except: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_GT_ERROR
                };

              case 5:
                _context8.next = 8;
                break;

              case 7:
                throw {
                  debugMsg: 'gt except: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_TYPE_ERROR
                };

              case 8:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function gt(_x22, _x23, _x24) {
        return _ref8.apply(this, arguments);
      }

      return gt;
    }()
  }, {
    key: 'lt',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(argName, value, limitNum) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (value) {
                  _context9.next = 2;
                  break;
                }

                return _context9.abrupt('return', -1);

              case 2:
                if (!(value instanceof Number || !isNaN(Number(value)))) {
                  _context9.next = 7;
                  break;
                }

                if (!(value >= limitNum)) {
                  _context9.next = 5;
                  break;
                }

                throw {
                  debugMsg: 'lt except: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_LT_ERROR
                };

              case 5:
                _context9.next = 8;
                break;

              case 7:
                throw {
                  debugMsg: 'lt except: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_TYPE_ERROR
                };

              case 8:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function lt(_x25, _x26, _x27) {
        return _ref9.apply(this, arguments);
      }

      return lt;
    }()
  }, {
    key: 'lengthLt',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(argName, value, limitNum) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (value) {
                  _context10.next = 2;
                  break;
                }

                return _context10.abrupt('return', -1);

              case 2:
                if (!(value.toString().length >= limitNum)) {
                  _context10.next = 4;
                  break;
                }

                throw {
                  debugMsg: 'lengthLt except: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_LENGTHLT_ERROR
                };

              case 4:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function lengthLt(_x28, _x29, _x30) {
        return _ref10.apply(this, arguments);
      }

      return lengthLt;
    }()
  }, {
    key: 'lengthGt',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(argName, value, limitNum) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (value) {
                  _context11.next = 2;
                  break;
                }

                return _context11.abrupt('return', -1);

              case 2:
                if (!(value.toString().length <= limitNum)) {
                  _context11.next = 4;
                  break;
                }

                throw {
                  debugMsg: 'lengthGt except: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_LENGTHGT_ERROR
                };

              case 4:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function lengthGt(_x31, _x32, _x33) {
        return _ref11.apply(this, arguments);
      }

      return lengthGt;
    }()
  }, {
    key: 'lengthEq',
    value: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(argName, value, length) {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (value) {
                  _context12.next = 2;
                  break;
                }

                return _context12.abrupt('return', -1);

              case 2:
                if (!(length instanceof Array)) {
                  _context12.next = 7;
                  break;
                }

                if (length.includes(value.toString().length)) {
                  _context12.next = 5;
                  break;
                }

                throw {
                  debugMsg: 'lengthEq except: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_LENGTHEQ_ERROR
                };

              case 5:
                _context12.next = 9;
                break;

              case 7:
                if (!(value.toString().length !== length)) {
                  _context12.next = 9;
                  break;
                }

                throw {
                  debugMsg: 'lengthEq except: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_LENGTHEQ_ERROR
                };

              case 9:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function lengthEq(_x34, _x35, _x36) {
        return _ref12.apply(this, arguments);
      }

      return lengthEq;
    }()
  }, {
    key: 'in',
    value: function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(argName, value, array) {
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (value) {
                  _context13.next = 2;
                  break;
                }

                return _context13.abrupt('return', -1);

              case 2:
                if (array.includes(value)) {
                  _context13.next = 4;
                  break;
                }

                throw {
                  debugMsg: 'request_value: ' + value + ', allow_array: ' + array + ', in except: ' + argName,
                  errorCode: _errorCodes2.default.PARAM_IN_ERROR
                };

              case 4:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function _in(_x37, _x38, _x39) {
        return _ref13.apply(this, arguments);
      }

      return _in;
    }()
  }, {
    key: 'regex',
    value: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(argName, value, array) {
        var regexList, result;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                regexList = {
                  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  mobile: /^1[34578]\d{9}$/,
                  vcode: /^\d{6}$/,
                  number: /^\d+$/
                };

                if (value) {
                  _context14.next = 3;
                  break;
                }

                return _context14.abrupt('return', -1);

              case 3:
                result = void 0;

                if (array instanceof Array) {
                  result = array.map(function (regex) {
                    return regexList[regex];
                  }).some(function (regex) {
                    return regex.test(value);
                  });
                } else {
                  result = regexList[array].test(value);
                }

                if (result) {
                  _context14.next = 7;
                  break;
                }

                throw {
                  debugMsg: 'regex except: ' + argName + ', value: ' + value,
                  errorCode: _errorCodes2.default.PARAM_REGEX_ERROR
                };

              case 7:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function regex(_x40, _x41, _x42) {
        return _ref14.apply(this, arguments);
      }

      return regex;
    }()
  }]);

  return ValidateUtil;
}();

exports.default = ValidateUtil;