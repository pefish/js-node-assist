import BigNumber from 'bignumber.js';
export default class BigNumberUtil {
    /**
     * 转换为二进制字符串
     * @returns {string}
     */
    static toBinString(src: BigNumber): string;
    /**
     * 转换为八进制字符串
     * @returns {string}
     */
    static toOctString(src: BigNumber): string;
    /**
     * 转换为十进制字符串
     * @returns {string}
     */
    static toDecimalString(src: BigNumber): string;
    /**
     * 转换为十六进制字符串
     * @returns {string}
     */
    static toHexString(src: BigNumber): string;
}
