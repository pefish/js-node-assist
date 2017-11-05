Array.prototype.toTwoDimen = function (spliceNum = null, arrayNum = null) {
  if (spliceNum !== null && arrayNum === null) {
    let num = this.length % spliceNum === 0 ? parseInt(this.length / spliceNum) : parseInt(this.length / spliceNum) + 1
    let newArrays = []
    for (let i = 0; i < num; i++) {
      let arr = this.slice(spliceNum * i, spliceNum * (i + 1))
      if (arr.length > 0) {
        newArrays.push(arr)
      }
    }
    return newArrays
  } else if (spliceNum === null && arrayNum !== null) {
    let newArrays = []
    const num = parseInt(this.length / arrayNum)
    for (let i = 0; i < arrayNum; i++) {
      let arr = this.slice(num * i, num * (i + 1))
      if (arr.length > 0) {
        newArrays.push(arr)
      }
    }
    if (num * arrayNum < this.length) {
      newArrays[newArrays.length - 1] = newArrays[newArrays.length - 1].concat(this.slice(num * arrayNum, this.length))
    }
    return newArrays
  } else {
    return null
  }
}

Array.prototype.uniq = function () {
  return [...new Set(this)]
}

Array.prototype.removeEmpty = function () {
  const results = []
  this.forEach((ele) => {
    if (ele !== null && ele !== undefined && ele !== '') {
      results.push(ele)
    }
  })
  return results
}


