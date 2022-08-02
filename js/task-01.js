"use srtict"

const count = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${count}`);

// const titlesList = document.querySelector("h2");
// console.log(`Category: ${titlesList.textContent}`);
// console.log(`Elements:: ${titlesList.nextElementSibling.children.length}`);

const titlesList = document.querySelectorAll("h2");
titlesList.forEach(function (el) {
console.log(`Category: ${el.textContent}`);
console.log(`Elements: ${el.nextElementSibling.children.length}`);
})
    