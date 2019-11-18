import './index'
import assert from 'assert'

describe('arrayAssist', () => {

  it('removeFirstOne', () => {
    const arr = [1, 2, 3]
    const result = arr.removeFirstOne_()
    assert.strictEqual(result[0], 2)
    assert.strictEqual(result[1], 3)
  })

  it('removeLastOne1', () => {
    const arr = [1, 2, 3]
    const result = arr.removeLastOne_()
    assert.strictEqual(result[0], 1)
    assert.strictEqual(result[1], 2)
  })

  it('removeLastOne2', () => {
    const arr = [1]
    const result = arr.removeLastOne_()
    assert.strictEqual(result.length, 0)
  })

  it('removeStart', () => {
    const arr = [1, 2, 3]
    const result = arr.removeStart_(2)
    assert.strictEqual(result[0], 3)
  })

  it('removeEnd', () => {
    const arr = [1, 2, 3]
    const result = arr.removeEnd_(2)
    assert.strictEqual(result[0], 1)
  })

  it('deepCopy', () => {
    const arr = [1, 2, 3]
    const a = arr.deepCopy_()
    a[1] = 4
    assert.strictEqual(arr[1], 2)
  })

  it('removeByIndex', () => {
    const arr = [1, 2, 3]
    const result = arr.removeByIndex_(2)
    // logger.error(arr, result)
    assert.strictEqual(result[0], 1)
    assert.strictEqual(result[1], 2)
    assert.strictEqual(result[2], undefined)
    assert.strictEqual(arr[2], 3)
  })

  it('removeByValue', () => {
    const arr = [1, 2, 3]
    const result = arr.removeByValue_(3)
    assert.strictEqual(result[0], 1)
    assert.strictEqual(result[1], 2)
    assert.strictEqual(result[2], undefined)
    assert.strictEqual(arr[2], 3)
  })

  it('removeByValue', () => {
    const arr = [1, 2, 3]
    try {
      const result = arr.removeByValue_(4)
    } catch (err) {
      assert.strictEqual(typeof err, 'object')
    }
  })

  it('append', () => {
    const arr = [1, 2, 3]
    const result = arr.append_([4, 5])
    assert.strictEqual(result[0], 1)
    assert.strictEqual(result[3], 4)
  })

  it('getMax', () => {
    const arr = [1, '2', 3]
    const result = arr.getMax_()
    assert.strictEqual(result['value'], '3')
    assert.strictEqual(result['indexes'].length, 1)
    assert.strictEqual(result['indexes'][0], 2)
  })

  it('getMax 1', () => {
    const arr = [1, '1', 1]
    const result = arr.getMax_()
    // logger.error(result['index'])
    assert.strictEqual(result['value'], '1')
    assert.strictEqual(result['indexes'].length, 3)
  })

  it('getMin', () => {
    const arr = ['1', 2, '3']
    const result = arr.getMin_()
    assert.strictEqual(result['value'], '1')
    assert.strictEqual(result['indexes'][0], 0)
    assert.strictEqual(result['indexes'][1], undefined)
  })

  it('getSum', () => {
    const arr = ['1', 2, '3']
    const result = arr.getSum_()
    assert.strictEqual(result, '6')
  })

  it('select', () => {
    const arr = ['1', 2, '3', 6, 9, 2]
    const result = arr.select_([0, 3, 5])
    // logger.error(result)
    assert.strictEqual(result[0], '1')
    assert.strictEqual(result[1], 6)
    assert.strictEqual(result[2], 2)
  })

  it('toLowerCase', () => {
    const arr = ['drG', 2, '3', 6, 9, 2]
    const result = arr.toLowerCase_()
    // logger.error(result)
    assert.strictEqual(result[0], 'drg')
  })

  it('random', () => {
    const arr = [2]
    const result = arr.random_()
    // logger.error(result)
    assert.strictEqual(result, 2)
  })

  it('numberArrayToHexString', () => {
    const arr = [224, 220, 74, 72]
    const result = arr.numberArrayToHexString_()
    // logger.error(result)
    assert.strictEqual(result, 'E0DC4A48')
  })

  it('getMaxWithPriority_', () => {
    const arr = [["1", 4], ["2", 5], ["2", 4], [1, 1]]
    const result = arr.sortWithPriority_(`asc`)
    console.error(result)
    // assert.strictEqual(result, 'E0DC4A48')
  })
})

