const heartIcon = document.querySelector('.bxs-heart');
const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener("dblclick", e => {
    heartIcon.classList.add("active");

    let xValue = e.clientX - e.target.offsetLeft;
    let yValue = e.clientY - e.target.offsetTop;

    heartIcon.style.left = `${xValue}px`
    heartIcon.style.top = `${yValue}px`

    setTimeout(() => {
        heartIcon.classList.remove("active");
    }, 1000);
})