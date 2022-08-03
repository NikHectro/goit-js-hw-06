let counterValue = 0;
const valueEl = document.querySelector('#value');
// console.log(valueEl.textContent);
// valueEl.textContent = counterValue;

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtnEl);
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

const handleClickMinus = () => {
    counterValue -= 1;
    return valueEl.textContent = counterValue;
}

const handleClickPlus = () => {
    counterValue += 1;
    return valueEl.textContent = counterValue;
}

decrementBtnEl.addEventListener("click", handleClickMinus);
incrementBtnEl.addEventListener("click", handleClickPlus)