'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 12/09/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _bip = require('bip39');

var _bip2 = _interopRequireDefault(_bip);

var _bitcoinjsLib = require('bitcoinjs-lib');

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseCoinHelper = function () {
  function BaseCoinHelper() {
    _classCallCheck(this, BaseCoinHelper);
  }

  _createClass(BaseCoinHelper, [{
    key: 'getSeedByMnemonic',
    value: function getSeedByMnemonic(mnemonic) {
      var pass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var seed = _bip2.default.mnemonicToSeed(mnemonic, pass); // 种子buffer
      return seed.toString('hex'); // 种子hex
    }
  }, {
    key: 'getSeedBufferFromHex',
    value: function getSeedBufferFromHex(seedHex) {
      return Buffer.from(seedHex, 'hex');
    }
  }, {
    key: 'getRandomMnemonic',
    value: function getRandomMnemonic() {
      return _bip2.default.generateMnemonic();
    }
  }, {
    key: 'getMasterPairBySeed',
    value: function getMasterPairBySeed(seedBuffer) {
      var network = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'testnet';

      var node = _bitcoinjsLib2.default.HDNode.fromSeedBuffer(seedBuffer, _bitcoinjsLib2.default.networks[network]);
      return {
        seed: seedBuffer.toString('hex'),
        xpriv: node.toBase58(),
        xpub: node.neutered().toBase58()
      };
    }
  }, {
    key: 'getMasterPairByMnemonic',
    value: function getMasterPairByMnemonic(mnemonic) {
      var pass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var network = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'testnet';

      var seed = _bip2.default.mnemonicToSeed(mnemonic, pass); // 种子buffer
      var node = _bitcoinjsLib2.default.HDNode.fromSeedBuffer(seed, _bitcoinjsLib2.default.networks[network]); // node里面才是主公钥和主私钥
      return {
        seed: seed.toString('hex'),
        xpriv: node.toBase58(), // 主私钥, depth为0
        xpub: node.neutered().toBase58() // 主公钥, neutered是去掉私钥价值
      };
    }
  }]);

  return BaseCoinHelper;
}();

exports.default = BaseCoinHelper;