/** @module */


declare global {
  interface Uint8Array {
    toUtf8String_?: () => string,
    toBuffer_?: () => Buffer,
  }
}

Uint8Array.prototype.toUtf8String_ = function (): string {
  return new TextDecoder().decode(this)
}

Uint8Array.prototype.toBuffer_ = function (): Buffer {
  return Buffer.from(this)
}

export {};