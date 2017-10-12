'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 17/08/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _bitcoin = require('bitcoin');

var _bitcoin2 = _interopRequireDefault(_bitcoin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BitcoinRpcHelper = function () {
  function BitcoinRpcHelper(host, port, user, pwd) {
    var sslEnable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    _classCallCheck(this, BitcoinRpcHelper);

    this.rpcClient = new _bitcoin2.default.Client({
      host: host,
      port: port,
      user: user,
      pass: pwd,
      ssl: sslEnable,
      sslStrict: false
    });
  }

  _createClass(BitcoinRpcHelper, [{
    key: 'getRawMemPool',
    value: function getRawMemPool() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.rpcClient.getRawMemPool(function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: 'getInfo',
    value: function getInfo() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.rpcClient.getInfo(function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: 'listUnspent',
    value: function listUnspent(addresses) {
      var _this3 = this;

      var minConf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var maxConf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 9999999;

      return new Promise(function (resolve, reject) {
        _this3.rpcClient.listUnspent(minConf, maxConf, addresses, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: 'resendWalletTransactions',
    value: function resendWalletTransactions() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4.rpcClient.resendWalletTransactions(function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: 'setTxFee',
    value: function setTxFee(fee) {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        _this5.rpcClient.setTxFee(fee, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: 'sendRawTransaction',
    value: function sendRawTransaction(hex) {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        _this6.rpcClient.sendRawTransaction(hex, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: 'getBlock',
    value: function getBlock(blockHash) {
      var _this7 = this;

      return new Promise(function (resolve, reject) {
        _this7.rpcClient.getBlock(blockHash, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: 'walletPassphrase',
    value: function walletPassphrase(pwd) {
      var _this8 = this;

      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

      return new Promise(function (resolve, reject) {
        _this8.rpcClient.walletPassphrase(pwd, timeout, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: 'sendFrom',
    value: function sendFrom(fromAccount, toAddress, amount) {
      var _this9 = this;

      return new Promise(function (resolve, reject) {
        _this9.rpcClient.sendFrom(fromAccount, toAddress, amount, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: 'validateAddress',
    value: function validateAddress(address) {
      var _this10 = this;

      return new Promise(function (resolve, reject) {
        _this10.rpcClient.validateAddress(address, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: 'getTransaction',
    value: function getTransaction(txId) {
      var _this11 = this;

      return new Promise(function (resolve, reject) {
        _this11.rpcClient.getTransaction(txId, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: 'walletLock',
    value: function walletLock() {
      var _this12 = this;

      return new Promise(function (resolve, reject) {
        _this12.rpcClient.walletLock(function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }

    // 查看账户余额

  }, {
    key: 'getBalance',
    value: function getBalance() {
      var _this13 = this;

      var account = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      return new Promise(function (resolve, reject) {
        if (account) {
          _this13.rpcClient.getBalance(account, function (err, result) {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        } else {
          _this13.rpcClient.getBalance(function (err, result) {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        }
      });
    }
  }, {
    key: 'getReceivedByAddress',
    value: function getReceivedByAddress(address) {
      var _this14 = this;

      return new Promise(function (resolve, reject) {
        _this14.rpcClient.getReceivedByAddress(address, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }

    // 使用默认账户''发送比特币

  }, {
    key: 'sendToAddress',
    value: function sendToAddress(address, amount) {
      var _this15 = this;

      return new Promise(function (resolve, reject) {
        _this15.rpcClient.sendToAddress(address, amount, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: 'getNewAddress',
    value: function getNewAddress() {
      var _this16 = this;

      var account = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var autoKeyPool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return new Promise(function (resolve, reject) {
        _this16.rpcClient.getNewAddress(account, function (err, result) {
          if (err) {
            if (autoKeyPool) {
              _this16.rpcClient.keypoolRefill(function (err, result) {
                if (!err) {
                  _this16.rpcClient.getNewAddress(account, function (err, result) {
                    if (err) {
                      reject(err);
                    } else {
                      resolve(result);
                    }
                  });
                } else {
                  reject(err);
                }
              });
            } else {
              reject(err);
            }
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: 'getRawTransaction',
    value: function getRawTransaction(txid) {
      var _this17 = this;

      return new Promise(function (resolve, reject) {
        _this17.rpcClient.getRawTransaction(txid, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }

    // 使用默认账户''发送比特币

  }, {
    key: 'sendToAddressFrom',
    value: function sendToAddressFrom(account, address, amount) {
      var _this18 = this;

      return new Promise(function (resolve, reject) {
        _this18.rpcClient.sendFrom(account, address, amount, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }]);

  return BitcoinRpcHelper;
}();

exports.default = BitcoinRpcHelper;