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
    static toTwoDimen_(src: any[], spliceNum?: number, arrayNum?: number): any[][];
    /**
   * 简单去重
   */
    static uniq_(src: any[]): any[];
    /**
     * 移除null、undefined以及空字符串
     * @returns {Array}
     */
    static removeEmpty_(src: any[]): any[];
    /**
     * 计算平均数
     * @returns {any}
     */
    static getAverage_(src: any[]): string;
    /**
     * 取数组最后一个元素
     * @returns {*}
     */
    static getLastOne_(src: any[]): any;
    static removeLastOne_(src: any[]): any[];
    /**
     * 取数组第一个元素
     * @returns {*}
     */
    static getFirstOne_(src: any[]): any;
    static removeFirstOne_(src: any[]): any[];
    static removeStart_(src: any[], num: number): any[];
    static removeEnd_(src: any[], num: number): any[];
    static removeByIndex_(src: any[], index: number): any[];
    static removeByValue_(src: any[], value: any): any[];
    static deepCopy_(src: any[]): any[];
    static append_(src: any[], arr: any[]): any[];
    /**
     * 取出最大值（值以及索引）,只适用于数值数组以及字符串数组, 返回值为字符串
     */
    static getMax_(src: any[]): GetMaxMinResult;
    static sortWithPriority_(src: any[], order: Order): (string | number)[][];
    static getMin_(src: any[]): GetMaxMinResult;
    static getSum_(src: any[]): string;
    static select_(src: any[], indexes: number[]): any[];
    static toUpperCase_(src: any[]): string[];
    static toLowerCase_(src: any[]): string[];
    static random_(src: any[]): any;
    /**
     * [190, 190] --> BEBE 十进制转成16进制
     * @returns {string}
     */
    static numberArrayToHexString_(src: any[]): string;
    /**
     * 取子数组。[start, end)
     * @param start
     * @param end
     */
    static subArray_(src: any[], start: number, end: number): any[];
}
export {};
