'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by joy on 25/06/2017.
 */
exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(app, origins) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app.all('*', function (req, res, next) {
              if (origins === '*') {
                res.header('Access-Control-Allow-Origin', '*');
              } else if (typeof origins === 'string') {
                origins = JSON.parse(origins);
              } else if (origins.includes(req.headers.origin)) {
                res.header('Access-Control-Allow-Origin', req.headers.origin);
              }
              res.header('Access-Control-Allow-Credentials', 'true');
              res.header('Access-Control-Allow-Headers', 'Accept,Content-Type,json-web-token,Cookies,Origin,X-Requested-With,If-Modified-Since');
              res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
              res.header('X-Powered-By', '3.2.1');
              res.header('Content-Type', 'application/json;charset=utf-8');
              if (req.method == 'OPTIONS') {
                res.sendStatus(200);
              } else {
                next();
              }
            });
            return _context.abrupt('return', true);

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();