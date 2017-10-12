'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bccBitcoinjsLib = require('bcc-bitcoinjs-lib');

var _bccBitcoinjsLib2 = _interopRequireDefault(_bccBitcoinjsLib);

var _bignumber = require('bignumber.js');

var _bignumber2 = _interopRequireDefault(_bignumber);

var _BitcoinHelper2 = require('./BitcoinHelper');

var _BitcoinHelper3 = _interopRequireDefault(_BitcoinHelper2);

var _ErrorHelper = require('../../helpers/ErrorHelper');

var _ErrorHelper2 = _interopRequireDefault(_ErrorHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by joy on 17/08/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var BitcoinCashWalletHelper = function (_BitcoinHelper) {
  _inherits(BitcoinCashWalletHelper, _BitcoinHelper);

  function BitcoinCashWalletHelper() {
    _classCallCheck(this, BitcoinCashWalletHelper);

    return _possibleConstructorReturn(this, (BitcoinCashWalletHelper.__proto__ || Object.getPrototypeOf(BitcoinCashWalletHelper)).call(this, _bccBitcoinjsLib2.default));
  }

  /**
   * 根据输出最小数额以及输出最大个数构造输出
   * @param utxos
   * @param targetAddress
   * @param outputMinAmount
   * @param outputMaxNum
   * @param fee
   * @returns {Promise.<Array>}
   */


  _createClass(BitcoinCashWalletHelper, [{
    key: 'constructOutput',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(utxos, targetAddress, outputMinAmount, outputMaxNum, fee) {
        var output, totalUtxoBalance, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, utxo, utxoBalance, totalUtxoNotFee, counter, i, tail, amountPer, _i, _tail;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                output = [];

                fee = new _bignumber2.default(fee.toString());
                outputMinAmount = new _bignumber2.default(outputMinAmount.toString());
                totalUtxoBalance = new _bignumber2.default('0');
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 7;

                for (_iterator = utxos[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  utxo = _step.value;
                  utxoBalance = utxo.utxoBalance;

                  totalUtxoBalance = totalUtxoBalance.plus(new _bignumber2.default(utxoBalance.toString()));
                }
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](7);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 15:
                _context.prev = 15;
                _context.prev = 16;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 18:
                _context.prev = 18;

                if (!_didIteratorError) {
                  _context.next = 21;
                  break;
                }

                throw _iteratorError;

              case 21:
                return _context.finish(18);

              case 22:
                return _context.finish(15);

              case 23:
                totalUtxoNotFee = totalUtxoBalance.minus(fee);

                if (totalUtxoNotFee.div(outputMinAmount) < outputMaxNum) {
                  counter = parseInt(totalUtxoNotFee.div(outputMinAmount).toNumber());

                  for (i = 0; i < counter; i++) {
                    output.push({
                      address: targetAddress,
                      amount: this.satoshiToBcc(outputMinAmount)
                    });
                  }
                  tail = totalUtxoNotFee.minus(outputMinAmount.times(counter));

                  if (tail > 0) {
                    output.push({
                      address: targetAddress,
                      amount: this.satoshiToBcc(tail)
                    });
                  }
                } else {
                  amountPer = parseInt(totalUtxoNotFee.div(outputMaxNum).toNumber());

                  for (_i = 0; _i < outputMaxNum; _i++) {
                    output.push({
                      address: targetAddress,
                      amount: this.satoshiToBcc(amountPer)
                    });
                  }
                  _tail = totalUtxoNotFee.minus(new _bignumber2.default(amountPer.toString()).times(outputMaxNum));

                  if (_tail > 0) {
                    output.push({
                      address: targetAddress,
                      amount: this.satoshiToBcc(_tail)
                    });
                  }
                }
                return _context.abrupt('return', output);

              case 26:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 11, 15, 23], [16,, 18, 22]]);
      }));

      function constructOutput(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      }

      return constructOutput;
    }()

    /**
     * 将金额分发到指定地址
     * @param utxos
     * @param targetAddress
     * @param outputMinAmount
     * @param outputMaxNum
     * @param fee
     * @param network
     * @param sign
     * @returns {Promise.<{txHex, txId}>}
     */

  }, {
    key: 'buildAndDistributeTx',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(utxos, targetAddress, outputMinAmount, outputMaxNum, fee) {
        var network = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'bitcoin';
        var sign = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;

        var tx, totalUtxoBalance, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, utxo, utxoTxId, utxoOutputIndex, utxoBalance, totalUtxoNotFee, counter, i, tail, amountPer, _i2, _tail2, buildedTx;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fee = new _bignumber2.default(fee.toString());
                outputMinAmount = new _bignumber2.default(outputMinAmount.toString());
                tx = new _bccBitcoinjsLib2.default.TransactionBuilder(_bccBitcoinjsLib2.default.networks[network]);

                tx.setVersion(2);
                totalUtxoBalance = new _bignumber2.default('0');
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 8;

                for (_iterator2 = utxos[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  utxo = _step2.value;
                  utxoTxId = utxo.utxoTxId, utxoOutputIndex = utxo.utxoOutputIndex, utxoBalance = utxo.utxoBalance;

                  tx.addInput(utxoTxId, utxoOutputIndex);
                  totalUtxoBalance = totalUtxoBalance.plus(new _bignumber2.default(utxoBalance.toString()));
                }
                // logger.error('totalUtxoBalance:', totalUtxoBalance)
                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2['catch'](8);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t0;

              case 16:
                _context2.prev = 16;
                _context2.prev = 17;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 19:
                _context2.prev = 19;

                if (!_didIteratorError2) {
                  _context2.next = 22;
                  break;
                }

                throw _iteratorError2;

              case 22:
                return _context2.finish(19);

              case 23:
                return _context2.finish(16);

              case 24:
                totalUtxoNotFee = totalUtxoBalance.minus(fee);
                // logger.error('fee:', fee)

                if (totalUtxoNotFee.div(outputMinAmount) < outputMaxNum) {
                  counter = parseInt(totalUtxoNotFee.div(outputMinAmount).toNumber());

                  for (i = 0; i < counter; i++) {
                    // logger.error('amount:', outputMinAmount)
                    tx.addOutput(targetAddress, outputMinAmount.toNumber());
                  }
                  tail = totalUtxoNotFee.minus(outputMinAmount.times(counter));
                  // logger.error('tail:', tail)

                  tail > 0 && tx.addOutput(targetAddress, tail.toNumber());
                } else {
                  amountPer = parseInt(totalUtxoNotFee.div(outputMaxNum).toNumber());

                  for (_i2 = 0; _i2 < outputMaxNum; _i2++) {
                    // logger.error('amount:', amountPer)
                    tx.addOutput(targetAddress, amountPer);
                  }
                  _tail2 = totalUtxoNotFee.minus(new _bignumber2.default(amountPer).times(outputMaxNum));

                  _tail2 > 0 && tx.addOutput(targetAddress, _tail2.toNumber());
                }
                buildedTx = null;

                if (!sign) {
                  _context2.next = 33;
                  break;
                }

                _context2.next = 30;
                return this._signUtxos(tx, utxos, network);

              case 30:
                buildedTx = _context2.sent;
                _context2.next = 34;
                break;

              case 33:
                buildedTx = tx.buildIncomplete();

              case 34:
                return _context2.abrupt('return', {
                  txHex: buildedTx.toHex(),
                  txId: buildedTx.getId()
                });

              case 35:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[8, 12, 16, 24], [17,, 19, 23]]);
      }));

      function buildAndDistributeTx(_x6, _x7, _x8, _x9, _x10) {
        return _ref2.apply(this, arguments);
      }

      return buildAndDistributeTx;
    }()
  }, {
    key: '_signUtxos',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(tx, utxos, network) {
        var hashType;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                tx.enableBitcoinCash(true);
                hashType = _bccBitcoinjsLib2.default.Transaction.SIGHASH_ALL | _bccBitcoinjsLib2.default.Transaction.SIGHASH_BITCOINCASHBIP143;
                // console.log('hashType', hashType)

                utxos.map(function (utxo, index) {
                  var utxoBalance = utxo.utxoBalance,
                      privateKey = utxo.privateKey;

                  var keyPair = _bccBitcoinjsLib2.default.ECPair.fromWIF(privateKey, _bccBitcoinjsLib2.default.networks[network]);
                  tx.sign(index, keyPair, null, hashType, utxoBalance);
                });
                return _context3.abrupt('return', tx.build());

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _signUtxos(_x13, _x14, _x15) {
        return _ref3.apply(this, arguments);
      }

      return _signUtxos;
    }()

    /**
     * 签名hex交易(bug)
     * @param privateKeys
     * @param txHex
     * @param network
     * @returns {Promise.<{txHex, txId}>}
     */

  }, {
    key: 'signTransaction',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(privateKeys, txHex) {
        var network = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'testnet';
        var transaction, tx, hashType, buildedTx;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // {
                //   index: 0,
                //   privateKey: 'tyur'
                // }
                // logger.error(arguments)
                transaction = _bccBitcoinjsLib2.default.Transaction.fromHex(txHex);
                tx = _bccBitcoinjsLib2.default.TransactionBuilder.fromTransaction(transaction, _bccBitcoinjsLib2.default.networks[network]);

                tx.enableBitcoinCash(true);
                hashType = _bccBitcoinjsLib2.default.Transaction.SIGHASH_ALL | _bccBitcoinjsLib2.default.Transaction.SIGHASH_BITCOINCASHBIP143;

                privateKeys.map(function (p) {
                  var index = p.index,
                      utxoBalance = p.utxoBalance,
                      privateKey = p.privateKey;

                  var keyPair = _bccBitcoinjsLib2.default.ECPair.fromWIF(privateKey, _bccBitcoinjsLib2.default.networks[network]);
                  tx.sign(index, keyPair, null, hashType, utxoBalance);
                });
                // logger.error(tx.inputs)
                buildedTx = tx.build();
                return _context4.abrupt('return', {
                  txHex: buildedTx.toHex(),
                  txId: buildedTx.getId()
                });

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function signTransaction(_x16, _x17) {
        return _ref4.apply(this, arguments);
      }

      return signTransaction;
    }()
  }, {
    key: 'getTransactionfromHex',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(txHex) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt('return', _bccBitcoinjsLib2.default.Transaction.fromHex(txHex));

              case 1:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getTransactionfromHex(_x19) {
        return _ref5.apply(this, arguments);
      }

      return getTransactionfromHex;
    }()
  }, {
    key: 'getTransactionBuilderfromHex',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(txHex, network) {
        var transaction;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // 未签名的txHex将取不到input
                transaction = _bccBitcoinjsLib2.default.Transaction.fromHex(txHex);
                return _context6.abrupt('return', _bccBitcoinjsLib2.default.TransactionBuilder.fromTransaction(transaction, _bccBitcoinjsLib2.default.networks[network]));

              case 2:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getTransactionBuilderfromHex(_x20, _x21) {
        return _ref6.apply(this, arguments);
      }

      return getTransactionBuilderfromHex;
    }()

    /**
     * 生成交易
     * @param utxos
     * @param targets
     * @param fee
     * @param changeAddress
     * @param network
     * @param sign
     * @returns {Promise.<*>}
     */

  }, {
    key: 'buildTransaction',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(utxos, targets, fee, changeAddress) {
        var network = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'bitcoin';
        var sign = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
        var printLog = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

        var targetInputs, tx, totalUtxoBalance, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, utxo, utxoTxId, utxoOutputIndex, utxoBalance, targetTotalAmount, changeIndex, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, target, address, amount, index, realIndex, buildedTx;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (this.isSatoshi(fee)) {
                  _context7.next = 2;
                  break;
                }

                throw {
                  errorMessage: 'fee不是satoshi'
                };

              case 2:
                targets.sort(function (a, b) {
                  return a['index'] - b['index'];
                });

                if (!(targets[0]['index'] !== 1)) {
                  _context7.next = 5;
                  break;
                }

                throw {
                  errorMessage: '目标index必须从1开始'
                };

              case 5:
                targetInputs = [];
                tx = new _bccBitcoinjsLib2.default.TransactionBuilder(_bccBitcoinjsLib2.default.networks[network]);

                tx.setVersion(2);
                totalUtxoBalance = new _bignumber2.default('0');
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context7.prev = 12;

                for (_iterator3 = utxos[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  utxo = _step3.value;
                  utxoTxId = utxo.utxoTxId, utxoOutputIndex = utxo.utxoOutputIndex, utxoBalance = utxo.utxoBalance;

                  printLog && logger.info('输入: ', utxoBalance);
                  tx.addInput(utxoTxId, utxoOutputIndex);
                  totalUtxoBalance = totalUtxoBalance.plus(new _bignumber2.default(utxoBalance));
                }
                _context7.next = 20;
                break;

              case 16:
                _context7.prev = 16;
                _context7.t0 = _context7['catch'](12);
                _didIteratorError3 = true;
                _iteratorError3 = _context7.t0;

              case 20:
                _context7.prev = 20;
                _context7.prev = 21;

                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }

              case 23:
                _context7.prev = 23;

                if (!_didIteratorError3) {
                  _context7.next = 26;
                  break;
                }

                throw _iteratorError3;

              case 26:
                return _context7.finish(23);

              case 27:
                return _context7.finish(20);

              case 28:
                targetTotalAmount = new _bignumber2.default('0');

                targets.map(function (target) {
                  var amount = target.amount;

                  targetTotalAmount = targetTotalAmount.plus(new _bignumber2.default(amount));
                });
                printLog && logger.info('输出: ', totalUtxoBalance.minus(targetTotalAmount).minus(fee).toString());
                changeIndex = tx.addOutput(changeAddress, totalUtxoBalance.minus(targetTotalAmount).minus(fee).toNumber());
                _iteratorNormalCompletion4 = true;
                _didIteratorError4 = false;
                _iteratorError4 = undefined;
                _context7.prev = 35;
                _iterator4 = targets[Symbol.iterator]();

              case 37:
                if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                  _context7.next = 55;
                  break;
                }

                target = _step4.value;
                address = target.address, amount = target.amount, index = target.index;

                printLog && logger.info('输出: ', amount);
                realIndex = null;
                _context7.prev = 42;

                realIndex = tx.addOutput(address, amount);
                _context7.next = 49;
                break;

              case 46:
                _context7.prev = 46;
                _context7.t1 = _context7['catch'](42);
                throw new _ErrorHelper2.default('构造output出错', 0, target);

              case 49:
                if (!(realIndex !== index)) {
                  _context7.next = 51;
                  break;
                }

                throw new _ErrorHelper2.default('index没有匹配上', 1);

              case 51:
                targetInputs.push({
                  index: realIndex,
                  address: address,
                  amount: amount
                });

              case 52:
                _iteratorNormalCompletion4 = true;
                _context7.next = 37;
                break;

              case 55:
                _context7.next = 61;
                break;

              case 57:
                _context7.prev = 57;
                _context7.t2 = _context7['catch'](35);
                _didIteratorError4 = true;
                _iteratorError4 = _context7.t2;

              case 61:
                _context7.prev = 61;
                _context7.prev = 62;

                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }

              case 64:
                _context7.prev = 64;

                if (!_didIteratorError4) {
                  _context7.next = 67;
                  break;
                }

                throw _iteratorError4;

              case 67:
                return _context7.finish(64);

              case 68:
                return _context7.finish(61);

              case 69:
                printLog && logger.info('fee: ', fee);
                buildedTx = null;

                if (!sign) {
                  _context7.next = 77;
                  break;
                }

                _context7.next = 74;
                return this._signUtxos(tx, utxos, network);

              case 74:
                buildedTx = _context7.sent;
                _context7.next = 78;
                break;

              case 77:
                buildedTx = tx.buildIncomplete();

              case 78:
                return _context7.abrupt('return', {
                  txHex: buildedTx.toHex(),
                  txId: buildedTx.getId(),
                  change: totalUtxoBalance.minus(targetTotalAmount).minus(fee),
                  output_index: changeIndex,
                  target_outputs: targetInputs
                });

              case 79:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this, [[12, 16, 20, 28], [21,, 23, 27], [35, 57, 61, 69], [42, 46], [62,, 64, 68]]);
      }));

      function buildTransaction(_x22, _x23, _x24, _x25) {
        return _ref7.apply(this, arguments);
      }

      return buildTransaction;
    }()
  }]);

  return BitcoinCashWalletHelper;
}(_BitcoinHelper3.default);

exports.default = BitcoinCashWalletHelper;