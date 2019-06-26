import './index'
import assert from 'assert'

describe('errorAssist', () => {

  it('getErrorMessage_', () => {
    try {
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
      console.log(err.toError_().getErrorMessage_())
    }
  })
})

