import validator from './validator.js';

const creditCardNumber = document.getElementById('credit-card-number');
const header = document.getElementById('header');
const mainSection = document.getElementById('main-section');
const button = document.getElementById('button');
const validationSection = document.getElementById('validation');
const goodValidationImage = document.getElementById('image-good');
const notValidatedImage = document.getElementById('image-bad');
const validationText = document.getElementById('validation-text');
const loadingGif = document.getElementById('loading-gif');
const reloadButton = document.getElementById('reload-button');

const captureInfo = (event) => {
    event.preventDefault();
    // validates user input is not empty and is a number, if so, run validator
    if (!creditCardNumber.value.length) {
        alert('Este campo no puede quedar vacío')
    } else if (creditCardNumber.value.length > 0) {
        const digitsRegEx = /^[0-9]*$/.test(creditCardNumber.value)
        if (digitsRegEx) {
            validationSection.classList.remove('hide');
            header.classList.add('hide');
            mainSection.classList.add('hide');
            validator.isValid(creditCardNumber.value);
            if (validator.isvalid(creditCardNumber.value)) {
                goodValidationImage.style.display = 'block;'
                notValidatedImage.style.display = 'none';
                validationText.innerText = `Tu tarjeta ${String(validator.maskify(creditCardNumber.value))} es válida. Estás siendo redirigido al sitio de pago...`;
                loadingGif.style.display = 'block';
            } else {
                goodValidationImage.style.display = 'none';
                notValidatedImage.style.display = 'block';
                validationText.innerText = `Tu tarjeta ${String(validator.maskify(creditCardNumber.value))} no ha sido reconocida. ¿Quieres intentarlo de nuevo?`;
            }
        } else {
            alert('Por favor ingresa sólo dígitos');
        }
    }
};

const reload = () => {
    validationSection.style.display = 'none';
};

button.addEventListener('click', captureInfo);
reloadButton.addEventListener('click', reload);

console.log(validator);