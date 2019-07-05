import './index'
import assert from 'assert'

describe('bufferAssist', () => {

  it('reverseBuffer', () => {
    const test = new Buffer('ab')
    const result = test.reverseBuffer_()
    assert.strictEqual(test[0], 97) // a
    assert.strictEqual(result[0], 98) // b
  })

  it('deepCopy', () => {
    const test = new Buffer('ab')
    const result = test.deepCopy_()
    result.reverse()
    assert.strictEqual(test[0], 97) // a
    assert.strictEqual(result[0], 98) // b
  })

  it('toDecimalString_', () => {
    const test = new Buffer('0x6673064416959ab')
    const result = test.toDecimalString_()
    // console.log(result)
    assert.strictEqual(result, `16493342455353106587068131825839033114978`)
  })
})

