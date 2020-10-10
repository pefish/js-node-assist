interface GetMaxMinResult {
    value: string;
    indexes: number[];
}
declare type Order = (`desc` | `asc`);
export default class ArrayUtil {
    /**
   * 转换为二维数组
   * @param spliceNum 每个小数组几个元素
   * @param arrayNum 分成几个小数组
   * @returns {*}
   */
    static toTwoDimen(src: any[], spliceNum?: number, arrayNum?: number): any[][];
    /**
   * 简单去重
   */
    static uniq(src: any[]): any[];
    /**
     * 移除null、undefined以及空字符串
     * @returns {Array}
     */
    static removeEmpty(src: any[]): any[];
    /**
     * 计算平均数
     * @returns {any}
     */
    static getAverage(src: any[]): string;
    /**
     * 取数组最后一个元素
     * @returns {*}
     */
    static getLastOne(src: any[]): any;
    static removeLastOne(src: any[]): any[];
    /**
     * 取数组第一个元素
     * @returns {*}
     */
    static getFirstOne(src: any[]): any;
    static removeFirstOne(src: any[]): any[];
    static removeStart(src: any[], num: number): any[];
    static removeEnd(src: any[], num: number): any[];
    static removeByIndex(src: any[], index: number): any[];
    static removeByValue(src: any[], value: any): any[];
    static deepCopy(src: any[]): any[];
    static append(src: any[], arr: any[]): any[];
    /**
     * 取出最大值（值以及索引）,只适用于数值数组以及字符串数组, 返回值为字符串
     */
    static getMax(src: any[]): GetMaxMinResult;
    static sortWithPriority(src: any[], order: Order): (string | number)[][];
    static getMin(src: any[]): GetMaxMinResult;
    static getSum(src: any[]): string;
    static select(src: any[], indexes: number[]): any[];
    static toUpperCase(src: any[]): string[];
    static toLowerCase(src: any[]): string[];
    static random(src: any[]): any;
    /**
     * [190, 190] --> BEBE 十进制转成16进制
     * @returns {string}
     */
    static numberArrayToHexString(src: any[]): string;
    /**
     * 取子数组。[start, end)
     * @param start
     * @param end
     */
    static subArray(src: any[], start: number, end: number): any[];
}
export {};
