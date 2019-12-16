# js-node-assist
makes JavaScript easier to use, and improve coding efficiency

## Install
```shell
npm install @pefish/js-node-assist
```

### Example
```js

import { RoundingMode } from "@pefish/js-node-assist";

console.log(`10.12`.canCastNumber_()); // true
console.log(`10.a`.canCastNumber_()); // false
console.log(`10.12`.remainDecimal_(4, RoundingMode.ROUND_UP)); // 10.1200
console.log(`10`.add_('1')); // 11
// ...

```
