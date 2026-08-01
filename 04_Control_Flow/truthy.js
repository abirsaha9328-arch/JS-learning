const email =  []
//Asume email value is truth
if(email)
{
    console.log("Go user email")
}

else
{
    console.log("Don't have user email")
}


// falsy value
//  false , 0 , -0,bigInt 0n , "" , null , undefind , Nan

// Truthy value
// "0" , "false" , " " , [] , {} , function(){} 

// if(email.length === 0)
// {
//     console.log("Array is empty")
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0)
// {
//     console.log("Object is empty")
// }



// Nullish Colescing operator (??): null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 40
// val1 = null ?? 10 ?? 40   // note 10  is the answer
// console.log(val1)

 

// Ternary operator
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80")