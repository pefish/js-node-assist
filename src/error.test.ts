import './index'
import * as util from 'util'

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
      console.log(util.inspect(err))
    }
  })
})

