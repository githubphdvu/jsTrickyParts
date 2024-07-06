function curriedAdd(total) {
  if (total === undefined) return 0
  return function addNext(num) {
    if (num === undefined) return total
    total += num
    return addNext
  }
}
const add = curriedAdd(1)// Start with an initial total of 1.
console.log(add(2)(3)(4)())// Output: 10 (1 + 2 + 3 + 4 = 10)
console.log(add())

module.exports = { curriedAdd }
