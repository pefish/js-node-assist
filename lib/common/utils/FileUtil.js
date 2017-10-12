'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 25/09/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileUtil = function () {
  function FileUtil() {
    _classCallCheck(this, FileUtil);
  }

  _createClass(FileUtil, null, [{
    key: 'getFilesAndDirs',
    value: function getFilesAndDirs(filePath) {
      var result = {
        dirs: [],
        files: []
      };
      var temp = _fs2.default.readdirSync(filePath);
      temp.forEach(function (filenameOrDirname) {
        var fileOrPath = _path2.default.join(filePath, filenameOrDirname);
        var info = _fs2.default.statSync(fileOrPath);
        if (info.isDirectory()) {
          result.dirs.push(filenameOrDirname);
        } else {
          result.files.push(filenameOrDirname);
        }
      });
      return result;
    }
  }, {
    key: 'existsSync',
    value: function existsSync(pathOrFilePath) {
      try {
        _fs2.default.accessSync(pathOrFilePath, _fs2.default.F_OK);
      } catch (e) {
        return false;
      }
      return true;
    }
  }, {
    key: 'mkdirSync',
    value: function mkdirSync(path_) {
      var recursive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (recursive) {
        if (FileUtil.existsSync(path_)) {
          return true;
        } else {
          if (FileUtil.mkdirSync(_path2.default.dirname(path_))) {
            _fs2.default.mkdirSync(path_);
            return true;
          }
        }
      } else {
        _fs2.default.mkdirSync(path_);
        return true;
      }
    }
  }, {
    key: 'loadFromJsonFile',
    value: function loadFromJsonFile(jsonFile) {
      if (!FileUtil.existsSync(jsonFile)) {
        return null;
      }
      return JSON.parse(_fs2.default.readFileSync(jsonFile));
    }
  }, {
    key: 'writeSync',
    value: function writeSync(filepath, data) {
      if (typeof data !== 'string') {
        data = JSON.stringify(data);
      }
      FileUtil.mkdirSync(_path2.default.dirname(filepath));
      return _fs2.default.writeFileSync(filepath, data);
    }
  }]);

  return FileUtil;
}();

exports.default = FileUtil;