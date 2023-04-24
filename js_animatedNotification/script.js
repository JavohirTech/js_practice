let successBtn = document.querySelector('.success-btn');
let errorBtn = document.querySelector('.error-btn');
let warningBtn = document.querySelector('.warning-btn');
let infoBtn = document.querySelector('.info-btn');
let alert = document.querySelector('.alert');

let buttons = document.querySelectorAll('.buttons');

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        alert.classList.remove('hide');
        alert.classList.add('show');
        console.log(alert);
        setTimeout(() => {
            alert.classList.remove('show');
            alert.classList.add('hide');
            console.log(alert);
        }, 3000)
    })

})
