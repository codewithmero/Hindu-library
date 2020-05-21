// To count the number of books in this website;
let booksCount = MahabharataList.length + RamayanaList.length + HODharmashastraList.length + swamiKarpatriBooks.length + gitaBooks.length + learnSanskritBooks.length + puranaBooks.length + dharmasutraBooks.length + smritiBooks.length + sanskritNatyaBooks.length + robertSvabodaBooks.length + granthaBooks.length;

// To grab the UL's for populating them
let mahabharataBookList = document.querySelector(".mahabharata");
let ramayanaBookList = document.querySelector(".ramayana");
let HODharmashastraBookList = document.querySelector(".history-of-dharmashastra");
let karpatrijiBookList = document.querySelector(".karpatriji");
let learnSanskritBookList = document.querySelector(".learn-sanskrit");
let gitaBookList = document.querySelector(".bhagavadgita");
let puranaBookList = document.querySelector(".puranas");
let dharmasutraBookList = document.querySelector(".dharmasutras");
let smritiBookList = document.querySelector(".smritis");
let sanskritNatyaList = document.querySelector(".sanskrit-natya");
let robertSvabodaList = document.querySelector(".robert-svaboda");
let granthaList = document.querySelector(".granthas")


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

// Populating gita book list
gitaBooks.forEach(item => {
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

    gitaBookList.appendChild(div);
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

// Populating dharmasutra list
dharmasutraBooks.forEach(item => {
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

    dharmasutraBookList.appendChild(div);
});

// Populating smriti books
smritiBooks.forEach(item => {
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

    smritiBookList.appendChild(div);
});

// Populating famous sanskrit natyas
sanskritNatyaBooks.forEach(item => {
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

    sanskritNatyaList.appendChild(div);
});

// Populating robert Svaboda books
robertSvabodaBooks.forEach(item => {
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

    robertSvabodaList.appendChild(div);
});


// Populating grantha books
granthaBooks.forEach(item => {
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

    granthaList.appendChild(div);
});