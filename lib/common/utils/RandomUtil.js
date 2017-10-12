"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by joy on 06/06/2017.
 */

var RandomUtil = function () {
  function RandomUtil() {
    _classCallCheck(this, RandomUtil);
  }

  _createClass(RandomUtil, null, [{
    key: "getRandomInt",
    value: function getRandomInt(start, end) {
      var c = end - start + 1;
      return Math.floor(Math.random() * c + start);
    }
  }, {
    key: "getRandomFromList",
    value: function getRandomFromList(list) {
      return list[Math.floor(Math.random() * 1E4) % list.length];
    }
  }]);

  return RandomUtil;
}();

exports.default = RandomUtil;