import validator from './validator.js';


let creditCardNumber = document.getElementById('credit-card-number').value;
const header = document.getElementById('header');
const mainSection = document.getElementById('main-section');
const button = document.getElementById('button');
const validationSection = document.getElementById('validation');
const goodValidationImage = document.getElementById('image-good');
const notValidatedImage = document.getElementById('image-bad');
const validationText = document.getElementById('validation-text');
const maskedNumber = validator.maskify(creditCardNumber);

validationSection.style.display = 'none';

const captureInfo = () => {
    validationSection.style.display = 'block';
    header.style.display = 'none';
    mainSection.style.display = 'none';
    if (validator.isvalid(creditCardNumber)) {
        goodValidationImage.style.display = 'block';
        notValidatedImage.style.display = 'none';
        validationText.innerText = `Tu tarjeta ${maskedNumber} es válida. Estás siendo redirigido al sitio de pago...`;
    } else {
        goodValidationImage.style.display = 'none';
        notValidatedImage.style.display = 'block';
        validationText.innerText = `Tu tarjeta ${maskedNumber} no ha sido reconocida. Por favor inténtalo de nuevo.`;
    }
};

button.addEventListener('click', captureInfo);

console.log(button);
console.log(validator);