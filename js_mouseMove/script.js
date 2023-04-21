// function myFunction(e) {
//     let x = e.clientX;
//     let y = e.clientY;
//     let coor = "Coordinates: (" + x + "," + y + ")";
//     document.getElementById("demo").innerHTML = coor;
//   }

//   function clearCoor() {
//     document.getElementById("demo").innerHTML = "";
//   }

// let yangiHeart = document.querySelector('.fa-heart');

function mouseMove(e) {
    let x = e.clientX;
    let y = e.clientY;

    let i = document.createElement('i')
    i.classList.add('fa-solid')
    i.classList.add('fa-heart');

    i.style.left = `${x}px`;
    i.style.top = `${y}px`;

    document.body.appendChild(i)

    console.log(x, y);

    setTimeout(() => {
        // document.body.appendChild(i);
        i.classList.remove('fa-heart');
        i.classList.remove('fa-solid');
    }, 500);
}

function clearCoor() {
    x = 0;
    y = 0;

    console.log(x, y);
}