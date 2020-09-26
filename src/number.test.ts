import './index'
import assert from 'assert'
import NumberUtil, { EndianType } from './number';

describe('numberAssist', () => {

  it('toBinString_', () => {
    const test = 100
    const result = NumberUtil.toBinString_(test)
    // console.log(result)
    assert.strictEqual(result, "1100100")
  })

  it('toOctString_', () => {
    const test = 100
    const result = NumberUtil.toOctString_(test)
    // console.log(result)
    assert.strictEqual(result, "144")
  })

  it('toHexString_', () => {
    const test = 100
    const result = NumberUtil.toHexString_(test)
    // console.log(result)
    assert.strictEqual(result, "64")
  })

  it('toInt_', () => {
    const test = 100.11
    const result = NumberUtil.toInt_(test)
    // console.log(result)
    assert.strictEqual(result, 100)
  })

  it('toInt_1', () => {
    const test = 100.67
    const result = NumberUtil.toInt_(test)
    // console.log(result)
    assert.strictEqual(result, 100)
  })

  it('toNoScientificString_', () => {
    const test = 100846783
    const result = NumberUtil.toNoScientificString_(test)
    // console.log(result)
    assert.strictEqual(result, "100846783")
  })

  it('toBuffer_', () => {
    const test = 1
    const result = NumberUtil.toBuffer_(test, EndianType.Little_Endian)
    assert.strictEqual(JSON.stringify(result), `{"type":"Buffer","data":[0,0,0,0,0,0,240,63]}`)
  })
})

