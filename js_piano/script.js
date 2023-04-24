const pianoKeys = document.querySelectorAll(".piano-keys .key"),
    volumeSlider = document.querySelector(".volume-slider input"),
    keyCheckbox = document.querySelector(".keys-checkbox");

let allKeys = [],
    audio = new Audio();

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play()
    console.log(allKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 100)
}


pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener('click', () => playTune(key.dataset.key))
})

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key);
}

const showHideKeys = () => {
    pianoKeys.forEach(key => {
        key.classList.toggle("hide");
    });
}

keyCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);