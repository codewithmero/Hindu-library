let body = document.querySelector("body");
console.log(body);
let menuBtn = document.querySelector("#check");
let menuUl = document.querySelector(".nav-menu");

menuBtn.addEventListener('click', (e) => {
    if (menuBtn.checked) {
        menuUl.style.left = 0;
        body.style.overflowY = "hidden";
    }
    else {
        menuUl.style.left = -100 + "%";
        body.style.overflowY = "auto";
    }
});