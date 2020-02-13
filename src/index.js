import validator from './validator.js';

const creditCardInput = document.getElementById("credit-card-number");
const button = document.getElementById("button");
const goodValidationPage = document.getElementById("validated");
const notValidatedPage = document.getElementById("not-validated");

button.addEventListener('click', () => {
    creditCardInput.innerText = maskify(creditCardInput);
});



console.log(validator);