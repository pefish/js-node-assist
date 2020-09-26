/// <reference types="node" />
import BigNumber from 'bignumber.js';
export declare enum RoundingMode {
    ROUND_UP = 0,
    ROUND_DOWN = 1,
    ROUND_CEIL = 2,
    ROUND_FLOOR = 3,
    ROUND_HALF_UP = 4,
    ROUND_HALF_DOWN = 5,
    ROUND_HALF_EVEN = 6,
    ROUND_HALF_CEIL = 7,
    ROUND_HALF_FLOOR = 8,
    EUCLID = 9
}
export default class StringUtil {
    /**
     * 加
     * @param val
     * @returns {any}
     */
    static add_(src: string, val: string | number): string;
    /**
     * 乘以10的几次方
     * @param num
     */
    static shiftedBy_(src: string, num: number): string;
    static unShiftedBy_(src: string, num: string | number): string;
    /**
     * 取相反数
     * @returns {string}
     */
    static negated_(src: string): string;
    /**
     * 减
     * @param val
     * @returns {any}
     */
    static sub_(src: string, val: string | number): string;
    /**
     * 乘
     * @param val
     * @returns {any}
     */
    static multi_(src: string, val: string | number): string;
    /**
     * 乘方
     * @param val
     * @returns {any}
     */
    static pow_(src: string, val: number): string;
    /**
     * 除
     * @param val
     * @returns {string}
     */
    static div_(src: string, val: string | number): string;
    /**
     * 求余
     * @param val
     * @returns {string}
     */
    static mod_(src: string, val: string | number): string;
    /**
     * 开根号
     * @returns {string}
     */
    static sqrt_(src: string): string;
    /**
     * 是否大于
     * @param val
     * @returns {boolean}
     */
    static gt_(src: string, val: string | number): boolean;
    /**
     * 大于或等于
     * @param val
     * @returns {boolean}
     */
    static gte_(src: string, val: string | number): boolean;
    /**
     * 是否小于
     * @param val
     * @returns {boolean}
     */
    static lt_(src: string, val: string | number): boolean;
    /**
     * 小于或等于
     * @param val
     * @returns {boolean}
     */
    static lte_(src: string, val: string | number): boolean;
    /**
     * 是否相等
     * @param val
     * @returns {boolean}
     */
    static eq_(src: string, val: string | number): boolean;
    /**
     * 加千分号
     * @returns {string}
     */
    static addThousandSign_(src: string): string;
    /**
     * 移除千分号
     * @returns {string}
     */
    static removeThousandSign_(src: string): string;
    /**
     * 保留小数点后几位。默认小数部分最后不带0
     * @param decimalRemain
     * @param remainMethod {number}
     * @returns {string}
     */
    static remainDecimal_(src: string, decimalRemain: number, remainMethod?: RoundingMode, withZero?: boolean): string;
    /**
     * 获取小数部分的个数
     */
    static decimalCount_(src: string): number;
    /**
     * 取绝对值
     * @returns {string}
     */
    static abs_(src: string): string;
    /**
     * 转换为二进制字符串
     * @returns {string}
     */
    static decimalToBinString_(src: string): string;
    /**
     * 十进制转换为八进制字符串
     * @returns {string}
     */
    static decimalToOctString_(src: string): string;
    /**
     * 十进制转换为十六进制字符串
     * @returns {string}
     */
    static decimalToHexString_(src: string, prefix?: boolean): string;
    /**
     * 直接取整
     * @returns {Number}
     */
    static toInt_(src: string): number;
    /**
     * 转换为数值
     * @returns {Number}
     */
    static toNumber_(src: string): number;
    /**
     * hex string转换为number
     * @returns {number}
     */
    static hexToNumber_(src: string): number;
    /**
     * '190' --> 'BE'
     * @returns {string}
     */
    static numberStrToHex_(src: string): string;
    /**
     * 判断此值用于计算时是否具有精度问题
     */
    static hasPrecisionIssue_(src: string): boolean;
    /**
     * 移除开头几位字符串
     * @param num
     * @returns {Array}
     */
    static removeFirst_(src: string, num: number): string;
    /**
     * 移除最后几位字符串
     * @param num
     * @returns {string}
     */
    static removeLast_(src: string, num: number): string;
    /**
     * 获取开头几位
     * @param num
     * @returns {string}
     */
    static getFirst_(src: string, num: number): string;
    /**
     * 获取最后几位
     * @param num
     * @returns {string}
     */
    static getLast_(src: string, num: number): string;
    /**
     * 全部替换(只能简单替换字符串)
     * @param regStr
     * @param replaceStr
     * @returns {string}
     */
    static replaceAll_(src: string, regStr: string, replaceStr: string): string;
    /**
     * 从字符串中分类出指定区间的内容
     * @param splitStr1
     * @param splitStr2
     * @returns {{}}
     */
    static classify_(src: string, splitStr1: string, splitStr2: string): {
        name: string;
        is: boolean;
        index: number;
    }[];
    static findAll_(src: string, regStr: string): {
        outputFull: string;
        output: string;
        index: number;
        input: string;
    }[];
    /**
     * 十六进制字符串转化为Buffer。与Buffer.toHexString_相反
     * @returns {Array}
     */
    static hexToBuffer_(src: string): Buffer;
    /**
     * 普通字符串转buffer
     * @returns {Buffer}
     */
    static toUtf8Buffer_(src: string): Buffer;
    /**
     * 十六进制字符串转化为十进制字符串
     * @returns {number|*}
     */
    static hexToDecimalString_(src: string): string;
    /**
     * 二进制字符串转十进制字符串
     * @returns {number}
     */
    static binToDecimalString_(src: string): string;
    /**
     * 检查是否是严格的hex数据
     * @returns {boolean}
     */
    static isStrictHexString_(src: string): boolean;
    /**
     * 清空hex字符串左边或右边的00
     * @param typeStr {string} left/right/both
     * @returns {string | void | *} 结果不带0x
     */
    static clearHexZeroZero_(src: string, typeStr: string): string;
    /**
     * 转换成BigNumber对象
     * @returns {BigNumber}
     */
    static toBigNumber_(src: string): BigNumber;
    /**
     * 移除尾随的0
     */
    static removeTrailingZeros_(src: string): string;
    static toArray_(src: string, eleLen?: number, arrLen?: number): string[];
    static hexStrToBase64_(src: string): string;
    static base64ToHexStr_(src: string, prefix?: boolean): string;
    static strToBase64_(src: string): string;
    static base64ToStr_(src: string): string;
    static removeLastEnter_(src: string): string;
    /**
     * 移除最后一段字符串
     */
    static removeLastStr_(src: string, str: string): string;
    /**
     * 移除开头一段字符串
     */
    static removeFirstStr_(src: string, str: string): string;
    /**
     * 移除字符串最后一段。
     * @param str
     */
    static removeLastByStr_(src: string, str: string): string;
    static removeFirstByStr_(src: string, str: string): string;
    static toNoScientificString_(src: string): string;
    static canCastNumber_(src: string): boolean;
    static utf8HexStringToString_(src: string): string;
    static toUtf8HexString_(src: string, prefix?: boolean): string;
    static toUtf8Uint8Array_(src: string): Uint8Array;
}
