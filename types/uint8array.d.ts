/** @module */
declare global {
    interface Uint8Array {
        toUtf8String_?: () => string;
        toBuffer_?: () => Buffer;
    }
}
export {};
