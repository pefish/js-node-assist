import './index'
import assert from 'assert'
import Uint8ArrayUtil from './uint8array';
import StringUtil from './string';
import BufferUtil from './buffer';

describe('uint8arrayAssist', () => {
  it('toUtf8String_', () => {
    const arr = StringUtil.toUtf8Uint8Array_('1shfgdjewarta')
    const result = Uint8ArrayUtil.toUtf8String_(arr)
    assert.strictEqual(result, '1shfgdjewarta')
  })

  it('toBuffer_', () => {
    const arr = StringUtil.toUtf8Uint8Array_('1shfgdjewarta')
    const result = Uint8ArrayUtil.toBuffer_(arr)
    assert.strictEqual(BufferUtil.toUtf8String_(result), '1shfgdjewarta')
  })
})

