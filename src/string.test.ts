import assert from 'assert'
import { RoundingMode } from './index';
import StringUtil from './string';

describe('stringAssist', () => {

  it('canCastNumber_', () => {
    const result = StringUtil.canCastNumber_(`10.12`)
    assert.strictEqual(result, true)
    const result1 = StringUtil.canCastNumber_(`10.a`)
    assert.strictEqual(result1, false)
  })

  it('multi_', () => {
    const result = StringUtil.unShiftedBy_(StringUtil.multi_(`20000000000`, 20730), 18)
    // global.console.error(result)
    assert.strictEqual(result, `0.0004146`)
  })

  it('remainDecimal_', () => {
    const result = StringUtil.remainDecimal_(`10.12`, 4, RoundingMode.ROUND_UP)
    assert.strictEqual(result, `10.12`)

    const result1 = StringUtil.remainDecimal_(`10.12`, 4, RoundingMode.ROUND_UP, true)
    assert.strictEqual(result1, `10.1200`)

    const result2 = StringUtil.remainDecimal_(`10.12`, 1, RoundingMode.ROUND_UP)
    assert.strictEqual(result2, `10.2`)

    const result3 = StringUtil.remainDecimal_(`10.12`, 0, RoundingMode.ROUND_UP)
    assert.strictEqual(result3, `11`)

    const result4 = StringUtil.remainDecimal_(`10`, 4, RoundingMode.ROUND_UP)
    assert.strictEqual(result4, `10`)
  })

  it('removeFirstByStr_', () => {
    const result = StringUtil.removeFirstByStr_(`2,4`, ',')
    assert.strictEqual(result, `4`)
    const result1 = StringUtil.removeFirstByStr_(`2,4,8`, ',')
    assert.strictEqual(result1, `4,8`)
  })

  it('removeFirstStr_', () => {
    const result = StringUtil.removeFirstStr_(`2,4`, '2')
    assert.strictEqual(result, `,4`)
    const result1 = StringUtil.removeFirstStr_(`\n4,8`, '\n')
    assert.strictEqual(result1, `4,8`)
    const result2 = StringUtil.removeFirstStr_(`\n4,8`, '4')
    assert.strictEqual(result2, `\n4,8`)
  })

  it('removeLastStr_', () => {
    const result = StringUtil.removeLastStr_(`2,4`, '2')
    assert.strictEqual(result, `2,4`)
    const result1 = StringUtil.removeLastStr_(`4,8\n`, '\n')
    assert.strictEqual(result1, `4,8`)
  })

  it('removeLastByStr_', () => {
    const result = StringUtil.removeLastByStr_(`2,4`, ',')
    // console.error(result)
    assert.strictEqual(result, `2`)
    const result1 = StringUtil.removeLastByStr_(`2,4,8`, ',')
    // console.error(result1)
    assert.strictEqual(result1, `2,4`)
    const result2 = StringUtil.removeLastByStr_("dghjsd\n", "\n")
    assert.strictEqual(result2, `dghjsd`)
    const result3 = StringUtil.removeLastByStr_("dghjsd", "\n")
    // console.log(`11`, result3)
    assert.strictEqual(result3, `dghjsd`)
  })

  it('removeLastEnter_', () => {
    const result = StringUtil.removeLastEnter_(`2746\n`)
    // console.error(result)
    assert.strictEqual(result, `2746`)

    const result1 = StringUtil.removeLastEnter_(`2746\r\n`)
    // console.error(result1)
    assert.strictEqual(result1, `2746`)
  })

  it('replaceAll_', () => {
    const result = StringUtil.replaceAll_(`145145abc451abc535`, 'abc', '111')
    assert.strictEqual(result, `145145111451111535`)
  })

  it('pow', () => {
    const result = StringUtil.pow_(`10`, 18)
    assert.strictEqual(result, `1000000000000000000`)
  })

  it('add', () => {
    const result = StringUtil.add_(`10`, '1')
    assert.strictEqual(result, `11`)
  })

  it('sub', () => {
    const result = StringUtil.sub_(`10`, '1')
    assert.strictEqual(result, `9`)
  })

  it('remainDecimal_', () => {
    const result = StringUtil.remainDecimal_(`10.121`, 0)
    assert.strictEqual(result, `10`)
  })

  it('remainDecimal_', () => {
    const result = StringUtil.remainDecimal_(`10.121565321`, 8, 0)
    assert.strictEqual(result, `10.12156533`)
  })

  it('eq', () => {
    const result = StringUtil.eq_(`0x0`, 0)
    assert.strictEqual(result, true)

    const result1 = StringUtil.eq_(`0x12`, 18)
    assert.strictEqual(result1, true)
  })

  it('gt', () => {
    const result = StringUtil.gt_(`0.023`, '0.0011')
    assert.strictEqual(result, true)

    const result1 = StringUtil.gt_(`0x12`, 17)
    assert.strictEqual(result1, true)
  })

  it('shiftedBy_ "0"', () => {
    const result = StringUtil.shiftedBy_(`1353`, 0)
    assert.strictEqual(result, '1353')
  })

  it('shiftedBy_ "18"', () => {
    const result = StringUtil.shiftedBy_(`1353`, 18)
    assert.strictEqual(result, '1353000000000000000000')
  })

  it('shiftedBy_ "-2"', () => {
    const result = StringUtil.shiftedBy_(`1353`, -2)
    assert.strictEqual(result, '13.53')
  })

  it('shiftedBy_ -3', () => {
    const result = StringUtil.shiftedBy_(`1353`, -3)
    assert.strictEqual(result, '1.353')
  })

  it('shiftedBy_ 3', () => {
    const result = StringUtil.shiftedBy_(`1353`, 3)
    assert.strictEqual(result, '1353000')
  })

  it('utf8HexStringToString', () => {
    const result = StringUtil.utf8HexStringToString_(`0x3c5554462d383e`)
    assert.strictEqual(result, '<UTF-8>')
  })

  it('toUtf8HexString_', () => {
    const result = StringUtil.toUtf8HexString_(`<UTF-8>`)
    assert.strictEqual(result, '0x3c5554462d383e')
  })

  it('toNumber_', () => {
    const result = StringUtil.toNumber_(`-2`)
    assert.strictEqual(result, -2)
  })

  it('unShiftedBy_', () => {
    const result = StringUtil.unShiftedBy_(`231`, '2')
    assert.strictEqual(result, '2.31')
  })

  it('unShiftedBy_', () => {
    const result = StringUtil.unShiftedBy_(`231`, 2)
    assert.strictEqual(result, '2.31')
  })

  it('negated', () => {
    const result1 = StringUtil.negated_(`231`)
    const result2 = StringUtil.negated_(`-231`)
    assert.strictEqual(result1, '-231')
    assert.strictEqual(result2, '231')
  })

  it('removeTrailingZeros_', () => {
    const result1 = StringUtil.removeTrailingZeros_('0.004250000')
    assert.strictEqual(result1, '0.00425')

    const result2 = StringUtil.removeTrailingZeros_('230.700')
    assert.strictEqual(result2, '230.7')

    const result3 = StringUtil.removeTrailingZeros_('230')
    assert.strictEqual(result3, '230')

    const result4 = StringUtil.removeTrailingZeros_('0.000000001')
    assert.strictEqual(result4, '0.000000001')
  })

  it('toInt', () => {
    const result1 = StringUtil.toInt_('100000000000')
    assert.strictEqual(result1, 100000000000)
  })

  it('toArray_1', () => {
    const result = StringUtil.toArray_('7cce3caf92eb2005ad8a6dd02625d1d8', 2)
    // console.error(result)
    assert.strictEqual(result[0], '7c')
  })

  it('toArray_2', () => {
    const result = StringUtil.toArray_('7cce3caf92eb2005ad8a6dd02625d1d8', undefined, 4)
    // console.error(result)
    assert.strictEqual(JSON.stringify(result), '["7cce3caf","92eb2005","ad8a6dd0","2625d1d8"]')
  })

  it('hexToNumber_', () => {
    const result = StringUtil.hexToNumber_('7c')
    const result1 = StringUtil.hexToNumber_('0x7c')
    // console.error(result)
    assert.strictEqual(result, 124)
    assert.strictEqual(result1, 124)
  })

  it('hexToDecimalString_', () => {
    const result = StringUtil.hexToDecimalString_('6673064416959ab')
    const result1 = StringUtil.hexToDecimalString_('0x6673064416959ab')
    // console.error(result)
    assert.strictEqual(result, '461390693981051307')
    assert.strictEqual(result1, '461390693981051307')
  })

  it('binToDecimalString_', () => {
    const result = StringUtil.binToDecimalString_('11001100111001100000110010001000001011010010101100110101011')
    const result1 = StringUtil.binToDecimalString_('0b11001100111001100000110010001000001011010010101100110101011')
    // console.error('test', result)
    assert.strictEqual(result, '461390693981051307')
    assert.strictEqual(result1, '461390693981051307')
  })

  it('decimalToBinString', () => {
    const result = StringUtil.decimalToBinString_('461390693981051307')
    // console.error(result)
    assert.strictEqual(result, '0b11001100111001100000110010001000001011010010101100110101011')
  })

  it('decimalToHexString', () => {
    const result = StringUtil.decimalToHexString_('461390693981051307')
    // console.error(result)
    assert.strictEqual(result, '0x6673064416959ab')
  })

  it('decimalToOctString', () => {
    const result = StringUtil.decimalToOctString_('461390693981051307')
    // console.error(result)
    assert.strictEqual(result, '0o31471406210132254653')
  })

  it('decimalToBinString', () => {
    const result = StringUtil.decimalToBinString_('461390693981051307')
    // console.error(result)
    assert.strictEqual(result, '0b11001100111001100000110010001000001011010010101100110101011')
  })

  it('getFirst', () => {
    const result = StringUtil.getFirst_('th356hfgh3httr', 4)
    // console.error(result)
    assert.strictEqual(result, 'th35')
  })

  it('getLast', () => {
    const result = StringUtil.getLast_('th356hfgh3httr', 4)
    // console.error(result)
    assert.strictEqual(result, 'httr')
  })

  // numberStrToHex
  it('numberStrToHex', () => {
    const result = StringUtil.numberStrToHex_('190')
    // console.error(result)
    assert.strictEqual(result, 'BE')
  })

  it('numberStrToHex', () => {
    const result = StringUtil.numberStrToHex_('4124')
    // global.console.error(result)
    assert.strictEqual(result, '101C')
  })

  it('hexStrToBase64', () => {
    const result = StringUtil.hexStrToBase64_('0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4')
    // console.error(result)
    // MGM2OGFmZmJjZjAxYTQ5NTQwZTU5MGJjZjg4YWZhNGRjNjMwZWI1Y2UwZTEzYTViMDY3YzkxOGYwZTFjOWFmNA==
    assert.strictEqual(result, 'DGiv+88BpJVA5ZC8+Ir6TcYw61zg4TpbBnyRjw4cmvQ=')
  })

  it('strToBase64', () => {
    const result = StringUtil.strToBase64_('0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4')
    // console.error(result)
    assert.strictEqual(result, 'MGM2OGFmZmJjZjAxYTQ5NTQwZTU5MGJjZjg4YWZhNGRjNjMwZWI1Y2UwZTEzYTViMDY3YzkxOGYwZTFjOWFmNA==')
  })

  it('base64ToHexStr', () => {
    const result = StringUtil.base64ToHexStr_('DGiv+88BpJVA5ZC8+Ir6TcYw61zg4TpbBnyRjw4cmvQ=', false)
    // console.error(result)
    assert.strictEqual(result, '0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4')
  })

  it('base64ToStr', () => {
    const result = StringUtil.base64ToStr_('MGM2OGFmZmJjZjAxYTQ5NTQwZTU5MGJjZjg4YWZhNGRjNjMwZWI1Y2UwZTEzYTViMDY3YzkxOGYwZTFjOWFmNA==')
    // console.error(result)
    assert.strictEqual(result, '0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4')
  })

  it('toUtf8Buffer_', () => {
    const result = StringUtil.toUtf8Buffer_('1shfgdjewarta')
    // console.error(JSON.stringify(result))
    assert.strictEqual(JSON.stringify(result), `{"type":"Buffer","data":[49,115,104,102,103,100,106,101,119,97,114,116,97]}`)
  })

  it('toUtf8Uint8Array_', () => {
    const result = StringUtil.toUtf8Uint8Array_('1shfgdjewarta')
    // console.error(result[0])
    assert.strictEqual(JSON.stringify(result), `{"0":49,"1":115,"2":104,"3":102,"4":103,"5":100,"6":106,"7":101,"8":119,"9":97,"10":114,"11":116,"12":97}`)
  })

  it('hexToBuffer_', () => {
    const result = StringUtil.hexToBuffer_(`0x66730644`)
    // console.log(JSON.stringify(result))
    assert.strictEqual(JSON.stringify(result), `{"type":"Buffer","data":[102,115,6,68]}`)
  })
})


