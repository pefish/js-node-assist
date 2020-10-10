/// <reference types="node" />
import BigNumber from 'bignumber.js';
export declare enum RoundingMode {
    ROUND_UP = 0,
    ROUND_DOWN = 1,
    ROUND_CEIL = 2,
    ROUND_FLOOR = 3,
    ROUND_HALFUP = 4,
    ROUND_HALFDOWN = 5,
    ROUND_HALFEVEN = 6,
    ROUND_HALFCEIL = 7,
    ROUND_HALFFLOOR = 8,
    EUCLID = 9
}
export declare class Calculator {
    private data;
    constructor(data?: number | string | Calculator);
    toString(): string;
    /**
     * 加
     * @param val
     * @returns {any}
     */
    add(val: string | number | Calculator): Calculator;
    /**
     * 乘以10的几次方
     * @param num
     */
    shiftedBy(num: number | string | Calculator): Calculator;
    unShiftedBy(num: string | number | Calculator): Calculator;
    /**
     * 取相反数
     * @returns {string}
     */
    negated(): Calculator;
    /**
     * 减
     * @param val
     * @returns {any}
     */
    sub(val: string | number | Calculator): Calculator;
    /**
     * 乘
     * @param val
     * @returns {any}
     */
    multi(val: string | number | Calculator): Calculator;
    /**
     * 乘方
     * @param val
     * @returns {any}
     */
    pow(val: number | string | Calculator): Calculator;
    /**
     * 除
     * @param val
     * @returns {string}
     */
    div(val: string | number | Calculator): Calculator;
    /**
     * 求余
     * @param val
     * @returns {string}
     */
    mod(val: string | number | Calculator): Calculator;
    /**
     * 开根号
     * @returns {string}
     */
    sqrt(): Calculator;
    /**
     * 是否大于
     * @param val
     * @returns {boolean}
     */
    gt(val: string | number | Calculator): boolean;
    /**
     * 大于或等于
     * @param val
     * @returns {boolean}
     */
    gte(val: string | number | Calculator): boolean;
    /**
     * 是否小于
     * @param val
     * @returns {boolean}
     */
    lt(val: string | number | Calculator): boolean;
    /**
     * 小于或等于
     * @param val
     * @returns {boolean}
     */
    lte(val: string | number | Calculator): boolean;
    /**
     * 是否相等
     * @param val
     * @returns {boolean}
     */
    eq(val: string | number | Calculator): boolean;
    /**
     * 保留小数点后几位。默认小数部分最后不带0
     * @param decimalRemain
     * @param remainMethod {number}
     * @returns {string}
     */
    remainDecimal(decimalRemain: number, remainMethod?: RoundingMode, withZero?: boolean): Calculator;
    /**
     * 取绝对值
     * @returns {string}
     */
    abs(): Calculator;
    /**
     * 直接取整
     * @returns {Number}
     */
    toInt(): number;
    /**
     * 转换为数值
     * @returns {Number}
     */
    toNumber(): number;
    /**
     * 转换成BigNumber对象
     * @returns {BigNumber}
     */
    toBigNumber(): BigNumber;
    /**
     * 转换为二进制字符串
     * @returns {string}
     */
    toBinString(): Calculator;
    /**
     * 转换为八进制字符串
     * @returns {string}
     */
    toOctString(): Calculator;
    /**
     * 转十进制字符串
     * @returns {number}
     */
    toDecimalString(): Calculator;
    /**
     * 转换为十六进制字符串
     * @returns {string}
     */
    toHexString(): Calculator;
    end(): string;
}
export default class StringUtil {
    static start(data: string): Calculator;
    /**
     * 移除开头几位字符串
     * @param num
     * @returns {Array}
     */
    static removeFirst(src: string, num: number): string;
    /**
     * 获取小数部分的个数
     */
    static decimalCount(src: string): number;
    /**
     * 加千分号
     * @returns {string}
     */
    static addThousandSign(src: string): string;
    /**
     * 移除千分号
     * @returns {string}
     */
    static removeThousandSign(src: string): string;
    /**
     * hex string转换为number
     * @returns {number}
     */
    static hexToNumber(src: string): number;
    /**
     * '190' --> 'BE'
     * @returns {string}
     */
    static numberStrToHex(src: string): string;
    /**
     * 判断此值用于计算时是否具有精度问题
     */
    static hasPrecisionIssue(src: string): boolean;
    /**
     * 移除最后几位字符串
     * @param num
     * @returns {string}
     */
    static removeLast(src: string, num: number): string;
    /**
     * 获取开头几位
     * @param num
     * @returns {string}
     */
    static getFirst(src: string, num: number): string;
    /**
     * 获取最后几位
     * @param num
     * @returns {string}
     */
    static getLast(src: string, num: number): string;
    /**
     * 全部替换(只能简单替换字符串)
     * @param regStr
     * @param replaceStr
     * @returns {string}
     */
    static replaceAll(src: string, regStr: string, replaceStr: string): string;
    /**
     * 从字符串中分类出指定区间的内容
     * @param splitStr1
     * @param splitStr2
     * @returns {{}}
     */
    static classify(src: string, splitStr1: string, splitStr2: string): {
        name: string;
        is: boolean;
        index: number;
    }[];
    static findAll(src: string, regStr: string): {
        outputFull: string;
        output: string;
        index: number;
        input: string;
    }[];
    /**
     * 十六进制字符串转化为Buffer。与Buffer.toHexString相反
     * @returns {Array}
     */
    static hexToBuffer(src: string): Buffer;
    /**
     * 普通字符串转buffer
     * @returns {Buffer}
     */
    static toUtf8Buffer(src: string): Buffer;
    /**
     * 十六进制字符串转化为十进制字符串
     * @returns {number|*}
     */
    static hexToDecimalString(src: string): string;
    /**
     * 检查是否是严格的hex数据
     * @returns {boolean}
     */
    static isStrictHexString(src: string): boolean;
    /**
     * 清空hex字符串左边或右边的00
     * @param typeStr {string} left/right/both
     * @returns {string | void | *} 结果不带0x
     */
    static clearHexZeroZero(src: string, typeStr: string): string;
    /**
     * 移除尾随的0
     */
    static removeTrailingZeros(src: string): string;
    static toArray(src: string, eleLen?: number, arrLen?: number): string[];
    static hexStrToBase64(src: string): string;
    static base64ToHexStr(src: string, prefix?: boolean): string;
    static strToBase64(src: string): string;
    static base64ToStr(src: string): string;
    static removeLastEnter(src: string): string;
    /**
     * 移除最后一段字符串
     */
    static removeLastStr(src: string, str: string): string;
    /**
     * 移除开头一段字符串
     */
    static removeFirstStr(src: string, str: string): string;
    /**
     * 移除字符串最后一段。
     * @param str
     */
    static removeLastByStr(src: string, str: string): string;
    static removeFirstByStr(src: string, str: string): string;
    static toNoScientificString(src: string): string;
    static canCastNumber(src: string): boolean;
    static utf8HexStringToString(src: string): string;
    static toUtf8HexString(src: string, prefix?: boolean): string;
    static toUtf8Uint8Array(src: string): Uint8Array;
}
