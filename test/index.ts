import { RoundingMode, StringUtil } from "../src/index";

console.log(StringUtil.canCastNumber(`10.12`)); // true
console.log(StringUtil.canCastNumber(`10.a`)); // false
console.log(StringUtil.start(`10.12`).remainDecimal(4, RoundingMode.ROUND_UP).end()); // 10.12
console.log(StringUtil.start(`10`).add('5').multi(10).div(5).end()); // (10 + 5) * 10 / 5 = 30