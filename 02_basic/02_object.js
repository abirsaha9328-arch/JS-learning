 // singleton object
//  const facebookUser = new Object()

const facebookUser = {}
 
facebookUser.id = "123d43"
facebookUser.name = "Abir"
facebookUser.isLoggedIn = false
facebookUser.email = "abirsaha9328@gmail.com"

// console.log(facebookUser)


const regularUser = {

    email : "riditadas7@gmail.com",
    fullName : {
        userFullname : {
            firstName : "Ridita",
            lastName : "Das"
        }
    }

}

// console.log(regularUser.fullName.userFullname.firstName)

const obj1 = {
    firstName : "Shonalika",
    lastName : "Das"
}

const obj2 = {
    email : "shonalikadas7832@gmail.com",
    password : "shonalikas38324*$#"
}


// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1 , obj2)
// Note : better way is add {}
// const obj3 = Object.assign({}, obj1 , obj2)

// Most switable way to concat the object => This is use producation garde code

obj3 = {...obj1 , ...obj2}

// console.log(obj3)

console.log(facebookUser)

// console.log(Object.keys(facebookUser))

// console.log(Object.values(facebookUser))

// Note: each key value convert the array
// console.log(Object.entries(facebookUser))


console.log(facebookUser.hasOwnProperty('id'))