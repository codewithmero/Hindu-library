// Mahabharata books list
let MahabharataList = [
    {
        img: "./src/img/mahabharat.jpg",
        title: "गीता प्रेस: महाभारत(भाग-1)",
        download: "https://archive.org/download/Mahabharata_201712/1_Mahabharata.pdf"
    },
    {
        img: "./src/img/mahabharat.jpg",
        title: "गीता प्रेस: महाभारत(भाग-2)",
        download: "https://archive.org/download/Mahabharata_201712/2_Mahabharata.pdf"
    },
    {
        img: "./src/img/mahabharat.jpg",
        title: "गीता प्रेस: महाभारत(भाग-3)",
        download: "https://archive.org/download/Mahabharata_201712/3_Mahabharata.pdf"
    },
    {
        img: "./src/img/mahabharat.jpg",
        title: "गीता प्रेस: महाभारत(भाग-4)",
        download: "https://archive.org/download/Mahabharata_201712/4_Mahabharata.pdf"
    },
    {
        img: "./src/img/mahabharat.jpg",
        title: "गीता प्रेस: महाभारत(भाग-5)",
        download: "https://archive.org/download/Mahabharata_201712/5_Mahabharata.pdf"
    },
    {
        img: "./src/img/mahabharat.jpg",
        title: "गीता प्रेस: महाभारत(भाग-6)",
        download: "https://archive.org/download/Mahabharata_201712/6_Mahabharata.pdf"
    }
]

// Ramayana books list
let RamayanaList = [
    {
        img: "./src/img/valmiki-ramayanaI.jpg",
        title: "गीता प्रेस: वाल्मीकि रामायण(भाग-1)",
        download: "https://archive.org/download/ValmikiRamayanIGitaPressGorakhpur/Valmiki%20Ramayan%20I%20-%20Gita%20Press%20Gorakhpur.pdf"
    },
    {
        img: "./src/img/valmiki-ramayanaII.jpg",
        title: "गीता प्रेस: वाल्मीकि रामायण(भाग-2)",
        download: "https://archive.org/download/ValmikiRamayanIIGitaPressGorakhpur/Valmiki%20Ramayan%20II%20-%20Gita%20Press%20Gorakhpur.pdf"
    },
    {
        img: "./src/img/adhyatma-ramayana.jpg",
        title: "गीता प्रेस: आध्यात्म रामायण",
        download: "https://archive.org/download/AdhyatmaRamayanGitaPressGorakhpur_201904/Adhyatma%20Ramayan%20-%20Gita%20Press%20Gorakhpur.pdf"
    },
    {
        img: "./src/img/ramcharitmanas.jpg",
        title: "गीता प्रेस: श्री रामचरितमानस",
        download: "https://archive.org/download/RamcharitmanasGitapress/Ramcharitmanas%20Gitapress.pdf"
    }
]

// History of Dharmashastra list
let HODharmashastraList = [
    {
        img: "./src/img/HODharmashastra.jpg",
        title: "History of Dharmashastra: Vol-I",
        download: "https://archive.org/download/HistoryOfDharmasastraancientAndMediaevalReligiousAndCivilLawV.1/Kane_A-History-of-Dharmasastra-v1_1930.pdf"
    },
    {
        img: "./src/img/HODharmashastra.jpg",
        title: "History of Dharmashastra: Vol-II Part-I",
        download: "https://archive.org/download/HistoryOfDharmasastraancientAndMediaevalReligiousAndCivilLawV.2.1/Kane_A-History-of-Dharmasastra-v2-1_1941.pdf"
    },
    {
        img: "./src/img/HODharmashastra.jpg",
        title: "History of Dharmashastra: Vol-II Part-II",
        download: "https://archive.org/download/HistoryOfDharmasastraancientAndMediaevalReligiousAndCivilLawV.2.2/Kane_A-History-of-Dharmasastra-v2-2_1941.pdf"
    },
    {
        img: "./src/img/HODharmashastra.jpg",
        title: "History of Dharmashastra: Vol-III",
        download: "https://archive.org/download/HistoryOfDharmasastraancientAndMediaevalReligiousAndCivilLawV.3/Kane_A-History-of-Dharmasastra-v3_1946.pdf"
    },
    {
        img: "./src/img/HODharmashastra.jpg",
        title: "History of Dharmashastra: Vol-IV",
        download: "https://archive.org/download/HistoryOfDharmasastraancientAndMediaevalReligiousAndCivilLawV.4/Kane_A-History-of-Dharmasastra-v4_1953.pdf"
    },
    {
        img: "./src/img/HODharmashastra.jpg",
        title: "History of Dharmashastra: Vol-V Part-I",
        download: "https://archive.org/download/KhistoryOfDharmasastraancientAndMediaevalReligiousAndCivilLaw/Kane_A-History-of-Dharmasastra-v5-1toc_1958.pdf"
    },
    {
        img: "./src/img/HODharmashastra.jpg",
        title: "History of Dharmashastra: Vol-V Part-II",
        download: "https://archive.org/download/HistoryOfDharmasastraancientAndMediaevalReligiousAndCivilLawV.5.2/Kane_A-History-of-Dharmasastra-v5-2_1962.pdf"
    }
]

// To count the number of books in this website;
let booksCount = MahabharataList.length + RamayanaList.length + HODharmashastraList.length;

// To grab the UL's for populating them
let mahabharataBookList = document.querySelector(".mahabharata");
let ramayanaBookList = document.querySelector(".ramayana")
let HODharmashastraBookList = document.querySelector(".history-of-dharmashastra");

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