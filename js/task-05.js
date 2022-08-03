const inputEl = document.querySelector('#name-input');
console.log(inputEl);

const textEl = document.querySelector('#name-output');
console.log(textEl);

function handerInput(event) {
  const text = event.currentTarget.value;  // currentTarget VS target??
  text ? (textEl.textContent = text) : (textEl.textContent = 'Anonymous');
}

inputEl.addEventListener('input', handerInput);
