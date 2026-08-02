// const narutoCharacters = [
//     "Naruto Uzumaki",
//     "Sasuke Uchiha",
//     "Sakura Haruno",
//     "Kakashi Hatake",
//     "Itachi Uchiha",
//     "Hinata Hyuga"
// ];


// For each not value return

// const values = narutoCharacters.forEach( (item) => {
//     // console.log(item)
//     return item
// } )

// console.log(values)


// Topic : Filter implementation in array
// --------------------------------------


// const myNums = [12 , 14 , 16 , 18 , 20 , 22 , 24 , 26 , 28]

// const result = myNums.filter( (values) =>{
//     return values > 16
// })

// console.log(result)

// const newArray = []

// const result = myNums.forEach( (item) => {

//     if(item > 16)
//     {
//         newArray.push(item)
//     }

// } )

// console.log(newArray)



const narutoCharacters = [
    { name: "Naruto Uzumaki", village: "Leaf Village", rank: "Hokage", clan: "Uzumaki" },
    { name: "Sasuke Uchiha", village: "Leaf Village", rank: "Shinobi", clan: "Uchiha" },
    { name: "Sakura Haruno", village: "Leaf Village", rank: "Medical Ninja", clan: "Haruno" },
    { name: "Kakashi Hatake", village: "Leaf Village", rank: "Jonin", clan: "Hatake" },
    { name: "Itachi Uchiha", village: "Leaf Village", rank: "Missing-nin", clan: "Uchiha" },
    { name: "Hinata Hyuga", village: "Leaf Village", rank: "Shinobi", clan: "Hyuga" },
    { name: "Gaara", village: "Sand Village", rank: "Kazekage", clan: "No Clan" },
    { name: "Rock Lee", village: "Leaf Village", rank: "Shinobi", clan: "Lee" },
    { name: "Neji Hyuga", village: "Leaf Village", rank: "Jonin", clan: "Hyuga" },
    { name: "Shikamaru Nara", village: "Leaf Village", rank: "Jonin", clan: "Nara" }
];




// const result = narutoCharacters.filter( (famille) =>{

//     return famille.clan === "Uchiha"

// })
// console.log(result)

// const result = narutoCharacters.filter ( (item) => {

//     return item.village === "Leaf Village" && item.rank  === "Shinobi"
// } )

// console.log(result)





// const myNums = [12 , 14 , 16 , 18 , 20 , 22 , 24 , 26 , 28]

// const value1 = myNums.forEach( (item , index) => {

//     myNums[index] += item

// } )

// console.log(myNums)

// const value = myNums.map( (item) => {

//     return item + 10;

// })



//Method chaning

// const myNums = [12 , 14 , 16 , 18 , 20 , 22 , 24 , 26 , 28]

 
// const value1 = myNums
//                 .map( (item)=> {
//                     return item * 10
//                 } )
//                 .map( (item) => {
//                     return item + 2
//                 } )
//                 .filter( (item) => {
//                     return item > 150
//                 } )

// console.log(value1)



// Topic : Reduce
// --------------



 const myNums = [12 , 14 , 16 , 18 , 20 , 22 , 24 , 26 , 28 , 40 , 44 , 46 ,48]

// const myNums = [1 , 2 , 3]
// Normal Function

// const result =  myNums.reduce (function (acc , current) {
//     console.log(`Accumaltor : ${acc} And Current Value : ${current}`)
//     return acc + current
// }, 4)

// Arrow Function

// const result = myNums.reduce( (acc , current) => {

//     console.log(`Accurmator : ${acc} And Current Value : ${current}`)

//     return acc + current

// }, 3)



