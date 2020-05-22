let menuBtn = document.querySelector("#check");
let menuUl = document.querySelector(".nav-menu");

menuBtn.addEventListener('click', (e) => {
    if (menuBtn.checked) {
        menuUl.style.left = 0;
    }
    else {
        menuUl.style.left = -100 + "%";
    }
});