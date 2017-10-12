'use strict';

var _cluster = require('cluster');

var _cluster2 = _interopRequireDefault(_cluster);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _startServer = require('./startServer');

var _startServer2 = _interopRequireDefault(_startServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cpuNums = _os2.default.cpus().length; /**
                                           * Created by pefish on 2017/5/15.
                                           * 并行处理
                                           */

if (_cluster2.default.isMaster) {
  for (var i = 0; i < cpuNums; i++) {
    _cluster2.default.fork();
  }
  _cluster2.default.on('listening', function (worker, address) {});
  _cluster2.default.on('exit', function (worker, code, signal) {
    _cluster2.default.fork();
  });
} else {
  (0, _startServer2.default)();
}