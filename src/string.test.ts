import assert from 'assert'
import { RoundingMode } from './index';
import StringUtil, { Calculator } from './string';

describe('stringAssist', () => {

  it('canCastNumber_', () => {
    const result = StringUtil.canCastNumber(`10.12`)
    assert.strictEqual(result, true)
    const result1 = StringUtil.canCastNumber(`10.a`)
    assert.strictEqual(result1, false)
  })

  it('multi', () => {
    const result = StringUtil.start(20000000000).multi(`20730`).unShiftedBy(new Calculator(18)).end()
    // global.console.error(result)
    assert.strictEqual(result, `0.0004146`)

    const result1 = StringUtil.start(`0x2`).multi(`11`).end()
    // global.console.error(result)
    assert.strictEqual(result1, `22`)


    const result2 = StringUtil.start(`625113268`).multi(`997`)
    const result3 = result2.multi("1135067100697205")
    assert.strictEqual(result3.div(result2).end(), `1135067100697205`)
  })

  it('remainDecimal_', () => {
    const result = StringUtil.start(new Calculator(`10.12`)).remainDecimal(4, RoundingMode.ROUND_UP).end()
    assert.strictEqual(result, `10.12`)

    const result1 = StringUtil.start(`10.12`).remainDecimal(4, RoundingMode.ROUND_UP, true).end()
    assert.strictEqual(result1, `10.1200`)

    const result2 = StringUtil.start(`10.12`).remainDecimal(1, RoundingMode.ROUND_UP).end()
    assert.strictEqual(result2, `10.2`)

    const result3 = StringUtil.start(`10.12`).remainDecimal(0, RoundingMode.ROUND_UP).end()
    assert.strictEqual(result3, `11`)

    const result4 = StringUtil.start(`10`).remainDecimal(4, RoundingMode.ROUND_UP).end()
    assert.strictEqual(result4, `10`)
  })

  it('removeFirstByStr_', () => {
    const result = StringUtil.removeFirstByStr(`2,4`, ',')
    assert.strictEqual(result, `4`)
    const result1 = StringUtil.removeFirstByStr(`2,4,8`, ',')
    assert.strictEqual(result1, `4,8`)
  })

  it('removeFirstStr_', () => {
    const result = StringUtil.removeFirstStr(`2,4`, '2')
    assert.strictEqual(result, `,4`)
    const result1 = StringUtil.removeFirstStr(`\n4,8`, '\n')
    assert.strictEqual(result1, `4,8`)
    const result2 = StringUtil.removeFirstStr(`\n4,8`, '4')
    assert.strictEqual(result2, `\n4,8`)
  })

  it('removeLastStr_', () => {
    const result = StringUtil.removeLastStr(`2,4`, '2')
    assert.strictEqual(result, `2,4`)
    const result1 = StringUtil.removeLastStr(`4,8\n`, '\n')
    assert.strictEqual(result1, `4,8`)
  })

  it('removeLastByStr_', () => {
    const result = StringUtil.removeLastByStr(`2,4`, ',')
    // console.error(result)
    assert.strictEqual(result, `2`)
    const result1 = StringUtil.removeLastByStr(`2,4,8`, ',')
    // console.error(result1)
    assert.strictEqual(result1, `2,4`)
    const result2 = StringUtil.removeLastByStr("dghjsd\n", "\n")
    assert.strictEqual(result2, `dghjsd`)
    const result3 = StringUtil.removeLastByStr("dghjsd", "\n")
    // console.log(`11`, result3)
    assert.strictEqual(result3, `dghjsd`)
  })

  it('removeLastEnter_', () => {
    const result = StringUtil.removeLastEnter(`2746\n`)
    // console.error(result)
    assert.strictEqual(result, `2746`)

    const result1 = StringUtil.removeLastEnter(`2746\r\n`)
    // console.error(result1)
    assert.strictEqual(result1, `2746`)
  })

  it('replaceAll_', () => {
    const result = StringUtil.replaceAll(`145145abc451abc535`, 'abc', '111')
    assert.strictEqual(result, `145145111451111535`)
  })

  it('pow', () => {
    const result = StringUtil.start(`10`).pow(18).end()
    assert.strictEqual(result, `1000000000000000000`)
  })

  it('add', () => {
    const result = StringUtil.start(`10`).add('1').end()
    assert.strictEqual(result, `11`)
  })

  it('sub', () => {
    const result = StringUtil.start(`10`).sub('1').end()
    assert.strictEqual(result, `9`)
  })

  it('remainDecimal_', () => {
    const result = StringUtil.start(`10.121`).remainDecimal(0).end()
    assert.strictEqual(result, `10`)
  })

  it('remainDecimal_', () => {
    const result = StringUtil.start(`10.121565321`).remainDecimal(8, 0).end()
    assert.strictEqual(result, `10.12156533`)
  })

  it('eq', () => {
    const result = StringUtil.start(`0x0`).eq(0)
    assert.strictEqual(result, true)

    const result1 = StringUtil.start(`0x12`).eq(18)
    assert.strictEqual(result1, true)
  })

  it('gt', () => {
    const result = StringUtil.start(`0.023`).gt('0.0011')
    assert.strictEqual(result, true)

    const result1 = StringUtil.start(`0x12`).gt(17)
    assert.strictEqual(result1, true)
  })

  it('shiftedBy_ "0"', () => {
    const result: string = StringUtil.start(`1353`).shiftedBy(0).end()
    assert.strictEqual(result, '1353')
  })

  it('shiftedBy_ "18"', () => {
    const result: string = StringUtil.start(`1353`).shiftedBy(18).end()
    assert.strictEqual(result, '1353000000000000000000')
  })

  it('shiftedBy_ "-2"', () => {
    const result: string = StringUtil.start(`1353`).shiftedBy(-2).end()
    assert.strictEqual(result, '13.53')
  })

  it('shiftedBy_ -3', () => {
    const result: string = StringUtil.start(`1353`).shiftedBy(-3).end()
    assert.strictEqual(result, '1.353')
  })

  it('shiftedBy_ 3', () => {
    const result: string = StringUtil.start(`1353`).shiftedBy(3).end()
    assert.strictEqual(result, '1353000')
  })

  it('utf8HexStringToString', () => {
    const result: string = StringUtil.utf8HexStringToString(`0x3c5554462d383e`)
    assert.strictEqual(result, '<UTF-8>')
  })

  it('toUtf8HexString_', () => {
    const result: string = StringUtil.toUtf8HexString(`<UTF-8>`)
    assert.strictEqual(result, '0x3c5554462d383e')
  })

  it('toNumber_', () => {
    const result: number = StringUtil.start(`-2`).toNumber()
    assert.strictEqual(result, -2)
  })

  it('unShiftedBy_', () => {
    const result: string = StringUtil.start(`231`).unShiftedBy('2').end()
    assert.strictEqual(result, '2.31')
  })

  it('unShiftedBy_', () => {
    const result: string = StringUtil.start(`231`).unShiftedBy(2).end()
    assert.strictEqual(result, '2.31')
  })

  it('negated', () => {
    const result1: string = StringUtil.start(`231`).negated().end()
    const result2: string = StringUtil.start(`-231`).negated().end()
    assert.strictEqual(result1, '-231')
    assert.strictEqual(result2, '231')
  })

  it('removeTrailingZeros_', () => {
    const result1: string = StringUtil.removeTrailingZeros('0.004250000')
    assert.strictEqual(result1, '0.00425')

    const result2: string = StringUtil.removeTrailingZeros('230.700')
    assert.strictEqual(result2, '230.7')

    const result3: string = StringUtil.removeTrailingZeros('230')
    assert.strictEqual(result3, '230')

    const result4: string = StringUtil.removeTrailingZeros('0.000000001')
    assert.strictEqual(result4, '0.000000001')
  })

  it('toInt', () => {
    const result1: number = StringUtil.start('100000000000').toInt()
    assert.strictEqual(result1, 100000000000)
  })

  it('toArray_1', () => {
    const result: string[] = StringUtil.toArray('7cce3caf92eb2005ad8a6dd02625d1d8', 2)
    // console.error(result)
    assert.strictEqual(result[0], '7c')
  })

  it('toArray_2', () => {
    const result: string[] = StringUtil.toArray('7cce3caf92eb2005ad8a6dd02625d1d8', undefined, 4)
    // console.error(result)
    assert.strictEqual(JSON.stringify(result), '["7cce3caf","92eb2005","ad8a6dd0","2625d1d8"]')
  })

  it('hexToNumber_', () => {
    const result: number = StringUtil.hexToNumber('7c')
    const result1: number = StringUtil.hexToNumber('0x7c')
    // console.error(result)
    assert.strictEqual(result, 124)
    assert.strictEqual(result1, 124)
  })

  it('hexToDecimalString_', () => {
    const result: string = StringUtil.hexToDecimalString('6673064416959ab')
    const result1: string = StringUtil.hexToDecimalString('0x6673064416959ab')
    // console.error(result)
    assert.strictEqual(result, '461390693981051307')
    assert.strictEqual(result1, '461390693981051307')
  })

  it('binToDecimalString_', () => {
    const result: string = StringUtil.start("0b11001100111001100000110010001000001011010010101100110101011").toDecimalString().end()
    // console.error('test', result)
    assert.strictEqual(result, '461390693981051307')
  })

  it('decimalToBinString', () => {
    const result: string = StringUtil.start("461390693981051307").toBinString().end()
    // console.error(result)
    assert.strictEqual(result, '0b11001100111001100000110010001000001011010010101100110101011')

    const result1: string = StringUtil.start("11").toBinString().end()
    // console.error(result)
    assert.strictEqual(StringUtil.start(result1).add("10").end(), '21')

    const result2: string = StringUtil.start("0x2").toBinString().end()
    // console.error(result)
    assert.strictEqual(StringUtil.start(result2).add("10").end(), '12')
  })

  it('decimalToHexString', () => {
    const result: string = StringUtil.start('461390693981051307').toHexString().end()
    // console.error(result)
    assert.strictEqual(result, '0x6673064416959ab')
  })

  it('decimalToOctString', () => {
    const result: string = StringUtil.start('461390693981051307').toOctString().end()
    // console.error(result)
    assert.strictEqual(result, '0o31471406210132254653')

    const result1: string = StringUtil.start('32').toOctString().end()
    // console.error(result)
    assert.strictEqual(StringUtil.start(result1).add(12).end(), '44')
  })

  it('decimalToBinString', () => {
    const result: string = StringUtil.start('461390693981051307').toBinString().end()
    // console.error(result)
    assert.strictEqual(result, '0b11001100111001100000110010001000001011010010101100110101011')
  })

  it('getFirst', () => {
    const result: string = StringUtil.getFirst('th356hfgh3httr', 4)
    // console.error(result)
    assert.strictEqual(result, 'th35')
  })

  it('getLast', () => {
    const result: string = StringUtil.getLast('th356hfgh3httr', 4)
    // console.error(result)
    assert.strictEqual(result, 'httr')
  })

  // numberStrToHex
  it('numberStrToHex', () => {
    const result: string = StringUtil.numberStrToHex('190')
    // console.error(result)
    assert.strictEqual(result, 'BE')
  })

  it('numberStrToHex', () => {
    const result: string = StringUtil.numberStrToHex('4124')
    // global.console.error(result)
    assert.strictEqual(result, '101C')
  })

  it('hexStrToBase64', () => {
    const result: string = StringUtil.hexStrToBase64('0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4')
    // console.error(result)
    // MGM2OGFmZmJjZjAxYTQ5NTQwZTU5MGJjZjg4YWZhNGRjNjMwZWI1Y2UwZTEzYTViMDY3YzkxOGYwZTFjOWFmNA==
    assert.strictEqual(result, 'DGiv+88BpJVA5ZC8+Ir6TcYw61zg4TpbBnyRjw4cmvQ=')
  })

  it('strToBase64', () => {
    const result: string = StringUtil.strToBase64('0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4')
    // console.error(result)
    assert.strictEqual(result, 'MGM2OGFmZmJjZjAxYTQ5NTQwZTU5MGJjZjg4YWZhNGRjNjMwZWI1Y2UwZTEzYTViMDY3YzkxOGYwZTFjOWFmNA==')
  })

  it('base64ToHexStr', () => {
    const result: string = StringUtil.base64ToHexStr('DGiv+88BpJVA5ZC8+Ir6TcYw61zg4TpbBnyRjw4cmvQ=', false)
    // console.error(result)
    assert.strictEqual(result, '0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4')
  })

  it('base64ToStr', () => {
    const result: string = StringUtil.base64ToStr('MGM2OGFmZmJjZjAxYTQ5NTQwZTU5MGJjZjg4YWZhNGRjNjMwZWI1Y2UwZTEzYTViMDY3YzkxOGYwZTFjOWFmNA==')
    // console.error(result)
    assert.strictEqual(result, '0c68affbcf01a49540e590bcf88afa4dc630eb5ce0e13a5b067c918f0e1c9af4')
  })

  it('toUtf8Buffer_', () => {
    const result: Buffer = StringUtil.toUtf8Buffer('1shfgdjewarta')
    // console.error(JSON.stringify(result))
    assert.strictEqual(JSON.stringify(result), `{"type":"Buffer","data":[49,115,104,102,103,100,106,101,119,97,114,116,97]}`)
  })

  it('toUtf8Uint8Array_', () => {
    const result: Uint8Array = StringUtil.toUtf8Uint8Array('1shfgdjewarta')
    // console.error(result[0])
    assert.strictEqual(JSON.stringify(result), `{"0":49,"1":115,"2":104,"3":102,"4":103,"5":100,"6":106,"7":101,"8":119,"9":97,"10":114,"11":116,"12":97}`)
  })

  it('hexToBuffer_', () => {
    const result: Buffer = StringUtil.hexToBuffer(`0x66730644`)
    // console.log(JSON.stringify(result))
    assert.strictEqual(JSON.stringify(result), `{"type":"Buffer","data":[102,115,6,68]}`)
  })

  it('toPretty', () => {
    const result: string = StringUtil.toPretty(`123`)
    // console.log(JSON.stringify(result))
    assert.strictEqual(result, `123`)

    const result1: string = StringUtil.toPretty(`[{"a": 2}]`)
    // console.log(result1)
    assert.strictEqual(result1, `[\n\t{\n\t\t"a": 2\n\t}\n]`)

    const result2: string = StringUtil.toPretty(`{"a": 2}`)
    // console.log(result1)
    assert.strictEqual(result2, `{\n\t"a": 2\n}`)
  })

  it('toBigInt', () => {
    const result: BigInt = StringUtil.start(1).shiftedBy(2).toBigInt()
    // console.log(JSON.stringify(result))
    assert.strictEqual(result.toString(), `100`)
  })
})


