/// <reference types="node" />
import BigNumber from 'bignumber.js';
export default class NumberUtil {
    /**
     * 转换成BigNumber对象
     * @returns {BigNumber}
     */
    static toBigNumber_(src: number): BigNumber;
    /**
     * 转换为二进制字符串
     * @returns {string}
     */
    static toBinString_(src: number): string;
    /**
     * 转换为八进制字符串
     * @returns {string}
     */
    static toOctString_(src: number): string;
    /**
     * 转换为十六进制字符串
     * @returns {string}
     */
    static toHexString_(src: number): string;
    /**
     * 为了调用此方法时不用区分主体是string还是number
     * @returns {toNumber}
     */
    static toNumber_(src: number): number;
    static toInt_(src: number): number;
    static toBuffer_(src: number, endian?: EndianType): Buffer;
    static toNoScientificString_(src: number): string;
}
export declare enum EndianType {
    Big_Endian = 0,
    Little_Endian = 1
}
