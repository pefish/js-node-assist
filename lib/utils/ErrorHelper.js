"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by joy on 12/10/2017.
 */

var ErrorHelper = function (_Error) {
  _inherits(ErrorHelper, _Error);

  function ErrorHelper(errorMessage, errorCode) {
    var errorStorage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, ErrorHelper);

    var _this = _possibleConstructorReturn(this, (ErrorHelper.__proto__ || Object.getPrototypeOf(ErrorHelper)).call(this, JSON.stringify({
      errorMessage: errorMessage,
      errorCode: errorCode
    })));
    // 抛出ErrorHelper，但catch到的是Error对象


    _this.setErrorCode(errorCode);
    _this.setErrorMessage(errorMessage);
    errorStorage && _this.setErrorStorage(errorStorage);
    return _this;
  }

  return ErrorHelper;
}(Error);

exports.default = ErrorHelper;