'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 16/09/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeUtil = function () {
  function TimeUtil() {
    _classCallCheck(this, TimeUtil);
  }

  _createClass(TimeUtil, null, [{
    key: 'setInterval',
    value: function setInterval(fun, interval) {
      var _this = this;

      var stop = false;
      setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fun();

              case 3:
                stop = _context.sent;
                _context.next = 8;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context['catch'](0);

              case 8:
                if (stop === true) {
                  logger.error('task已停止');
                } else {
                  TimeUtil.setInterval(fun, interval);
                }

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 6]]);
      })), interval);
    }
  }, {
    key: 'toMysqlTimestamp',
    value: function toMysqlTimestamp(timestamp) {
      return (0, _moment2.default)(timestamp).format('YYYY-MM-DD HH:mm:ss.SSS');
    }
  }, {
    key: 'mysqlToTimestamp',
    value: function mysqlToTimestamp(mysqlTimestamp) {
      return (0, _moment2.default)(mysqlTimestamp).valueOf();
    }
  }, {
    key: 'toMysqlDateTime',
    value: function toMysqlDateTime(timestamp) {
      return (0, _moment2.default)(timestamp).format('YYYY-MM-DD HH:mm:ss');
    }
  }]);

  return TimeUtil;
}();

exports.default = TimeUtil;