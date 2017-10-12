'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basicAuth = require('basic-auth');

var _basicAuth2 = _interopRequireDefault(_basicAuth);

var _errorCodes = require('../../common/constants/errorCodes');

var _errorCodes2 = _interopRequireDefault(_errorCodes);

var _ErrorHelper = require('../helpers/ErrorHelper');

var _ErrorHelper2 = _interopRequireDefault(_ErrorHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by joy on 25/09/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
    var user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user = (0, _basicAuth2.default)(req);

            if (!(!user || user['name'] !== args['restUser'] || user['pass'] !== args['restPass'])) {
              _context.next = 3;
              break;
            }

            throw new _ErrorHelper2.default(null, _errorCodes2.default.PEMISSION_ERROR);

          case 3:
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