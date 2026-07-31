let a = 400 // Global scope

if(true)
{
    let a = 12 // local scope
    const c = 66
}



// console.log(a)
// console.log(c)



function one()
{
    let username = "Abir Saha"

    function two()
    {
        let github = "abirsah9328"
        console.log(username)
    }
    // console.log(github)  // it's not possible  
    // two()

}

// one()


if(true)
{
    const username = "Ridita Das"

    if(username === "Ridita Das")
    {
        const github = "riditadas7"
        // console.log(username)

    }

    // console.log(github)
}


// console.log(username)



//++++++++++++++++++++++++++++++ interesting +++++++++++++++++++

console.log(addone(6))
function addone(num)
{
    return num - 1
}


console.log(addtwo(6))
// console.log(addtwo(6))     => this is create a problem (before initialization)
const addtwo = function (num)
{
    return num - 2
}

console.log(addtwo(6))
