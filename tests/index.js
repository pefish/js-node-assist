/**
 * Created by joy on 12/10/2017.
 */
require('../lib/index')

// String
// console.log('1'.equals(1))  // exception
// console.log('1'.equals('1'))  // true
// console.log('1'.equals('2'))  // false

// const b = '11111111111111111111111', c = 1
// console.log(Number(b) + c) // 1111111111111111200 有精度问题
// console.log(b.add(c))  // exception
// console.log(b.add(c.toString()))  // 1111111111111111112
// console.log(b.add(new BigNumber(c.toString())))  // 1111111111111111112

// const a = '-36563355727727242727.82542', b = 0.2
// console.log(a + b)  // 0.30000000000000004 有精度问题
// console.log(a.add(b.toString()))  // 0.3
// console.log(a.addThousandSign())
// console.log('6363,66.675'.removeThousandSign())
// console.log('6785.00'.addThousandSign())
// console.log('hsgyt\\fghjdy.tf.\\dgh\\'.replaceAll('\\\\', '\\\\'))
// console.log('2354.56'.remainDecimal(1))
// console.log(a.decimalCount())
// console.log(a.splits(['5', '1']))
// console.log(a.hasPrecisionIssue())
// console.log('0x10'.toOctString())
// const s = 123
// console.log(s.toString(16).length)
// console.log(a.repeat(2))

// const str = 'hghsgh/-hjdh-/7867'
// console.log(str.classify('/-', '-/'))
// [ { name: 'hghsgh', is: false, index: 0 },
// { name: 'hjdh', is: true, index: 1 },
// { name: '7867', is: false, index: 2 } ]

// console.log([
//   'a',
//   a: 6,
//   '63'
// ])

// Number
// const a = 1
// console.log(a.equals('1'))  // exception
// console.log(a.equals(1))  // true
// console.log(a.equals(2))  // false


// Array
// const a = [1, 2, 3, 4, 5, 6, 7]
// console.log([1, 1, 34, 2, 'a', 'a', 'b', ''].uniq().removeEmpty())

// Object
// const a = {a: 1, b: 2, c: 3}
// console.log(a.assign({b: 2}))
// console.log(a.toTwoDimen(2))
// console.log(a.getEntries())
// console.log(a.remove('a'))
// console.log(a)
// delete a['a']
// console.log(a)
