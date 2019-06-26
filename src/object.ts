import * as util from 'util'

declare global {
  interface Object {
    toError_: () => Error;
  }
}

/**
 * 转化为Error
 * @returns {Error}
 */
Object.prototype.toError_ = function (): Error {
  return this instanceof Error ? this : new Error(util.inspect(this, {
    depth: null,
  }))
}

export {};
