'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ResponseUtil = require('../utils/ResponseUtil');

var _ResponseUtil2 = _interopRequireDefault(_ResponseUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by joy on 12/29/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var app = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 捕捉未处理的rejection
            process.on('unhandledRejection', function (err) {
              logger.error('unhandledRejection', err);
            });
            if (app) {
              app.use(require('express-domain-middleware'));
              app.use(function (err, req, res, next) {
                logger.error('Exception' + '---' + err['debugMsg'], err);
                console.trace();
                _ResponseUtil2.default.failed(res, err);
              });
            }
            return _context.abrupt('return', true);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function () {
    return _ref.apply(this, arguments);
  };
}();