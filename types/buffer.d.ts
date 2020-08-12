/** @module */
declare global {
    interface Buffer {
        toDecimalNumberArray_?: () => number[];
        toBinString_?: () => string;
        toHexString_?: (prefix?: boolean) => string;
        toDecimalString_?: () => string;
        toNumber_?: () => number;
        correctEmptyBuffer_?: () => Buffer;
        getBytesLength_?: () => number;
        reverseBuffer_?: () => Buffer;
        deepCopy_?: () => Buffer;
        toUint8Array_: () => Uint8Array;
    }
}
export {};
