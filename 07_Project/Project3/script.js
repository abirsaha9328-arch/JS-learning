let showTime = document.querySelector("#clock")

setInterval(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    
    showTime.innerHTML = `${timeString}`
    showTime.sty

}, 1000);