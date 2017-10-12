'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 12/30/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _restler = require('restler');

var _restler2 = _interopRequireDefault(_restler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpRequestHelper = function () {
  function HttpRequestHelper() {
    _classCallCheck(this, HttpRequestHelper);
  }

  _createClass(HttpRequestHelper, [{
    key: 'get',
    value: function get(url) {
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var printLog = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (params) {
        url = url + '?';
        for (var key in params) {
          var val = params[key];
          url = url + key + '=' + val + '&';
        }
        url = url.substring(0, url.length - 1);
      }
      return new Promise(function (resolve, reject) {
        printLog && logger.info('get\u8BBF\u95EE\uFF1A' + url + ', headers: ' + JSON.stringify(headers) + ', body: ' + JSON.stringify(params));
        _restler2.default.get(url, {
          timeout: 10000
        }).on('success', function (data, res) {
          resolve({
            data: data,
            res: res
          });
          this.abort();
        }).on('failed', function (data, res) {
          reject({
            msg: url + ' ' + res.statusCode
          });
        }).on('error', function (err, res) {
          reject(err);
        }).on('timeout', function (ms) {
          reject({
            msg: url + '\u8BBF\u95EE\u8D85\u65F6'
          });
        }).on('complete', function (result) {
          if (!this.aborted) {
            reject({
              result: result,
              msg: url + ' error'
            });
          }
        });
      });
    }
  }, {
    key: 'getJson',
    value: function getJson(url) {
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var printLog = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      return new Promise(function (resolve, reject) {
        if (params) {
          url = url + '?';
          for (var key in params) {
            var val = params[key];
            url = url + key + '=' + val + '&';
          }
          url = url.substring(0, url.length - 1);
        }
        headers || (headers = {});
        headers['Content-Type'] = 'application/json; charset=utf-8';
        printLog && logger.info('getJson\u8BBF\u95EE\uFF1A' + url + ', headers: ' + JSON.stringify(headers) + ', body: ' + JSON.stringify(params));
        _restler2.default.get(url, {
          timeout: 10000,
          headers: headers
        }).on('success', function (data, res) {
          printLog && logger.info('success: ' + JSON.stringify(data));
          resolve(data);
          this.abort();
        }).on('failed', function (data, res) {
          reject({
            msg: url + ' ' + res.statusCode
          });
        }).on('error', function (err, res) {
          reject(err);
        }).on('timeout', function (ms) {
          reject({
            msg: url + '\u8BBF\u95EE\u8D85\u65F6'
          });
        }).on('complete', function (result) {
          if (!this.aborted) {
            reject({
              result: result,
              msg: url + ' error'
            });
          }
        });
      });
    }
  }, {
    key: 'post',
    value: function post(url) {
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var printLog = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      return new Promise(function (resolve, reject) {
        printLog && logger.info('post\u8BBF\u95EE\uFF1A' + url + ', headers: ' + JSON.stringify(headers) + ', body: ' + JSON.stringify(params));
        _restler2.default.post(url, {
          timeout: 10000,
          data: params || {},
          headers: headers
        }).on('success', function (data, res) {
          resolve({
            data: data,
            res: res
          });
          this.abort();
        }).on('failed', function (data, res) {
          reject({
            msg: url + ' ' + res.statusCode
          });
        }).on('error', function (err, res) {
          reject(err);
        }).on('timeout', function (ms) {
          reject({
            msg: url + '\u8BBF\u95EE\u8D85\u65F6'
          });
        }).on('complete', function (result) {
          if (!this.aborted) {
            reject({
              result: result,
              msg: url + ' error'
            });
          }
        });
      });
    }
  }, {
    key: 'postJson',
    value: function postJson(url) {
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var printLog = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      return new Promise(function (resolve, reject) {
        headers || (headers = {});
        headers['Content-Type'] = 'application/json; charset=utf-8';
        printLog && logger.info('postJson\u8BBF\u95EE\uFF1A' + url + ', headers: ' + JSON.stringify(headers) + ', body: ' + JSON.stringify(params));
        _restler2.default.postJson(url, params || {}, {
          timeout: 10000,
          headers: headers,
          parser: function parser(data, callback) {
            data = data.replace(/^\ufeff/i, "").replace(/^\ufffe/i, "");
            _restler2.default.parsers.json(data, callback);
          }
        }).on('success', function (data, res) {
          printLog && logger.info('success: ' + JSON.stringify(data));
          resolve(data);
          this.abort();
        }).on('failed', function (data, res) {
          reject({
            msg: url + ' ' + res.statusCode
          });
        }).on('error', function (err, res) {
          reject(err);
        }).on('timeout', function (ms) {
          reject({
            msg: url + '\u8BBF\u95EE\u8D85\u65F6'
          });
        }).on('complete', function (result, res) {
          if (!this.aborted) {
            reject({
              result: result,
              msg: url + ' error'
            });
          }
        });
      });
    }
  }, {
    key: 'postJsonByAuth',
    value: function postJsonByAuth(url, username, password) {
      var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var printLog = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

      return new Promise(function (resolve, reject) {
        printLog && logger.info('postJsonByAuth\u8BBF\u95EE\uFF1A' + url + ', body: ' + JSON.stringify(params));
        _restler2.default.postJson(url, params || {}, {
          timeout: 10000,
          username: username,
          password: password
        }).on('success', function (data, res) {
          printLog && logger.info('success: ' + JSON.stringify(data));
          resolve(data);
          this.abort();
        }).on('failed', function (data, res) {
          reject({
            msg: url + ' ' + res.statusCode
          });
        }).on('error', function (err, res) {
          reject(err);
        }).on('timeout', function (ms) {
          reject({
            msg: url + '\u8BBF\u95EE\u8D85\u65F6'
          });
        }).on('complete', function (result, res) {
          if (!this.aborted) {
            reject({
              result: result,
              msg: url + ' error'
            });
          }
        });
      });
    }
  }]);

  return HttpRequestHelper;
}();

exports.default = HttpRequestHelper;