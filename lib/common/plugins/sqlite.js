'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _SequelizeHelper = require('../helpers/SequelizeHelper');

var _SequelizeHelper2 = _interopRequireDefault(_SequelizeHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(filename) {
    var printLog = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var sequelizeHelper;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sequelizeHelper = new _SequelizeHelper2.default(null, printLog);

            sequelizeHelper.Sequelize = new _sequelize2.default('mainDb', null, null, {
              dialect: 'sqlite',
              storage: filename,
              logging: function logging(sql) {
                printLog && logger.info(sql);
              }
            });
            logger.info('\u8FDE\u63A5sqlite: ' + filename + ' \u4E2D...');
            _context.next = 5;
            return sequelizeHelper.Sequelize.authenticate();

          case 5:
            logger.info('sqlite: ' + filename + ' \u8FDE\u63A5\u6210\u529F');
            return _context.abrupt('return', sequelizeHelper);

          case 7:
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