/** @module */
import BigNumber from 'bignumber.js';
declare global {
    interface String {
        add_?: (val: string | number) => string;
        shiftedBy_?: (num: string | number) => string;
        unShiftedBy_?: (num: string | number) => string;
        negated_?: () => string;
        sub_?: (val: string | number) => string;
        multi_?: (val: string | number) => string;
        pow_?: (val: string | number) => string;
        div_?: (val: string | number) => string;
        mod_?: (val: string | number) => string;
        sqrt_?: () => string;
        gt_?: (val: string | number) => boolean;
        gte_?: (val: string | number) => boolean;
        lt_?: (val: string | number) => boolean;
        lte_?: (val: string | number) => boolean;
        eq_?: (val: string | number) => boolean;
        addThousandSign_?: () => string;
        removeThousandSign_?: () => string;
        remainDecimal_?: (decimalRemain: number, remainMethod?: RoundingMode, withZero?: boolean) => string;
        decimalCount_?: () => number;
        abs_?: () => string;
        decimalToBinString_?: () => string;
        decimalToOctString_?: () => string;
        decimalToHexString_?: (prefix?: boolean) => string;
        toInt_?: () => number;
        toNumber_?: () => number;
        hexToNumber_?: () => number;
        numberStrToHex_?: () => string;
        hasPrecisionIssue_?: () => boolean;
        removeFirst_?: (num: number) => string;
        removeLast_?: (num: number) => string;
        getFirst_?: (num: number) => string;
        getLast_?: (num: number) => string;
        replaceAll_?: (regStr: string, replaceStr: string) => string;
        classify_?: (splitStr1: string, splitStr2: string) => object[];
        hexToBuffer_?: () => Buffer;
        toUtf8Buffer_?: () => Buffer;
        hexToDecimalString_?: () => string;
        binToDecimalString_?: () => string;
        isStrictHexString_?: () => boolean;
        clearHexZeroZero_?: (typeStr: string) => string;
        toBigNumber_?: () => BigNumber;
        removeTrailingZeros_?: () => string;
        toArray_?: (len?: number, arrLen?: number) => string[];
        hexStrToBase64_?: () => string;
        base64ToHexStr_?: (prefix?: boolean) => string;
        strToBase64_?: () => string;
        base64ToStr_?: () => string;
        removeLastEnter_?: () => string;
        removeLastByStr_?: (str: string) => string;
        removeFirstByStr_?: (str: string) => string;
        toNoScientificString_?: () => string;
        canCastNumber_?: () => boolean;
        utf8HexStringToString_?: () => string;
        toUtf8HexString_?: (prefix?: boolean) => string;
        removeLastStr_: (str: string) => string;
        removeFirstStr_: (str: string) => string;
        toUtf8Uint8Array_: () => Uint8Array;
    }
}
export declare enum RoundingMode {
    ROUND_UP = 0,
    ROUND_DOWN = 1,
    ROUND_CEIL = 2,
    ROUND_FLOOR = 3,
    ROUND_HALF_UP = 4,
    ROUND_HALF_DOWN = 5,
    ROUND_HALF_EVEN = 6,
    ROUND_HALF_CEIL = 7,
    ROUND_HALF_FLOOR = 8,
    EUCLID = 9
}
export {};
