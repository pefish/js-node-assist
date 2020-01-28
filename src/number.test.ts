import './index'
import assert from 'assert'
import { Endian } from './number';

describe('numberAssist', () => {

  it('toBuffer_', () => {
    const test = 1
    const result = test.toBuffer_(Endian.Little_Endian)
    console.log(result)
    assert.strictEqual(result.readDoubleLE(0), 1)
  })
})

