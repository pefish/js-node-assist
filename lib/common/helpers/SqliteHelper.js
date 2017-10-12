'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 19/09/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _sqlite = require('sqlite3');

var _sqlite2 = _interopRequireDefault(_sqlite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SqliteHelper = function () {
  function SqliteHelper(location) {
    _classCallCheck(this, SqliteHelper);

    this._sqlite = new _sqlite2.default.Database(location);
  }

  _createClass(SqliteHelper, [{
    key: 'create',
    value: function create(sql) {
      var _this = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      return new Promise(function (resolve, reject) {
        _this._sqlite.run(sql, params, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }, {
    key: 'insert',
    value: function insert(sql) {
      var _this2 = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      return new Promise(function (resolve, reject) {
        _this2._sqlite.run(sql, params, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }, {
    key: 'delete',
    value: function _delete(sql) {
      var _this3 = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      return new Promise(function (resolve, reject) {
        _this3._sqlite.run(sql, params, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }, {
    key: 'update',
    value: function update(sql) {
      var _this4 = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      return new Promise(function (resolve, reject) {
        _this4._sqlite.run(sql, params, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }, {
    key: 'select',
    value: function select(sql) {
      var _this5 = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      return new Promise(function (resolve, reject) {
        _this5._sqlite.all(sql, params, function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    }
  }, {
    key: 'close',
    value: function close() {
      this._sqlite.close();
    }
  }]);

  return SqliteHelper;
}();

exports.default = SqliteHelper;