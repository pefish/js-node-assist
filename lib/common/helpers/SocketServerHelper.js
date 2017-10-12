'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 19/09/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _FileUtil = require('../utils/FileUtil');

var _FileUtil2 = _interopRequireDefault(_FileUtil);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _package = require('../../../package.json');

var _package2 = _interopRequireDefault(_package);

var _errorCodes = require('../constants/errorCodes');

var _errorCodes2 = _interopRequireDefault(_errorCodes);

var _CommonUtil = require('../utils/CommonUtil');

var _CommonUtil2 = _interopRequireDefault(_CommonUtil);

var _ErrorHelper = require('../helpers/ErrorHelper');

var _ErrorHelper2 = _interopRequireDefault(_ErrorHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocketServerHelper = function () {
  function SocketServerHelper(routePath, socketPath) {
    _classCallCheck(this, SocketServerHelper);

    this._routePath = routePath;
    this._socketPath = socketPath;
    this._server = (0, _socket2.default)();
    this._clients = {};
  }

  _createClass(SocketServerHelper, [{
    key: '_addClient',
    value: function _addClient(clientId, url, clientInstance, clientInfo) {
      this._clients[clientId] = {
        url: url, // 本服务端在客户端的唯一标识
        clientInstance: clientInstance,
        clientInfo: clientInfo
      };
    }
  }, {
    key: '_removeClient',
    value: function _removeClient(clientId) {
      delete this._clients[clientId];
    }
  }, {
    key: 'listen',
    value: function listen(port) {
      var _this = this;

      var onDisConnected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var onBasicInfoArrived = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      this._server.on('connection', function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(client) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;

                  logger.info(client['id'] + ' \u5BA2\u6237\u7AEF\u8FDE\u63A5');
                  // 发送clientId以及服务端版本信息
                  client.emit('basic_info', {
                    clientId: client['id'],
                    data: {
                      name: _package2.default['name'],
                      version: _package2.default['version']
                    }
                  });
                  // 监听此客户端的basic_info消息
                  client.on('basic_info', function (datas) {
                    if (datas['clientId'] !== client['id']) {
                      logger.warn('\u8FDE\u63A5\u7684clientId\uFF1A' + client['id'] + ' \u4E0E \u6536\u5230basic info\u7684clientId\uFF1A' + datas['clientId'] + ' \u4E0D\u4E00\u81F4');
                      return;
                    }
                    _this._addClient(client['id'], datas['url'], client, datas['data']);
                    onBasicInfoArrived && onBasicInfoArrived(client['id'], _this._clients[client['id']]);
                  });
                  client.on('disconnect', function () {
                    logger.info('\u5BA2\u6237\u7AEF ' + client['id'] + ' \u65AD\u5F00\u8FDE\u63A5');
                    _this._removeClient(client['id']);
                    onDisConnected && onDisConnected(client['id']);
                  });
                  // 监听客户端
                  _context.next = 7;
                  return _this._buildRoute(client, _this._routePath, _this._socketPath);

                case 7:
                  _context.next = 12;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context['catch'](0);

                  logger.error(_context.t0);

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[0, 9]]);
        }));

        return function (_x3) {
          return _ref.apply(this, arguments);
        };
      }());
      this._server.listen(port);
      // 应用关闭时，关闭服务
      _CommonUtil2.default.onExiting(function () {
        _this._server.close();
        logger.info('socket服务已关闭');
      });
    }
  }, {
    key: 'broadcast',
    value: function broadcast(eventName, argsArr) {
      var _server;

      (_server = this._server).emit.apply(_server, [eventName].concat(_toConsumableArray(argsArr)));
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
                    // throw err
                  }
                  apisOfName.forEach(function (routeConfig) {
                    client.on(routeConfig['event'], function () {
                      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(datas) {
                        var clientId, data, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, handler, result;

                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                logger.info('socket\u5BA2\u6237\u547D\u4EE4 ' + routeConfig['event'] + ': ', JSON.stringify(datas));
                                _context2.prev = 1;

                                if (routeConfig['handlerPath']) {
                                  try {
                                    // handlerPath: path.join(__dirname, '../apis/Test')
                                    class_ = new (require(routeConfig['handlerPath']).default)();
                                  } catch (err) {}
                                }
                                clientId = datas.clientId, data = datas.data;

                                if (_this2._clients[clientId]) {
                                  _context2.next = 6;
                                  break;
                                }

                                throw {
                                  errorMessage: 'clientId: ' + clientId + '\u4E0D\u5B58\u5728\uFF0C\u4E0D\u7ED9\u54CD\u5E94'
                                };

                              case 6:
                                if (!routeConfig['preHandlers']) {
                                  _context2.next = 38;
                                  break;
                                }

                                _iteratorNormalCompletion2 = true;
                                _didIteratorError2 = false;
                                _iteratorError2 = undefined;
                                _context2.prev = 10;
                                _iterator2 = routeConfig['preHandlers'][Symbol.iterator]();

                              case 12:
                                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                  _context2.next = 24;
                                  break;
                                }

                                handler = _step2.value;

                                if (!(handler.indexOf('/') !== -1)) {
                                  _context2.next = 19;
                                  break;
                                }

                                _context2.next = 17;
                                return require(_path2.default.resolve(handler)).default(routeConfig, data);

                              case 17:
                                _context2.next = 21;
                                break;

                              case 19:
                                _context2.next = 21;
                                return require('../preHandlers/' + handler).default(routeConfig, data);

                              case 21:
                                _iteratorNormalCompletion2 = true;
                                _context2.next = 12;
                                break;

                              case 24:
                                _context2.next = 30;
                                break;

                              case 26:
                                _context2.prev = 26;
                                _context2.t0 = _context2['catch'](10);
                                _didIteratorError2 = true;
                                _iteratorError2 = _context2.t0;

                              case 30:
                                _context2.prev = 30;
                                _context2.prev = 31;

                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                  _iterator2.return();
                                }

                              case 33:
                                _context2.prev = 33;

                                if (!_didIteratorError2) {
                                  _context2.next = 36;
                                  break;
                                }

                                throw _iteratorError2;

                              case 36:
                                return _context2.finish(33);

                              case 37:
                                return _context2.finish(30);

                              case 38:
                                _context2.next = 40;
                                return class_[routeConfig['handler']](clientId, data, _this2._clients[clientId]);

                              case 40:
                                result = _context2.sent;

                                routeConfig['resEvent'] && _this2._clients[clientId]['clientInstance'].emit(routeConfig['resEvent'], {
                                  url: _this2._clients[clientId]['url'],
                                  data: result
                                });
                                _context2.next = 47;
                                break;

                              case 44:
                                _context2.prev = 44;
                                _context2.t1 = _context2['catch'](1);

                                logger.error(_context2.t1);

                              case 47:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        }, _callee2, _this2, [[1, 44], [10, 26, 30, 38], [31,, 33, 37]]);
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
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(clientId, eventName, data) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(!this._clients[clientId] || !this._clients[clientId]['clientInstance'])) {
                  _context4.next = 2;
                  break;
                }

                throw new _ErrorHelper2.default(null, _errorCodes2.default.CLIENT_NOT_EXIST);

              case 2:
                this._clients[clientId]['clientInstance'].emit(eventName, {
                  url: this._clients[clientId]['url'],
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
    key: 'close',
    value: function close() {
      this._server.close();
    }
  }, {
    key: 'Clients',
    get: function get() {
      return this._clients;
    }
  }]);

  return SocketServerHelper;
}();

exports.default = SocketServerHelper;