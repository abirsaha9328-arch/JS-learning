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


console.log(info)
console.log(info1)