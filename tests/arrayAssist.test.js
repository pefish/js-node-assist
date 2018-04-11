import '../src/index'
import assert from "assert"

describe('arrayAssist', () => {

  it('removeFirstOne', () => {
    const arr = [1, 2, 3]
    const result = arr.removeFirstOne()
    assert.strictEqual(result[0], 2)
    assert.strictEqual(result[1], 3)
  })

  it('removeLastOne1', () => {
    const arr = [1, 2, 3]
    const result = arr.removeLastOne()
    assert.strictEqual(result[0], 1)
    assert.strictEqual(result[1], 2)
  })

  it('removeLastOne2', () => {
    const arr = [1]
    const result = arr.removeLastOne()
    assert.strictEqual(result.length, 0)
  })

  it('removeStart', () => {
    const arr = [1, 2, 3]
    const result = arr.removeStart(2)
    assert.strictEqual(result[0], 3)
  })

  it('removeEnd', () => {
    const arr = [1, 2, 3]
    const result = arr.removeEnd(2)
    assert.strictEqual(result[0], 1)
  })
})

