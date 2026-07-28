// const name = 'Abir Saha'

// console.log(`My Name is : ${name}`)

const name = new String("Ridita Das")

// console.log(name.__proto__ ) ;

// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.charAt([2]))

const newString = name.slice(1 , 4)

console.log(newString)

const newString1 = "     Digontika Chowudry      "
// console.log(newString1)
// console.log(newString1.trim())

const newString2 = newString1.replace("Digontika Chowudry", "Shonalika Das")

console.log(newString1.trim())
console.log(newString2)
console.log(newString2.includes("Das"))

const abir = "Digontika-Chowdury"

let convertArray = abir.split("-")

console.log(convertArray)
console.log(typeof convertArray)