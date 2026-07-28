// Primitive

// 7 types : string , number , boolean , null , undefined, symbol,BigInt

 
// const id = Symbol("123")
// const anotherId = Symbol("123")

// console.log(id == anotherId)
// console.log(id === anotherId)



// const bigNumber = 43534345345345435n

// console.log(typeof bigNumber)

// Reference (Non Primitive)

// Array , object , function 

// const heros = ["pain" , "naruto" , "kakshi" , "obito"]

// const dicRepresentaion = 
// {
//     "Name" : "Abir Saha",
//     "Age" : 23
// }

// const myFunction = function()
// {
//     console.log('Hello Ridita Das')
// }

// console.log(typeof myFunction)
// console.log(typeof heros)
// console.log(typeof dicRepresentaion)




//--------------------------------Memoory Stack And Heap----------------------------------

// Stack (Primitive) , HEAP(Non-premitive)

let myFacebookName = "Abir Saha"

let anotherName = myFacebookName

anotherName = "Ridita Das"

// console.log(anotherName)
// console.log(myFacebookName)

let user1 = {
    email : "abirsaha9328@gmail.com",
    phone : 1826661404
}

let user2 = user1

user2.email = "riditadas7@gmail.com"

console.log(user2)
console.log(user1)