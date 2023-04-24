const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch");


const updateTime = () => {
    let date = new Date;
    secToDeg = (date.getSeconds() / 60) * 360;
    minToDeg = (date.getMinutes() / 60) * 360;
    hrToDeg = (date.getHours() / 12) * 360;
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
}

if (localStorage.getItem("mode") === "Darkmode") {
    body.classList.add("darkmode");
    modeSwitch.textContent = "LIGHTMODE"
}

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("darkmode");

    const isDarkMode = body.classList.contains("darkmode")
    modeSwitch.textContent = isDarkMode ? "LIGHTMODE" : "DARKMODE"
    localStorage.setItem("mode", isDarkMode ? "Darkmode" : "Lightmode")
})

setInterval(updateTime, 1000);