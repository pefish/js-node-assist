import './index'
import assert from 'assert'
import NumberUtil, { EndianType } from './number';

describe('numberAssist', () => {

  it('toBinString', () => {
    const test = 100
    const result = NumberUtil.toBinString(test)
    // console.log(result)
    assert.strictEqual(result, "1100100")
  })

  it('toOctString', () => {
    const test = 100
    const result = NumberUtil.toOctString(test)
    // console.log(result)
    assert.strictEqual(result, "144")
  })

  it('toHexString', () => {
    const test = 100
    const result = NumberUtil.toHexString(test)
    // console.log(result)
    assert.strictEqual(result, "64")
  })

  it('toInt', () => {
    const test = 100.11
    const result = NumberUtil.toInt(test)
    // console.log(result)
    assert.strictEqual(result, 100)
  })

  it('toInt1', () => {
    const test = 100.67
    const result = NumberUtil.toInt(test)
    // console.log(result)
    assert.strictEqual(result, 100)
  })

  it('toNoScientificString', () => {
    const test = 100846783
    const result = NumberUtil.toNoScientificString(test)
    // console.log(result)
    assert.strictEqual(result, "100846783")
  })

  it('toBuffer', () => {
    const test = 1
    const result = NumberUtil.toBuffer(test, EndianType.LittleEndian)
    assert.strictEqual(JSON.stringify(result), `{"type":"Buffer","data":[0,0,0,0,0,0,240,63]}`)
  })
})

