'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by pefish on 2017/5/11.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(logfilePath) {
    var app = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var appenders, categories, filename, logger;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            appenders = {}, categories = {
              default: {
                appenders: [],
                level: 'info'
              }
            };
            filename = _path2.default.basename(logfilePath, '.log');

            if (logfilePath.substr(logfilePath.length - 1, 1) !== '/') {
              logfilePath += '/';
            }
            // 文件输出
            appenders[filename + '.log'] = {
              type: 'dateFile',
              filename: logfilePath + filename + '.log',
              pattern: 'yyyy-MM-dd',
              compress: true
            };
            categories['default']['appenders'].push(filename + '.log');
            // 控制台输出
            appenders[filename] = {
              type: 'stdout'
            };
            categories['default']['appenders'].push(filename);

            //配置
            _log4js2.default.configure({
              appenders: appenders,
              categories: categories
            });
            // 绑定express
            logger = _log4js2.default.getLogger(filename);

            app && app.use(_log4js2.default.connectLogger(logger));
            logger['print'] = function (err, filename, info) {
              var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'info';

              var caller_line = err.stack.split('\n')[1];
              var index = caller_line.indexOf(':');
              var lineAndCol = caller_line.substring(index + 1, caller_line.length - 1);
              var lineNumber = lineAndCol.substring(0, lineAndCol.indexOf(':'));
              logger[type]('[' + filename + ', ' + lineNumber + '] ' + info);
            };
            return _context.abrupt('return', logger);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();