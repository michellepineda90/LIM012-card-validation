import validator from './validator.js';


const creditCardNumber = document.getElementById('credit-card-number').value;
const header = document.getElementById('header');
const mainSection = document.getElementById('main-section');
const button = document.getElementById('button');
const validationSection = document.getElementById('validation');
const goodValidationImage = document.getElementById('image-good');
const notValidatedImage = document.getElementById('image-bad');
const validationText = document.getElementById('validation-text');
const maskedNumber = validator.maskify(creditCardNumber); //esto está bien declarado? accesado?

validationSection.style.display = 'none';


const captureInfo = () => {
    //validates user input is not empty and is a number, if so, run validator
    if (creditCardNumber.length === 0) {
        alert('Por favor ingrese los dígitos de su tarjeta')
    } else if (creditCardNumber.length > 0) {
        const digitsRegEx = /^[0-9]*$/.test(creditCardNumber)
        if (digitsRegEx) {
            validator.isValid(creditCardNumber);
            validationSection.style.display = 'block' && header.style.display = 'none' && mainSection.style.display = 'none';
        } else {
            alert('Por favor ingrese sólo dígitos')
        }
    }

    if (validator.isvalid(creditCardNumber)) {
        goodValidationImage.style.display = 'block' && notValidatedImage.style.display = 'none';
        validationText.innerText = `Tu tarjeta ${String(maskedNumber)} es válida. Estás siendo redirigido al sitio de pago...`;
    } else {
        goodValidationImage.style.display = 'none' && notValidatedImage.style.display = 'block';
        validationText.innerText = `Tu tarjeta ${String(maskedNumber)} no ha sido reconocida. Por favor inténtalo de nuevo.`;
    }
};

button.addEventListener('click', captureInfo);

console.log(validator);