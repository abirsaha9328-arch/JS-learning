for(let i = 0 ; i <= 10 ; i++)
{
    const element = i

    if(element == 5)
    {
        // console.log("5 is best number")
    }

    // console.log(element)
}

for(let i = 0 ; i < 6 ; i++)
{
    // console.log(`Output Loop : ${i}`)
    for(let j = 0 ; j < 6 ; j++)
    {
        // console.log(j)
    }
}

const narutoCharacters = [
    "Naruto Uzumaki",
    "Sasuke Uchiha",
    "Sakura Haruno",
    "Kakashi Hatake",
    "Itachi Uchiha",
    "Hinata Hyuga"
];


for(let i = 0 ; i < narutoCharacters.length ; i++)
{
    // console.log(narutoCharacters[i])
}


//        break and continue


for(let i = 0 ; i < 20 ; i++)
{
    if(i == 8)
    {
        continue // one value is skip
    }
    // console.log(i)

}

for(let i = 0 ; i < 20 ; i++)
{
    if(i == 8)
    {
        break // loop completely break
    }
    console.log(i)

}