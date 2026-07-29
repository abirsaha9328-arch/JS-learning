// Dates

let myDate = new Date()

// console.log(myDate.toString())

// console.log(myDate.toDateString())

// console.log(myDate.toISOString())

// console.log(myDate.toLocaleDateString())

// console.log(myDate.toLocaleString())


let myCreateDate = new Date(2024,0,24)

let myCurrentStemp = Date.now()

console.log(myCreateDate.toLocaleDateString())

// console.log(myCurrentStemp)
// console.log(myCreateDate.getTime())

// console.log(Math.round(Date.now()) / 1000);

myCurrentStemp.toLocaleString('default',
    {
        
    }
)