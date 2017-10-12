'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 19/09/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _level = require('level');

var _level2 = _interopRequireDefault(_level);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LevelDbHelper = function () {
  function LevelDbHelper(location) {
    _classCallCheck(this, LevelDbHelper);

    this._leveldb = (0, _level2.default)(location);
  }

  _createClass(LevelDbHelper, [{
    key: 'get',
    value: function get(key) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this._leveldb.get(key, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: 'put',
    value: function put(key, value) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2._leveldb.put(key, value, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(true);
          }
        });
      });
    }
  }, {
    key: 'close',
    value: function close() {
      return this._leveldb.close();
    }
  }, {
    key: 'del',
    value: function del(key) {
      return this._leveldb.del(key);
    }
  }, {
    key: 'batch',
    value: function batch(arr) {
      // 只能是del和put
      // [
      //   { type: 'del', key: 'father' },
      //   { type: 'put', key: 'name', value: 'Yuri Irsenovich Kim' },
      //   { type: 'put', key: 'dob', value: '16 February 1941' },
      //   { type: 'put', key: 'spouse', value: 'Kim Young-sook' },
      //   { type: 'put', key: 'occupation', value: 'Clown' }
      // ]
      return this._leveldb.batch(arr);
    }
  }, {
    key: 'atomicBatch',
    value: function atomicBatch(arr) {
      var temp = this._leveldb.batch();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;
          var type = _ref.type,
              key = _ref.key,
              value = _ref.value;

          temp = temp[type](key, value);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return temp.write();
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this._leveldb.isOpen();
    }
  }, {
    key: 'isClosed',
    value: function isClosed() {
      return this._leveldb.isClosed();
    }
  }, {
    key: 'createKeyStream',
    value: function createKeyStream(onKeyReached, onErrorReached, onClosed, onEnded) {
      this._leveldb.createKeyStream().on('data', onKeyReached).on('error', onErrorReached).on('close', onClosed).on('end', onEnded);
    }
  }, {
    key: 'createValueStream',
    value: function createValueStream(onValueReached, onErrorReached, onClosed, onEnded) {
      this._leveldb.createValueStream().on('data', onValueReached).on('error', onErrorReached).on('close', onClosed).on('end', onEnded);
    }
  }, {
    key: 'find',
    value: function find(_find, callback) {
      var option = {
        keys: true,
        values: true,
        reverse: false,
        limit: 20
      };
      if (_find.prefix) {
        option.gte = _find.prefix;
        option.lte = _find.prefix.substring(0, _find.prefix.length - 1) + String.fromCharCode(_find.prefix[_find.prefix.length - 1].charCodeAt() + 1);
      }

      if (_find.limit) {
        option.limit = _find.limit;
      }

      this._leveldb.createReadStream(option).on('data', function (data) {
        data && callback(null, data);
      }).on('error', function (err) {
        callback(err, null);
      }).on('close', function () {}).on('end', function () {
        callback(null, Date.now());
      });
    }
  }]);

  return LevelDbHelper;
}();

exports.default = LevelDbHelper;