"use strict";

/**
 * Created by joy on 12/10/2017.
 */

Error.prototype.setErrorCode = function (errorCode) {
  this._errorCode = errorCode;
};

Error.prototype.getErrorCode = function () {
  return this._errorCode;
};

Error.prototype.setErrorMessage = function (errorMessage) {
  this._errorMessage = errorMessage;
};

Error.prototype.getErrorMessage = function () {
  return this._errorMessage;
};

Error.prototype.setErrorStorage = function (errorStorage) {
  this._errorStorage = errorStorage;
};

Error.prototype.getErrorStorage = function () {
  return this._errorStorage;
};