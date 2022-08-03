"use strict"

const rangeEl = document.querySelector("#font-size-control")
console.log(rangeEl);
const textEl = document.querySelector("#text");

function changeSize(event) {
    const rangeSize = event.target.value;
    textEl.style.fontSize = rangeSize + "px";
}

rangeEl.addEventListener("input", changeSize)