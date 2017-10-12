'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (env, mongoConfig) {
  _mongoose2.default.Promise = global.Promise;
  global.logger.info('连接mongodb中...', mongoConfig.username);
  var db = _mongoose2.default.createConnection('mongodb://' + mongoConfig.username + ':' + mongoConfig.password + '@' + mongoConfig.host + '/' + mongoConfig.database);
  db.on('error', function (err) {
    global.logger.error('error', err);
    process.exit(1);
  });
  db.once('open', function (callback) {
    global.logger.info('mongodb\u8FDE\u63A5\u6210\u529F');
  });

  if (env !== 'production') {
    _mongoose2.default.set('debug', true);
  }
  return db;
}; /**
    * Created by pefish on 2017/5/11.
    */