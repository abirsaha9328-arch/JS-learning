const user = {
    userName : "Abir Saha",
    email : "abirsaha9328@gmail.com",
    phoneNumber : 1826661404,
    profession : "Computer Engineering",
    welcome : function()
    {
        // console.log(`Hello ${this.userName}`)
        console.log(this)
    }
}


// user.welcome()

// console.log(this)

// function hello()
// {   
//     let userName = "Ridita Das"
//     console.log(this.userName)
    
// }

// hello()

//Another Function implementaion

// const hello = function()
// {
//     let userName = "Ridita Das"
//     console.log(this.userName)  
// }

// hello()


// Arrow functon Implementaion

// const hello = () =>
// {
//     let userName = "Ridita Das"
//     console.log(this.userName)
// }

// hello()



// when use the {} in arrow function  it does need return keyword

// const addTwo = (num1 , num2 ) =>
// {
//     return num1 + num2
// }

// console.log(addTwo(200 , 400))

// another use the () in array function it doesn't need return keyword

const addTwo = (num1 , num2) => (num1 + num2)

console.log(addTwo(1200 , 800))