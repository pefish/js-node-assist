import BigNumber from "bignumber.js";
import ArrayUtil from "./array";
import BufferUtil from "./buffer";
// 进制计算的结果都要带上相应前缀 二进制0b 八进制0o 十六进制0x

export enum RoundingMode {
  ROUND_UP = 0, // 直接截断，向上取整
  ROUND_DOWN, // 直接截断，向下取整
  ROUND_CEIL,
  ROUND_FLOOR,
  ROUND_HALFUP, // 遇到.5的情况时往上近似,就是四舍五入
  ROUND_HALFDOWN, // 遇到.5的情况时往下近似
  ROUND_HALFEVEN,
  ROUND_HALFCEIL,
  ROUND_HALFFLOOR,
  EUCLID,
}

export class Calculator {
  private data: string;

  constructor(data: BigNumber | number | string | Calculator = `0`) {
    this.data = data.toString();
  }

  toString(): string {
    return this.data;
  }

  /**
   * 加
   * @param val
   * @returns {any}
   */
  add(val: string | number | Calculator): Calculator {
    val = val.toString();
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num1 = new BN(this.data);
    return new Calculator(num1.plus(val));
  }

  /**
   * 乘以10的几次方
   * @param num
   */
  shiftedBy(num: BigNumber | number | string | Calculator): Calculator {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num1 = new BN(this.data);
    return new Calculator(
      num1.shiftedBy(new Calculator(num.toString()).toNumber())
    );
  }

  unShiftedBy(num: string | number | Calculator): Calculator {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num1 = new BN(this.data);
    return new Calculator(
      num1.shiftedBy(new Calculator(num.toString()).negated().toNumber())
    );
  }

  /**
   * 取相反数
   * @returns {string}
   */
  negated(): Calculator {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num1 = new BN(this.data);
    return new Calculator(num1.negated());
  }

  /**
   * 减
   * @param val
   * @returns {any}
   */
  sub(val: string | number | Calculator): Calculator {
    val = val.toString();
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num1 = new BN(this.data);
    return new Calculator(num1.minus(val).toString());
  }

  /**
   * 乘
   * @param val
   * @returns {any}
   */
  multi(val: string | number | Calculator): Calculator {
    val = val.toString();
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num1 = new BN(this.data);
    return new Calculator(num1.times(val).toString());
  }

  /**
   * 乘方
   * @param val
   * @returns {any}
   */
  pow(val: BigNumber | number | string | Calculator): Calculator {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num1 = new BN(this.data);
    return new Calculator(
      num1.exponentiatedBy(new Calculator(val.toString()).toNumber()).toString()
    );
  }

  /**
   * 除
   * @param val
   * @returns {string}
   */
  div(val: string | number | Calculator): Calculator {
    val = val.toString();
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num1 = new BN(this.data);
    return new Calculator(num1.div(val).toString());
  }

  /**
   * 求余
   * @param val
   * @returns {string}
   */
  mod(val: string | number | Calculator): Calculator {
    val = val.toString();
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num1 = new BN(this.data);
    return new Calculator(num1.mod(val).toString());
  }

  /**
   * 开根号
   * @returns {string}
   */
  sqrt(): Calculator {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num1 = new BN(this.data);
    return new Calculator(num1.sqrt().toString());
  }

  /**
   * 是否大于
   * @param val
   * @returns {boolean}
   */
  gt(val: string | number | Calculator): boolean {
    val = val.toString();
    const num1 = new BigNumber(this.data);
    return num1.comparedTo(val) === 1;
  }

  /**
   * 大于或等于
   * @param val
   * @returns {boolean}
   */
  gte(val: string | number | Calculator): boolean {
    val = val.toString();
    const num1 = new BigNumber(this.data);
    const result = num1.comparedTo(val);
    return result === 1 || result === 0;
  }

  /**
   * 是否小于
   * @param val
   * @returns {boolean}
   */
  lt(val: string | number | Calculator): boolean {
    val = val.toString();
    const num1 = new BigNumber(this.data);
    return num1.comparedTo(val) === -1;
  }

  /**
   * 小于或等于
   * @param val
   * @returns {boolean}
   */
  lte(val: string | number | Calculator): boolean {
    val = val.toString();
    const num1 = new BigNumber(this.data);
    const result = num1.comparedTo(val);
    return result === -1 || result === 0;
  }

  /**
   * 是否相等
   * @param val
   * @returns {boolean}
   */
  eq(val: string | number | Calculator): boolean {
    val = val.toString();
    const num1 = new BigNumber(this.data);
    return num1.comparedTo(val) === 0;
  }

  /**
   * 保留小数点后几位。默认小数部分最后不带0
   * @param decimalRemain
   * @param remainMethod {number}
   * @returns {string}
   */
  remainDecimal(
    decimalRemain: number,
    remainMethod: RoundingMode = RoundingMode.ROUND_HALFUP,
    withZero: boolean = false
  ): Calculator {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num1 = new BN(this.data);
    let result = num1.toFixed(
      decimalRemain,
      remainMethod as BigNumber.RoundingMode
    );
    if (result.indexOf(".") !== -1 && withZero === false) {
      // 是小数
      while (true) {
        const temp = StringUtil.removeLastStr(result, "0");
        if (result === temp) {
          // 说明上面无0可去了
          if (result.endsWith(".")) {
            result = result.substr(0, result.length - 1);
          }
          return new Calculator(result);
        }
        result = temp;
      }
    }
    return new Calculator(result);
  }

  /**
   * 取绝对值
   * @returns {string}
   */
  abs(): Calculator {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num = new BN(this.data);
    return new Calculator(num.abs());
  }

  /**
   * 直接取整
   * @returns {Number}
   */
  toInt(): number {
    return parseInt(this.data);
  }

  /**
   * 转换为数值
   * @returns {Number}
   */
  toNumber(): number {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num = new BN(this.data);
    return num.toNumber();
  }

  /**
   * 转换成BigNumber对象
   * @returns {BigNumber}
   */
  toBigNumber(): BigNumber {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    return new BN(this.data);
  }

  /**
   * 转换成 BigInt 对象
   * @returns {BigInt}
   */
  toBigInt(): BigInt {
    return BigInt(this.data);
  }

  /**
   * 转换为二进制字符串
   * @returns {string}
   */
  toBinString(): Calculator {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num = new BN(this.data);
    return new Calculator("0b" + num.toString(2));
  }

  /**
   * 转换为八进制字符串
   * @returns {string}
   */
  toOctString(): Calculator {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num = new BN(this.data);
    return new Calculator("0o" + num.toString(8));
  }

  /**
   * 转十进制字符串
   * @returns {number}
   */
  toDecimalString(): Calculator {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num = new BN(this.data);
    return new Calculator(num.toString(10));
  }

  /**
   * 转换为十六进制字符串
   * @returns {string}
   */
  toHexString(): Calculator {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num = new BN(this.data);
    return new Calculator("0x" + num.toString(16));
  }

  end(): string {
    return this.data;
  }
}

export default class StringUtil {
  // 支持"0x12"这种十六进制字串
  static start(data: BigNumber | number | string | Calculator): Calculator {
    canCastBigNumber(data);
    return new Calculator(data);
  }

  // 字符串处理
  /**
   * 移除开头几位字符串
   * @param num
   * @returns {Array}
   */
  static removeFirst(src: string, num: number): string {
    return src.substring(num, src.length);
  }

  /**
   * 获取小数部分的个数
   */
  static decimalCount(src: string): number {
    canCastBigNumber(src);
    return src.split(".")[1].length;
  }

  /**
   * 加千分号
   * @returns {string}
   */
  static addThousandSign(src: string): string {
    canCastBigNumber(src);
    const parts = src.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts[1] === "" ? parts[0] : parts.join(".");
  }

  /**
   * 移除千分号
   * @returns {string}
   */
  static removeThousandSign(src: string): string {
    canCastBigNumber(src);
    return src.replace(new RegExp(",", "g"), "");
  }

  /**
   * hex string转换为number
   * @returns {number}
   */
  static hexToNumber(src: string): number {
    let temp = src;
    if (!temp.startsWith("0x")) {
      temp = "0x" + temp;
    }
    canCastBigNumber(temp);
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num = new BN(temp);
    return num.toNumber();
  }

  /**
   * '190' --> 'BE'
   * @returns {string}
   */
  static numberStrToHex(src: string): string {
    const number = new Calculator(src).toNumber();
    return number.toString(16).toUpperCase();
  }

  /**
   * 判断此值用于计算时是否具有精度问题
   */
  static hasPrecisionIssue(src: string): boolean {
    canCastBigNumber(src);
    return new Calculator(src).gt("9007199254740992");
  }

  /**
   * 移除最后几位字符串
   * @param num
   * @returns {string}
   */
  static removeLast(src: string, num: number): string {
    return src.substring(0, src.length - num);
  }

  /**
   * 获取开头几位
   * @param num
   * @returns {string}
   */
  static getFirst(src: string, num: number): string {
    return src.substring(0, num);
  }

  /**
   * 获取最后几位
   * @param num
   * @returns {string}
   */
  static getLast(src: string, num: number): string {
    return src.substring(src.length - num, src.length);
  }

  /**
   * 全部替换(只能简单替换字符串)
   * @param regStr
   * @param replaceStr
   * @returns {string}
   */
  static replaceAll(src: string, regStr: string, replaceStr: string): string {
    return src.replace(new RegExp(regStr, "gm"), replaceStr);
  }

  /**
   * 从字符串中分类出指定区间的内容
   * @param splitStr1
   * @param splitStr2
   * @returns {{}}
   */
  static classify(
    src: string,
    splitStr1: string,
    splitStr2: string
  ): {
    name: string;
    is: boolean;
    index: number;
  }[] {
    const results: {
      name: string;
      is: boolean;
      index: number;
    }[] = [];
    const regStr = `${splitStr1}(.*?)${splitStr2}`;
    const targets = this.findAll(src, regStr);
    for (let i = 0; i < targets.length; i++) {
      if (i === 0) {
        results.push({
          name: src.substring(0, targets[i].index),
          is: false,
          index: results.length,
        });
      } else {
        results.push({
          name: src.substring(
            targets[i - 1].index + targets[i - 1].outputFull.length,
            targets[i].index
          ),
          is: false,
          index: results.length,
        });
      }
      results.push({
        name: targets[i]["output"],
        is: true,
        index: results.length,
      });
      if (i === targets.length - 1) {
        results.push({
          name: src.substring(
            targets[i]["index"] + targets[i]["outputFull"].length,
            src.length
          ),
          is: false,
          index: results.length,
        });
      }
    }
    return results;
  }

  static findAll(
    src: string,
    regStr: string
  ): {
    outputFull: string;
    output: string;
    index: number;
    input: string;
  }[] {
    const reg = new RegExp(regStr, "g"); //作用是能够对正则表达式进行编译，被编译过的正则在使用的时候效率会更高，适合于对一个正则多次调用的情况下
    let results: {
      outputFull: string;
      output: string;
      index: number;
      input: string;
    }[] = [];
    let a: RegExpExecArray | null;
    while ((a = reg.exec(src))) {
      //数组中第0个元素是匹配的子字符串，第二个元素是正则中的第一个子分组匹配的结果（如果有子分组，即正则中存在用圆括号括起来的分组），第三个是正则中第二个子分组匹配的结果（如果有第二个子分组）
      results.push({
        outputFull: a[0],
        output: a[1],
        index: a["index"],
        input: a["input"],
      });
    }
    return results;
  }

  /**
   * 十六进制字符串转化为Buffer。与Buffer.toHexString相反
   * @returns {Array}
   */
  static hexToBuffer(src: string): Buffer {
    let temp = src;
    if (temp.startsWith("0x")) {
      temp = temp.substring(2, temp.length);
    }
    // 长度奇数前面加0
    if (temp.length % 2 !== 0) {
      temp = "0" + temp;
    }
    return Buffer.from ? Buffer.from(temp, "hex") : new Buffer(temp, `hex`);
  }

  /**
   * 普通字符串转buffer
   * @returns {Buffer}
   */
  static toUtf8Buffer(src: string): Buffer {
    return Buffer.from ? Buffer.from(src) : new Buffer(src);
  }

  /**
   * 十六进制字符串转化为十进制字符串
   * @returns {number|*}
   */
  static hexToDecimalString(src: string): string {
    let temp = src;
    if (!temp.startsWith("0x")) {
      temp = "0x" + temp;
    }
    canCastBigNumber(temp);
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num = new BN(temp);
    return num.toString(10);
  }

  /**
   * 检查是否是严格的hex数据
   * @returns {boolean}
   */
  static isStrictHexString(src: string): boolean {
    return /^(-)?0x[0-9a-f]*$/i.test(src);
  }

  /**
   * 清空hex字符串左边或右边的00
   * @param typeStr {string} left/right/both
   * @returns {string | void | *} 结果不带0x
   */
  static clearHexZeroZero(src: string, typeStr: string): string {
    let hex = src.replace(/^0x/i, "");
    if (typeStr === "left") {
      hex = hex.replace(/^(?:00)*/, "");
    } else if (typeStr === "right") {
      hex = hex.split("").reverse().join("");
      hex = hex.replace(/^(?:00)*/, "");
      hex = hex.split("").reverse().join("");
    } else if (typeStr === "both") {
      hex = hex.replace(/^(?:00)*/, "");
      hex = hex.split("").reverse().join("");
      hex = hex.replace(/^(?:00)*/, "");
      hex = hex.split("").reverse().join("");
    }
    return hex;
  }

  /**
   * 移除尾随的0
   */
  static removeTrailingZeros(src: string): string {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num1 = new BN(parseFloat(src));
    return num1.toString();
  }

  static toArray(src: string, eleLen?: number, arrLen?: number): string[] {
    if (eleLen !== undefined && arrLen === undefined) {
      const num =
        src.length % eleLen === 0
          ? parseInt((src.length / eleLen).toString())
          : parseInt((src.length / eleLen).toString()) + 1;
      const newArrays: string[] = [];
      for (let i = 0; i < num; i++) {
        const arr = src.slice(eleLen * i, eleLen * (i + 1));
        if (arr.length > 0) {
          newArrays.push(arr);
        }
      }
      return newArrays;
    } else if (eleLen === undefined && arrLen !== undefined) {
      const newArrays: string[] = [];
      const num = parseInt((src.length / arrLen).toString());
      for (let i = 0; i < arrLen; i++) {
        const arr = src.slice(num * i, num * (i + 1));
        if (arr.length > 0) {
          newArrays.push(arr);
        }
      }
      if (num * arrLen < src.length) {
        newArrays[newArrays.length - 1] = newArrays[
          newArrays.length - 1
        ].concat(src.slice(num * arrLen, src.length));
      }
      return newArrays;
    } else {
      throw new Error("eleLen and arrLen must only one to be set!!");
    }
  }

  static hexStrToBase64(src: string): string {
    return Buffer.from(src, "hex").toString("base64");
  }

  static base64ToHexStr(src: string, prefix: boolean = true): string {
    return BufferUtil.toHexString(Buffer.from(src, "base64"), prefix);
  }

  static strToBase64(src: string): string {
    return Buffer.from(src).toString("base64");
  }

  static base64ToStr(src: string): string {
    return Buffer.from(src, "base64").toString();
  }

  static removeLastEnter(src: string): string {
    if (src.endsWith("\r\n")) {
      return this.removeLast(src, 2);
    }

    if (src.endsWith("\n")) {
      return this.removeLast(src, 1);
    }
    return src;
  }

  /**
   * 移除最后一段字符串
   */
  static removeLastStr(src: string, str: string): string {
    if (!src.endsWith(str)) {
      return src;
    }
    return src.substring(0, src.length - str.length);
  }

  /**
   * 移除开头一段字符串
   */
  static removeFirstStr(src: string, str: string): string {
    if (!src.startsWith(str)) {
      return src;
    }
    return src.substring(str.length, src.length);
  }

  /**
   * 移除字符串最后一段。
   * @param str
   */
  static removeLastByStr(src: string, str: string): string {
    const arr = src.split(str);
    if (arr.length === 1) {
      return src;
    }
    return ArrayUtil.removeLastOne(arr).join(str);
  }

  static removeFirstByStr(src: string, str: string): string {
    const arr = src.split(str);
    if (arr.length === 1) {
      return src;
    }
    return ArrayUtil.removeFirstOne(arr).join(str);
  }

  static toNoScientificString(src: string): string {
    const BN = BigNumber.clone({
      EXPONENTIAL_AT: 1e9,
    });
    const num1 = new BN(src);
    return num1.toString();
  }

  static canCastNumber(src: string): boolean {
    return !isNaN(Number(src));
  }

  static utf8HexStringToString(src: string): string {
    return this.hexToBuffer(src).toString("utf8");
  }

  static toUtf8HexString(src: string, prefix: boolean = true): string {
    return BufferUtil.toHexString(this.toUtf8Buffer(src), prefix);
  }

  static toUtf8Uint8Array(src: string): Uint8Array {
    return new TextEncoder().encode(src);
  }

  static toPretty(src: string): string {
    return format(src, "\t");
  }
}

function canCastBigNumber(
  value: BigNumber | number | string | Calculator
): void {
  try {
    const _ = new BigNumber(value.toString());
  } catch (err) {
    throw new Error(`<${value}> can not cast to bignumber`);
  }
}

function format(
  data: string,
  indentChar?: string,
  indentBase?: string
): string {
  indentChar = indentChar ? indentChar : "\t";
  indentBase = indentBase ? indentBase : "";

  let formattedJSON = "";
  let dataObject: any = undefined;
  try {
    dataObject = JSON.parse(data);
  } catch (Error) {
    throw new TypeError("data parameter is not a valid JSON string !");
  }
  let dataIsArray = JSONtypeOf(dataObject) == "array";
  let dataIsObject = JSONtypeOf(dataObject) == "object";

  // OPEN
  if (dataIsArray) {
    if (data.length == 0)
      // Test empty array case
      return "[]";
    formattedJSON = "[";
  } else if (dataIsObject) {
    let objectsCount = 0;
    for (let _ in dataObject) {
      objectsCount++;
      break;
    }
    if (objectsCount == 0)
      // Test empty object case
      return "{}";
    formattedJSON = "{";
  } else {
    return data;
  }
  // CONTENT
  let objectsCount = 0;
  let keys = Object.keys(dataObject);
  for (let keyID = 0; keyID < keys.length; ++keyID) {
    if (objectsCount > 0) formattedJSON += ",";
    if (dataIsArray) formattedJSON += `\n${indentBase}${indentChar}`;
    else formattedJSON += `\n${indentBase}${indentChar}"${keys[keyID]}": `;

    switch (JSONtypeOf(dataObject[keys[keyID]])) {
      case "array":
      case "object":
        formattedJSON += format(
          JSON.stringify(dataObject[keys[keyID]]),
          indentChar,
          indentBase + indentChar
        );
        break;
      case "number":
        formattedJSON += dataObject[keys[keyID]].toString();
        break;
      case "null":
        formattedJSON += "null";
        break;
      case "string":
        formattedJSON += `"${dataObject[keys[keyID]]}"`;
        break;
      case "boolean":
        formattedJSON += dataObject[keys[keyID]];
        break;
    }
    objectsCount++;
  }

  // CLOSE
  if (dataIsArray) formattedJSON += `\n${indentBase}]`;
  else formattedJSON += `\n${indentBase}}`;

  return formattedJSON;
}

function JSONtypeOf(obj) {
  let typeOf = typeof obj;
  if (typeOf == "object") {
    if (obj === null) return "null";
    if (Array.isArray(obj)) return "array";
    return "object";
  }
  return typeOf;
}
