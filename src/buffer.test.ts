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
})

