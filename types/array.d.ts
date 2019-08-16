/** @module */
interface GetMaxMinResult {
    value: any;
    indexes: number[];
}
declare global {
    interface Array<T> {
        toTwoDimen_?: (spliceNum?: number, arrayNum?: number) => any[][];
        uniq_?: () => any[];
        removeEmpty_?: () => any[];
        getAverage_?: () => string;
        getLastOne_?: () => any;
        removeLastOne_?: () => any[];
        getFirstOne_?: () => any;
        removeFirstOne_?: () => any[];
        removeStart_?: (num: number) => any[];
        removeEnd_?: (num: number) => any[];
        removeByIndex_?: (index: number) => any[];
        removeByValue_?: (value: number) => any[];
        deepCopy_?: () => any[];
        append_?: (arr: any[]) => any[];
        getMax_?: () => GetMaxMinResult;
        getMin_?: () => GetMaxMinResult;
        getSum_?: () => string;
        select_?: (indexes: number[]) => any[];
        toUpperCase_?: () => string[];
        toLowerCase_?: () => string[];
        random_?: () => any;
        numberArrayToHexString_?: () => string;
        subArray_?: (start: number, end: number) => any;
    }
}
export {};
