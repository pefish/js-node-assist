declare module 'bignumber.js' {
    interface BigNumber {
        toBinString_?: () => string;
        toOctString_?: () => string;
        toDecimalString_?: () => string;
        toHexString_?: () => string;
    }
}
export {};
