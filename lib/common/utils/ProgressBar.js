'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by joy on 03/09/2017.
 */

var ProgressBar = function () {
  function ProgressBar(description, barLength, total) {
    _classCallCheck(this, ProgressBar);

    this.description = description || 'Progress';
    this.length = barLength || 25;
    if (total) {
      this.total = total;
      this._noTotal = false;
    } else {
      this.total = 100;
      this._noTotal = true;
    }
  }

  _createClass(ProgressBar, [{
    key: 'setCompleted',
    value: function setCompleted(completed) {
      var percent = (completed / this.total).toFixed(4);
      var cellNum = Math.floor(percent * this.length);

      // 拼接黑色条
      var cell = '';
      for (var i = 0; i < cellNum; i++) {
        cell += '█';
      }
      // 拼接灰色条
      var empty = '';
      for (var _i = 0; _i < this.length - cellNum; _i++) {
        empty += '░';
      }
      // 拼接最终文本
      var cmdText = this.description + ': ' + ((100 * percent).toFixed(2) + '%').padEnd(8) + cell + empty + ' ' + completed + '/' + this.total + (this._noTotal === true ? ' ?' : '');
      console.log(cmdText);
    }
  }, {
    key: 'complete',
    value: function complete() {
      var cell = '';
      for (var i = 0; i < this.length; i++) {
        cell += '█';
      }
      var cmdText = this.description + ': ' + '100%'.padEnd(8) + cell + ' ' + this.total + '/' + this.total + (this._noTotal === true ? ' ?' : '');
      console.log(cmdText);
    }
  }]);

  return ProgressBar;
}();

exports.default = ProgressBar;