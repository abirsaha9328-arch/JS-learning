const calculation = document.querySelector("#calculate")


calculation.addEventListener("click" , function ()
{
    let Height = document.querySelector("#height").value
    let Weight = document.querySelector("#weight").value
    
    let heightMeter = Height / 100

    let findBMI = Weight / (heightMeter * heightMeter)

    
    let showResult = document.querySelector(".result")
    showResult.textContent = `Your BMI: ${findBMI.toFixed(2)}`
})

