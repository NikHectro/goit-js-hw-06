"use sctrict"

const inputEl = document.querySelector("#validation-input")
const checkingLengs = inputEl.getAttribute("data-length");

function handerInput(event) {
    const enterLength = event.target.value.length
    enterLength >= checkingLengs ?
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid") :
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
        
        // inputEl.setAttribute("id", "validation-input.valid") :
        // inputEl.setAttribute("id", "validation-input.invalid");
    
    // console.log(enterLength, checkingLengs);
    // console.log(enterLength >= checkingLengs);
    // console.log(inputEl.getAttribute("id"));
    // console.log(inputEl.attributes);
}

inputEl.addEventListener("blur", handerInput)