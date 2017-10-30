Object.prototype.toTwoDimenArray = function (spliceNum) {
  // {
  //   a: 7,
  //   b: 6,
  //   c: 4
  // }
  // [ { a: 7, b: 6 }, { c: 4 } ]
  const entries = Object.entries(this)
  const length = entries.length
  let newArrays = [], tempObj = {}
  for (let i = 0; i < length; i++) {
    const [key, value] = entries[i]
    if (i === spliceNum * (newArrays.length + 1)) {
      newArrays.push(tempObj)
      tempObj = {}
    }
    tempObj[key] = value
    if (i === length - 1) {
      newArrays.push(tempObj)
    }
  }
  return newArrays
}

Object.prototype.removeEmpty = function () {
  for (let [key, value] of Object.entries(this)) {
    if (value === null || value === undefined) {
      delete this[key]
    }
  }
  return this
}

Object.prototype.assign = function (obj) {
  Object.assign(this, obj)
  return this
}

Object.prototype.toArray = function () {
  return Object.entries(this)
}

Object.prototype.getKeys = function () {
  return Object.keys(this)
}

Object.prototype.getValues = function () {
  return Object.values(this)
}

Object.prototype.getEntries = function () {
  return Object.entries(this)
}

Object.prototype.remove = function (key) {
  const b = {}
  Object.assign(b, this)
  delete b[key]
  return b
}

Object.prototype.has = function (key) {
  return this[key] !== undefined
}
