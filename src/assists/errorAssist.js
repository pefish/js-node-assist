/** @module */

import errorCodes from '../constants/errorCodes'

/**
 * 设置错误码
 * @param errorCode
 */
const setErrorCode = function (errorCode) {
  this._errorCode = errorCode
}

/**
 * 获取错误码
 * @returns {*}
 */
const getErrorCode = function () {
  return this._errorCode || errorCodes['INTERNAL_ERROR']
}

/**
 * 设置错误消息
 * @param errorMessage
 */
const setErrorMessage = function (errorMessage) {
  this._errorMessage = errorMessage
}

/**
 * 获取错误消息
 * @returns {*}
 */
const getErrorMessage = function () {
  return this._errorMessage || this['message']
}

/**
 * 设置错误的附带内容
 * @param errorStorage
 */
const setErrorStorage = function (errorStorage) {
  this._errorStorage = errorStorage
}

/**
 * 获取错误的附带内容
 * @returns {*}
 */
const getErrorStorage = function () {
  return this._errorStorage
}

Error.prototype.setErrorCode = setErrorCode
Error.prototype.getErrorCode = getErrorCode
Error.prototype.setErrorMessage = setErrorMessage
Error.prototype.getErrorMessage = getErrorMessage
Error.prototype.setErrorStorage = setErrorStorage
Error.prototype.getErrorStorage = getErrorStorage
