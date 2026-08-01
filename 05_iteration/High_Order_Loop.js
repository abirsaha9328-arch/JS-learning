// For of loop

const narutoCharacters = [
    "Naruto Uzumaki",
    "Sasuke Uchiha",
    "Sakura Haruno",
    "Kakashi Hatake",
    "Itachi Uchiha",
    "Hinata Hyuga"
];


for(const num of narutoCharacters)
{
    // console.log(num)
}

const favoCharacter = "Kakashi Hatake"

for(const char of favoCharacter)
{
    // console.log(char);
}

// Note : No duplicate value
const map = new Map()
map.set('firstName' , "Abir")
map.set('lastName' , 'Saha')
map.set('email' , 'abirsaha9328@gmail.com')
map.set('password' , 'hello1234')
map.set('email' , 'abirsaha9328@gmail.com')

// console.log(map)

// [key , value] array de-structure

for(const [key , value] of map)
{
    // console.log(value)
    // console.log(key)
}

// Right Now for of loop not work

// const user = {
//     firstName : "Ridita",
//     lastName : "Das",
//     email : "riditadas7@gmail.com",
//     password : 'hello1234'
// }

// for(const [key , value] of Object.keys(user).length)
// {
//     console.log(key)
// }



// Topic : for in loop

const user = {
    firstName : "Ridita",
    lastName : "Das",
    email : "riditadas7@gmail.com",
    password : 'hello1234'
}


for(const key in user)
{
    // console.log(user[key])
}


// const narutoHero = [
//     "Naruto Uzumaki",
//     "Sasuke Uchiha",
//     "Sakura Haruno",
//     "Kakashi Hatake",
//     "Itachi Uchiha",
//     "Hinata Hyuga"
// ];

// For of loop directly provide the value 
// But for in loop directly provide the index
// for(const char in  narutoHero)
// {
//     // console.log(narutoHero[char])
// }


const map1 = new Map()
map1.set('firstName' , "Abir")
map1.set('lastName' , 'Saha')
map1.set('email' , 'abirsaha9328@gmail.com')
map1.set('password' , 'hello1234')
map1.set('email' , 'abirsaha9328@gmail.com')

// map is not iterable  that's way it's not possible
for(const value in map1)
{
    // console.log(value)
}


//------------------------For each loop--------------------

const narutoHero = [
    "Naruto Uzumaki",
    "Sasuke Uchiha",
    "Sakura Haruno",
    "Kakashi Hatake",
    "Itachi Uchiha",
    "Hinata Hyuga",
    "Neji Hyuga"
];

// narutoHero.forEach( function (value) {
//     console.log(value)
// })

narutoHero.forEach((value)=>{
    console.log(value)
})