'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by pefish on 2017/3/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MarkdownHelper = function () {
  function MarkdownHelper() {
    _classCallCheck(this, MarkdownHelper);
  }

  _createClass(MarkdownHelper, [{
    key: 'toHtml',
    value: function toHtml(markdown) {
      return new Promise(function (resolve, reject) {
        _marked2.default.setOptions({
          renderer: new _marked2.default.Renderer(),
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          sanitizer: null,
          mangle: true,
          smartLists: false,
          silent: false,
          highlight: null,
          langPrefix: 'lang-',
          smartypants: false,
          headerPrefix: '',
          xhtml: false
        });
        (0, _marked2.default)(markdown, function (err, content) {
          if (err) {
            reject(err);
          } else {
            resolve(content);
          }
        });
      });
    }
  }]);

  return MarkdownHelper;
}();

exports.default = MarkdownHelper;