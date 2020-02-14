import validator from './validator.js';

const creditCardNumber = document.getElementById('credit-card-number');
const header = document.getElementById('header');
const mainSection = document.getElementById('main-section');
const button = document.getElementById('button');
const validationSection = document.getElementById('validation');
const goodValidationImage = document.getElementById('validation-image-good');
const notValidatedImage = document.getElementById('validation-image-bad');
const validationText = document.getElementById('validation-text');

validationSection.style.display = 'none';

// validator.isvalid(creditCardNumber);
// validator.maskify(creditCardNumber);

// validation.innerText = 'prueba';

console.log(creditCardNumber);
// console.log(validator);