// let grayBox = document.querySelector(".gray")
// let whiteBox = document.querySelector(".white")
// let blueBox = document.querySelector(".blue")
// let yellowBox = document.querySelector(".yellow")
// grayBox.addEventListener('click' , () =>{
//     document.body.style.backgroundColor = "gray"
// })

// whiteBox.addEventListener('click' , () =>{
//     document.body.style.backgroundColor = "white"
// })

// blueBox.addEventListener('click' , () =>{
//     document.body.style.backgroundColor = "blue"
// })

// yellowBox.addEventListener('click' , () =>{
//     document.body.style.backgroundColor = "yellow"
// })



// Optimal solution

// This is my code 

const parentBox = document.querySelectorAll(".box")
const setColor = document.body

parentBox.forEach( (item)=>{
    
    item.addEventListener("click" , (event)=>{
        
       const colorID = event.target.id

       if(colorID === "gray")
       {
            setColor.style.background = event.target.id
       }

       if(colorID === "white")
       {
            setColor.style.background = event.target.id
       }

       if(colorID === "blue")
       {
            setColor.style.background = event.target.id
       }

       else
       {
            setColor.style.background = event.target.id
       }

    })

})


