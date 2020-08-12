import './index'
import * as util from 'util'
import assert from 'assert'

describe('errorAssist', () => {

  it('getErrorMessage_', () => {
    try {
      throw new Error(`123`)
      throw 2
      throw {
        a: {
          a: {
            a: {
              a: 5,
            }
          }
        }
      }
    } catch (err) {
      assert.strictEqual(err.message, "123")
    }
  })
})

