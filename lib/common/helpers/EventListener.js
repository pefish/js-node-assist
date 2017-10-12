'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joy on 19/09/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _events = require('events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventListener = function () {
  function EventListener(location) {
    _classCallCheck(this, EventListener);

    this._event = new _events2.default.EventEmitter();
  }

  /**
   * 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数
   * @param eventName
   * @param onReached
   */


  _createClass(EventListener, [{
    key: 'on',
    value: function on(eventName, onReached) {
      this._event.on(eventName, onReached);
    }

    /**
     * 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器
     * @param eventName
     * @param onReached
     */

  }, {
    key: 'once',
    value: function once(eventName, onReached) {
      this._event.once(eventName, onReached);
    }

    /**
     * 为指定事件添加一个监听器到监听器数组的尾部
     * @param eventName
     * @param onReached
     */

  }, {
    key: 'addListener',
    value: function addListener(eventName, onReached) {
      this._event.addListener(eventName, onReached);
    }

    /**
     * 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器
     * @param eventName
     * @param onReached
     */

  }, {
    key: 'removeListener',
    value: function removeListener(eventName, onReached) {
      this._event.removeListener(eventName, onReached);
    }

    /**
     * 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器
     * @param eventName
     */

  }, {
    key: 'removeAllListeners',
    value: function removeAllListeners(eventName) {
      this._event.removeAllListeners(eventName);
    }

    /**
     * 默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量
     * @param num
     */

  }, {
    key: 'setMaxListeners',
    value: function setMaxListeners(num) {
      this._event.setMaxListeners(num);
    }
  }, {
    key: 'listListeners',
    value: function listListeners(eventName) {
      return this._event.listeners(eventName);
    }
  }, {
    key: 'emit',
    value: function emit(eventName, argsArr) {
      var _event;

      (_event = this._event).emit.apply(_event, [eventName].concat(_toConsumableArray(argsArr)));
    }
  }]);

  return EventListener;
}();

exports.default = EventListener;