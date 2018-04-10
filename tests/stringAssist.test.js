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

  it('remainDecimal', () => {
    const result = `10.121`.remainDecimal(0)
    assert.strictEqual(result, `10`)
  })
})

