import validator from './validator.js';


let creditCardNumber;
const header = document.getElementById('header');
const mainSection = document.getElementById('main-section');
const button = document.getElementById('button');
const validationSection = document.getElementById('validation');
const goodValidationImage = document.getElementById('image-good');
const notValidatedImage = document.getElementById('image-bad');
const validationText = document.getElementById('validation-text');

validationSection.style.display = 'none';

const captureInfo = () => {
    creditCardNumber = document.getElementById('credit-card-number').value;
    validator.isvalid(creditCardNumber);
    // validator.maskify(creditCardNumber);
    validationSection.style.display = 'block';
    header.style.display = 'none';
    mainSection.style.display = 'none';
    if (validator.isvalid(creditCardNumber) === true) {
        goodValidationImage.style.display = 'block';
        notValidatedImage.style.display = 'none';
        validationText.innerText = 'Tu tarjeta maskify es válida. Estás siendo redirigido al sitio de pago...';
    } else {
        goodValidationImage.style.display = 'none';
        notValidatedImage.style.display = 'block';
        validationText.innerText = 'Tu tarjeta maskify no ha sido reconocida. Por favor inténtalo de nuevo.';
    }
};

button.addEventListener('click', captureInfo);

console.log(validator);