const prevGuesses = document.querySelector(".guesses");
const remGuesses = document.querySelector(".lastResult");
const submitButton = document.querySelector("#subt");
const form = document.querySelector(".form");
let guessCount = 0;
let totalGuesses = 10;
form.addEventListener("submit", (event) => {
    event.preventDefault();
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        const inputValue =  Number(document.querySelector("#guessField").value)
        console.log(`Random value : ${randomNumber}`)
        console.log(`Input Value : ${inputValue}`)
        guessCount++;
        prevGuesses.textContent = `${inputValue}`
        remGuesses.textContent = `${totalGuesses - guessCount}`
        console.log(`count : ${guessCount}`)

        if(randomNumber === inputValue)
        {
            console.log('Value matching')
        }
        
       

        if(guessCount === 10 && inputValue != randomNumber)
        {
            console.log("Game Over!");
            submitButton.disabled = true;
        }

        


});

