import BigNumber from 'bignumber.js';
export default class NumberUtil {
    /**
     * 转换成BigNumber对象
     * @returns {BigNumber}
     */
    static toBigNumber(src: number): BigNumber;
    /**
     * 转换成 BigInt 对象
     * @returns {BigNumber}
     */
    static toBigInt(src: number): BigInt;
    /**
     * 转换为二进制字符串
     * @returns {string}
     */
    static toBinString(src: number): string;
    /**
     * 转换为八进制字符串
     * @returns {string}
     */
    static toOctString(src: number): string;
    /**
     * 转换为十六进制字符串
     * @returns {string}
     */
    static toHexString(src: number): string;
    static toInt(src: number): number;
    static toBuffer(src: number, endian?: EndianType): Buffer;
    static toNoScientificString(src: number): string;
}
export declare enum EndianType {
    BigEndian = 0,
    LittleEndian = 1
}
