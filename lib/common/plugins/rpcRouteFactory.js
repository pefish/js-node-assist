'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 18/08/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _CommonUtil = require('./CommonUtil');

var _CommonUtil2 = _interopRequireDefault(_CommonUtil);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jayson = require('jayson');

var _jayson2 = _interopRequireDefault(_jayson);

var _ResponseUtil = require('./ResponseUtil');

var _ResponseUtil2 = _interopRequireDefault(_ResponseUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RpcRouteFactory = function () {
  function RpcRouteFactory() {
    _classCallCheck(this, RpcRouteFactory);
  }

  _createClass(RpcRouteFactory, [{
    key: 'buildRoute',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(routePath, rpcPath) {
        var _this = this;

        var filesAndDirs, allMethods, _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                filesAndDirs = _CommonUtil2.default.getFilesAndDirs(routePath);
                allMethods = {};

                _loop = function _loop(file) {
                  var name = _path2.default.basename(file, '.js');
                  var apisOfName = require(routePath + '/' + file).default;
                  var class_ = null;
                  try {
                    class_ = new (require(rpcPath + '/' + name).default)();
                  } catch (err) {
                    logger.error('class_', err);
                  }
                  apisOfName.forEach(function (api) {
                    if (class_) {
                      allMethods[api['path']] = function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args, cb) {
                          var _class_, data;

                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.prev = 0;
                                  _context.next = 3;
                                  return (_class_ = class_)[api['path']].apply(_class_, _toConsumableArray(args));

                                case 3:
                                  data = _context.sent;

                                  cb(null, _ResponseUtil2.default.assembleSucceedRes(data));
                                  _context.next = 10;
                                  break;

                                case 7:
                                  _context.prev = 7;
                                  _context.t0 = _context['catch'](0);

                                  cb(null, _ResponseUtil2.default.assembleFailRes(_context.t0));

                                case 10:
                                case 'end':
                                  return _context.stop();
                              }
                            }
                          }, _callee, _this, [[0, 7]]);
                        }));

                        return function (_x3, _x4) {
                          return _ref2.apply(this, arguments);
                        };
                      }();
                    } else {
                      allMethods[api['path']] = function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(args, cb) {
                          var _require, data;

                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.prev = 0;
                                  _context2.next = 3;
                                  return (_require = require(rpcPath + '/' + name + '/' + api['path'])).default.apply(_require, _toConsumableArray(args));

                                case 3:
                                  data = _context2.sent;

                                  cb(null, _ResponseUtil2.default.assembleSucceedRes(data));
                                  _context2.next = 10;
                                  break;

                                case 7:
                                  _context2.prev = 7;
                                  _context2.t0 = _context2['catch'](0);

                                  cb(null, _ResponseUtil2.default.assembleFailRes(_context2.t0));

                                case 10:
                                case 'end':
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, _this, [[0, 7]]);
                        }));

                        return function (_x5, _x6) {
                          return _ref3.apply(this, arguments);
                        };
                      }();
                    }
                  });
                };

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 6;

                for (_iterator = filesAndDirs.files[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  file = _step.value;

                  _loop(file);
                }
                _context3.next = 14;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3['catch'](6);
                _didIteratorError = true;
                _iteratorError = _context3.t0;

              case 14:
                _context3.prev = 14;
                _context3.prev = 15;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 17:
                _context3.prev = 17;

                if (!_didIteratorError) {
                  _context3.next = 20;
                  break;
                }

                throw _iteratorError;

              case 20:
                return _context3.finish(17);

              case 21:
                return _context3.finish(14);

              case 22:
                return _context3.abrupt('return', _jayson2.default.server(allMethods));

              case 23:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[6, 10, 14, 22], [15,, 17, 21]]);
      }));

      function buildRoute(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return buildRoute;
    }()
  }]);

  return RpcRouteFactory;
}();

exports.default = new RpcRouteFactory();