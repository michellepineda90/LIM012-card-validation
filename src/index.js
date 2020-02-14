import validator from './validator.js';


let creditCardNumber;
const header = document.getElementById('header');
const mainSection = document.getElementById('main-section');
const button = document.getElementById('button');
const validationSection = document.getElementById('validation');
const goodValidationImage = document.getElementById('validation-image-good');
const notValidatedImage = document.getElementById('validation-image-bad');
const validationText = document.getElementById('validation-text');

validationSection.style.display = 'none';

const captureInfo = () => {
    creditCardNumber = document.getElementById('credit-card-number').value;
    validator.isvalid(creditCardNumber);
    // validator.maskify(creditCardNumber);
    validationSection.style.display = 'block';
    header.style.display = 'none';
    mainSection.style.display = 'none';
};

button.addEventListener('click', captureInfo);

// if (validator.isvalid(creditCardNumber) === true) {
// goodValidationImage.style.display = 'block';
// notValidatedImage.style.display = 'none';
//     validation.innerText = 'yay';
// } else {
// goodValidationImage.style.display = 'none';
// notValidatedImage.style.display = 'block';
//     validation.innerText = 'nope';
// }

console.log(validator);