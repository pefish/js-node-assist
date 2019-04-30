declare global {
    namespace NodeJS {
        interface Global {
            logger: any;
        }
    }
}
export * from './error';
export * from './string';
export * from './array';
export * from './buffer';
export * from './number';
export * from './promise';
export * from './bignumber';
