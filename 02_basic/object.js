// singleton
// object.create()

// object literals

const mySym  = Symbol("key1")

const person = {

    firstName : "Ridita",
    lastName : "Das",
    Age : 28,
    husbandName : "Nirob Das",
    email : "riditadas7@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday" ],
    "Daughter Name" : "Pori Das",
    [mySym] : "mykey1"

}

// console.log(person.email)

// Note : why need to this way(person["Daughter Name"]) to access the object 
// Ans : some to object deifend this way ( "Daughter Name" : "Pori Das") it cann't posslbe to object this way "person.email" .it's a problem
// so the soutio is person["email"]

// console.log(person["email"])

// console.log(person["Daughter Name"])

// console.log(person[mySym])
// console.log(typeof person[mySym])


// person.email = "abirsaha9328@gmail.com"
// console.log(person)

// Freeze the object 
// Doesn't change the object value

// Object.freeze(person.email)
// person.email = "abirsaha9328@gmail.com"

person.helloFunction = () => {
    console.log("Hello Ridita Das")
}

person.fullName = function() {
    console.log(`My name is ${this.firstName} `)
}

console.log(person.helloFunction)
console.log(person.helloFunction())
console.log(person.fullName())

// At last most of the case  objeect key acces this way (object.key)