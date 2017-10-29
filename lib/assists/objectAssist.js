'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Created by joy on 12/10/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _AssertUtil = require('../utils/AssertUtil');

var _AssertUtil2 = _interopRequireDefault(_AssertUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param spliceNum
 * @returns {Array}
 */
Object.prototype.toTwoDimen = function (spliceNum) {
  // {
  //   a: 7,
  //   b: 6,
  //   c: 4
  // }
  // [ { a: 7, b: 6 }, { c: 4 } ]
  var entries = Object.entries(this);
  var length = entries.length;
  var newArrays = [],
      tempObj = {};
  for (var i = 0; i < length; i++) {
    var _entries$i = _slicedToArray(entries[i], 2),
        key = _entries$i[0],
        value = _entries$i[1];

    if (i === spliceNum * (newArrays.length + 1)) {
      newArrays.push(tempObj);
      tempObj = {};
    }
    tempObj[key] = value;
    if (i === length - 1) {
      newArrays.push(tempObj);
    }
  }
  return newArrays;
};

Object.prototype.removeEmpty = function () {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.entries(this)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = _slicedToArray(_ref, 2);

      var key = _ref2[0];
      var value = _ref2[1];

      if (value === null || value === undefined) {
        delete this[key];
      }
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

  return this;
};

Object.prototype.assign = function (obj) {
  Object.assign(this, obj);
  return this;
};