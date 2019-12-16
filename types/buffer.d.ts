/** @module */
declare global {
    interface Buffer {
        toDecimalNumberArray_?: () => any[];
        toBinString_?: () => string;
        toHexString_?: (prefix?: boolean) => string;
        toDecimalString_?: () => string;
        toNumber_?: () => number;
        correctEmptyBuffer_?: () => Buffer;
        getBytesLength_?: () => number;
        reverseBuffer_?: () => Buffer;
        deepCopy_?: () => Buffer;
    }
}
export {};
