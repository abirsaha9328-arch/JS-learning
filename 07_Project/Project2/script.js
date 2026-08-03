const calculation = document.querySelector("#calculate")


calculation.addEventListener("click" , function ()
{
    let Height = Number( document.querySelector("#height").value)
    let Weight = Number( document.querySelector("#weight").value)
    let showResult = document.querySelector(".result")
    let condition = document.querySelector(".condition")
    let heightMeter;
    let findBMI;
    if(Height < 0 || Height === '' ||isNaN(Height))
    {
        showResult.textContent = `Provide the valid height : ${Height}`
    }

    else if(Weight < 0 || Weight === '' || isNaN(Weight))
    {
        showResult.textContent = `Provide the valid weight : ${Weight}`

    }

    else {
        heightMeter = Height / 100
        findBMI = Weight / (heightMeter * heightMeter)
        showResult.textContent = `Your BMI: ${findBMI.toFixed(2)}`

    }

    if(findBMI < 18.6)
    {
        condition.innerHTML = `<h3> Underweight </h3>`
    }

    else if(findBMI >= 18.6 && findBMI <=24.9)
    {
       condition.innerHTML = `<h3> Normal </h3>` 
    }

    else if(findBMI >= 25 && findBMI <=29.9)
    {
        condition.innerHTML = `<h3> Overweight </h3>`
    }

    else{
        condition.innerHTML = `<h3> Obese </h3>`
    }


})

