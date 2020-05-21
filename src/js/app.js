// To count the number of books in this website;
let booksCount = MahabharataList.length + RamayanaList.length + HODharmashastraList.length + swamiKarpatriBooks.length + learnSanskritBooks.length + puranaBooks.length;

// To grab the UL's for populating them
let mahabharataBookList = document.querySelector(".mahabharata");
let ramayanaBookList = document.querySelector(".ramayana");
let HODharmashastraBookList = document.querySelector(".history-of-dharmashastra");
let karpatrijiBookList = document.querySelector(".karpatriji");
let learnSanskritBookList = document.querySelector(".learn-sanskrit");
let bhagavadgitaBookList = document.querySelector(".bhagavadgita");
let puranaBookList = document.querySelector(".puranas");

let count = document.querySelector(".count");
count.innerText = "There are " + booksCount + " books in this library";

// Populating Mahabharata book list
MahabharataList.forEach(item => {
    let div = document.createElement("div");
    div.classList.add("book");

    let figure = document.createElement("figure");

    let img = document.createElement("img");
    img.setAttribute("src", item.img);

    let figcaption = document.createElement("figcaption");
    figcaption.classList.add("book-title");

    let a = document.createElement("a");
    a.setAttribute("href", item.download);
    a.innerText = item.title;

    figcaption.appendChild(a);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    div.appendChild(figure);

    mahabharataBookList.appendChild(div);
});

// Populating Ramayana book list
RamayanaList.forEach(item => {
    let div = document.createElement("div");
    div.classList.add("book");

    let figure = document.createElement("figure");

    let img = document.createElement("img");
    img.setAttribute("src", item.img);

    let figcaption = document.createElement("figcaption");
    figcaption.classList.add("book-title");

    let a = document.createElement("a");
    a.setAttribute("href", item.download);
    a.innerText = item.title;

    figcaption.appendChild(a);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    div.appendChild(figure);

    ramayanaBookList.appendChild(div);
});

// Populating HOD book list
HODharmashastraList.forEach(item => {
    let div = document.createElement("div");
    div.classList.add("book");

    let figure = document.createElement("figure");

    let img = document.createElement("img");
    img.setAttribute("src", item.img);

    let figcaption = document.createElement("figcaption");
    figcaption.classList.add("book-title");

    let a = document.createElement("a");
    a.setAttribute("href", item.download);
    a.innerText = item.title;

    figcaption.appendChild(a);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    div.appendChild(figure);

    HODharmashastraBookList.appendChild(div);
});

// Populating Karpatri Ji's works
swamiKarpatriBooks.forEach(item => {
    let div = document.createElement("div");
    div.classList.add("book");

    let figure = document.createElement("figure");

    let img = document.createElement("img");
    img.setAttribute("src", item.img);

    let figcaption = document.createElement("figcaption");
    figcaption.classList.add("book-title");

    let a = document.createElement("a");
    a.setAttribute("href", item.download);
    a.innerText = item.title;

    figcaption.appendChild(a);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    div.appendChild(figure);

    karpatrijiBookList.appendChild(div);
});

// Populating Karpatri Ji's works
learnSanskritBooks.forEach(item => {
    let div = document.createElement("div");
    div.classList.add("book");

    let figure = document.createElement("figure");

    let img = document.createElement("img");
    img.setAttribute("src", item.img);

    let figcaption = document.createElement("figcaption");
    figcaption.classList.add("book-title");

    let a = document.createElement("a");
    a.setAttribute("href", item.download);
    a.innerText = item.title;

    figcaption.appendChild(a);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    div.appendChild(figure);

    learnSanskritBookList.appendChild(div);
});

// Populating Bhagavadgita book list
bhagavadgitaBooks.forEach(item => {
    let div = document.createElement("div");
    div.classList.add("book");

    let figure = document.createElement("figure");

    let img = document.createElement("img");
    img.setAttribute("src", item.img);

    let figcaption = document.createElement("figcaption");
    figcaption.classList.add("book-title");

    let a = document.createElement("a");
    a.setAttribute("href", item.download);
    a.innerText = item.title;

    figcaption.appendChild(a);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    div.appendChild(figure);

    bhagavadgitaBookList.appendChild(div);
});

// Populating puranas list
puranaBooks.forEach(item => {
    let div = document.createElement("div");
    div.classList.add("book");

    let figure = document.createElement("figure");

    let img = document.createElement("img");
    img.setAttribute("src", item.img);

    let figcaption = document.createElement("figcaption");
    figcaption.classList.add("book-title");

    let a = document.createElement("a");
    a.setAttribute("href", item.download);
    a.innerText = item.title;

    figcaption.appendChild(a);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    div.appendChild(figure);

    puranaBookList.appendChild(div);
});