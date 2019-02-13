import '../index'
import assert from "assert"

describe('stringAssist', () => {

  it('remainDecimal', () => {
    const result = `10.12`.remainDecimal(4, 0)
    assert.strictEqual(result, `10.1200`)
  })

  it('removeFirstByStr', () => {
    const result = `2,4`.removeFirstByStr(',')
    logger.error(result)
    assert.strictEqual(result, `4`)
    const result1 = `2,4,8`.removeFirstByStr(',')
    logger.error(result1)
    assert.strictEqual(result1, `4,8`)
  })

  it('removeLastByStr', () => {
    const result = `2,4`.removeLastByStr(',')
    // logger.error(result)
    assert.strictEqual(result, `2`)
    const result1 = `2,4,8`.removeLastByStr(',')
    // logger.error(result1)
    assert.strictEqual(result1, `2,4`)
  })

  it('removeLastEnter', () => {
    const result = `2746\n`.removeLastEnter()
    // logger.error(result)
    assert.strictEqual(result, `2746`)

    const result1 = `2746\r\n`.removeLastEnter()
    // logger.error(result1)
    assert.strictEqual(result1, `2746`)
  })

  it('pow', () => {
    const result = `2`.pow(0.5)
    logger.error(result)
    assert.strictEqual(result, `1000000000000000000`)
  })

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

  it('gt', () => {
    const result = `0.023`.gt('0.0011')
    assert.strictEqual(result, true)
  })

  it('shiftedBy "0"', () => {
    const result = `1353`.shiftedBy('0')
    assert.strictEqual(result, '1353')
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

  it('toArray', () => {
    const result = '7cce3caf92eb2005ad8a6dd02625d1d8'.toArray(2)
    // logger.error(result)
    assert.strictEqual(result[0], '7c')
  })

  it('toArray', () => {
    const result = '7cce3caf92eb2005ad8a6dd02625d1d8'.toArray(null, 4)
    // logger.error(result)
    assert.strictEqual(result[0], '7cce3caf')
  })

  it('hexToNumber', () => {
    const result = '7c'.hexToNumber()
    const result1 = '0x7c'.hexToNumber()
    // logger.error(result)
    assert.strictEqual(result, 124)
    assert.strictEqual(result1, 124)
  })

  it('hexToDecimalString', () => {
    const result = '6673064416959ab'.hexToDecimalString()
    const result1 = '0x6673064416959ab'.hexToDecimalString()
    // logger.error(result)
    assert.strictEqual(result, '461390693981051307')
    assert.strictEqual(result1, '461390693981051307')
  })

  it('binToDecimalString', () => {
    const result = '11001100111001100000110010001000001011010010101100110101011'.binToDecimalString()
    const result1 = '0b11001100111001100000110010001000001011010010101100110101011'.binToDecimalString()
    // logger.error('test', result)
    assert.strictEqual(result, '461390693981051307')
    assert.strictEqual(result1, '461390693981051307')
  })

  it('decimalToBinString', () => {
    const result = '461390693981051307'.decimalToBinString()
    // logger.error(result)
    assert.strictEqual(result, '0b11001100111001100000110010001000001011010010101100110101011')
  })

  it('decimalToHexString', () => {
    const result = '461390693981051307'.decimalToHexString()
    // logger.error(result)
    assert.strictEqual(result, '0x6673064416959ab')
  })

  it('decimalToOctString', () => {
    const result = '461390693981051307'.decimalToOctString()
    // logger.error(result)
    assert.strictEqual(result, '0o31471406210132254653')
  })

  it('decimalToBinString', () => {
    const result = '461390693981051307'.decimalToBinString()
    // logger.error(result)
    assert.strictEqual(result, '0b11001100111001100000110010001000001011010010101100110101011')
  })

  it('urlEncode', () => {
    const result = '分叉'.urlEncode()
    // logger.error(result)
    assert.strictEqual(result, '%E5%88%86%E5%8F%89')
  })

  it('urlDecode', () => {
    const result = '%E5%88%86%E5%8F%89'.urlDecode()
    // logger.error(result)
    assert.strictEqual(result, '分叉')
  })

  it('getFirst', () => {
    const result = 'th356hfgh3httr'.getFirst(4)
    // logger.error(result)
    assert.strictEqual(result, 'th35')
  })

  it('getLast', () => {
    const result = 'th356hfgh3httr'.getLast(4)
    // logger.error(result)
    assert.strictEqual(result, 'httr')
  })

  // numberStrToHex
  it('numberStrToHex', () => {
    const result = '190'.numberStrToHex()
    // logger.error(result)
    assert.strictEqual(result, 'BE')
  })

  it('hexStrToBase64', () => {
    const result = '0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4'.hexStrToBase64()
    // logger.error(result)
    // MGM2OGFmZmJjZjAxYTQ5NTQwZTU5MGJjZjg4YWZhNGRjNjMwZWI1Y2UwZTEzYTViMDY3YzkxOGYwZTFjOWFmNA==
    assert.strictEqual(result, 'DGiv+88BpJVA5ZC8+Ir6TcYw61zg4TpbBnyRjw4cmvQ=')
  })

  it('strToBase64', () => {
    const result = '0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4'.strToBase64()
    // logger.error(result)
    assert.strictEqual(result, 'MGM2OGFmZmJjZjAxYTQ5NTQwZTU5MGJjZjg4YWZhNGRjNjMwZWI1Y2UwZTEzYTViMDY3YzkxOGYwZTFjOWFmNA==')
  })

  it('strToBase64', () => {
    const result = 'www.baidu.com'.strToBase64()
    logger.error(result)
    // assert.strictEqual(result, 'MGM2OGFmZmJjZjAxYTQ5NTQwZTU5MGJjZjg4YWZhNGRjNjMwZWI1Y2UwZTEzYTViMDY3YzkxOGYwZTFjOWFmNA==')
  })


  it('base64ToHexStr', () => {
    const result = 'DGiv+88BpJVA5ZC8+Ir6TcYw61zg4TpbBnyRjw4cmvQ='.base64ToHexStr()
    // logger.error(result)
    assert.strictEqual(result, '0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4')
  })

  it('base64ToStr', () => {
    const result = 'MGM2OGFmZmJjZjAxYTQ5NTQwZTU5MGJjZjg4YWZhNGRjNjMwZWI1Y2UwZTEzYTViMDY3YzkxOGYwZTFjOWFmNA=='.base64ToStr()
    // logger.error(result)
    assert.strictEqual(result, '0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4')
  })
})


