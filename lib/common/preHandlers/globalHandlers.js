'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ResponseUtil = require('../utils/ResponseUtil');

var _ResponseUtil2 = _interopRequireDefault(_ResponseUtil);

var _CommonUtil = require('../utils/CommonUtil');

var _CommonUtil2 = _interopRequireDefault(_CommonUtil);

var _errorCodes = require('../constants/errorCodes');

var _errorCodes2 = _interopRequireDefault(_errorCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [
  // 验证参数个数
  // async (req, res, next) => {
  //   const clientParams = CommonUtil.getAllParams(req)
  //   const apiConfig = req['apiConfig']
  //   apiConfig['params'] || (apiConfig['params'] = {})
  //   if (Object.keys(clientParams).length !== Object.keys(apiConfig['params']).length) {
  //     throw {
  //       errorCode: errorCodes.PARAM_SIZE_ERROR,
  //       errorMessage: 'PARAM_SIZE_ERROR',
  //     }
  //   }
  // },
]; /**
    * Created by joy on 21/07/2017.
    */