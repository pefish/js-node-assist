'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 17/08/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 0.19.0

var BitcoinRpcHelper = function () {
  function BitcoinRpcHelper(host, port) {
    _classCallCheck(this, BitcoinRpcHelper);

    if (!host || !port) {
      this.web3 = new _web2.default();
    } else {
      this.web3 = new _web2.default(new _web2.default.providers.HttpProvider('http://' + host + ':' + port));
    }
  }

  _createClass(BitcoinRpcHelper, [{
    key: 'getTransaction',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(txHash) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', this.web3.eth.getTransaction(txHash));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getTransaction(_x) {
        return _ref.apply(this, arguments);
      }

      return getTransaction;
    }()
  }, {
    key: 'getBalanceOfAddr',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(address) {
        var temp;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.web3.eth.getBalance(address);

              case 2:
                temp = _context2.sent.toNumber();
                return _context2.abrupt('return', this.web3.fromWei(temp, 'ether'));

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getBalanceOfAddr(_x2) {
        return _ref2.apply(this, arguments);
      }

      return getBalanceOfAddr;
    }()
  }, {
    key: 'getContractInstance',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(address, abiObj) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', this.web3.eth.contract(abiObj).at(address));

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getContractInstance(_x3, _x4) {
        return _ref3.apply(this, arguments);
      }

      return getContractInstance;
    }()
  }, {
    key: 'getEventInstance',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(contractAddress, abiObj, eventName, indexes) {
        var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var contractInstance;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                contractInstance = this.web3.eth.contract(abiObj).at(contractAddress);

                if (!options) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt('return', contractInstance[eventName](indexes, options));

              case 3:
                return _context4.abrupt('return', contractInstance[eventName](indexes));

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getEventInstance(_x5, _x6, _x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return getEventInstance;
    }()
  }, {
    key: 'queryContract',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(address, abiObj, methodName, args) {
        var _web3$eth$contract$at;

        var _args5 = arguments;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                logger.error(_args5);
                _context5.next = 3;
                return (_web3$eth$contract$at = this.web3.eth.contract(abiObj).at(address)[methodName]).call.apply(_web3$eth$contract$at, _toConsumableArray(args));

              case 3:
                return _context5.abrupt('return', _context5.sent.toString());

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function queryContract(_x10, _x11, _x12, _x13) {
        return _ref5.apply(this, arguments);
      }

      return queryContract;
    }()
  }, {
    key: 'callContract',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(contractInstance, methodName, from, args) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt('return', new Promise(function (resolve, reject) {
                  contractInstance[methodName].apply(contractInstance, _toConsumableArray(args).concat([{ from: from }, function (err, res) {
                    if (err) {
                      reject(err);
                      return;
                    }
                    resolve(res);
                  }]));
                }));

              case 1:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function callContract(_x14, _x15, _x16, _x17) {
        return _ref6.apply(this, arguments);
      }

      return callContract;
    }()
  }, {
    key: 'getTransactionCount',
    value: function getTransactionCount(address) {
      return this.web3.eth.getTransactionCount(address);
    }
  }, {
    key: 'sendRawTransaction',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(txHex) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt('return', new Promise(function (resolve, reject) {
                  _this.web3.eth.sendRawTransaction(txHex, function (err, hash) {
                    if (err) {
                      reject(err);
                    } else {
                      resolve(hash);
                    }
                  });
                }));

              case 1:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function sendRawTransaction(_x18) {
        return _ref7.apply(this, arguments);
      }

      return sendRawTransaction;
    }()
  }, {
    key: 'getLatestBlockNumber',
    value: function getLatestBlockNumber() {
      return this.web3.eth.blockNumber;
    }
  }, {
    key: 'Web3',
    get: function get() {
      return this.web3;
    }
  }]);

  return BitcoinRpcHelper;
}();

exports.default = BitcoinRpcHelper;