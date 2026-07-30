// let array = [12 , "Abir Saha" , "Adi Saha" , 24 , true]

// let array1 = array

// array1[0] = 24



// -------------------------Array methods

// array.push(24)
// array.push(20)
// array.push(10)
// array.pop()

// array.unshift(20)

// array.shift()

// console.log(array.includes(12))
// console.log(array.indexOf(12))

// const newArray = array.join()
// console.log(typeof array)
// console.log(typeof newArray)

// const array1 = [12 , 14 , 16 , 18 , 20 , 22]

// when the perform slice operation it's provide the copy of array and not change the orginal array
// const newArray = array1.slice(2 , 4)  
// when the perfrom splice operation its provide the new array and change the orginal array
// const newArray1 = array1.splice(1 , 4) 

// console.log(array1) 
// console.log(newArray)
// console.log(newArray1) // 14 , 16 , 18 , 20


const narutoHeroes = [
  "Naruto Uzumaki",
  "Sasuke Uchiha",
  "Sakura Haruno",
  "Kakashi Hatake",
  "Itachi Uchiha",
  "Gaara"
];

const jk = [
  "Yuji Itadori",
  "Megumi Fushiguro",
  "Nobara Kugisaki",
  "Satoru Gojo",
  "Yuta Okkotsu",
  "Ryomen Sukuna"
];


// This is not ideal for margin

// narutoHeroes.push(jk)
// console.log(narutoHeroes[6])

// most switeable opetion

// const array = narutoHeroes.concat(jk)
// console.log(array)
// console.log(narutoHeroes)


// const allHerro = [...narutoHeroes, ...jk]

// console.log(typeof allHerro)


// const another_array = [1 , 2 , 3 , [4 , 5 , 6] , 7 , [6 , 7 , [4 , 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)



let array = [2 , 4 , 6 , 8 , 12 , 14]

// console.log(Array.isArray(array))

// Note : Array.from doesn't convert the array is provide the empty array

// let  convertArray = Array.from("Digontika Chowdury")

// console.log(Array.isArray(convertArray))
// console.log(typeof array)
// console.log(convertArray[1])


let score1 = 120
let score2 = 240
let score3 = 120
let score4 = 480

let newArray = Array.of(score1 , score2 , score3 , score4)

console.log(newArray)
console.log(typeof newArray)