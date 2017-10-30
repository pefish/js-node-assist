/**
 * Created by joy on 28/09/2017.
 */
import errorCodes from '../constants/errorCodes'
import ErrorHelper from './ErrorHelper'
import BigNumber from 'bignumber.js'

export default class AssertUtil {
  
  static notEmpty (value, opts = {}) {
    if ('' === value || null === value || undefined === value) {
      throw new ErrorHelper(`value: ${value}, notEmpty except: ${JSON.stringify(opts)}`, errorCodes.PARAM_EMPTY_ERROR)
    }
  }

  static canCast (value, expectValue, opts = {}) {
    let result = false
    switch (expectValue) {
      case 'number':
        result = !isNaN(Number(value))
        break
      case 'integer':
        result = !isNaN(Number(value)) && Number.isInteger(Number(value))
        break
      case 'bignumber':
        const num1 = new BigNumber(value)
        result = true
        break
    }
    if (result === false) {
      throw new ErrorHelper(`value: ${value}, expectValue: ${JSON.stringify(expectValue)}, canCast except: ${JSON.stringify(opts)}`, errorCodes.PARAM_CAN_CAST_ERROR)
    }
  }

  static noMysqlInject (value, opts = {}) {
    ['=', '{', '}', ',', ':', ';', '|', '>', '<', '/', '"', '[', ']', '-', '+'].forEach((symbol) => {
      if (typeof value === 'string' && value.includes(symbol)) {
        throw new ErrorHelper(`value: ${value}, noMysqlInject except: ${JSON.stringify(opts)}`, errorCodes.PARAM_NO_INJECT_ERROR)
      }
    })
  }

  // 判断参数是否是不合法的
  static _isIllegal (value) {
    let result = false
    if (JSON.stringify(value).includes('$')) {
      result = true
    }
    return result
  }

  static oneUpperAtLeast (value, opts = {}) {
    if (!/[A-Z]/.test(value)) {
      throw new ErrorHelper(`value: ${value}, oneUpperAtLeast except: ${JSON.stringify(opts)}`, errorCodes.PARAM_ONEUPPER_ATLEAST_ERROR)
    }
  }

  static noSpace (value, opts = {}) {
    if ((/\s/.test(value))) {
      throw new ErrorHelper(`value: ${value}, noSpace except: ${JSON.stringify(opts)}`, errorCodes.PARAM_NOSPACE_ERROR)
    }
  }

  static oneNumberAtLeast (value, opts = {}) {
    if (!/[0-9]/.test(value)) {
      throw new ErrorHelper(`value: ${value}, oneNumberAtLeast except: ${JSON.stringify(opts)}`, errorCodes.PARAM_ONENUMBER_ATLEAST_ERROR)
    }
  }

  static oneSymbolAtLeast (value, opts = {}) {
    if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(value)) {
      throw new ErrorHelper(`value: ${value}, oneSymbolAtLeast except: ${JSON.stringify(opts)}`, errorCodes.PARAM_ONESYMBOL_ATLEAST_ERROR)
    }
  }

  static _isType (value, typeName) {
    if (typeof typeName === 'function') {
      return value instanceof typeName
    }
    let result = false
    switch (typeName) {
      case 'boolean':
        result = (typeof value === typeName)
        break
      case 'string':
        result = (typeof value === 'string')
        break
      case 'number':
        result = (value instanceof Number) || !isNaN(Number(value))
        break
      case 'integer':
        result = ((value instanceof Number) || !isNaN(Number(value))) && Number.isInteger(Number(value))
        break
      case 'object':
        if (value instanceof Object) {
          result = true
        } else {
          result = false
        }
        break
      case 'array':
        result = value instanceof Array
        break
    }
    return result
  }

  static isType (value, expectValue, opts = {}) {
    let result = false
    if (expectValue instanceof Array) {
      result = expectValue.some((type_) => {
        if (this._isIllegal(value)) {
          return false
        }
        return AssertUtil._isType(value, type_)
      })
    } else {
      result = AssertUtil._isType(value, expectValue)
    }
    if (result === false) {
      throw new ErrorHelper(`value: ${value}, expectValue: ${expectValue}, isType except: ${JSON.stringify(opts)}`, errorCodes.PARAM_TYPE_ERROR)
    }
  }

  static gt (value, expectValue, opts = {}) {
    if (value instanceof Number || !isNaN(Number(value))) {
      if (value <= expectValue) {
        throw new ErrorHelper(`value: ${value}, expectValue: ${expectValue}, gt except: ${JSON.stringify(opts)}`, errorCodes.PARAM_GT_ERROR)
      }
    } else {
      throw new ErrorHelper(`value: ${value}, expectValue: ${expectValue}, gt except: ${JSON.stringify(opts)}`, errorCodes.PARAM_TYPE_ERROR)
    }
  }

  static lt (value, expectValue, opts = {}) {
    if (value instanceof Number || !isNaN(Number(value))) {
      if (value >= expectValue) {
        throw new ErrorHelper(`value: ${value}, expectValue: ${expectValue}, lt except: ${JSON.stringify(opts)}`, errorCodes.PARAM_LT_ERROR)
      }
    } else {
      throw new ErrorHelper(`value: ${value}, expectValue: ${expectValue}, lt except: ${JSON.stringify(opts)}`, errorCodes.PARAM_TYPE_ERROR)
    }
  }

  static lengthLt (value, expectValue, opts = {}) {
    if (value.toString().length >= expectValue) {
      throw new ErrorHelper(`value: ${value}, expectValue: ${expectValue}, lengthLt except: ${JSON.stringify(opts)}`, errorCodes.PARAM_LENGTHLT_ERROR)
    }
  }

  static lengthGt (value, expectValue, opts = {}) {
    if (value.toString().length <= expectValue) {
      throw new ErrorHelper(`value: ${value}, expectValue: ${expectValue}, lengthGt except: ${JSON.stringify(opts)}`, errorCodes.PARAM_LENGTHGT_ERROR)
    }
  }

  static lengthEq (value, expectValue, opts = {}) {
    if (expectValue instanceof Array) {
      if (!expectValue.includes(value.toString().length)) {
        throw new ErrorHelper(`value: ${value}, expectValue: ${expectValue}, lengthEq except: ${JSON.stringify(opts)}`, errorCodes.PARAM_LENGTHEQ_ERROR)
      }
    } else {
      if (value.toString().length !== expectValue) {
        throw new ErrorHelper(`value: ${value}, expectValue: ${expectValue}, lengthEq except: ${JSON.stringify(opts)}`, errorCodes.PARAM_LENGTHEQ_ERROR)
      }
    }
  }

  static in (value, expectValue, opts = {}) {
    if (!expectValue.includes(value)) {
      throw new ErrorHelper(`value: ${value}, expectValue: ${expectValue}, in except: ${JSON.stringify(opts)}`, errorCodes.PARAM_IN_ERROR)
    }
  }

  static is (value, expectValue, opts = {}) {
    if (value !== expectValue) {
      throw new ErrorHelper(`value: ${value}, expectValue: ${expectValue}, is except: ${JSON.stringify(opts)}`, errorCodes.PARAM_IS_ERROR)
    }
  }

  static isCustomType(value, expectValue, opts = {}) {
    const regexList = {
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      mobile: /^1[34578]\d{9}$/,
      vcode: /^\d{6}$/,
      number: /^\d+$/
    }
    let result
    if (expectValue instanceof Array) {
      result = expectValue.map(regex => regexList[regex]).some(regex => regex.test(value))
    } else {
      result = regexList[expectValue].test(value)
    }

    if (result === false) {
      throw new ErrorHelper(`value: ${value}, expectValue: ${expectValue}, regex except: ${JSON.stringify(opts)}, value: ${value}`, errorCodes.PARAM_REGEX_ERROR)
    }
  }
}
