const heartIcon = document.querySelector('.bxs-heart');
const wrapper = document.querySelector('.wrapper');
const miniHeart = document.querySelector('.icons .bx-heart');
const miniBookmark = document.querySelector('.icons .bx-bookmark');
const commentInput = document.querySelector('.comment_input');
const postBtn = document.querySelector('.post-btn')

wrapper.addEventListener("dblclick", e => {
    heartIcon.classList.add("active");
    miniHeart.classList.add("bxs-heart");

    let xValue = e.clientX - e.target.offsetLeft;
    let yValue = e.clientY - e.target.offsetTop;

    heartIcon.style.left = `${xValue}px`
    heartIcon.style.top = `${yValue}px`

    setTimeout(() => {
        heartIcon.classList.remove("active");
    }, 1000);
});


miniHeart.addEventListener("click", () => {
    miniHeart.classList.toggle("bxs-heart");
})

miniBookmark.addEventListener("click", () => {
    miniBookmark.classList.toggle("bxs-bookmark");
})

setInterval(() => {
    if (commentInput.textLength <= 0) {
        postBtn.classList.add('activ');
    } else {
        postBtn.classList.remove('activ');
    }
}, 1000);