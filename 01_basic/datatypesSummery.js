// Primitive

// 7 types : string , number , boolean , null , undefined, symbol,BigInt

 
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id == anotherId)
console.log(id === anotherId)



const bigNumber = 43534345345345435n

console.log(typeof bigNumber)

// Reference (Non Primitive)

// Array , object , function 

const heros = ["pain" , "naruto" , "kakshi" , "obito"]

const dicRepresentaion = 
{
    "Name" : "Abir Saha",
    "Age" : 23
}

const myFunction = function()
{
    console.log('Hello Ridita Das')
}

console.log(typeof myFunction)
console.log(typeof heros)
console.log(typeof dicRepresentaion)
