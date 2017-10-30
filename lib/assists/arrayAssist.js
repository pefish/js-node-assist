'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

Array.prototype.toTwoDimen = function (spliceNum) {
  var num = this.length > 0 ? parseInt(this.length / spliceNum) + 1 : 0;
  var newArrays = [];
  for (var i = 0; i < num; i++) {
    var arr = this.slice(spliceNum * i, spliceNum * (i + 1));
    if (arr.length > 0) {
      newArrays.push(arr);
    }
  }
  return newArrays;
};

Array.prototype.uniq = function () {
  return [].concat(_toConsumableArray(new Set(this)));
};

Array.prototype.removeEmpty = function () {
  var results = [];
  this.forEach(function (ele) {
    if (ele !== null && ele !== undefined && ele !== '') {
      results.push(ele);
    }
  });
  return results;
};