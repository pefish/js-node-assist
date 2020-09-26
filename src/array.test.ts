import './index'
import assert from 'assert'
import ArrayUtil from './array';

describe('arrayAssist', () => {

  it('removeFirstOne', () => {
    const arr = [1, 2, 3]
    const result = ArrayUtil.removeFirstOne_(arr)
    assert.strictEqual(result[0], 2)
    assert.strictEqual(result[1], 3)
  })

  it('removeLastOne1', () => {
    const arr = [1, 2, 3]
    const result = ArrayUtil.removeLastOne_(arr)
    assert.strictEqual(result[0], 1)
    assert.strictEqual(result[1], 2)
  })

  it('removeLastOne2', () => {
    const arr = [1]
    const result = ArrayUtil.removeLastOne_(arr)
    assert.strictEqual(result.length, 0)
  })

  it('removeStart', () => {
    const arr = [1, 2, 3]
    const result = ArrayUtil.removeStart_(arr, 2)
    assert.strictEqual(result[0], 3)
  })

  it('removeEnd', () => {
    const arr = [1, 2, 3]
    const result = ArrayUtil.removeEnd_(arr, 2)
    assert.strictEqual(result[0], 1)
  })

  it('deepCopy', () => {
    const arr = [1, 2, 3]
    const a = ArrayUtil.deepCopy_(arr)
    a[1] = 4
    assert.strictEqual(arr[1], 2)
  })

  it('removeByIndex', () => {
    const arr = [1, 2, 3]
    const result = ArrayUtil.removeByIndex_(arr, 2)
    // logger.error(arr, result)
    assert.strictEqual(result[0], 1)
    assert.strictEqual(result[1], 2)
    assert.strictEqual(result[2], undefined)
    assert.strictEqual(arr[2], 3)
  })

  it('removeByValue', () => {
    const arr = [1, 2, 3]
    const result = ArrayUtil.removeByValue_(arr, 3)
    assert.strictEqual(result[0], 1)
    assert.strictEqual(result[1], 2)
    assert.strictEqual(result[2], undefined)
    assert.strictEqual(arr[2], 3)
  })

  it('removeByValue', () => {
    const arr = [1, 2, 3]
    try {
      const result = ArrayUtil.removeByValue_(arr, 4)
    } catch (err) {
      assert.strictEqual(typeof err, 'object')
    }
  })

  it('append', () => {
    const arr = [1, 2, 3]
    const result = ArrayUtil.append_(arr, [4, 5])
    assert.strictEqual(result[0], 1)
    assert.strictEqual(result[3], 4)
  })

  it('getMax', () => {
    const arr = [1, '2', 3]
    const result = ArrayUtil.getMax_(arr)
    assert.strictEqual(result['value'], '3')
    assert.strictEqual(result['indexes'].length, 1)
    assert.strictEqual(result['indexes'][0], 2)
  })

  it('getMax 1', () => {
    const arr = [1, '1', 1]
    const result = ArrayUtil.getMax_(arr)
    // logger.error(result['index'])
    assert.strictEqual(result['value'], '1')
    assert.strictEqual(result['indexes'].length, 3)
  })

  it('getMin', () => {
    const arr = ['1', 2, '3']
    const result = ArrayUtil.getMin_(arr)
    assert.strictEqual(result['value'], '1')
    assert.strictEqual(result['indexes'][0], 0)
    assert.strictEqual(result['indexes'][1], undefined)
  })

  it('getSum', () => {
    const arr = ['1', 2, '3']
    const result = ArrayUtil.getSum_(arr)
    assert.strictEqual(result, '6')
  })

  it('select', () => {
    const arr = ['1', 2, '3', 6, 9, 2]
    const result = ArrayUtil.select_(arr, [0, 3, 5])
    // logger.error(result)
    assert.strictEqual(result[0], '1')
    assert.strictEqual(result[1], 6)
    assert.strictEqual(result[2], 2)
  })

  it('toLowerCase', () => {
    const arr = ['drG', 2, '3', 6, 9, 2]
    const result = ArrayUtil.toLowerCase_(arr)
    // logger.error(result)
    assert.strictEqual(result[0], 'drg')
  })

  it('random', () => {
    const arr = [2]
    const result = ArrayUtil.random_(arr)
    // logger.error(result)
    assert.strictEqual(result, 2)
  })

  it('numberArrayToHexString', () => {
    const arr = [224, 220, 74, 72]
    const result = ArrayUtil.numberArrayToHexString_(arr)
    // logger.error(result)
    assert.strictEqual(result, 'E0DC4A48')
  })

  it('getMaxWithPriority_', () => {
    const arr = [["1", 4], ["2", 5], ["2", 4], [1, 1]]
    const result = ArrayUtil.sortWithPriority_(arr, `asc`)
    // console.error(result)
    assert.strictEqual(JSON.stringify(result), '[["1",4],["2",5],["2",4],[1,1]]')
  })
})

