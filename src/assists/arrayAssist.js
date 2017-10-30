Array.prototype.toTwoDimen = function (spliceNum) {
  let num = this.length > 0 ? parseInt(this.length / spliceNum) + 1 : 0
  let newArrays = []
  for (let i = 0; i < num; i++) {
    let arr = this.slice(spliceNum * i, spliceNum * (i + 1))
    if (arr.length > 0) {
      newArrays.push(arr)
    }
  }
  return newArrays
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


