/**
 * Created by joy on 12/10/2017.
 */

export default class ErrorHelper extends Error {
  constructor (errorMessage, errorCode, errorStorage = null) {
    // 抛出ErrorHelper，但catch到的是Error对象
    super(JSON.stringify({
      errorMessage,
      errorCode
    }))
    this.setErrorCode(errorCode)
    this.setErrorMessage(errorMessage)
    errorStorage && this.setErrorStorage(errorStorage)
  }
}
