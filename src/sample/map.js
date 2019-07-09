var kvArray = [
  { key: 1, value: 10},
  { key: 2, value: 20},
  { key: 3, value: 30}
]


var reformattedArray = kvArray.map(item => {
  var rObj = {}
  rObj[item.key] = item.value
  return rObj
})

console.log(reformattedArray)

const array1 = [1, 2, 3, 4]
const reducer = (accumulator, currentValue) => {
  console.log(accumulator, currentValue)
  return accumulator + currentValue
}
console.log(array1.reduce(reducer, 0))

const s = '1234521'
const numberReducer = (allNumber, number) => {
  if (number in allNumber) {
    allNumber[number]++
  } else {
    allNumber[number] = 1
  }
  return allNumber
}
console.log(s.split('').reduce(numberReducer, {}))

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 5)
console.log(result)