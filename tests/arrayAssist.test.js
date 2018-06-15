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

  it ('deepCopy', () => {
    const arr = [1, 2, 3]
    const a = arr.deepCopy()
    a[1] = 4
    assert.strictEqual(arr[1], 2)
  })

  it('removeByIndex', () => {
    const arr = [1, 2, 3]
    const result = arr.removeByIndex(2)
    // logger.error(arr, result)
    assert.strictEqual(result[0], 1)
    assert.strictEqual(result[1], 2)
    assert.strictEqual(result[2], undefined)
    assert.strictEqual(arr[2], 3)
  })

  it ('removeByValue', () => {
    const arr = [1, 2, 3]
    const result = arr.removeByValue(3)
    assert.strictEqual(result[0], 1)
    assert.strictEqual(result[1], 2)
    assert.strictEqual(result[2], undefined)
    assert.strictEqual(arr[2], 3)
  })

  it ('removeByValue', () => {
    const arr = [1, 2, 3]
    try {
      const result = arr.removeByValue(4)
    } catch (err) {
      assert.strictEqual(typeof err, 'object')
    }
  })

  it ('append', () => {
    const arr = [1, 2, 3]
    const result = arr.append([4, 5])
    assert.strictEqual(result[0], 1)
    assert.strictEqual(result[3], 4)
  })

  it('getMax', () => {
    const arr = [1, '2', 3]
    const result = arr.getMax()
    assert.strictEqual(result['value'], '3')
    assert.strictEqual(result['index'].length, 1)
    assert.strictEqual(result['index'][0], 2)
  })

  it('getMax 1', () => {
    const arr = [1, '1', 1]
    const result = arr.getMax()
    // logger.error(result['index'])
    assert.strictEqual(result['value'], '1')
    assert.strictEqual(result['index'].length, 3)
  })

  it('getMin', () => {
    const arr = ['1', 2, '3']
    const result = arr.getMin()
    assert.strictEqual(result['value'], '1')
    assert.strictEqual(result['index'][0], 0)
    assert.strictEqual(result['index'][1], undefined)
  })

  it('getSum', () => {
    const arr = ['1', 2, '3']
    const result = arr.getSum()
    assert.strictEqual(result, '6')
  })

  it('select', () => {
    const arr = ['1', 2, '3', 6, 9, 2]
    const result = arr.select([0, 3, 5])
    // logger.error(result)
    assert.strictEqual(result[0], '1')
    assert.strictEqual(result[1], 6)
    assert.strictEqual(result[2], 2)
  })

  it('toLowerCase', () => {
    const arr = ['drG', 2, '3', 6, 9, 2]
    const result = arr.toLowerCase()
    // logger.error(result)
    assert.strictEqual(result[0], 'drg')
  })
})

