/**
 * Created by joy on 12/10/2017.
 */
require('../index')

// String
// console.log('1'.equals(1))  // exception
// console.log('1'.equals('1'))  // true
// console.log('1'.equals('2'))  // false

const b = '1111111111111111111', c = 1
// console.log(Number(b) + c) // 1111111111111111200 有精度问题
console.log(b.add(c))  // exception
// console.log(b.add(c.toString()))  // 1111111111111111112
// console.log(b.add(new BigNumber(c.toString())))  // 1111111111111111112

// const a = '0.1', b = 0.2
// console.log(a + b)  // 0.30000000000000004 有精度问题
// console.log(a.add(b.toString()))  // 0.3

// Number
// const a = 1
// console.log(a.equals('1'))  // exception
// console.log(a.equals(1))  // true
// console.log(a.equals(2))  // false


