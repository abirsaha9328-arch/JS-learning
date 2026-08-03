// Note : Noraml apporach
// ----------------------


// function addLanguage(language) 
// {
//     const createElement = document.createElement('li')
//     createElement.innerHTML = `${language}`
//     let parent = document.querySelector('.language')
//     parent.appendChild(createElement)
// }
// addLanguage("Python")
// addLanguage("Java")
// addLanguage("C++")




// Optomal Apoorach
// ----------------


const addOptiLanguage = (name) =>{

    let partentElement = document.querySelector(".language")

    let createElement = document.createElement('li')

    let addText = document.createTextNode(name)

    createElement.appendChild(addText)

    partentElement.appendChild(createElement)


}

addOptiLanguage("Python")
addOptiLanguage("Java")
addOptiLanguage("C++")



// Edit 

// let secondLang = document.querySelector('li:nth-child(2)')
// secondLang.textContent = "Swift"


// Edit first child

// const secondLang = document.querySelector('li')
// const newli = document.createElement('li')
// newli.textContent = "Swift"
// secondLang.replaceWith(newli)


// Remove child

// const selectLi = document.querySelector('li')
// selectLi.remove()

