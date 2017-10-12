'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by joy on 26/09/2017.
 */

var RequestUtil = function () {
  function RequestUtil() {
    _classCallCheck(this, RequestUtil);
  }

  _createClass(RequestUtil, null, [{
    key: 'getAllParams',
    value: function getAllParams(req) {
      var clientParams = void 0;
      if (req.method === 'GET') {
        clientParams = req.query;
      } else {
        clientParams = req.body;
      }
      req['params'] && Object.assign(clientParams, req['params']);
      return clientParams;
    }
  }]);

  return RequestUtil;
}();

exports.default = RequestUtil;