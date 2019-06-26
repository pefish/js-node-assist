declare global {
    interface Object {
        toError_: () => Error;
    }
}
export {};
