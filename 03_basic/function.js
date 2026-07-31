function hello(name) 
{
    console.log(`Hello , ${name}`)
}

// hello("Abir")
// Note : not return the function
// function addTwoNumber(a , b)
// {
//     console.log(`Sum : ${a + b}`)
// }


// addTwoNumber(4 , "6")
// Note : return the function
function addTwoNumber(a , b)
{
    return a + b
}

// const score = addTwoNumber(4 , 6)
// console.log(score)

function userLoggin(userName) 
{
    return `${userName} just logged in`
}


const info = userLoggin("Ridita Das")
const info1 = userLoggin("Digontika Chowdury")


// console.log(info)
// console.log(info1)



//----------------------- Shoping card ------------------------
//need multiple parameter

function calculateCartPrice(value1 , value2 ,...num1)
{
    return num1
}

// Note : value1 => 200 ,  value2 => 400 num1 = [600 , 800]
// console.log(calculateCartPrice(200 , 400 , 600 , 800))

const user = {
    userName : "Ridita Das",
    prices : 199
}

function handelObject(anyObject)
{
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}

// handelObject(user)

// handelObject({
//     userName : "Ridita Das",
//     price : 199    
// })

const newArray = [200 , 400 , 600 , 800]

function returnSecondValue(getArray)
{
    return getArray[1]
}

// console.log(returnSecondValue(newArray))
console.log(returnSecondValue([200 , 400 , 600 , 800]))