'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ValidateUtil = require('../utils/ValidateUtil');

var _ValidateUtil2 = _interopRequireDefault(_ValidateUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(routeConfig, data) {
    var params, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref2, _ref3, paramName, paramObj, policies, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, policy;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = routeConfig['params'];

            if (!params) {
              _context.next = 66;
              break;
            }

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 5;
            _iterator = Object.entries(params)[Symbol.iterator]();

          case 7:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 52;
              break;
            }

            _ref2 = _step.value;
            _ref3 = _slicedToArray(_ref2, 2);
            paramName = _ref3[0];
            paramObj = _ref3[1];

            // 校验每个参数
            policies = paramObj['policies'];
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 16;
            _iterator2 = policies[Symbol.iterator]();

          case 18:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context.next = 35;
              break;
            }

            policy = _step2.value;

            if (!(policy[0] === 'default')) {
              _context.next = 26;
              break;
            }

            if (data[paramName]) {
              _context.next = 24;
              break;
            }

            data[paramName] = policy[1];
            return _context.abrupt('break', 35);

          case 24:
            _context.next = 32;
            break;

          case 26:
            _context.next = 28;
            return _ValidateUtil2.default[policy[0]](paramName, data[paramName], policy[1]);

          case 28:
            _context.t0 = _context.sent;
            _context.t1 = -1;

            if (!(_context.t0 === _context.t1)) {
              _context.next = 32;
              break;
            }

            return _context.abrupt('break', 35);

          case 32:
            _iteratorNormalCompletion2 = true;
            _context.next = 18;
            break;

          case 35:
            _context.next = 41;
            break;

          case 37:
            _context.prev = 37;
            _context.t2 = _context['catch'](16);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t2;

          case 41:
            _context.prev = 41;
            _context.prev = 42;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 44:
            _context.prev = 44;

            if (!_didIteratorError2) {
              _context.next = 47;
              break;
            }

            throw _iteratorError2;

          case 47:
            return _context.finish(44);

          case 48:
            return _context.finish(41);

          case 49:
            _iteratorNormalCompletion = true;
            _context.next = 7;
            break;

          case 52:
            _context.next = 58;
            break;

          case 54:
            _context.prev = 54;
            _context.t3 = _context['catch'](5);
            _didIteratorError = true;
            _iteratorError = _context.t3;

          case 58:
            _context.prev = 58;
            _context.prev = 59;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 61:
            _context.prev = 61;

            if (!_didIteratorError) {
              _context.next = 64;
              break;
            }

            throw _iteratorError;

          case 64:
            return _context.finish(61);

          case 65:
            return _context.finish(58);

          case 66:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[5, 54, 58, 66], [16, 37, 41, 49], [42,, 44, 48], [59,, 61, 65]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();