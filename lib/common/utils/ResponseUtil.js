'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 15/06/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _errorCodes = require('../constants/errorCodes');

var _errorCodes2 = _interopRequireDefault(_errorCodes);

var _statusCodes = require('../constants/statusCodes');

var _statusCodes2 = _interopRequireDefault(_statusCodes);

var _CommonUtil = require('../utils/CommonUtil');

var _CommonUtil2 = _interopRequireDefault(_CommonUtil);

var _ObjectUtil = require('../utils/ObjectUtil');

var _ObjectUtil2 = _interopRequireDefault(_ObjectUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResponseUtil = function () {
  function ResponseUtil() {
    _classCallCheck(this, ResponseUtil);
  }

  _createClass(ResponseUtil, null, [{
    key: 'success',
    value: function success(res, data) {
      res.status(_statusCodes2.default.OK);
      res.json(_extends({
        succeed: true
      }, data));
    }
  }, {
    key: 'assembleSucceedRes',
    value: function assembleSucceedRes(data) {
      return _extends({
        succeed: true
      }, data);
    }
  }, {
    key: 'failed',
    value: function failed(res, err) {
      var errorMessage = null,
          errorCode = null;
      if (err) {
        errorCode = err.errorCode || _errorCodes2.default.INTERNAL_ERROR;
        errorMessage = err.errorMessage || _CommonUtil2.default.getErrorMessage(errorCode) || 'INTERNAL_ERROR';
        _ObjectUtil2.default.assignProps(err, {
          errorMessage: errorMessage
        });
        res.status(err.statusCode || _statusCodes2.default.OK);
        logger.error(err);
      } else {
        res.status(_statusCodes2.default.OK);
        errorCode = _errorCodes2.default.INTERNAL_ERROR;
        errorMessage = 'INTERNAL_ERROR';
      }
      res.json({
        succeed: false,
        error_code: errorCode,
        error_message: errorMessage
      });
    }
  }, {
    key: 'assembleFailResp',
    value: function assembleFailResp(err) {
      var errorMessage = 'INTERNAL_ERROR',
          errorCode = _errorCodes2.default.INTERNAL_ERROR;
      if (err) {
        errorCode = err.errorCode || _errorCodes2.default.INTERNAL_ERROR;
        errorMessage = err.errorMessage || _CommonUtil2.default.getErrorMessage(errorCode) || 'INTERNAL_ERROR';
        _CommonUtil2.default.assignProps(err, {
          errorMessage: errorMessage
        });
        logger.error(err);
      }
      return {
        succeed: false,
        error_code: errorCode,
        error_message: errorMessage
      };
    }
  }, {
    key: 'sendImageBuffer',
    value: function sendImageBuffer(res, buffer, ext) {
      var type = 'png';
      switch (ext) {
        case 'jpg':
          type = 'jpeg';
          break;
        case 'gif':
          type = 'gif';
          break;
      }
      res.header('Content-Type', 'image/' + type);
      res.send(buffer);
    }
  }]);

  return ResponseUtil;
}();

exports.default = ResponseUtil;