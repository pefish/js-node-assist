'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 29/09/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _error = require('../plugins/error');

var _error2 = _interopRequireDefault(_error);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _cors = require('../plugins/cors');

var _cors2 = _interopRequireDefault(_cors);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressDomainMiddleware = require('express-domain-middleware');

var _expressDomainMiddleware2 = _interopRequireDefault(_expressDomainMiddleware);

var _CommonUtil = require('../utils/CommonUtil');

var _CommonUtil2 = _interopRequireDefault(_CommonUtil);

var _apiRouteFactory = require('../plugins/apiRouteFactory');

var _apiRouteFactory2 = _interopRequireDefault(_apiRouteFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpServerHelper = function () {
  function HttpServerHelper() {
    _classCallCheck(this, HttpServerHelper);
  }

  _createClass(HttpServerHelper, [{
    key: 'listen',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(port, routePath, apiPath, origins) {
        var middlewares = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
        var host = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        var app, httpServer;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                app = (0, _express2.default)();

                app.use((0, _helmet2.default)());
                app.use(_expressDomainMiddleware2.default);
                app.use((0, _cookieParser2.default)());
                app.use(_bodyParser2.default.json());
                app.use(_bodyParser2.default.urlencoded({ extended: false }));
                middlewares.forEach(function (middleware) {
                  app.use(middleware);
                });
                _context.next = 9;
                return (0, _cors2.default)(app, origins);

              case 9:
                _context.next = 11;
                return (0, _error2.default)(app);

              case 11:
                httpServer = _http2.default.createServer(app);
                _context.next = 14;
                return _apiRouteFactory2.default.buildRoute(app, routePath, apiPath);

              case 14:
                httpServer.listen(port, host || 'localhost', function () {
                  logger.info('\u5E94\u7528\u5B9E\u4F8B http://' + httpServer.address().address + ':' + httpServer.address().port);
                });
                _CommonUtil2.default.onExiting(function () {
                  httpServer.close();
                  logger.info('http服务已关闭');
                });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function listen(_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      }

      return listen;
    }()
  }]);

  return HttpServerHelper;
}();

exports.default = HttpServerHelper;