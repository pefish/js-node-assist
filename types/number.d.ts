/** @module */
declare global {
    interface Number {
        toBinString_?: () => string;
        toOctString_?: () => string;
        toHexString_?: () => string;
        toNumber_?: () => number;
        toInt_?: () => number;
        toNoScientificString_?: () => string;
    }
}
export {};
