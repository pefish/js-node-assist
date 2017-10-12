'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 1/18/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _ObjectUtil = require('../utils/ObjectUtil');

var _ObjectUtil2 = _interopRequireDefault(_ObjectUtil);

var _FileUtil = require('../utils/FileUtil');

var _FileUtil2 = _interopRequireDefault(_FileUtil);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _errorCodes = require('../constants/errorCodes');

var _errorCodes2 = _interopRequireDefault(_errorCodes);

var _ErrorHelper = require('../helpers/ErrorHelper');

var _ErrorHelper2 = _interopRequireDefault(_ErrorHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SequelizeHelper = function () {
  function SequelizeHelper(modelPath) {
    _classCallCheck(this, SequelizeHelper);

    this._models = {};
    this._modelPath = modelPath;
    this._sequelize = null;
  }

  _createClass(SequelizeHelper, [{
    key: 'sync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(isForce) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, model;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 3;
                _iterator = Object.values(this._geneModels())[Symbol.iterator]();

              case 5:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 12;
                  break;
                }

                model = _step.value;
                _context.next = 9;
                return model.sync(isForce);

              case 9:
                _iteratorNormalCompletion = true;
                _context.next = 5;
                break;

              case 12:
                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](3);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 18:
                _context.prev = 18;
                _context.prev = 19;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 21:
                _context.prev = 21;

                if (!_didIteratorError) {
                  _context.next = 24;
                  break;
                }

                throw _iteratorError;

              case 24:
                return _context.finish(21);

              case 25:
                return _context.finish(18);

              case 26:
                return _context.abrupt('return', true);

              case 27:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
      }));

      function sync(_x) {
        return _ref.apply(this, arguments);
      }

      return sync;
    }()
  }, {
    key: 'query',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sql) {
        var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', opt ? this._sequelize.query(sql, opt) : this._sequelize.query(sql));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function query(_x2) {
        return _ref2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: 'begin',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', this.query('begin'));

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function begin() {
        return _ref3.apply(this, arguments);
      }

      return begin;
    }()
  }, {
    key: 'commit',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt('return', this.query('commit'));

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function commit() {
        return _ref4.apply(this, arguments);
      }

      return commit;
    }()
  }, {
    key: 'rollback',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt('return', this.query('rollback'));

              case 1:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function rollback() {
        return _ref5.apply(this, arguments);
      }

      return rollback;
    }()
  }, {
    key: 'selectBySql',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(sql) {
        var replacements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, value, opt, results;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (opts['forUpdate'] === true) {
                  sql = sql + ' for update';
                }
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context6.prev = 4;
                _iterator2 = Object.values(replacements)[Symbol.iterator]();

              case 6:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context6.next = 13;
                  break;
                }

                value = _step2.value;
                _context6.next = 10;
                return this._checkInject(value);

              case 10:
                _iteratorNormalCompletion2 = true;
                _context6.next = 6;
                break;

              case 13:
                _context6.next = 19;
                break;

              case 15:
                _context6.prev = 15;
                _context6.t0 = _context6['catch'](4);
                _didIteratorError2 = true;
                _iteratorError2 = _context6.t0;

              case 19:
                _context6.prev = 19;
                _context6.prev = 20;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 22:
                _context6.prev = 22;

                if (!_didIteratorError2) {
                  _context6.next = 25;
                  break;
                }

                throw _iteratorError2;

              case 25:
                return _context6.finish(22);

              case 26:
                return _context6.finish(19);

              case 27:
                opt = {
                  type: this._sequelize.QueryTypes.SELECT,
                  replacements: replacements
                };
                _context6.next = 30;
                return this.query(sql, opt);

              case 30:
                results = _context6.sent;

                if (!(!results || !results.length > 0)) {
                  _context6.next = 33;
                  break;
                }

                return _context6.abrupt('return', []);

              case 33:
                return _context6.abrupt('return', results);

              case 34:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[4, 15, 19, 27], [20,, 22, 26]]);
      }));

      function selectBySql(_x4) {
        return _ref6.apply(this, arguments);
      }

      return selectBySql;
    }()
  }, {
    key: 'createBySql',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(sql) {
        var replacements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, value, opt;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context7.prev = 3;
                _iterator3 = Object.values(replacements)[Symbol.iterator]();

              case 5:
                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                  _context7.next = 12;
                  break;
                }

                value = _step3.value;
                _context7.next = 9;
                return this._checkInject(value);

              case 9:
                _iteratorNormalCompletion3 = true;
                _context7.next = 5;
                break;

              case 12:
                _context7.next = 18;
                break;

              case 14:
                _context7.prev = 14;
                _context7.t0 = _context7['catch'](3);
                _didIteratorError3 = true;
                _iteratorError3 = _context7.t0;

              case 18:
                _context7.prev = 18;
                _context7.prev = 19;

                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }

              case 21:
                _context7.prev = 21;

                if (!_didIteratorError3) {
                  _context7.next = 24;
                  break;
                }

                throw _iteratorError3;

              case 24:
                return _context7.finish(21);

              case 25:
                return _context7.finish(18);

              case 26:
                opt = {
                  type: this._sequelize.QueryTypes.UPDATE,
                  replacements: replacements
                };
                _context7.next = 29;
                return this.query(sql, opt);

              case 29:
                return _context7.abrupt('return', true);

              case 30:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this, [[3, 14, 18, 26], [19,, 21, 25]]);
      }));

      function createBySql(_x7) {
        return _ref7.apply(this, arguments);
      }

      return createBySql;
    }()
  }, {
    key: 'select',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(opts) {
        var select_, from_, where_, order_, limit_, groupBy_, forUpdate_, sql, results;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this._checkAndGetParam(opts, 'select');

              case 2:
                select_ = _context8.sent;
                _context8.next = 5;
                return this._checkAndGetParam(opts, 'from');

              case 5:
                from_ = _context8.sent;
                _context8.next = 8;
                return this._checkAndGetParam(opts, 'where');

              case 8:
                where_ = _context8.sent;
                _context8.next = 11;
                return this._checkAndGetParam(opts, 'order');

              case 11:
                order_ = _context8.sent;
                _context8.next = 14;
                return this._checkAndGetParam(opts, 'limit');

              case 14:
                limit_ = _context8.sent;
                _context8.next = 17;
                return this._checkAndGetParam(opts, 'groupBy');

              case 17:
                groupBy_ = _context8.sent;
                _context8.next = 20;
                return this._checkAndGetParam(opts, 'forUpdate');

              case 20:
                forUpdate_ = _context8.sent;
                _context8.t0 = '\n      select\n        ' + select_ + '\n      from\n        ' + from_ + '\n      ';
                _context8.next = 24;
                return this._assembleParam('where', where_);

              case 24:
                _context8.t1 = _context8.sent;
                _context8.t2 = _context8.t0 + _context8.t1;
                _context8.t3 = _context8.t2 + '\n      ';
                _context8.next = 29;
                return this._assembleParam('order', order_);

              case 29:
                _context8.t4 = _context8.sent;
                _context8.t5 = _context8.t3 + _context8.t4;
                _context8.t6 = _context8.t5 + '\n      ';
                _context8.next = 34;
                return this._assembleParam('limit', limit_);

              case 34:
                _context8.t7 = _context8.sent;
                _context8.t8 = _context8.t6 + _context8.t7;
                _context8.t9 = _context8.t8 + '\n      ';
                _context8.next = 39;
                return this._assembleParam('groupBy', groupBy_);

              case 39:
                _context8.t10 = _context8.sent;
                _context8.t11 = _context8.t9 + _context8.t10;
                _context8.t12 = _context8.t11 + '\n      ';
                _context8.next = 44;
                return this._assembleParam('forUpdate', forUpdate_);

              case 44:
                _context8.t13 = _context8.sent;
                _context8.t14 = _context8.t12 + _context8.t13;
                sql = _context8.t14 + '\n    ';
                _context8.next = 49;
                return this.query(sql, {
                  type: this._sequelize.QueryTypes.SELECT
                });

              case 49:
                results = _context8.sent;

                if (!(!results || !results.length > 0)) {
                  _context8.next = 52;
                  break;
                }

                return _context8.abrupt('return', []);

              case 52:
                return _context8.abrupt('return', results);

              case 53:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function select(_x9) {
        return _ref8.apply(this, arguments);
      }

      return select;
    }()
  }, {
    key: 'sum',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(opts) {
        var sum_, from_, where_, limit_, sql, results;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this._checkAndGetParam(opts, 'sum');

              case 2:
                sum_ = _context9.sent;
                _context9.next = 5;
                return this._checkAndGetParam(opts, 'from');

              case 5:
                from_ = _context9.sent;
                _context9.next = 8;
                return this._checkAndGetParam(opts, 'where');

              case 8:
                where_ = _context9.sent;
                _context9.next = 11;
                return this._checkAndGetParam(opts, 'limit');

              case 11:
                limit_ = _context9.sent;
                _context9.t0 = '\n      select\n        sum(' + sum_ + ') as sum\n      from\n        ' + from_ + '\n      ';
                _context9.next = 15;
                return this._assembleParam('where', where_);

              case 15:
                _context9.t1 = _context9.sent;
                _context9.t2 = _context9.t0 + _context9.t1;
                _context9.t3 = _context9.t2 + '\n      ';
                _context9.next = 20;
                return this._assembleParam('limit', limit_);

              case 20:
                _context9.t4 = _context9.sent;
                _context9.t5 = _context9.t3 + _context9.t4;
                sql = _context9.t5 + '\n    ';
                _context9.next = 25;
                return this.query(sql, {
                  type: this.sequelize.QueryTypes.SELECT
                });

              case 25:
                results = _context9.sent;

                if (!(!results || !results.length > 0)) {
                  _context9.next = 28;
                  break;
                }

                return _context9.abrupt('return', 0);

              case 28:
                return _context9.abrupt('return', results[0]['sum'] || 0);

              case 29:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function sum(_x10) {
        return _ref9.apply(this, arguments);
      }

      return sum;
    }()
  }, {
    key: 'close',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt('return', this._sequelize.close());

              case 1:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function close() {
        return _ref10.apply(this, arguments);
      }

      return close;
    }()
  }, {
    key: 'count',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(opts) {
        var from_, where_, order_, limit_, sql, results;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this._checkAndGetParam(opts, 'from');

              case 2:
                from_ = _context11.sent;
                _context11.next = 5;
                return this._checkAndGetParam(opts, 'where');

              case 5:
                where_ = _context11.sent;
                _context11.next = 8;
                return this._checkAndGetParam(opts, 'order');

              case 8:
                order_ = _context11.sent;
                _context11.next = 11;
                return this._checkAndGetParam(opts, 'limit');

              case 11:
                limit_ = _context11.sent;
                _context11.t0 = '\n      select\n        count(*) as count\n      from\n        ' + from_ + '\n      ';
                _context11.next = 15;
                return this._assembleParam('where', where_);

              case 15:
                _context11.t1 = _context11.sent;
                _context11.t2 = _context11.t0 + _context11.t1;
                _context11.t3 = _context11.t2 + '\n      ';
                _context11.next = 20;
                return this._assembleParam('order', order_);

              case 20:
                _context11.t4 = _context11.sent;
                _context11.t5 = _context11.t3 + _context11.t4;
                _context11.t6 = _context11.t5 + '\n      ';
                _context11.next = 25;
                return this._assembleParam('limit', limit_);

              case 25:
                _context11.t7 = _context11.sent;
                _context11.t8 = _context11.t6 + _context11.t7;
                sql = _context11.t8 + '\n    ';
                _context11.next = 30;
                return this.query(sql, {
                  type: this._sequelize.QueryTypes.SELECT
                });

              case 30:
                results = _context11.sent;

                if (!(!results || !results.length > 0)) {
                  _context11.next = 33;
                  break;
                }

                return _context11.abrupt('return', 0);

              case 33:
                return _context11.abrupt('return', results[0]['count']);

              case 34:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function count(_x11) {
        return _ref11.apply(this, arguments);
      }

      return count;
    }()
  }, {
    key: '_assembleParam',
    value: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(name, data) {
        var where, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _ref13, _ref14, key, value, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _ref15, _ref16, key1, value1, order, limit, forUpdate, groupBy, update, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _ref17, _ref18, _key, _value, insert, fields, values, batchInsert, _fields, _values;

        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.t0 = name;
                _context12.next = _context12.t0 === 'where' ? 3 : _context12.t0 === 'order' ? 81 : _context12.t0 === 'limit' ? 84 : _context12.t0 === 'forUpdate' ? 87 : _context12.t0 === 'groupBy' ? 90 : _context12.t0 === 'update' ? 93 : _context12.t0 === 'insert' ? 128 : _context12.t0 === 'batchInsert' ? 131 : 134;
                break;

              case 3:
                where = '';

                if (!data) {
                  _context12.next = 80;
                  break;
                }

                where = where + 'where 1 = 1 ';
                _iteratorNormalCompletion4 = true;
                _didIteratorError4 = false;
                _iteratorError4 = undefined;
                _context12.prev = 9;
                _iterator4 = Object.entries(data)[Symbol.iterator]();

              case 11:
                if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                  _context12.next = 66;
                  break;
                }

                _ref13 = _step4.value;
                _ref14 = _slicedToArray(_ref13, 2);
                key = _ref14[0];
                value = _ref14[1];

                if (!(value !== null && value !== undefined)) {
                  _context12.next = 63;
                  break;
                }

                if (!(key === '$or')) {
                  _context12.next = 56;
                  break;
                }

                where += 'and ( 1 = 2 ';
                _iteratorNormalCompletion5 = true;
                _didIteratorError5 = false;
                _iteratorError5 = undefined;
                _context12.prev = 22;
                _iterator5 = Object.entries(value)[Symbol.iterator]();

              case 24:
                if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                  _context12.next = 39;
                  break;
                }

                _ref15 = _step5.value;
                _ref16 = _slicedToArray(_ref15, 2);
                key1 = _ref16[0];
                value1 = _ref16[1];

                if (!(value1 instanceof Array)) {
                  _context12.next = 33;
                  break;
                }

                where += 'or ' + key1 + ' ' + value1[0] + ' ' + value1[1] + ' ';
                _context12.next = 36;
                break;

              case 33:
                _context12.next = 35;
                return this._checkInject(value1);

              case 35:
                if (value1 === 'null') {
                  where += 'or ' + key1 + ' is null ';
                } else {
                  where += 'or ' + key1 + ' = \'' + value1 + '\' ';
                }

              case 36:
                _iteratorNormalCompletion5 = true;
                _context12.next = 24;
                break;

              case 39:
                _context12.next = 45;
                break;

              case 41:
                _context12.prev = 41;
                _context12.t1 = _context12['catch'](22);
                _didIteratorError5 = true;
                _iteratorError5 = _context12.t1;

              case 45:
                _context12.prev = 45;
                _context12.prev = 46;

                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                  _iterator5.return();
                }

              case 48:
                _context12.prev = 48;

                if (!_didIteratorError5) {
                  _context12.next = 51;
                  break;
                }

                throw _iteratorError5;

              case 51:
                return _context12.finish(48);

              case 52:
                return _context12.finish(45);

              case 53:
                where += ')';
                _context12.next = 63;
                break;

              case 56:
                if (!(value instanceof Array)) {
                  _context12.next = 60;
                  break;
                }

                where = where + ('and ' + key + ' ' + value[0] + ' ' + value[1] + ' ');
                _context12.next = 63;
                break;

              case 60:
                _context12.next = 62;
                return this._checkInject(value);

              case 62:
                if (value === 'null') {
                  where = where + ('and ' + key + ' is null ');
                } else {
                  where = where + ('and ' + key + ' = \'' + value + '\' ');
                }

              case 63:
                _iteratorNormalCompletion4 = true;
                _context12.next = 11;
                break;

              case 66:
                _context12.next = 72;
                break;

              case 68:
                _context12.prev = 68;
                _context12.t2 = _context12['catch'](9);
                _didIteratorError4 = true;
                _iteratorError4 = _context12.t2;

              case 72:
                _context12.prev = 72;
                _context12.prev = 73;

                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }

              case 75:
                _context12.prev = 75;

                if (!_didIteratorError4) {
                  _context12.next = 78;
                  break;
                }

                throw _iteratorError4;

              case 78:
                return _context12.finish(75);

              case 79:
                return _context12.finish(72);

              case 80:
                return _context12.abrupt('return', where);

              case 81:
                order = '';

                if (data) {
                  order = order + 'order by ' + data.map(function (val) {
                    return val[0] + ' ' + val[1];
                  }).join(',');
                }
                return _context12.abrupt('return', order);

              case 84:
                limit = '';

                if (data) {
                  limit = 'limit ' + data[0] + ', ' + data[1];
                }
                return _context12.abrupt('return', limit);

              case 87:
                forUpdate = '';

                if (data === true) {
                  forUpdate = 'for update';
                }
                return _context12.abrupt('return', forUpdate);

              case 90:
                groupBy = '';

                if (data) {
                  groupBy = 'group by ' + data;
                }
                return _context12.abrupt('return', groupBy);

              case 93:
                update = '';

                if (!data) {
                  _context12.next = 127;
                  break;
                }

                _iteratorNormalCompletion6 = true;
                _didIteratorError6 = false;
                _iteratorError6 = undefined;
                _context12.prev = 98;
                _iterator6 = Object.entries(data)[Symbol.iterator]();

              case 100:
                if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                  _context12.next = 112;
                  break;
                }

                _ref17 = _step6.value;
                _ref18 = _slicedToArray(_ref17, 2);
                _key = _ref18[0];
                _value = _ref18[1];

                if (!_value) {
                  _context12.next = 109;
                  break;
                }

                _context12.next = 108;
                return this._checkInject(_value);

              case 108:
                update = update + (_key + ' = \'' + _value + '\', ');

              case 109:
                _iteratorNormalCompletion6 = true;
                _context12.next = 100;
                break;

              case 112:
                _context12.next = 118;
                break;

              case 114:
                _context12.prev = 114;
                _context12.t3 = _context12['catch'](98);
                _didIteratorError6 = true;
                _iteratorError6 = _context12.t3;

              case 118:
                _context12.prev = 118;
                _context12.prev = 119;

                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                  _iterator6.return();
                }

              case 121:
                _context12.prev = 121;

                if (!_didIteratorError6) {
                  _context12.next = 124;
                  break;
                }

                throw _iteratorError6;

              case 124:
                return _context12.finish(121);

              case 125:
                return _context12.finish(118);

              case 126:
                update.length > 0 && (update = update.substring(0, update.length - 2) + ' ');

              case 127:
                return _context12.abrupt('return', update);

              case 128:
                insert = '';

                if (data) {
                  _ObjectUtil2.default.removeNullForObj(data);
                  fields = Object.keys(data).join(','), values = Object.values(data).map(function (val) {
                    return '\'' + val + '\'';
                  }).join(',');

                  insert = '(' + fields + ') values (' + values + ')';
                }
                return _context12.abrupt('return', insert);

              case 131:
                batchInsert = '';

                if (data) {
                  _fields = data[0].join(',');
                  _values = data[1].map(function (val) {
                    return '(' + val.map(function (a) {
                      return '\'' + a + '\'';
                    }).join(',') + ')';
                  }).join(',');

                  batchInsert = '(' + _fields + ') values ' + _values;
                }
                return _context12.abrupt('return', batchInsert);

              case 134:
                return _context12.abrupt('return', null);

              case 135:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this, [[9, 68, 72, 80], [22, 41, 45, 53], [46,, 48, 52], [73,, 75, 79], [98, 114, 118, 126], [119,, 121, 125]]);
      }));

      function _assembleParam(_x12, _x13) {
        return _ref12.apply(this, arguments);
      }

      return _assembleParam;
    }()
  }, {
    key: '_checkAndGetParam',
    value: function () {
      var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(opts, paramName) {
        var select;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.t0 = paramName;
                _context13.next = _context13.t0 === 'select' ? 3 : _context13.t0 === 'on' ? 10 : _context13.t0 === 'order' ? 13 : _context13.t0 === 'limit' ? 16 : 19;
                break;

              case 3:
                select = '';

                if (!(typeof opts['select'] === 'string')) {
                  _context13.next = 6;
                  break;
                }

                return _context13.abrupt('return', opts['select']);

              case 6:
                if (!(opts['select'] && !(opts['select'] instanceof Array))) {
                  _context13.next = 8;
                  break;
                }

                throw new _ErrorHelper2.default(null, _errorCodes2.default.OPT_ILLEGAL);

              case 8:
                if (!opts['select'] || !opts['select'].length > 0) {
                  select = '*';
                } else {
                  select = opts['select'].map(function (val) {
                    return val;
                  }).join(',');
                }
                return _context13.abrupt('return', select);

              case 10:
                if (!(!(opts['on'] instanceof Array) || opts['on'].length !== 2)) {
                  _context13.next = 12;
                  break;
                }

                throw new _ErrorHelper2.default(null, _errorCodes2.default.OPT_ILLEGAL);

              case 12:
                return _context13.abrupt('return', opts['on']);

              case 13:
                if (!(opts['order'] && !(opts['order'] instanceof Array))) {
                  _context13.next = 15;
                  break;
                }

                throw new _ErrorHelper2.default(null, _errorCodes2.default.OPT_ILLEGAL);

              case 15:
                return _context13.abrupt('return', opts['order']);

              case 16:
                if (!(opts['limit'] && !(opts['limit'] instanceof Array) || opts['limit'] && opts['limit'].length !== 2)) {
                  _context13.next = 18;
                  break;
                }

                throw new _ErrorHelper2.default(null, _errorCodes2.default.OPT_ILLEGAL);

              case 18:
                return _context13.abrupt('return', opts['limit']);

              case 19:
                return _context13.abrupt('return', opts[paramName]);

              case 20:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function _checkAndGetParam(_x14, _x15) {
        return _ref19.apply(this, arguments);
      }

      return _checkAndGetParam;
    }()
  }, {
    key: 'unionSelect',
    value: function () {
      var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(opts) {
        var select_, on_, from_, to_, unionType_, where_, order_, limit_, forUpdate_, on, where, order, limit, forUpdate, sql, results;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (!(!opts['from'] || !opts['to'] || !opts['on'] || !opts['unionType'])) {
                  _context14.next = 2;
                  break;
                }

                throw new _ErrorHelper2.default(null, _errorCodes2.default.OPT_ILLEGAL);

              case 2:
                _context14.next = 4;
                return this._checkAndGetParam(opts, 'select');

              case 4:
                select_ = _context14.sent;
                _context14.next = 7;
                return this._checkAndGetParam(opts, 'on');

              case 7:
                on_ = _context14.sent;
                _context14.next = 10;
                return this._checkAndGetParam(opts, 'from');

              case 10:
                from_ = _context14.sent;
                _context14.next = 13;
                return this._checkAndGetParam(opts, 'to');

              case 13:
                to_ = _context14.sent;
                _context14.next = 16;
                return this._checkAndGetParam(opts, 'unionType');

              case 16:
                unionType_ = _context14.sent;
                _context14.next = 19;
                return this._checkAndGetParam(opts, 'where');

              case 19:
                where_ = _context14.sent;
                _context14.next = 22;
                return this._checkAndGetParam(opts, 'order');

              case 22:
                order_ = _context14.sent;
                _context14.next = 25;
                return this._checkAndGetParam(opts, 'limit');

              case 25:
                limit_ = _context14.sent;
                _context14.next = 28;
                return this._checkAndGetParam(opts, 'forUpdate');

              case 28:
                forUpdate_ = _context14.sent;

                // on
                on = from_ + '.' + on_[0] + ' = ' + to_ + '.' + on_[1];
                // where

                _context14.next = 32;
                return this._assembleParam('where', where_);

              case 32:
                where = _context14.sent;
                _context14.next = 35;
                return this._assembleParam('order', order_);

              case 35:
                order = _context14.sent;
                _context14.next = 38;
                return this._assembleParam('limit', limit_);

              case 38:
                limit = _context14.sent;
                _context14.next = 41;
                return this._assembleParam('forUpdate', forUpdate_);

              case 41:
                forUpdate = _context14.sent;

                // sql
                sql = '\n      select\n        ' + select_ + '\n      from\n        ' + from_ + '\n      ' + unionType_ + '\n        ' + to_ + '\n      on\n        ' + on + '\n      ' + where + '\n      ' + order + '\n      ' + limit + '\n      ' + forUpdate + '\n    ';
                _context14.next = 45;
                return this.query(sql, {
                  type: this._sequelize.QueryTypes.SELECT
                });

              case 45:
                results = _context14.sent;

                if (!(!results || !results.length > 0)) {
                  _context14.next = 48;
                  break;
                }

                return _context14.abrupt('return', []);

              case 48:
                return _context14.abrupt('return', results);

              case 49:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function unionSelect(_x16) {
        return _ref20.apply(this, arguments);
      }

      return unionSelect;
    }()
  }, {
    key: '_checkInject',
    value: function () {
      var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(value) {
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                ['=', '{', '}', ',', ':', ';', '|', '>', '<', '/', '"', '[', ']', '+'].forEach(function (symbol) {
                  if (value && value.toString().includes(symbol)) {
                    throw new _ErrorHelper2.default(null, _errorCodes2.default.PARAM_NO_INJECT_ERROR);
                  }
                });
                return _context15.abrupt('return', true);

              case 2:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function _checkInject(_x17) {
        return _ref21.apply(this, arguments);
      }

      return _checkInject;
    }()
  }, {
    key: 'update',
    value: function () {
      var _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(opts) {
        var update_, from_, where_, sql;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this._checkAndGetParam(opts, 'update');

              case 2:
                update_ = _context16.sent;
                _context16.next = 5;
                return this._checkAndGetParam(opts, 'from');

              case 5:
                from_ = _context16.sent;
                _context16.next = 8;
                return this._checkAndGetParam(opts, 'where');

              case 8:
                where_ = _context16.sent;
                _context16.t0 = '\n      update\n        ' + from_ + '\n      set\n        ';
                _context16.next = 12;
                return this._assembleParam('update', update_);

              case 12:
                _context16.t1 = _context16.sent;
                _context16.t2 = _context16.t0 + _context16.t1;
                _context16.t3 = _context16.t2 + '\n      ';
                _context16.next = 17;
                return this._assembleParam('where', where_);

              case 17:
                _context16.t4 = _context16.sent;
                _context16.t5 = _context16.t3 + _context16.t4;
                sql = _context16.t5 + '\n    ';
                return _context16.abrupt('return', this.query(sql, {
                  type: this._sequelize.QueryTypes.UPDATE
                }));

              case 21:
              case 'end':
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function update(_x18) {
        return _ref22.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: 'insert',
    value: function () {
      var _ref23 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(opts) {
        var insert_, from_, sql, result;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this._checkAndGetParam(opts, 'insert');

              case 2:
                insert_ = _context17.sent;
                _context17.next = 5;
                return this._checkAndGetParam(opts, 'from');

              case 5:
                from_ = _context17.sent;
                _context17.t0 = '\n      insert into\n        ' + from_ + '\n      ';
                _context17.next = 9;
                return this._assembleParam('insert', insert_);

              case 9:
                _context17.t1 = _context17.sent;
                _context17.t2 = _context17.t0 + _context17.t1;
                sql = _context17.t2 + '\n    ';
                _context17.next = 14;
                return this.query(sql, {
                  type: this._sequelize.QueryTypes.INSERT
                });

              case 14:
                result = _context17.sent;

                if (!(opts['returnResult'] === true)) {
                  _context17.next = 21;
                  break;
                }

                _context17.next = 18;
                return this.query('select * from ' + from_ + ' where id = ' + result[0] + ' limit 0, 1', {
                  type: this._sequelize.QueryTypes.SELECT
                });

              case 18:
                return _context17.abrupt('return', _context17.sent[0]);

              case 21:
                return _context17.abrupt('return', result);

              case 22:
              case 'end':
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function insert(_x19) {
        return _ref23.apply(this, arguments);
      }

      return insert;
    }()
  }, {
    key: 'batchInsert',
    value: function () {
      var _ref24 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(opts) {
        var batchInsert_, from_, sql;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this._checkAndGetParam(opts, 'batchInsert');

              case 2:
                batchInsert_ = _context18.sent;
                _context18.next = 5;
                return this._checkAndGetParam(opts, 'from');

              case 5:
                from_ = _context18.sent;
                _context18.t0 = '\n      insert into\n        ' + from_ + '\n      ';
                _context18.next = 9;
                return this._assembleParam('batchInsert', batchInsert_);

              case 9:
                _context18.t1 = _context18.sent;
                _context18.t2 = _context18.t0 + _context18.t1;
                sql = _context18.t2 + '\n    ';
                return _context18.abrupt('return', this.query(sql, {
                  type: this._sequelize.QueryTypes.INSERT
                }));

              case 13:
              case 'end':
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function batchInsert(_x20) {
        return _ref24.apply(this, arguments);
      }

      return batchInsert;
    }()
  }, {
    key: 'updateBySql',
    value: function () {
      var _ref25 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(sql, replacements) {
        var _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, value, opt;

        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _iteratorNormalCompletion7 = true;
                _didIteratorError7 = false;
                _iteratorError7 = undefined;
                _context19.prev = 3;
                _iterator7 = Object.values(replacements)[Symbol.iterator]();

              case 5:
                if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                  _context19.next = 12;
                  break;
                }

                value = _step7.value;
                _context19.next = 9;
                return this._checkInject(value);

              case 9:
                _iteratorNormalCompletion7 = true;
                _context19.next = 5;
                break;

              case 12:
                _context19.next = 18;
                break;

              case 14:
                _context19.prev = 14;
                _context19.t0 = _context19['catch'](3);
                _didIteratorError7 = true;
                _iteratorError7 = _context19.t0;

              case 18:
                _context19.prev = 18;
                _context19.prev = 19;

                if (!_iteratorNormalCompletion7 && _iterator7.return) {
                  _iterator7.return();
                }

              case 21:
                _context19.prev = 21;

                if (!_didIteratorError7) {
                  _context19.next = 24;
                  break;
                }

                throw _iteratorError7;

              case 24:
                return _context19.finish(21);

              case 25:
                return _context19.finish(18);

              case 26:
                opt = {
                  type: this._sequelize.QueryTypes.UPDATE,
                  replacements: replacements
                };
                return _context19.abrupt('return', this.query(sql, opt));

              case 28:
              case 'end':
                return _context19.stop();
            }
          }
        }, _callee19, this, [[3, 14, 18, 26], [19,, 21, 25]]);
      }));

      function updateBySql(_x21, _x22) {
        return _ref25.apply(this, arguments);
      }

      return updateBySql;
    }()
  }, {
    key: 'init',
    value: function init() {
      this._geneModels();
    }
  }, {
    key: '_geneModels',
    value: function _geneModels() {
      var filesAndDirs = _FileUtil2.default.getFilesAndDirs(this._modelPath);
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = filesAndDirs['files'].values()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var file = _step8.value;

          var modelName = file.substr(0, file.length - 3);
          this._models[modelName] = require(_path2.default.resolve(this._modelPath + '/' + file)).default(this);
          _ObjectUtil2.default.assignMethods(this._models[modelName], this._modelMethods(this._models[modelName]), false);
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      return this._models;
    }
  }, {
    key: '_modelMethods',
    value: function _modelMethods(model) {
      var _this = this;

      return {
        findLatestOne: function () {
          var _ref26 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(condition) {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    return _context20.abrupt('return', model.findOne({
                      where: condition,
                      order: [['updated_at', 'DESC']]
                    }));

                  case 1:
                  case 'end':
                    return _context20.stop();
                }
              }
            }, _callee20, _this);
          }));

          return function findLatestOne(_x23) {
            return _ref26.apply(this, arguments);
          };
        }(),
        updateByUserId: function () {
          var _ref27 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(userId, updateObj) {
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    return _context21.abrupt('return', model.update(updateObj, {
                      where: {
                        user_id: userId
                      }
                    }));

                  case 1:
                  case 'end':
                    return _context21.stop();
                }
              }
            }, _callee21, _this);
          }));

          return function updateByUserId(_x24, _x25) {
            return _ref27.apply(this, arguments);
          };
        }(),
        findByUserId: function () {
          var _ref28 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(userId) {
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    return _context22.abrupt('return', model.findOne({
                      where: {
                        user_id: userId
                      }
                    }));

                  case 1:
                  case 'end':
                    return _context22.stop();
                }
              }
            }, _callee22, _this);
          }));

          return function findByUserId(_x26) {
            return _ref28.apply(this, arguments);
          };
        }(),
        insert: function () {
          var _ref29 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(obj) {
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    return _context23.abrupt('return', model.create(obj));

                  case 1:
                  case 'end':
                    return _context23.stop();
                }
              }
            }, _callee23, _this);
          }));

          return function insert(_x27) {
            return _ref29.apply(this, arguments);
          };
        }(),
        updateInsert: function () {
          var _ref30 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(updateObj, condition) {
            var result;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return model.findOne({
                      where: condition
                    });

                  case 2:
                    result = _context24.sent;

                    if (!result) {
                      _context24.next = 8;
                      break;
                    }

                    _context24.next = 6;
                    return result.update(updateObj);

                  case 6:
                    _context24.next = 10;
                    break;

                  case 8:
                    _context24.next = 10;
                    return model.create(Object.assign(updateObj, condition));

                  case 10:
                    return _context24.abrupt('return', true);

                  case 11:
                  case 'end':
                    return _context24.stop();
                }
              }
            }, _callee24, _this);
          }));

          return function updateInsert(_x28, _x29) {
            return _ref30.apply(this, arguments);
          };
        }(),
        findLatestOneByUserId: function () {
          var _ref31 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(userId) {
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    return _context25.abrupt('return', model.findOne({
                      where: {
                        user_id: userId
                      },
                      order: [['updated_at', 'DESC']]
                    }));

                  case 1:
                  case 'end':
                    return _context25.stop();
                }
              }
            }, _callee25, _this);
          }));

          return function findLatestOneByUserId(_x30) {
            return _ref31.apply(this, arguments);
          };
        }(),
        destroyByCondition: function () {
          var _ref32 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(condition) {
            var temp;
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return model.findOne({
                      where: condition
                    });

                  case 2:
                    temp = _context26.sent;

                    if (temp) {
                      _context26.next = 5;
                      break;
                    }

                    throw new _ErrorHelper2.default(null, _errorCodes2.default.TARGET_NOT_FIND);

                  case 5:
                    return _context26.abrupt('return', temp.destroy());

                  case 6:
                  case 'end':
                    return _context26.stop();
                }
              }
            }, _callee26, _this);
          }));

          return function destroyByCondition(_x31) {
            return _ref32.apply(this, arguments);
          };
        }(),
        findAndUpdate: function () {
          var _ref33 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(where, update) {
            var temp;
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.next = 2;
                    return model.findOne({
                      where: where
                    });

                  case 2:
                    temp = _context27.sent;

                    if (temp) {
                      _context27.next = 5;
                      break;
                    }

                    throw new _ErrorHelper2.default(null, _errorCodes2.default.TARGET_NOT_FIND);

                  case 5:
                    _context27.next = 7;
                    return temp.update(update);

                  case 7:
                    return _context27.abrupt('return', true);

                  case 8:
                  case 'end':
                    return _context27.stop();
                }
              }
            }, _callee27, _this);
          }));

          return function findAndUpdate(_x32, _x33) {
            return _ref33.apply(this, arguments);
          };
        }()
      };
    }
  }, {
    key: 'Sequelize',
    get: function get() {
      return this._sequelize;
    },
    set: function set(val) {
      this._sequelize = val;
    }
  }]);

  return SequelizeHelper;
}();

exports.default = SequelizeHelper;