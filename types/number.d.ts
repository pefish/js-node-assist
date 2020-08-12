/** @module */
declare global {
    interface Number {
        toBinString_?: () => string;
        toOctString_?: () => string;
        toHexString_?: () => string;
        toNumber_?: () => number;
        toInt_?: () => number;
        toNoScientificString_?: () => string;
        toBuffer_?: (endian?: Endian) => Buffer;
    }
}
export {};
export declare enum Endian {
    Big_Endian = 0,
    Little_Endian = 1
}
