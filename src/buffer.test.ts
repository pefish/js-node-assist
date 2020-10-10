import './index'
import assert from 'assert'
import BufferUtil from './buffer';

describe('bufferAssist', () => {

  it('toDecimalNumberArray', () => {
    const test = Buffer.from([0x66, 0x73, 0x06, 0x44])
    const result = BufferUtil.toDecimalNumberArray(test)
    // console.log(result)
    assert.strictEqual(result[0], 102)
  })

  it('toBinString', () => {
    const test = Buffer.from([0x66, 0x73, 0x06, 0x44])
    const result = BufferUtil.toBinString(test)
    // console.log(result)
    assert.strictEqual(result, `01100110011100110000011001000100`)
  })

  it('toHexString', () => {
    const test = Buffer.from([0x66, 0x73, 0x06, 0x44])
    const result = BufferUtil.toHexString(test)
    // console.log(result)
    assert.strictEqual(result, `0x66730644`)
  })

  it('reverseBuffer', () => {
    const test = Buffer.from('ab', `utf8`)
    const result = BufferUtil.reverseBuffer(test)
    assert.strictEqual(test[0], 97) // a
    assert.strictEqual(result[0], 98) // b
  })

  it('deepCopy', () => {
    const test = Buffer.from('ab', `utf8`)
    const result = BufferUtil.deepCopy(test)
    result.reverse()
    assert.strictEqual(test[0], 97) // a
    assert.strictEqual(result[0], 98) // b
  })

  it('toDecimalString', () => {
    const test = Buffer.from([0x66, 0x73, 0x06, 0x44])
    const result = BufferUtil.toDecimalString(test)
    // console.log(result)
    assert.strictEqual(result, `1718814276`)
  })

  it('getBytesLength', () => {
    const test = Buffer.from([0x66, 0x73, 0x06, 0x44])
    const result = BufferUtil.getBytesLength(test)
    // console.log(result)
    assert.strictEqual(result, 4)
  })

  it('toUint8Array', () => {
    const test = Buffer.from('1shfgdjewarta')
    const result = BufferUtil.toUint8Array(test)
    // console.log(result)
    assert.strictEqual(JSON.stringify(result), `{"0":49,"1":115,"2":104,"3":102,"4":103,"5":100,"6":106,"7":101,"8":119,"9":97,"10":114,"11":116,"12":97}`)
  })
})

