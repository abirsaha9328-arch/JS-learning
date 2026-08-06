// optimal approach


const prevGuesses = document.querySelector(".guesses");
const remGuesses = document.querySelector(".lastResult");
const submitButton = document.querySelector("#subt");
const form = document.querySelector(".form");
const lowOrHi = document.querySelector(".lowOrHi");
const guessField = document.querySelector("#guessField");

const randomNumber = Math.floor(Math.random() * 100) + 1;

let totalGuessValue = 10
let countGuess = 0

let isPlaying = true

const validateGuess = (guesses , randomNumber) =>
{

    if(isNaN(guesses) || guesses < 1 || guesses > 100)
    {
        alert("Provide Correct Input")
        
    }

    else{
        countGuess += 1
        checkGuess(guesses , randomNumber)
    }

}

const checkGuess = (guesses , randomNumber) =>
{

    if(guesses === randomNumber)
    {
        lowOrHi.textContent = `Target Match`
        endGame()
        
    }

    else if(guesses < randomNumber)
    {
        lowOrHi.textContent = `To Low`
    }

    else
    {
        lowOrHi.textContent = "To High"
    }

    displayGuess(guesses)

}

const displayGuess = (guesses) =>
{
    prevGuesses.textContent = `${guesses}`
    remGuesses.textContent = `${totalGuessValue - countGuess}`
}

const newGame = () =>
{

    countGuess = 0;
    guessField.disabled = false;
    submitButton.disabled = false;
    guessField.value = ""
    lowOrHi.textContent = ""
    prevGuesses.textContent = ""
    remGuesses.textContent = totalGuessValue

}

const endGame = () => {
    guessField.disabled = true;
    submitButton.disabled = true;
}



if(isPlaying)
{
    form.addEventListener('submit' , (event)=>{
        event.preventDefault()

        if(countGuess < 10)
        {
            let inputValue = Number(guessField.value)
            validateGuess(inputValue , randomNumber)  

        }

        else
        {
            newGame()
        }
    })
}