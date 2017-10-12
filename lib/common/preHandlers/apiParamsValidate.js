'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _errorCodes = require('../constants/errorCodes');

var _errorCodes2 = _interopRequireDefault(_errorCodes);

var _RequestUtil = require('../utils/RequestUtil');

var _RequestUtil2 = _interopRequireDefault(_RequestUtil);

var _AssertUtil = require('../utils/AssertUtil');

var _AssertUtil2 = _interopRequireDefault(_AssertUtil);

var _ErrorHelper = require('../helpers/ErrorHelper');

var _ErrorHelper2 = _interopRequireDefault(_ErrorHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
    var apiConfig, clientParams, params, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref2, _ref3, paramName, paramObj, policies, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, policy;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            apiConfig = req['apiConfig'];
            clientParams = _RequestUtil2.default.getAllParams(req);

            if (apiConfig) {
              _context.next = 4;
              break;
            }

            throw new _ErrorHelper2.default('api配置文件出错，找不到api', _errorCodes2.default.API_ROUTE_NOT_FIND);

          case 4:
            if (!apiConfig['params']) {
              _context.next = 72;
              break;
            }

            params = apiConfig['params'];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 9;
            _iterator = Object.entries(params)[Symbol.iterator]();

          case 11:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 58;
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
            _context.prev = 20;
            _iterator2 = policies[Symbol.iterator]();

          case 22:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context.next = 41;
              break;
            }

            policy = _step2.value;

            if (!(policy[0] === 'default')) {
              _context.next = 30;
              break;
            }

            if (clientParams[paramName]) {
              _context.next = 28;
              break;
            }

            clientParams[paramName] = policy[1];
            return _context.abrupt('break', 41);

          case 28:
            _context.next = 38;
            break;

          case 30:
            if (!(clientParams[paramName] !== undefined || policy[0] === 'notEmpty')) {
              _context.next = 38;
              break;
            }

            if (!policy[1]) {
              _context.next = 36;
              break;
            }

            _context.next = 34;
            return _AssertUtil2.default[policy[0]](clientParams[paramName], policy[1], { valName: paramName });

          case 34:
            _context.next = 38;
            break;

          case 36:
            _context.next = 38;
            return _AssertUtil2.default[policy[0]](clientParams[paramName], { valName: paramName });

          case 38:
            _iteratorNormalCompletion2 = true;
            _context.next = 22;
            break;

          case 41:
            _context.next = 47;
            break;

          case 43:
            _context.prev = 43;
            _context.t0 = _context['catch'](20);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t0;

          case 47:
            _context.prev = 47;
            _context.prev = 48;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 50:
            _context.prev = 50;

            if (!_didIteratorError2) {
              _context.next = 53;
              break;
            }

            throw _iteratorError2;

          case 53:
            return _context.finish(50);

          case 54:
            return _context.finish(47);

          case 55:
            _iteratorNormalCompletion = true;
            _context.next = 11;
            break;

          case 58:
            _context.next = 64;
            break;

          case 60:
            _context.prev = 60;
            _context.t1 = _context['catch'](9);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 64:
            _context.prev = 64;
            _context.prev = 65;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 67:
            _context.prev = 67;

            if (!_didIteratorError) {
              _context.next = 70;
              break;
            }

            throw _iteratorError;

          case 70:
            return _context.finish(67);

          case 71:
            return _context.finish(64);

          case 72:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[9, 60, 64, 72], [20, 43, 47, 55], [48,, 50, 54], [65,, 67, 71]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();