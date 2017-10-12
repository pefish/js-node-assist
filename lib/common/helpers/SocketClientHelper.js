'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 19/09/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _package = require('../../../package.json');

var _package2 = _interopRequireDefault(_package);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _FileUtil = require('../utils/FileUtil');

var _FileUtil2 = _interopRequireDefault(_FileUtil);

var _errorCodes = require('../constants/errorCodes');

var _errorCodes2 = _interopRequireDefault(_errorCodes);

var _ErrorHelper = require('../helpers/ErrorHelper');

var _ErrorHelper2 = _interopRequireDefault(_ErrorHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocketClientHelper = function () {
  function SocketClientHelper(routePath, socketPath) {
    _classCallCheck(this, SocketClientHelper);

    this._routePath = routePath;
    this._socketPath = socketPath;
    this._servers = {};
  }

  _createClass(SocketClientHelper, [{
    key: '_addServer',
    value: function _addServer(url, clientId, serverInstance, serverInfo) {
      this._servers[url] = {
        clientId: clientId, // 本客户端在这个服务端中的唯一标识
        serverInstance: serverInstance,
        serverInfo: serverInfo
      };
    }
  }, {
    key: '_removeServer',
    value: function _removeServer(url) {
      delete this._servers[url];
    }
  }, {
    key: 'connectNewServer',
    value: function connectNewServer(url) {
      var _this = this;

      var onDisConnected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var onServerConnected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      return new Promise(function (resolve, reject) {
        if (_this._servers[url]) {
          reject({
            errorMessage: '服务端已经连接，不要再次连接'
          });
        }
        var client = (0, _socket2.default)(url);
        client.on('disconnect', function () {
          logger.info('\u670D\u52A1\u7AEF ' + url + ' \u65AD\u5F00\u8FDE\u63A5, \u91CD\u8FDE...');
          client.destroy();
          _this._removeServer(url);
          onDisConnected && onDisConnected(url);
          _this.connectNewServer(url, onDisConnected, onServerConnected);
        });
        client.on('connect', function () {
          logger.info('\u8FDE\u63A5\u670D\u52A1\u7AEF ' + url + ' \u6210\u529F');
          client.on('basic_info', function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(datas) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;

                      logger.info('\u670D\u52A1\u7AEF\u56DE\u590Dbasic info: ', JSON.stringify(datas));
                      _this._addServer(url, datas['clientId'], client, datas['data']);
                      onServerConnected && onServerConnected(url, _this._servers[url]);
                      client.emit('basic_info', {
                        url: url,
                        clientId: datas['clientId'],
                        data: {
                          name: _package2.default['name'],
                          version: _package2.default['version']
                        }
                      });
                      // 构建路由
                      _context.next = 7;
                      return _this._buildRoute(client, _this._routePath, _this._socketPath);

                    case 7:
                      resolve(_this._servers[url]);
                      _context.next = 13;
                      break;

                    case 10:
                      _context.prev = 10;
                      _context.t0 = _context['catch'](0);

                      reject(_context.t0);

                    case 13:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, _this, [[0, 10]]);
            }));

            return function (_x3) {
              return _ref.apply(this, arguments);
            };
          }());
        });
      });
    }
  }, {
    key: '_buildRoute',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(client, routePath, socketPath) {
        var _this2 = this;

        var filesAndDirs, _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                filesAndDirs = _FileUtil2.default.getFilesAndDirs(routePath);

                _loop = function _loop(file) {
                  var apisOfName = require(routePath + '/' + file).default;
                  var class_ = null;
                  try {
                    class_ = new (require(socketPath + '/' + file).default)();
                  } catch (err) {
                    throw err;
                  }
                  apisOfName.forEach(function (routeConfig) {
                    client.on(routeConfig['event'], function () {
                      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(datas) {
                        var url, data, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, handler, result;

                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                logger.info('socket\u670D\u52A1\u7AEF\u547D\u4EE4: ' + routeConfig['event'], JSON.stringify(datas));
                                url = datas.url, data = datas.data;
                                _context2.prev = 2;

                                if (routeConfig['handlerPath']) {
                                  try {
                                    class_ = new (require(routeConfig['handlerPath']).default)();
                                  } catch (err) {}
                                }
                                // 预处理

                                if (!routeConfig['preHandlers']) {
                                  _context2.next = 36;
                                  break;
                                }

                                _iteratorNormalCompletion2 = true;
                                _didIteratorError2 = false;
                                _iteratorError2 = undefined;
                                _context2.prev = 8;
                                _iterator2 = routeConfig['preHandlers'][Symbol.iterator]();

                              case 10:
                                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                  _context2.next = 22;
                                  break;
                                }

                                handler = _step2.value;

                                if (!(handler.indexOf('/') !== -1)) {
                                  _context2.next = 17;
                                  break;
                                }

                                _context2.next = 15;
                                return require(_path2.default.resolve(handler)).default(routeConfig, data);

                              case 15:
                                _context2.next = 19;
                                break;

                              case 17:
                                _context2.next = 19;
                                return require('../preHandlers/' + handler).default(routeConfig, data);

                              case 19:
                                _iteratorNormalCompletion2 = true;
                                _context2.next = 10;
                                break;

                              case 22:
                                _context2.next = 28;
                                break;

                              case 24:
                                _context2.prev = 24;
                                _context2.t0 = _context2['catch'](8);
                                _didIteratorError2 = true;
                                _iteratorError2 = _context2.t0;

                              case 28:
                                _context2.prev = 28;
                                _context2.prev = 29;

                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                  _iterator2.return();
                                }

                              case 31:
                                _context2.prev = 31;

                                if (!_didIteratorError2) {
                                  _context2.next = 34;
                                  break;
                                }

                                throw _iteratorError2;

                              case 34:
                                return _context2.finish(31);

                              case 35:
                                return _context2.finish(28);

                              case 36:
                                _context2.next = 38;
                                return class_[routeConfig['handler']](url, data, _this2._servers[url]);

                              case 38:
                                result = _context2.sent;

                                routeConfig['resEvent'] && _this2._servers[url]['serverInstance'].emit(routeConfig['resEvent'], {
                                  clientId: _this2._servers[url]['clientId'],
                                  data: result
                                });
                                _context2.next = 45;
                                break;

                              case 42:
                                _context2.prev = 42;
                                _context2.t1 = _context2['catch'](2);

                                logger.error(_context2.t1);

                              case 45:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        }, _callee2, _this2, [[2, 42], [8, 24, 28, 36], [29,, 31, 35]]);
                      }));

                      return function (_x7) {
                        return _ref3.apply(this, arguments);
                      };
                    }());
                  });
                };

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 5;

                for (_iterator = filesAndDirs.files[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  file = _step.value;

                  _loop(file);
                }
                _context3.next = 13;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3['catch'](5);
                _didIteratorError = true;
                _iteratorError = _context3.t0;

              case 13:
                _context3.prev = 13;
                _context3.prev = 14;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 16:
                _context3.prev = 16;

                if (!_didIteratorError) {
                  _context3.next = 19;
                  break;
                }

                throw _iteratorError;

              case 19:
                return _context3.finish(16);

              case 20:
                return _context3.finish(13);

              case 21:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 9, 13, 21], [14,, 16, 20]]);
      }));

      function _buildRoute(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return _buildRoute;
    }()
  }, {
    key: 'emit',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(serverUrl, eventName, data) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(!this._servers[serverUrl] || !this._servers[serverUrl]['serverInstance'])) {
                  _context4.next = 2;
                  break;
                }

                throw new _ErrorHelper2.default(null, _errorCodes2.default.SERVER_NOT_EXIST);

              case 2:
                this._servers[serverUrl]['serverInstance'].emit(eventName, {
                  clientId: this._servers[serverUrl]['clientId'],
                  data: data
                });

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function emit(_x8, _x9, _x10) {
        return _ref4.apply(this, arguments);
      }

      return emit;
    }()
  }, {
    key: 'getClientIdByUrl',
    value: function getClientIdByUrl(serverUrl) {
      if (!this._servers[serverUrl]) {
        throw new _ErrorHelper2.default(null, _errorCodes2.default.SERVER_NOT_EXIST);
      }
      return this._servers[serverUrl]['clientId'];
    }
  }, {
    key: 'Servers',
    get: function get() {
      return this._servers;
    }
  }]);

  return SocketClientHelper;
}();

exports.default = SocketClientHelper;