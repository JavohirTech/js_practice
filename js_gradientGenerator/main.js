const changeDirection = document.querySelector("#direction");
const topColor = document.getElementById('topColor');
const bottomColor = document.getElementById('bottomColor');
const colorSpace = document.querySelector(".color-space");
const codeSpace = document.querySelector(".code-space");
const copyCode = document.querySelector(".copy-code");

const generateColor = ()=>{
    colorSpace.style.backgroundImage = `linear-gradient(${changeDirection.value}, ${topColor.value}, ${bottomColor.value})`
    // console.log(changeDirection.value, topColor.value, bottomColor.value);

    codeSpace.innerText = `background-image: linear-gradient(${changeDirection.value}, ${topColor.value}, ${bottomColor.value})`
}


copyCode.addEventListener("click", ()=>{
    navigator.clipboard.writeText(codeSpace.innerText);
    copyCode.innerHTML = "Copied!";
    setTimeout(() => {
        copyCode.innerHTML = "Copy Code";
    }, 500);
})


setInterval(generateColor, 1000);