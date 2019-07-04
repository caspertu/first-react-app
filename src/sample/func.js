let color_lawn = {
  title: 'lawn',
  color: '#00ff00',
  rating: 0
}

console.log(color_lawn.rating)

// 不可变性 immutable 变量的不可变性 没有副作用（No Side Effect）
const editColor = (color, rating) => ({
  ...color,
  rating
})

console.log(editColor(color_lawn, 5).rating)
console.log(color_lawn.rating)

let list = [
  { title: 'Rad Red'},
  { title: 'Lawn'},
  { title: 'Party Ping'}
]

// 增加数据
var addColor = (title, colors) => [
  ...colors,
  {title}
]

console.log(addColor('Glam Green', list).length)
console.log(list.length)

var frederick = {
  name: 'Frederick',
  canRead: false,
  canWrite: false
}

// const selfEducate = () => {
//   frederick.canRead = true
//   frederick.canWrite = true
//   return frederick
// }

// 纯函数 没有副作用 no side effect
const selfEducate = person => ({
  ...person,
  canRead: true,
  canWrite: true
})

console.log(selfEducate(frederick))
console.log(frederick)

/*
编写函数的三条原则
1. 函数至少接收一个参数
2. 函数应该返回一个值或者其他函数
3. 函数不应该修改或者影响任何传给它的参数
*/

const schools = [
  'Yorktown',
  'Washington & Lee',
  'Wakefield'
]

console.log(schools.join(', '))

// filter函数创建了新的数组
const wSchools = schools.filter( school => school[0] === 'W')

console.log(wSchools)
console.log(schools)

const cutSchool = (cut, schools) => schools.filter(school => school != cut)

console.log(cutSchool('Wakefield', schools))
console.log(schools)

const highSchools = schools.map(school => ({name: school}))

console.log(highSchools)

const countdown = (value, fn, delay=1000) => {
  fn(value)
  return (value > 0) ? 
    setTimeout(() => countdown( value - 1, fn, delay), delay) : 
    value
}

// const log = value => console.log(value)

// countdown(10, log, 1)


// 高阶函数，负责合成函数
const compose = (...fns) => 
  (arg) =>
    fns.reduce(
      (composed, f) => f(composed),
      arg
    )

const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)

const serializeClockTime = date =>
  ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  })

const civilianHours = clockTime =>
  ({
    ...clockTime,
    hours: clockTime.hours > 12 ? 
      clockTime.hours - 12 :
      clockTime.hours
  })

const appendAMPM = clockTime => ({
  ...clockTime,
  ampm: (clockTime.hours > 12) ? 'PM' : 'AM'
})

const display = target => time => target(time)

const formatClock = format =>
  time =>
    format.replace('hh', time.hours)
      .replace('mm', time.minutes)
      .replace('ss', time.seconds)
      .replace('tt', time.ampm)

const prependZero = key => clockTime => ({
  ...clockTime,
  [key]: (clockTime[key] < 10) ?
    '0' + clockTime[key] :
    clockTime[key]
})

const startTricking = () => 
  setInterval(
    compose(
      clear,
      getCurrentTime,
      serializeClockTime,
      appendAMPM,
      civilianHours,
      prependZero('hours'),
      prependZero('minutes'),
      prependZero('seconds'),
      formatClock('hh:mm:ss tt'),
      display(log)
    ),
    oneSecond()
  )

// display(log(getCurrentTime()))
// console.log(getCurrentTime())
// compose(clear, log)(getCurrentTime())
startTricking()