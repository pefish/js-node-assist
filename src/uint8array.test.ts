import './index'
import assert from 'assert'

describe('uint8arrayAssist', () => {
  it('toUtf8String_', () => {
    const arr = '1shfgdjewarta'.toUtf8Uint8Array_()
    const result = arr.toUtf8String_()
    assert.strictEqual(result, '1shfgdjewarta')
  })

  it('toBuffer_', () => {
    const arr = '1shfgdjewarta'.toUtf8Uint8Array_()
    const result = arr.toBuffer_()
    assert.strictEqual(result.toUtf8String_(), '1shfgdjewarta')
  })
})

