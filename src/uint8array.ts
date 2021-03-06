
export default class Uint8ArrayUtil {
  static toUtf8String (src: Uint8Array): string {
    return new TextDecoder().decode(src)
  }
  
  static toBuffer (src: Uint8Array): Buffer {
    return Buffer.from(src)
  }
}
