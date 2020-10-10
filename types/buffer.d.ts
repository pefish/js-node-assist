/// <reference types="node" />
export default class BufferUtil {
    /**
     * 以hex编码转换为十进制的bytes数组
     * @returns {string}
     */
    static toDecimalNumberArray(src: Buffer): number[];
    /**
     * 以hex编码转化为二进制字符串
     * @returns {string}
     */
    static toBinString(src: Buffer): string;
    /**
     * 字节集直接转化为十六进制字符串。
     * @returns {string}
     */
    static toHexString(src: Buffer, prefix?: boolean): string;
    /**
     * 以hex编码转化为十进制字符串
     * @returns {string}
     */
    static toDecimalString(src: Buffer): string;
    /**
     * 纠正空buffer
     * @returns {correctEmptyBuffer}
     */
    static correctEmptyBuffer(src: Buffer): Buffer;
    /**
     * 获取字节数
     */
    static getBytesLength(src: Buffer): number;
    /**
     * 反转Buffer, 不改变自身
     * @returns {Buffer}
     */
    static reverseBuffer(src: Buffer): Buffer;
    /**
     * 深拷贝
     * @returns {*}
     */
    static deepCopy(src: Buffer): Buffer;
    static toUint8Array(src: Buffer): Uint8Array;
    static toUtf8String(src: Buffer): string;
}
