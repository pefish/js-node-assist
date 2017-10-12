'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 25/09/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CryptUtil = function () {
  function CryptUtil() {
    _classCallCheck(this, CryptUtil);
  }

  _createClass(CryptUtil, [{
    key: 'encrypt',
    value: function encrypt(str, xor, hex) {
      if (typeof str !== 'string' || typeof xor !== 'number' || typeof hex !== 'number') {
        return;
      }
      var resultList = [];
      hex = hex <= 25 ? hex : hex % 25;
      for (var i = 0; i < str.length; i++) {
        // 提取字符串每个字符的ascll码
        var charCode = str.charCodeAt(i);
        // 进行异或加密
        charCode = charCode * 1 ^ xor;
        // 异或加密后的字符转成 hex 位数的字符串
        charCode = charCode.toString(hex);
        resultList.push(charCode);
      }

      var splitStr = String.fromCharCode(hex + 97);
      return resultList.join(splitStr);
    }
  }, {
    key: 'decrypt',
    value: function decrypt(str, xor, hex) {
      if (typeof str !== 'string' || typeof xor !== 'number' || typeof hex !== 'number') {
        return;
      }
      var strCharList = [],
          resultList = [];
      hex = hex <= 25 ? hex : hex % 25;
      // 解析出分割字符
      var splitStr = String.fromCharCode(hex + 97);
      // 分割出加密字符串的加密后的每个字符
      strCharList = str.split(splitStr);
      for (var i = 0; i < strCharList.length; i++) {
        // 将加密后的每个字符转成加密后的ascll码
        var charCode = parseInt(strCharList[i], hex);
        // 异或解密出原字符的ascll码
        charCode = charCode * 1 ^ xor;
        var strChar = String.fromCharCode(charCode);
        resultList.push(strChar);
      }
      return resultList.join('');
    }
  }, {
    key: 'sha256',
    value: function sha256(str) {
      return _crypto2.default.createHash('sha256').update(str).digest('hex');
    }
  }, {
    key: 'hmacSha256',
    value: function hmacSha256(str, secret) {
      return _crypto2.default.createHmac('sha256', secret).update(str).digest('hex');
    }
  }]);

  return CryptUtil;
}();

exports.default = CryptUtil;