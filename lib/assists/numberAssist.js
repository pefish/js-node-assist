"use strict";

/**
 * 转换为二进制字符串
 * @returns {string}
 */
Number.prototype.toBinString = function () {
  return this.toString(2);
};

/**
 * 转换为八进制字符串
 * @returns {string}
 */
Number.prototype.toOctString = function () {
  return this.toString(8);
};

/**
 * 转换为十六进制字符串
 * @returns {string}
 */
Number.prototype.toHexString = function () {
  return this.toString(16);
};