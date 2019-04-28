declare global {
    interface Error {
        setErrorCode_?: (errorCode: number) => void;
        getErrorCode_?: () => number;
        setErrorMessage_?: (errorMessage: string) => void;
        getErrorMessage_?: () => string;
        setErrorStorage_?: (errorStorage: any) => void;
        getErrorStorage_?: () => any;
    }
}
export {};
