const score = 400

// explicitly define  need to number

const value = new Number('104')

// console.log(value)

const value1 = value.toString()

// console.log(value1)
// console.log(typeof value1)
// console.log(typeof value)


const value2 = 1234.8964

// console.log(value2)
// console.log(value2.toPrecision(3)) // Return String

const hundread = 1000000

// console.log(hundread.toLocaleString('en-IN'))



// +++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math.random())
console.log((Math.random() * 10) + 1)
console.log((Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)