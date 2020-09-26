/// <reference types="node" />
export default class BufferUtil {
    /**
     * 以hex编码转换为十进制的bytes数组
     * @returns {string}
     */
    static toDecimalNumberArray_(src: Buffer): number[];
    /**
     * 以hex编码转化为二进制字符串
     * @returns {string}
     */
    static toBinString_(src: Buffer): string;
    /**
     * 字节集直接转化为十六进制字符串。
     * @returns {string}
     */
    static toHexString_(src: Buffer, prefix?: boolean): string;
    /**
     * 以hex编码转化为十进制字符串
     * @returns {string}
     */
    static toDecimalString_(src: Buffer): string;
    /**
     * 纠正空buffer
     * @returns {correctEmptyBuffer}
     */
    static correctEmptyBuffer_(src: Buffer): Buffer;
    /**
     * 获取字节数
     */
    static getBytesLength_(src: Buffer): number;
    /**
     * 反转Buffer, 不改变自身
     * @returns {Buffer}
     */
    static reverseBuffer_(src: Buffer): Buffer;
    /**
     * 深拷贝
     * @returns {*}
     */
    static deepCopy_(src: Buffer): Buffer;
    static toUint8Array_(src: Buffer): Uint8Array;
    static toUtf8String_(src: Buffer): string;
}
