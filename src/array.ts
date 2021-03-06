
import StringUtil, { Calculator } from './string';

interface GetMaxMinResult {
  value: string,
  indexes: number[]
}

type Order = (`desc` | `asc`)

export default class ArrayUtil {
  /**
 * 转换为二维数组
 * @param spliceNum 每个小数组几个元素
 * @param arrayNum 分成几个小数组
 * @returns {*}
 */
  static toTwoDimen(src: any[], spliceNum?: number, arrayNum?: number): any[][] {
    if (spliceNum !== undefined && arrayNum === undefined) {
      const num = src.length % spliceNum === 0 ? parseInt((src.length / spliceNum).toString()) : parseInt((src.length / spliceNum).toString()) + 1
      const newArrays: any[][] = []
      for (let i = 0; i < num; i++) {
        const arr: any[] = src.slice(spliceNum * i, spliceNum * (i + 1))
        if (arr.length > 0) {
          newArrays.push(arr)
        }
      }
      return newArrays
    } else if (spliceNum === undefined && arrayNum !== undefined) {
      const newArrays: any[][] = []
      const num = parseInt((src.length / arrayNum).toString())
      for (let i = 0; i < arrayNum; i++) {
        const arr: any[] = src.slice(num * i, num * (i + 1))
        if (arr.length > 0) {
          newArrays.push(arr)
        }
      }
      if (num * arrayNum < src.length) {
        newArrays[newArrays.length - 1] = newArrays[newArrays.length - 1].concat(src.slice(num * arrayNum, src.length))
      }
      return newArrays
    } else {
      throw new Error(`spliceNum or arrayNum error`)
    }
  }

  /**
 * 简单去重
 */
  static uniq(src: any[]): any[] {
    return [...new Set(src)]
  }

  /**
   * 移除null、undefined以及空字符串
   * @returns {Array}
   */
  static removeEmpty(src: any[]): any[] {
    const results: any[] = []
    src.forEach((ele) => {
      if (ele !== undefined && ele !== undefined && ele !== '') {
        results.push(ele)
      }
    })
    return results
  }

  /**
   * 计算平均数
   * @returns {any}
   */
  static getAverage(src: any[]): string {
    let sum: Calculator = new Calculator('0')
    src.forEach((ele) => {
      sum = sum.add(ele)
    })
    return sum.div(src.length.toString()).end()
  }

  /**
   * 取数组最后一个元素
   * @returns {*}
   */
  static getLastOne(src: any[]): any {
    return src[src.length - 1]
  }

  static removeLastOne(src: any[]): any[] {
    if (src.length === 0) {
      return []
    }
    return src.slice(0, src.length - 1)
  }

  /**
   * 取数组第一个元素
   * @returns {*}
   */
  static getFirstOne(src: any[]): any {
    return src[0]
  }

  static removeFirstOne(src: any[]): any[] {
    if (src.length === 0) {
      return []
    }
    return src.slice(1, src.length)
  }

  static removeStart(src: any[], num: number): any[] {
    return src.slice(num, src.length)
  }

  static removeEnd(src: any[], num: number): any[] {
    return src.slice(0, src.length - num)
  }

  static removeByIndex(src: any[], index: number): any[] {
    if (index > src.length - 1) {
      throw new Error(`索引超过数组长度`)
    }
    const temp = this.deepCopy(src)
    temp.splice(index, 1)
    return temp
  }

  static removeByValue(src: any[], value: any): any[] {
    const temp = this.deepCopy(src)
    const index = temp.indexOf(value)
    if (index === -1) {
      throw new Error(`没有找到 ${value}`)
    }
    temp.splice(index, 1)
    return temp
  }

  static deepCopy(src: any[]): any[] {
    return Array.from(src)
  }

  static append(src: any[], arr: any[]): any[] {
    return src.concat(arr)
  }

  /**
   * 取出最大值（值以及索引）,只适用于数值数组以及字符串数组, 返回值为字符串
   */
  static getMax(src: any[]): GetMaxMinResult {
    if (src.length === 0) {
      throw new Error(`空数组`)
    }

    let maxValue = src[0].toString()

    for (let i = 1; i < src.length; i++) {
      if (StringUtil.start(src[i].toString()).gt(maxValue)) {
        maxValue = src[i].toString()
      }
    }

    const maxIndex: number[] = []
    for (let i = 0; i < src.length; i++) {
      if (StringUtil.start(src[i].toString()).eq(maxValue)) {
        maxIndex.push(i)
      }
    }

    return {
      value: maxValue,
      indexes: maxIndex
    }
  }

  static sortWithPriority(src: any[], order: Order): (string | number)[][] {
    if (src.length === 0) {
      throw new Error(`空数组`)
    }

    src.sort(([val, priority], [val1, priority1]) => {
      if (StringUtil.start(val.toString()).eq(val1)) {
        return order === `desc` ? priority.toString().lt(priority1) : StringUtil.start(priority.toString()).gt(priority1)
      } else {
        return order === `desc` ? val.toString().lt(val1) : StringUtil.start(val.toString()).gt(val1)
      }
    })
    return src
  }

  static getMin(src: any[]): GetMaxMinResult {
    if (src.length === 0) {
      throw new Error(`空数组`)
    }

    let minValue = src[0].toString()

    for (let i = 1; i < src.length; i++) {
      if (StringUtil.start(src[i].toString()).lt(minValue)) {
        minValue = src[i].toString()
      }
    }

    const minIndex: number[] = []
    for (let i = 0; i < src.length; i++) {
      if (StringUtil.start(src[i].toString()).eq(minValue)) {
        minIndex.push(i)
      }
    }

    return {
      value: minValue,
      indexes: minIndex
    }
  }

  static getSum(src: any[]): string {
    return src.reduce((acc, val): string => {
      return StringUtil.start(val.toString()).add(acc).end()
    })
  }

  static select(src: any[], indexes: number[]): any[] {
    if (indexes === undefined || indexes === undefined) {
      return src
    }
    const result: any[] = []
    indexes.forEach((index) => {
      result.push(src[index])
    })
    return result
  }

  static toUpperCase(src: any[]): string[] {
    return src.map((element) => {
      return element.toString().toUpperCase()
    })
  }

  static toLowerCase(src: any[]): string[] {
    return src.map((element) => {
      return element.toString().toLowerCase()
    })
  }

  static random(src: any[]): any {
    if (src.length === 0) {
      throw new Error(`空数组`)
    }
    return src[Math.floor(Math.random() * 1E4) % src.length]
  }

  /**
   * [190, 190] --> BEBE 十进制转成16进制
   * @returns {string}
   */
  static numberArrayToHexString(src: any[]): string {
    if (src.length === 0) {
      throw new Error(`空数组`)
    }
    return src.map((byte) => {
      return StringUtil.numberStrToHex(byte.toString())
    }).join('')
  }

  /**
   * 取子数组。[start, end)
   * @param start
   * @param end
   */
  static subArray(src: any[], start: number, end: number): any[] {
    if (src.length === 0) {
      throw new Error(`空数组`)
    }
    return src.slice(start, end)
  }


}

