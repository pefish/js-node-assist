'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var rootHandler = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
    var data;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return apiRouteFactory.apis[req.method.toUpperCase() + '-' + req.route['path']]['apiHandler'](req, res, next);

          case 3:
            data = _context6.sent;

            if (data) {
              _ResponseUtil2.default.success(res, data);
            }
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6['catch'](0);

            _ResponseUtil2.default.failed(res, _context6.t0);

          case 10:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this, [[0, 7]]);
  }));

  return function rootHandler(_x16, _x17, _x18) {
    return _ref8.apply(this, arguments);
  };
}();

var _ResponseUtil = require('../utils/ResponseUtil');

var _ResponseUtil2 = _interopRequireDefault(_ResponseUtil);

var _FileUtil = require('../utils/FileUtil');

var _FileUtil2 = _interopRequireDefault(_FileUtil);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _globalHandlers = require('../preHandlers/globalHandlers');

var _globalHandlers2 = _interopRequireDefault(_globalHandlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiRouteFactory = function () {
  function ApiRouteFactory() {
    _classCallCheck(this, ApiRouteFactory);

    this.apis = {};
    this.apiConfigs = {};
  }

  _createClass(ApiRouteFactory, [{
    key: 'buildRoute',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(app, routePath, apiPath) {
        var _this = this;

        var filesAndDirs, _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                filesAndDirs = _FileUtil2.default.getFilesAndDirs(routePath);

                _loop = function _loop(file) {
                  var name = _path2.default.basename(file, '.js');
                  var apisOfName = require(routePath + '/' + file).default;
                  var class_ = null;
                  try {
                    class_ = new (require(apiPath + '/' + name).default)();
                  } catch (err) {
                    // logger.error('class_', err)
                  }
                  apisOfName.forEach(function (api) {
                    app[api.method].apply(app, [api.path, printParams].concat(_toConsumableArray(_this._buildGlobalHandlers(_globalHandlers2.default)), _toConsumableArray(_this.buildBaseHandle(api.preHandlers)), [rootHandler]));
                    // 预加载
                    if (class_) {
                      _this.apis[api.method.toUpperCase() + '-' + api.path] = {
                        apiHandler: class_[api['apiHandler']],
                        apiConfig: api
                      };
                    } else {
                      _this.apis[api.method.toUpperCase() + '-' + api.path] = {
                        apiHandler: require(apiPath + '/' + name + '/' + api['apiHandler']).default,
                        apiConfig: api
                      };
                    }
                  });
                  _this.apiConfigs[name] = apisOfName;
                };

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 5;

                for (_iterator = filesAndDirs.files[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  file = _step.value;

                  _loop(file);
                }
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](5);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 13:
                _context.prev = 13;
                _context.prev = 14;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 16:
                _context.prev = 16;

                if (!_didIteratorError) {
                  _context.next = 19;
                  break;
                }

                throw _iteratorError;

              case 19:
                return _context.finish(16);

              case 20:
                return _context.finish(13);

              case 21:
                return _context.abrupt('return', true);

              case 22:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 9, 13, 21], [14,, 16, 20]]);
      }));

      function buildRoute(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return buildRoute;
    }()
  }, {
    key: '_buildGlobalHandlers',
    value: function _buildGlobalHandlers(globalHandlers) {
      var _this2 = this;

      var result = [];
      globalHandlers.forEach(function (globalHandler) {
        result.push(function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return globalHandler(req, res, next);

                  case 3:
                    next();
                    _context2.next = 9;
                    break;

                  case 6:
                    _context2.prev = 6;
                    _context2.t0 = _context2['catch'](0);

                    _ResponseUtil2.default.failed(res, _context2.t0);

                  case 9:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this2, [[0, 6]]);
          }));

          return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
          };
        }());
      });
      return result;
    }
  }, {
    key: 'buildBaseHandle',
    value: function buildBaseHandle(preHandlers) {
      var _this3 = this;

      var allPreHandlers = [];
      preHandlers.forEach(function (handler) {
        if (handler instanceof Array) {
          // ['handler1', 'handler2']
          handler.forEach(function (handler1, index) {
            allPreHandlers.push(function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
                var array, errArray;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        array = req['preHandlerArray'] || [], errArray = req['preHandlerErrArray'] || [];

                        if (!array.includes(1)) {
                          _context3.next = 4;
                          break;
                        }

                        // 数组中已经有成员通过了
                        next();
                        return _context3.abrupt('return');

                      case 4:
                        _context3.prev = 4;

                        if (!(handler1.indexOf('/') !== -1)) {
                          _context3.next = 10;
                          break;
                        }

                        _context3.next = 8;
                        return require(_path2.default.resolve(handler1)).default(req, res, next, { index: index });

                      case 8:
                        _context3.next = 12;
                        break;

                      case 10:
                        _context3.next = 12;
                        return require('../preHandlers/' + handler1).default(req, res, next, { index: index });

                      case 12:
                        array[index] = 1;
                        req['preHandlerArray'] = array;
                        next();
                        _context3.next = 22;
                        break;

                      case 17:
                        _context3.prev = 17;
                        _context3.t0 = _context3['catch'](4);

                        errArray[index] = _context3.t0;
                        req['preHandlerErrArray'] = errArray;
                        if (index === handler.length - 1) {
                          _ResponseUtil2.default.failed(res, req['preHandlerErrArray'][req['preHandlerVerifyIndex']]);
                        } else {
                          array[index] = 0;
                          req['preHandlerArray'] = array;
                          next();
                        }

                      case 22:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                }, _callee3, _this3, [[4, 17]]);
              }));

              return function (_x7, _x8, _x9) {
                return _ref3.apply(this, arguments);
              };
            }());
          });
        } else if (handler instanceof Object) {
          var _loop2 = function _loop2(handler1, params) {
            allPreHandlers.push(function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.prev = 0;

                        if (!(handler1.indexOf('/') !== -1)) {
                          _context4.next = 6;
                          break;
                        }

                        _context4.next = 4;
                        return require(_path2.default.resolve(handler1)).default(req, res, next, params);

                      case 4:
                        _context4.next = 8;
                        break;

                      case 6:
                        _context4.next = 8;
                        return require('../preHandlers/' + handler1).default(req, res, next, params);

                      case 8:
                        next();
                        _context4.next = 14;
                        break;

                      case 11:
                        _context4.prev = 11;
                        _context4.t0 = _context4['catch'](0);

                        _ResponseUtil2.default.failed(res, _context4.t0);

                      case 14:
                      case 'end':
                        return _context4.stop();
                    }
                  }
                }, _callee4, _this3, [[0, 11]]);
              }));

              return function (_x10, _x11, _x12) {
                return _ref6.apply(this, arguments);
              };
            }());
          };

          // {aa: [param1, param2]}
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = Object.entries(handler)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _ref4 = _step2.value;

              var _ref5 = _slicedToArray(_ref4, 2);

              var handler1 = _ref5[0];
              var params = _ref5[1];

              _loop2(handler1, params);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        } else {
          allPreHandlers.push(function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;

                      if (!(handler.indexOf('/') !== -1)) {
                        _context5.next = 6;
                        break;
                      }

                      _context5.next = 4;
                      return require(_path2.default.resolve(handler)).default(req, res, next);

                    case 4:
                      _context5.next = 8;
                      break;

                    case 6:
                      _context5.next = 8;
                      return require('../preHandlers/' + handler).default(req, res, next);

                    case 8:
                      next();
                      _context5.next = 14;
                      break;

                    case 11:
                      _context5.prev = 11;
                      _context5.t0 = _context5['catch'](0);

                      _ResponseUtil2.default.failed(res, _context5.t0);

                    case 14:
                    case 'end':
                      return _context5.stop();
                  }
                }
              }, _callee5, _this3, [[0, 11]]);
            }));

            return function (_x13, _x14, _x15) {
              return _ref7.apply(this, arguments);
            };
          }());
        }
      });
      return allPreHandlers;
    }
  }]);

  return ApiRouteFactory;
}();

var apiRouteFactory = new ApiRouteFactory();

function printParams(req, res, next) {
  req['apiConfig'] = apiRouteFactory.apis[req.method.toUpperCase() + '-' + req.route['path']]['apiConfig'];
  var params = {};
  if (req.method === 'GET') {
    Object.assign(params, req.params, req.query);
  } else {
    Object.assign(params, req.params, req.body);
  }
  params['password'] && delete params['password'];
  params['trade_pass'] && delete params['trade_pass'];
  logger.info('pid:' + process.pid + '--' + req.originalUrl, JSON.stringify(params));
  next();
}

exports.default = apiRouteFactory;