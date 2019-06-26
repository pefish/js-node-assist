declare global {
  namespace NodeJS {
    interface Global {
      logger: any,
    }
  }
}

global.logger = global.logger || console

require('./object')
require('./error')
require('./string')
require('./array')
require('./buffer')
require('./number')
require('./promise')
require('./bignumber')

export * from './object'
export * from './error'
export * from './string'
export * from './array'
export * from './buffer'
export * from './number'
export * from './promise'
export * from './bignumber'

