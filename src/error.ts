declare global {
  interface Error {
    setErrorCode_?: (errorCode: number) => void,
    getErrorCode_?: () => number,
    setErrorMessage_?: (errorMessage: string) => void,
    getErrorMessage_?: () => string,
    setErrorStorage_?: (errorStorage: any) => void,
    getErrorStorage_?: () => any,
  }

}

/**
 * 设置错误码
 * @param errorCode
 */
Error.prototype.setErrorCode_ = function (errorCode: number): void {
  this._errorCode = errorCode
}

/**
 * 获取错误码
 * @returns {*}
 */
Error.prototype.getErrorCode_ = function (): number {
  return this._errorCode || 1
}

/**
 * 设置错误消息
 * @param errorMessage
 */
Error.prototype.setErrorMessage_ = function (errorMessage: string): void {
  this._errorMessage = errorMessage
}

/**
 * 获取错误消息
 * @returns {*}
 */
Error.prototype.getErrorMessage_ = function (): string {
  return this._errorMessage || this['message']
}

/**
 * 设置错误的附带内容
 * @param errorStorage
 */
Error.prototype.setErrorStorage_ = function (errorStorage: any): void {
  this._errorStorage = errorStorage
}

/**
 * 获取错误的附带内容
 * @returns {*}
 */
Error.prototype.getErrorStorage_ = function (): any {
  return this._errorStorage
}

export {};
