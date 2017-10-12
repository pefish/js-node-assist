'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ethereumjsUtil = require('ethereumjs-util');

var _elliptic = require('elliptic');

var _elliptic2 = _interopRequireDefault(_elliptic);

var _BaseCoinHelper2 = require('./base/BaseCoinHelper');

var _BaseCoinHelper3 = _interopRequireDefault(_BaseCoinHelper2);

var _bitcoreLib = require('bitcore-lib');

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by joy on 12/09/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var EthHelper = function (_BaseCoinHelper) {
  _inherits(EthHelper, _BaseCoinHelper);

  function EthHelper() {
    _classCallCheck(this, EthHelper);

    var _this = _possibleConstructorReturn(this, (EthHelper.__proto__ || Object.getPrototypeOf(EthHelper)).call(this));

    _this.web3 = new _web2.default();
    _this.parts = ['44\'', // bip 44
    '60\'', // coin
    '0\'', // wallet
    '0' // 0 - public, 1 = private
    // index
    ];
    return _this;
  }

  _createClass(EthHelper, [{
    key: 'getHdPrivateKeyBySeed',
    value: function getHdPrivateKeyBySeed(seed) {
      var network = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'testnet';

      return _bitcoreLib.HDPrivateKey.fromSeed(seed, network);
    }
  }, {
    key: 'getHdPubKeyBySeed',
    value: function getHdPubKeyBySeed(seed) {
      var network = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'testnet';

      return _bitcoreLib.HDPrivateKey.fromSeed(seed, network).hdPublicKey;
    }
  }, {
    key: 'getTprivFromHdPrivKey',
    value: function getTprivFromHdPrivKey(hdPrivKey) {
      return hdPrivKey.toString();
    }
  }, {
    key: 'getTpubFromHdPrivKey',
    value: function getTpubFromHdPrivKey(hdPrivKey) {
      return hdPrivKey.xpubkey;
    }
  }, {
    key: 'getAddressFromHdPrivKey',
    value: function getAddressFromHdPrivKey(hdPrivKey) {
      var address = (0, _ethereumjsUtil.pubToAddress)(this.bip32PublicToEthereumPublic(hdPrivKey.publicKey.toBuffer()));
      return '0x' + address.toString('hex');
    }
  }, {
    key: 'getAddressFromHdPubKey',
    value: function getAddressFromHdPubKey(hdPubKey) {
      var address = (0, _ethereumjsUtil.pubToAddress)(this.bip32PublicToEthereumPublic(hdPubKey.toBuffer()));
      return '0x' + address.toString('hex');
    }
  }, {
    key: 'derive',
    value: function derive(hdKey, path) {
      return hdKey.derive(path);
    }
  }, {
    key: 'bip32PublicToEthereumPublic',
    value: function bip32PublicToEthereumPublic(pubKey) {
      var key = _elliptic2.default.ec('secp256k1').keyFromPublic(pubKey).getPublic().toJSON();
      return Buffer.concat([this._padTo32(new Buffer(key[0].toArray())), this._padTo32(new Buffer(key[1].toArray()))]);
    }
  }, {
    key: 'getAddress',
    value: function getAddress(hdKey, index) {
      var path = this.parts.slice(hdKey.depth);
      // 'm/44/60/0/0/{index}'
      var derived = hdKey.derive('m/' + (path.length > 0 ? path.join('/') + '/' : "") + index);
      var address = (0, _ethereumjsUtil.pubToAddress)(this.bip32PublicToEthereumPublic(derived.publicKey.toBuffer()));
      return '0x' + address.toString('hex');
    }
  }, {
    key: 'getPrivateKey',
    value: function getPrivateKey(hdKey, index) {
      var path = this.parts.slice(hdKey.depth);
      var derived = hdKey.derive('m/' + (path.length > 0 ? path.join('/') + '/' : "") + index);
      return this._padTo32(derived.privateKey.toBuffer());
    }
  }, {
    key: '_padTo32',
    value: function _padTo32(msg) {
      while (msg.length < 32) {
        msg = Buffer.concat([new Buffer([0]), msg]);
      }
      if (msg.length !== 32) {
        throw new Error('invalid key length: ' + msg.length);
      }
      return msg;
    }
  }]);

  return EthHelper;
}(_BaseCoinHelper3.default);

exports.default = EthHelper;