import validator from './validator.js';

const creditCardInput = document.getElementById("credit-card-number");
const button = document.getElementById("button");

button.addEventListener('click', () => {
    creditCardInput.innerText = maskify(creditCardInput);
});



console.log(validator);