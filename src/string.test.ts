import assert from 'assert'
import { RoundingMode } from './index';

describe('stringAssist', () => {

  it('canCastNumber_', () => {
    const result = `10.12`.canCastNumber_()
    assert.strictEqual(result, true)
    const result1 = `10.a`.canCastNumber_()
    assert.strictEqual(result1, false)
  })

  it('multi_', () => {
    const result = `20000000000`.multi_(20730).unShiftedBy_(18)
    // global.console.error(result)
    assert.strictEqual(result, `0.0004146`)
  })

  it('remainDecimal_', () => {
    const result = `10.12`.remainDecimal_(4, RoundingMode.ROUND_UP)
    assert.strictEqual(result, `10.1200`)
  })

  it('removeFirstByStr_', () => {
    const result = `2,4`.removeFirstByStr_(',')
    assert.strictEqual(result, `4`)
    const result1 = `2,4,8`.removeFirstByStr_(',')
    assert.strictEqual(result1, `4,8`)
  })

  it('removeFirstStr_', () => {
    const result = `2,4`.removeFirstStr_('2')
    assert.strictEqual(result, `,4`)
    const result1 = `\n4,8`.removeFirstStr_('\n')
    assert.strictEqual(result1, `4,8`)
    const result2 = `\n4,8`.removeFirstStr_('4')
    assert.strictEqual(result2, `\n4,8`)
  })

  it('removeLastStr_', () => {
    const result = `2,4`.removeLastStr_('2')
    assert.strictEqual(result, `2,4`)
    const result1 = `4,8\n`.removeLastStr_('\n')
    assert.strictEqual(result1, `4,8`)
  })

  it('removeLastByStr_', () => {
    const result = `2,4`.removeLastByStr_(',')
    // console.error(result)
    assert.strictEqual(result, `2`)
    const result1 = `2,4,8`.removeLastByStr_(',')
    // console.error(result1)
    assert.strictEqual(result1, `2,4`)
    const result2 = "dghjsd\n".removeLastByStr_("\n")
    assert.strictEqual(result2, `dghjsd`)
    const result3 = "dghjsd".removeLastByStr_("\n")
    // console.log(`11`, result3)
    assert.strictEqual(result3, `dghjsd`)
  })

  it('removeLastEnter_', () => {
    const result = `2746\n`.removeLastEnter_()
    // console.error(result)
    assert.strictEqual(result, `2746`)

    const result1 = `2746\r\n`.removeLastEnter_()
    // console.error(result1)
    assert.strictEqual(result1, `2746`)
  })

  it('replaceAll_', () => {
    const result = `145145abc451abc535`.replaceAll_('abc', '111')
    assert.strictEqual(result, `145145111451111535`)
  })

  it('pow', () => {
    const result = `10`.pow_(18)
    assert.strictEqual(result, `1000000000000000000`)
  })

  it('add', () => {
    const result = `10`.add_('1')
    assert.strictEqual(result, `11`)
  })

  it('sub', () => {
    const result = `10`.sub_('1')
    assert.strictEqual(result, `9`)
  })

  it('remainDecimal_', () => {
    const result = `10.121`.remainDecimal_(0)
    assert.strictEqual(result, `10`)
  })

  it('remainDecimal_', () => {
    const result = `10.121565321`.remainDecimal_(8, 0)
    assert.strictEqual(result, `10.12156533`)
  })

  it('eq', () => {
    const result = `0x0`.eq_(0)
    assert.strictEqual(result, true)

    const result1 = `0x12`.eq_(18)
    assert.strictEqual(result1, true)
  })

  it('gt', () => {
    const result = `0.023`.gt_('0.0011')
    assert.strictEqual(result, true)

    const result1 = `0x12`.gt_(17)
    assert.strictEqual(result1, true)
  })

  it('shiftedBy_ "0"', () => {
    const result = `1353`.shiftedBy_('0')
    assert.strictEqual(result, '1353')
  })

  it('shiftedBy_ "18"', () => {
    const result = `1353`.shiftedBy_('18')
    assert.strictEqual(result, '1353000000000000000000')
  })

  it('shiftedBy_ "-2"', () => {
    const result = `1353`.shiftedBy_('-2')
    assert.strictEqual(result, '13.53')
  })

  it('shiftedBy_ -3', () => {
    const result = `1353`.shiftedBy_(-3)
    assert.strictEqual(result, '1.353')
  })

  it('shiftedBy_ 3', () => {
    const result = `1353`.shiftedBy_(3)
    assert.strictEqual(result, '1353000')
  })

  it('utf8HexStringToString', () => {
    const result = `0x3c5554462d383e`.utf8HexStringToString_()
    assert.strictEqual(result, '<UTF-8>')
  })

  it('toUtf8HexString_', () => {
    const result = `<UTF-8>`.toUtf8HexString_()
    assert.strictEqual(result, '0x3c5554462d383e')
  })

  it('toNumber_', () => {
    const result = `-2`.toNumber_()
    assert.strictEqual(result, -2)
  })

  it('unShiftedBy_', () => {
    const result = `231`.unShiftedBy_('2')
    assert.strictEqual(result, '2.31')
  })

  it('unShiftedBy_', () => {
    const result = `231`.unShiftedBy_(2)
    assert.strictEqual(result, '2.31')
  })

  it('negated', () => {
    const result1 = `231`.negated_()
    const result2 = `-231`.negated_()
    assert.strictEqual(result1, '-231')
    assert.strictEqual(result2, '231')
  })

  it('removeTrailingZeros_', () => {
    const result1 = '0.004250000'.removeTrailingZeros_()
    assert.strictEqual(result1, '0.00425')

    const result2 = '230.700'.removeTrailingZeros_()
    assert.strictEqual(result2, '230.7')

    const result3 = '230'.removeTrailingZeros_()
    assert.strictEqual(result3, '230')

    const result4 = '0.000000001'.removeTrailingZeros_()
    assert.strictEqual(result4, '0.000000001')
  })

  it('toInt', () => {
    const result1 = '100000000000'.toInt_()
    assert.strictEqual(result1, 100000000000)
  })

  it('toArray_1', () => {
    const result = '7cce3caf92eb2005ad8a6dd02625d1d8'.toArray_(2)
    // console.error(result)
    assert.strictEqual(result[0], '7c')
  })

  it('toArray_2', () => {
    const result = '7cce3caf92eb2005ad8a6dd02625d1d8'.toArray_(null, 4)
    // console.error(result)
    assert.strictEqual(JSON.stringify(result), '["7cce3caf","92eb2005","ad8a6dd0","2625d1d8"]')
  })

  it('hexToNumber_', () => {
    const result = '7c'.hexToNumber_()
    const result1 = '0x7c'.hexToNumber_()
    // console.error(result)
    assert.strictEqual(result, 124)
    assert.strictEqual(result1, 124)
  })

  it('hexToDecimalString_', () => {
    const result = '6673064416959ab'.hexToDecimalString_()
    const result1 = '0x6673064416959ab'.hexToDecimalString_()
    // console.error(result)
    assert.strictEqual(result, '461390693981051307')
    assert.strictEqual(result1, '461390693981051307')
  })

  it('binToDecimalString_', () => {
    const result = '11001100111001100000110010001000001011010010101100110101011'.binToDecimalString_()
    const result1 = '0b11001100111001100000110010001000001011010010101100110101011'.binToDecimalString_()
    // console.error('test', result)
    assert.strictEqual(result, '461390693981051307')
    assert.strictEqual(result1, '461390693981051307')
  })

  it('decimalToBinString', () => {
    const result = '461390693981051307'.decimalToBinString_()
    // console.error(result)
    assert.strictEqual(result, '0b11001100111001100000110010001000001011010010101100110101011')
  })

  it('decimalToHexString', () => {
    const result = '461390693981051307'.decimalToHexString_()
    // console.error(result)
    assert.strictEqual(result, '0x6673064416959ab')
  })

  it('decimalToOctString', () => {
    const result = '461390693981051307'.decimalToOctString_()
    // console.error(result)
    assert.strictEqual(result, '0o31471406210132254653')
  })

  it('decimalToBinString', () => {
    const result = '461390693981051307'.decimalToBinString_()
    // console.error(result)
    assert.strictEqual(result, '0b11001100111001100000110010001000001011010010101100110101011')
  })

  it('getFirst', () => {
    const result = 'th356hfgh3httr'.getFirst_(4)
    // console.error(result)
    assert.strictEqual(result, 'th35')
  })

  it('getLast', () => {
    const result = 'th356hfgh3httr'.getLast_(4)
    // console.error(result)
    assert.strictEqual(result, 'httr')
  })

  // numberStrToHex
  it('numberStrToHex', () => {
    const result = '190'.numberStrToHex_()
    // console.error(result)
    assert.strictEqual(result, 'BE')
  })

  it('numberStrToHex', () => {
    const result = '4124'.numberStrToHex_()
    // global.console.error(result)
    assert.strictEqual(result, '101C')
  })

  it('hexStrToBase64', () => {
    const result = '0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4'.hexStrToBase64_()
    // console.error(result)
    // MGM2OGFmZmJjZjAxYTQ5NTQwZTU5MGJjZjg4YWZhNGRjNjMwZWI1Y2UwZTEzYTViMDY3YzkxOGYwZTFjOWFmNA==
    assert.strictEqual(result, 'DGiv+88BpJVA5ZC8+Ir6TcYw61zg4TpbBnyRjw4cmvQ=')
  })

  it('strToBase64', () => {
    const result = '0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4'.strToBase64_()
    // console.error(result)
    assert.strictEqual(result, 'MGM2OGFmZmJjZjAxYTQ5NTQwZTU5MGJjZjg4YWZhNGRjNjMwZWI1Y2UwZTEzYTViMDY3YzkxOGYwZTFjOWFmNA==')
  })

  it('base64ToHexStr', () => {
    const result = 'DGiv+88BpJVA5ZC8+Ir6TcYw61zg4TpbBnyRjw4cmvQ='.base64ToHexStr_(false)
    // console.error(result)
    assert.strictEqual(result, '0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4')
  })

  it('base64ToStr', () => {
    const result = 'MGM2OGFmZmJjZjAxYTQ5NTQwZTU5MGJjZjg4YWZhNGRjNjMwZWI1Y2UwZTEzYTViMDY3YzkxOGYwZTFjOWFmNA=='.base64ToStr_()
    // console.error(result)
    assert.strictEqual(result, '0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4')
  })

  it('toUtf8Buffer_', () => {
    const result = '1shfgdjewarta'.toUtf8Buffer_()
    // console.error(JSON.stringify(result))
    assert.strictEqual(JSON.stringify(result), `{"type":"Buffer","data":[49,115,104,102,103,100,106,101,119,97,114,116,97]}`)
  })

  it('toUtf8Uint8Array_', () => {
    const result = '1shfgdjewarta'.toUtf8Uint8Array_()
    // console.error(result[0])
    assert.strictEqual(JSON.stringify(result), `{"0":49,"1":115,"2":104,"3":102,"4":103,"5":100,"6":106,"7":101,"8":119,"9":97,"10":114,"11":116,"12":97}`)
  })

  it('hexToBuffer_', () => {
    const result = `0x66730644`.hexToBuffer_()
    // console.log(JSON.stringify(result))
    assert.strictEqual(JSON.stringify(result), `{"type":"Buffer","data":[102,115,6,68]}`)
  })
})


