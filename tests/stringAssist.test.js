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

  it('remainDecimal', () => {
    const result = `10.121565321`.remainDecimal(8, 0)
    assert.strictEqual(result, `10.12156533`)
  })

  it('eq', () => {
    const result = `0x0`.eq(0)
    assert.strictEqual(result, true)
  })

  it('shiftedBy "18"', () => {
    const result = `1353`.shiftedBy('18')
    assert.strictEqual(result, '1353000000000000000000')
  })

  it('shiftedBy "-2"', () => {
    const result = `1353`.shiftedBy('-2')
    assert.strictEqual(result, '13.53')
  })

  it('shiftedBy -3', () => {
    const result = `1353`.shiftedBy(-3)
    assert.strictEqual(result, '1.353')
  })

  it('shiftedBy 3', () => {
    const result = `1353`.shiftedBy(3)
    assert.strictEqual(result, '1353000')
  })

  it('utf8HexStringToString', () => {
    const result = `0x3c5554462d383e`.utf8HexStringToString()
    assert.strictEqual(result, '<UTF-8>')
  })

  it('stringToUtf8HexString', () => {
    const result = `<UTF-8>`.stringToUtf8HexString()
    assert.strictEqual(result, '0x3c5554462d383e')
  })

  it('toNumber', () => {
    const result = `-2`.toNumber()
    assert.strictEqual(result, -2)
  })

  it('unShiftedBy', () => {
    const result = `231`.unShiftedBy('2')
    assert.strictEqual(result, '2.31')
  })

  it('unShiftedBy', () => {
    const result = `231`.unShiftedBy(2)
    assert.strictEqual(result, '2.31')
  })

  it('negated', () => {
    const result1 = `231`.negated()
    const result2 = `-231`.negated()
    assert.strictEqual(result1, '-231')
    assert.strictEqual(result2, '231')
  })

  it('removeTrailingZeros', () => {
    const result1 = '0.004250000'.removeTrailingZeros()
    assert.strictEqual(result1, '0.00425')

    const result2 = '230.700'.removeTrailingZeros()
    assert.strictEqual(result2, '230.7')

    const result3 = '230'.removeTrailingZeros()
    assert.strictEqual(result3, '230')

    const result4 = '0.000000001'.removeTrailingZeros()
    assert.strictEqual(result4, '0.000000001')
  })

  it('toInt', () => {
    const result1 = '100000000000'.toInt()
    assert.strictEqual(result1, 100000000000)
  })
})

