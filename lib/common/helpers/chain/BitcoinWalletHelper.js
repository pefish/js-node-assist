'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bitcoinjsLib = require('bitcoinjs-lib');

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

var _BitcoinHelper2 = require('./BitcoinHelper');

var _BitcoinHelper3 = _interopRequireDefault(_BitcoinHelper2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by joy on 17/08/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var BitcoinWalletHelper = function (_BitcoinHelper) {
  _inherits(BitcoinWalletHelper, _BitcoinHelper);

  function BitcoinWalletHelper() {
    _classCallCheck(this, BitcoinWalletHelper);

    return _possibleConstructorReturn(this, (BitcoinWalletHelper.__proto__ || Object.getPrototypeOf(BitcoinWalletHelper)).call(this, _bitcoinjsLib2.default));
  }

  _createClass(BitcoinWalletHelper, [{
    key: 'buildTransaction',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(privateKeyWIF, utxo, targetAddress, amount, fee) {
        var network = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'bitcoin';
        var utxoTxId, utxoOutputIndex, utxoBalance, keyPair, tx;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                utxoTxId = utxo.utxoTxId, utxoOutputIndex = utxo.utxoOutputIndex, utxoBalance = utxo.utxoBalance;
                keyPair = _bitcoinjsLib2.default.ECPair.fromWIF(privateKeyWIF, _bitcoinjsLib2.default.networks[network]);
                tx = new _bitcoinjsLib2.default.TransactionBuilder(keyPair.network);

                tx.setVersion(1);
                // tx.setLockTime(Math.floor(Date.now() / 1000) - (3600 * 3))
                tx.addInput(utxoTxId, utxoOutputIndex);
                tx.addOutput(targetAddress, amount * 1E8);
                tx.addOutput(keyPair.getAddress(), (utxoBalance - amount - fee) * 1E8);
                tx.sign(0, keyPair);
                return _context.abrupt('return', tx.build().toHex());

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function buildTransaction(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      }

      return buildTransaction;
    }()
  }]);

  return BitcoinWalletHelper;
}(_BitcoinHelper3.default);

exports.default = BitcoinWalletHelper;