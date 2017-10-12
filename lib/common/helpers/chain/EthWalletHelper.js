'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseEthLikeHelper2 = require('./BaseEthLikeHelper');

var _BaseEthLikeHelper3 = _interopRequireDefault(_BaseEthLikeHelper2);

var _solc = require('solc');

var _solc2 = _interopRequireDefault(_solc);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _web3Utils = require('web3-utils');

var _web3Utils2 = _interopRequireDefault(_web3Utils);

var _scrypt = require('scrypt.js');

var _scrypt2 = _interopRequireDefault(_scrypt);

var _ethereumjsTx = require('ethereumjs-tx');

var _ethereumjsTx2 = _interopRequireDefault(_ethereumjsTx);

var _BigNumberUtil = require('../../utils/BigNumberUtil');

var _BigNumberUtil2 = _interopRequireDefault(_BigNumberUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by joy on 12/09/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var EthWalletHelper = function (_BaseEthLikeHelper) {
  _inherits(EthWalletHelper, _BaseEthLikeHelper);

  function EthWalletHelper() {
    _classCallCheck(this, EthWalletHelper);

    return _possibleConstructorReturn(this, (EthWalletHelper.__proto__ || Object.getPrototypeOf(EthWalletHelper)).apply(this, arguments));
  }

  _createClass(EthWalletHelper, [{
    key: 'getBytecodeOfContract',
    value: function getBytecodeOfContract(compiledContract) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.entries(compiledContract['contracts'])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = _slicedToArray(_ref, 2);

          var key = _ref2[0];
          var value = _ref2[1];

          if (key.includes(':')) {
            return '0x' + value.bytecode;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return null;
    }
  }, {
    key: 'compileContract',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(contractStr) {
        var isOptimize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var compiled;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                compiled = _solc2.default.compile(contractStr, isOptimize);

                if (!(!Object.keys(compiled['contracts']).length > 0)) {
                  _context.next = 3;
                  break;
                }

                throw {
                  errorMessage: compiled['errors']
                };

              case 3:
                logger.info('abi: ', JSON.stringify(this.getAbiOfContract(compiled)));
                logger.warn('compile warn: ', compiled['errors']);
                return _context.abrupt('return', compiled);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function compileContract(_x) {
        return _ref3.apply(this, arguments);
      }

      return compileContract;
    }()
  }, {
    key: 'getAbiOfContract',
    value: function getAbiOfContract(compiledContract) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.entries(compiledContract['contracts'])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _ref4 = _step2.value;

          var _ref5 = _slicedToArray(_ref4, 2);

          var key = _ref5[0];
          var value = _ref5[1];

          if (key.includes(':')) {
            return JSON.parse(value.interface);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return null;
    }
  }, {
    key: 'getCompilerVersionOfContract',
    value: function getCompilerVersionOfContract(compiledContract) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.entries(compiledContract['contracts'])[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _ref6 = _step3.value;

          var _ref7 = _slicedToArray(_ref6, 2);

          var key = _ref7[0];
          var value = _ref7[1];

          if (key.includes(':')) {
            return JSON.parse(value.metadata)['compiler']['version'];
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return null;
    }
  }, {
    key: 'deployContract',
    value: function deployContract(ethRpcHelper, compiled, from) {
      var _this2 = this;

      var gas = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 6000000;

      return new Promise(function (resolve, reject) {
        var abi = _this2.getAbiOfContract(compiled);
        var contract = ethRpcHelper.Web3.eth.contract(abi);
        contract.new({
          data: _this2.getBytecodeOfContract(compiled),
          from: from,
          gas: gas
        }, function (err, res) {
          // 回调会多次调用，第一次没有合约地址
          if (err) {
            reject(err);
            return;
          }
          logger.info('txHash', res.transactionHash);
          if (res.address) {
            resolve({
              abi: JSON.stringify(abi),
              txHash: res.transactionHash,
              contractAddress: res.address
            });
          }
        });
      });
    }
  }, {
    key: 'decodeTxHex',
    value: function decodeTxHex(txHex) {
      var tx = new _ethereumjsTx2.default(txHex);
      return {
        nonce: _BigNumberUtil2.default.bufferToDecimal(tx.nonce),
        gasPrice: _BigNumberUtil2.default.bufferToDecimal(tx.gasPrice),
        gasLimit: _BigNumberUtil2.default.bufferToDecimal(tx.gasLimit),
        to: _BigNumberUtil2.default.bufferToHex(tx.to),
        value: _BigNumberUtil2.default.bufferToDecimal(tx.value),
        data: _BigNumberUtil2.default.bufferToHex(tx.data),
        v: _BigNumberUtil2.default.bufferToHex(tx.v),
        r: _BigNumberUtil2.default.bufferToHex(tx.r),
        s: _BigNumberUtil2.default.bufferToHex(tx.s),
        from: _BigNumberUtil2.default.bufferToHex(tx.from),
        _chainId: tx._chainId,
        _homestead: tx._homestead
      };
    }
  }, {
    key: 'getAddressFromPrivateKey',
    value: function getAddressFromPrivateKey(privateKey) {
      if (privateKey.startsWith('0x')) {
        privateKey = privateKey.substring(2, privateKey.length);
      }
      var privateKeyBuffer = new Buffer(privateKey, 'hex');
      var rawTx = {
        nonce: 0x01,
        gasPrice: 0x4a817c800,
        gasLimit: 0xdbba0,
        to: '0x00367f9370A71Cf482A64394dFB2367aa3a34339',
        value: 0x16345785d8a0000
      };

      var tx = new _ethereumjsTx2.default(rawTx);
      tx.sign(privateKeyBuffer);
      return _BigNumberUtil2.default.bufferToHex(tx.from);
    }
  }, {
    key: 'decryptKeystore',
    value: function decryptKeystore(v3Keystore, password) {
      var json = JSON.parse(v3Keystore);

      if (json.version !== 3) {
        throw new Error('Not a valid V3 wallet');
      }

      var derivedKey = void 0,
          kdfparams = void 0;
      if (json.crypto.kdf === 'scrypt') {
        kdfparams = json.crypto.kdfparams;
        derivedKey = (0, _scrypt2.default)(new Buffer(password), new Buffer(kdfparams.salt, 'hex'), kdfparams.n, kdfparams.r, kdfparams.p, kdfparams.dklen);
      } else if (json.crypto.kdf === 'pbkdf2') {
        kdfparams = json.crypto.kdfparams;
        if (kdfparams.prf !== 'hmac-sha256') {
          throw new Error('Unsupported parameters to PBKDF2');
        }
        derivedKey = _crypto2.default.pbkdf2Sync(new Buffer(password), new Buffer(kdfparams.salt, 'hex'), kdfparams.c, kdfparams.dklen, 'sha256');
      } else {
        throw new Error('Unsupported key derivation scheme');
      }
      var ciphertext = new Buffer(json.crypto.ciphertext, 'hex');

      var mac = _web3Utils2.default.sha3(Buffer.concat([derivedKey.slice(16, 32), ciphertext])).replace('0x', '');
      if (mac !== json.crypto.mac) {
        throw new Error('Key derivation failed - possibly wrong password');
      }

      var decipher = _crypto2.default.createDecipheriv(json.crypto.cipher, derivedKey.slice(0, 16), new Buffer(json.crypto.cipherparams.iv, 'hex'));
      return '0x' + Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString('hex');
    }
  }, {
    key: 'buildTransaction',
    value: function buildTransaction(ethRpcHelper, privateKey, toAddress, amount) {
      var nonce = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

      var fromAddress = this.getAddressFromPrivateKey(privateKey);
      if (privateKey.startsWith('0x')) {
        privateKey = privateKey.substring(2, privateKey.length);
      }
      var privateKeyBuffer = new Buffer(privateKey, 'hex');
      var rawTx = {
        nonce: nonce || ethRpcHelper.Web3.toHex(ethRpcHelper.getTransactionCount(fromAddress)),
        gasPrice: ethRpcHelper.Web3.fromDecimal(ethRpcHelper.Web3.toWei(20, 'gwei')),
        gasLimit: ethRpcHelper.Web3.fromDecimal(900000),
        to: toAddress,
        value: ethRpcHelper.Web3.fromDecimal(ethRpcHelper.Web3.toWei(amount.toString(), 'ether'))
      };

      var tx = new _ethereumjsTx2.default(rawTx);
      tx.sign(privateKeyBuffer);
      var serializedTx = tx.serialize();
      return '0x' + serializedTx.toString('hex');
    }
  }, {
    key: 'buildContractTransaction',
    value: function buildContractTransaction(ethRpcHelper, privateKey, contractAddress, methodId, params) {
      var nonce = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

      var fromAddress = this.getAddressFromPrivateKey(privateKey);
      if (privateKey.startsWith('0x')) {
        privateKey = privateKey.substring(2, privateKey.length);
      }
      var privateKeyBuffer = new Buffer(privateKey, 'hex');
      var rawTx = {
        from: fromAddress,
        nonce: nonce || ethRpcHelper.Web3.toHex(ethRpcHelper.getTransactionCount(fromAddress)),
        gasPrice: ethRpcHelper.Web3.fromDecimal(ethRpcHelper.Web3.toWei(20, 'gwei')),
        gasLimit: ethRpcHelper.Web3.fromDecimal(900000),
        to: contractAddress,
        value: 0x00,
        data: this.buildPayload(methodId, params)
      };
      var tx = new _ethereumjsTx2.default(rawTx);
      tx.sign(privateKeyBuffer);
      var serializedTx = tx.serialize();
      return '0x' + serializedTx.toString('hex');
    }
  }, {
    key: 'buildDeployContractTx',
    value: function buildDeployContractTx(ethRpcHelper, compiledContract, privateKey, nonce) {
      var fromAddress = this.getAddressFromPrivateKey(privateKey);
      if (privateKey.startsWith('0x')) {
        privateKey = privateKey.substring(2, privateKey.length);
      }
      var privateKeyBuffer = new Buffer(privateKey, 'hex');
      var rawTx = {
        from: fromAddress,
        nonce: nonce,
        gasPrice: ethRpcHelper.Web3.fromDecimal(ethRpcHelper.Web3.toWei(20, 'gwei')),
        gasLimit: ethRpcHelper.Web3.fromDecimal(6000000),
        value: 0x00,
        data: this.getBytecodeOfContract(compiledContract)
      };
      var tx = new _ethereumjsTx2.default(rawTx);
      tx.sign(privateKeyBuffer);
      var serializedTx = tx.serialize();
      return '0x' + serializedTx.toString('hex');
    }
  }, {
    key: 'getMethodId',
    value: function getMethodId(strToCalc) {
      return this.web3.sha3(strToCalc).substr(0, 10);
    }
  }, {
    key: 'buildPayload',
    value: function buildPayload(methodIdHex, params) {
      // [
      //   ['haha', 'string'],
      //   ['0x48960A2D31c72A797BE92835eC88356e8157DfbC', 'address'],
      //   [45, 'number']
      // ]
      var result = methodIdHex;
      params.forEach(function (param) {
        var _param = _slicedToArray(param, 2),
            value = _param[0],
            type = _param[1];

        var temp = void 0;
        switch (type) {
          case 'string':
            temp = _web3Utils2.default.padRight(_web3Utils2.default.stringToHex(value), 64);
            break;
          case 'address':
            temp = _web3Utils2.default.padLeft(value, 64);
            break;
          case 'number':
            temp = _web3Utils2.default.padLeft(_web3Utils2.default.numberToHex(value), 64);
            break;
          case 'bool':
            if (value === true) {
              temp = '0x0000000000000000000000000000000000000000000000000000000000000001';
            } else {
              temp = '0x0000000000000000000000000000000000000000000000000000000000000000';
            }
            break;
        }
        result += temp.substring(2, temp.length);
      });
      return result;
    }
  }]);

  return EthWalletHelper;
}(_BaseEthLikeHelper3.default);

exports.default = EthWalletHelper;