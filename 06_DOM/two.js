// const targe1 = document.querySelector(".parent")
// console.log(targe1)
// console.log(targe1.children)
// console.log(targe1.children[0].textContent)

// without create a mew array print the   value

// const targe2 = Array.from(targe1.children)
// targe2.forEach( (item) => {
//     console.log(item.textContent)
// })

// for(let i = 0 ; i < targe1.children.length ; i++)
// {
//     targe1.children[i].style.color = '#fff'
//     console.log(targe1.children[i].textContent)
// }

// console.log(targe1.firstElementChild.textContent)
// console.log(targe1.lastElementChild.textContent)

// let dayOne = document.querySelector(".day")

// console.log(dayOne.nextElementSibling.textContent)


// const parent = document.querySelector(".parent")

// console.log(parent.childNodes)






//  Create Node 
// ---------------

const createNode = document.createElement("div")
const addText = createNode.createTextNode = "Hello Bangladesh"
createNode.setAttribute("class", "heading");
createNode.style.color = "cyan"

createNode.append(addText)

document.body.appendChild(createNode)