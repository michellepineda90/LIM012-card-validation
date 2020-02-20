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
    if (!creditCardNumber.value.length) {
        alert('Este campo no puede quedar vacío');
    } else if (creditCardNumber.value.length > 0) {
        const digitsRegEx = /^[0-9]*$/.test(creditCardNumber.value);
        if (digitsRegEx) {
            header.classList.add('hide');
            mainSection.classList.add('hide');
            validationSection.classList.remove('hide');
            validator.isValid(creditCardNumber.value);
            if (validator.isValid(creditCardNumber.value)) {
                goodValidationImage.classList.remove('hide');
                loadingGif.classList.remove('hide');
                notValidatedImage.classList.add('hide');
                reloadButton.classList.add('hide');
                validationText.innerText = `Tu tarjeta ${String(validator.maskify(creditCardNumber.value))} es válida. Estás siendo redirigido al sitio de pago...`;
            } else {
                notValidatedImage.classList.remove('hide');
                reloadButton.classList.remove('hide');
                goodValidationImage.classList.add('hide');
                loadingGif.classList.add('hide');
                validationText.innerText = `Tu tarjeta ${String(validator.maskify(creditCardNumber.value))} no ha sido reconocida. ¿Quieres intentarlo de nuevo?`;
            }
        } else {
            alert('Por favor ingresa sólo dígitos');
        }
    }
};

const reload = () => {
    validationSection.classList.add('hide');
    header.classList.remove('hide');
    mainSection.classList.remove('hide');
    creditCardNumber.setAttribute("autocomplete", "off");

};

button.addEventListener('click', captureInfo);
reloadButton.addEventListener('click', reload);

// console.log(validator);