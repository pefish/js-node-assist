'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeforce = require('typeforce');

var _typeforce2 = _interopRequireDefault(_typeforce);

var _ProgressBar = require('../../utils/ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _bignumber = require('bignumber.js');

var _bignumber2 = _interopRequireDefault(_bignumber);

var _BaseCoinHelper2 = require('./base/BaseCoinHelper');

var _BaseCoinHelper3 = _interopRequireDefault(_BaseCoinHelper2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by joy on 17/08/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var BitcoinHelper = function (_BaseCoinHelper) {
  _inherits(BitcoinHelper, _BaseCoinHelper);

  function BitcoinHelper(bitcoin) {
    _classCallCheck(this, BitcoinHelper);

    var _this = _possibleConstructorReturn(this, (BitcoinHelper.__proto__ || Object.getPrototypeOf(BitcoinHelper)).call(this));

    _this.bitcoin = bitcoin;
    return _this;
  }

  _createClass(BitcoinHelper, [{
    key: 'getEcPairFromWif',
    value: function getEcPairFromWif(wif, network) {
      return this.bitcoin.ECPair.fromWIF(wif, this.bitcoin.networks[network]);
    }
  }, {
    key: 'getEcPairFromXpriv',
    value: function getEcPairFromXpriv(xpriv, network) {
      return this.bitcoin.HDNode.fromBase58(xpriv, this.bitcoin.networks[network]).keyPair;
    }
  }, {
    key: 'getNodeFromXpub',
    value: function getNodeFromXpub(xpub, network) {
      return this.bitcoin.HDNode.fromBase58(xpub, this.bitcoin.networks[network]).neutered();
    }
  }, {
    key: 'getAddressByXpub',
    value: function getAddressByXpub(xpub, network) {
      var ecPair = this.bitcoin.HDNode.fromBase58(xpub, this.bitcoin.networks[network]).neutered();
      return ecPair.getAddress();
    }
  }, {
    key: 'getAddressByXpubIndex',
    value: function getAddressByXpubIndex(xpub, index) {
      var network = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'testnet';

      var node = this.bitcoin.HDNode.fromBase58(xpub, this.bitcoin.networks[network]).neutered();
      return node.derive(index).getAddress();
    }
  }, {
    key: 'getPrivateKeyByXprivIndex',
    value: function getPrivateKeyByXprivIndex(xpriv, index, network) {
      var node = this.bitcoin.HDNode.fromBase58(xpriv, this.bitcoin.networks[network]);
      return node.derive(index).keyPair.toWIF();
    }
  }, {
    key: 'getPrivateKeyByPath',
    value: function getPrivateKeyByPath(xpriv, path) {
      var network = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'testnet';

      var node = this.bitcoin.HDNode.fromBase58(xpriv, this.bitcoin.networks[network]);
      var subNode = node.derivePath(path);
      return subNode.keyPair.toWIF();
    }
  }, {
    key: 'getXpubFromXpubByPath',
    value: function getXpubFromXpubByPath(xpub, path) {
      var network = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'testnet';

      var node = this.bitcoin.HDNode.fromBase58(xpub, this.bitcoin.networks[network]).neutered();
      var subNode = node.derivePath(path);
      return subNode.neutered().toBase58();
    }
  }, {
    key: 'getAddressFromXpubByPath',
    value: function getAddressFromXpubByPath(xpub, path) {
      var network = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'testnet';

      var node = this.bitcoin.HDNode.fromBase58(xpub, this.bitcoin.networks[network]).neutered();
      var subNode = node.derivePath(path);
      return subNode.getAddress();
    }
  }, {
    key: 'getAddressesFromXpub',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(xpub, pathSpan) {
        var network = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'testnet';
        var pos, pre, span, start, end, results, pb, i, path, address;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // logger.error(arguments)
                pos = pathSpan.lastIndexOf('/');
                pre = pathSpan.substring(0, pos + 1);
                span = pathSpan.substring(pos + 1, pathSpan.length);
                start = parseInt(span.split('~')[0]), end = parseInt(span.split('~')[1]);
                // logger.error(start)

                results = [];
                pb = new _ProgressBar2.default('生成进度', 50, end - start);

                for (i = start; i < end; i++) {
                  path = '' + pre + i;
                  // logger.error(path)

                  address = this.getAddressFromXpubByPath(xpub, path, network);

                  results.push({
                    path: path,
                    address: address
                  });
                  pb.render({ completed: i - start });
                }
                pb.render({ completed: end - start });
                return _context.abrupt('return', results);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAddressesFromXpub(_x5, _x6) {
        return _ref.apply(this, arguments);
      }

      return getAddressesFromXpub;
    }()
  }, {
    key: 'isSatoshi',
    value: function isSatoshi(value) {
      return _typeforce2.default.UInt53(value) && value <= 21 * 1e14;
    }
  }, {
    key: 'toSatoshi',
    value: function toSatoshi(value) {
      var returnNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!(value instanceof _bignumber2.default)) {
        value = new _bignumber2.default(value.toString());
      }
      return returnNumber ? value.times(1E8).toNumber() : value.times(1E8);
    }
  }, {
    key: 'satoshiToBcc',
    value: function satoshiToBcc(value) {
      var returnNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!(value instanceof _bignumber2.default)) {
        value = new _bignumber2.default(value.toString());
      }
      return returnNumber ? value.div(1E8).toNumber() : value.div(1E8);
    }
  }]);

  return BitcoinHelper;
}(_BaseCoinHelper3.default);

exports.default = BitcoinHelper;