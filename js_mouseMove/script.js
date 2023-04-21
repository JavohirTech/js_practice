function mouseMove(e) {
    let x = e.clientX;
    let y = e.clientY;

    let i = document.createElement('i')
    i.classList.add('fa-circle')
    i.classList.add('fa-regular');

    i.style.left = `${x}px`;
    i.style.top = `${y}px`;

    document.body.appendChild(i)

    setTimeout(() => {
        i.remove()
    }, 500);
}

function clearCoor() {
    x = 0;
    y = 0;
}