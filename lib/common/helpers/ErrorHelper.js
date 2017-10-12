"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by joy on 12/10/2017.
 */

var ErrorHelper = function ErrorHelper(errorMessage, errorCode) {
  // super(JSON.stringify({
  //   errorMessage,
  //   errorCode
  // }))
  // this.setErrorCode(errorCode)
  // this.setErrorMessage(errorMessage)
  // errorStorage && this.setErrorStorage(errorStorage)

  var errorStorage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  _classCallCheck(this, ErrorHelper);
};

exports.default = ErrorHelper;