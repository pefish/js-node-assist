import '../src/index'
import assert from "assert"

describe('stringAssist', () => {

  it('replaceAll', () => {
    const result = `145145abc451abc535`.replaceAll('abc', '111')
    assert.strictEqual(result, `145145111451111535`)
  })

  it('pow', () => {
    const result = `10`.pow(18)
    assert.strictEqual(result, `1000000000000000000`)
  })

  it('add', () => {
    const result = `10`.add('1')
    assert.strictEqual(result, `11`)
  })

  it('sub', () => {
    const result = `10`.sub('1')
    assert.strictEqual(result, `9`)
  })

  it('remainDecimal', () => {
    const result = `10.121`.remainDecimal(0)
    assert.strictEqual(result, `10`)
  })

  it('eq', () => {
    const result = `0x0`.eq(0)
    assert.strictEqual(result, true)
  })

  it('shiftedBy', () => {
    const result = `1353`.shiftedBy(18)
    assert.strictEqual(result, '1353000000000000000000')
  })

  it('utf8HexStringToString', () => {
    const result = `0x3c5554462d383e`.utf8HexStringToString()
    assert.strictEqual(result, '<UTF-8>')
  })

  it('stringToUtf8HexString', () => {
    const result = `<UTF-8>`.stringToUtf8HexString()
    assert.strictEqual(result, '0x3c5554462d383e')
  })
})

