import './index'
import assert from 'assert'
import BufferUtil from './buffer';

describe('bufferAssist', () => {

  it('toDecimalNumberArray_', () => {
    const test = Buffer.from([0x66, 0x73, 0x06, 0x44])
    const result = BufferUtil.toDecimalNumberArray_(test)
    // console.log(result)
    assert.strictEqual(result[0], 102)
  })

  it('toBinString_', () => {
    const test = Buffer.from([0x66, 0x73, 0x06, 0x44])
    const result = BufferUtil.toBinString_(test)
    // console.log(result)
    assert.strictEqual(result, `01100110011100110000011001000100`)
  })

  it('toHexString_', () => {
    const test = Buffer.from([0x66, 0x73, 0x06, 0x44])
    const result = BufferUtil.toHexString_(test)
    // console.log(result)
    assert.strictEqual(result, `0x66730644`)
  })

  it('reverseBuffer', () => {
    const test = Buffer.from('ab', `utf8`)
    const result = BufferUtil.reverseBuffer_(test)
    assert.strictEqual(test[0], 97) // a
    assert.strictEqual(result[0], 98) // b
  })

  it('deepCopy', () => {
    const test = Buffer.from('ab', `utf8`)
    const result = BufferUtil.deepCopy_(test)
    result.reverse()
    assert.strictEqual(test[0], 97) // a
    assert.strictEqual(result[0], 98) // b
  })

  it('toDecimalString_', () => {
    const test = Buffer.from([0x66, 0x73, 0x06, 0x44])
    const result = BufferUtil.toDecimalString_(test)
    // console.log(result)
    assert.strictEqual(result, `1718814276`)
  })

  it('getBytesLength_', () => {
    const test = Buffer.from([0x66, 0x73, 0x06, 0x44])
    const result = BufferUtil.getBytesLength_(test)
    // console.log(result)
    assert.strictEqual(result, 4)
  })

  it('toUint8Array_', () => {
    const test = Buffer.from('1shfgdjewarta')
    const result = BufferUtil.toUint8Array_(test)
    // console.log(result)
    assert.strictEqual(JSON.stringify(result), `{"0":49,"1":115,"2":104,"3":102,"4":103,"5":100,"6":106,"7":101,"8":119,"9":97,"10":114,"11":116,"12":97}`)
  })
})

