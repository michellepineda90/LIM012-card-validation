import validator from './validator.js';
import formValidator from './form-validation.js';

const creditCardNumber = document.getElementById('credit-card-number');
const form = document.getElementById('credit-card-form');
const mainSection = document.getElementById('main-section');
const validationSection = document.getElementById('validation');
const goodValidationImage = document.getElementById('image-good');
const notValidatedImage = document.getElementById('image-bad');
const validationText = document.getElementById('validation-text');
const loadingGif = document.getElementById('loading-gif');
const reloadButton = document.getElementById('reload-button');

const captureInfo = (event) => {
    event.preventDefault();
    if (formValidator.isValid(creditCardNumber.value)) {
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
        creditCardNumber.setCustomValidity('Por favor ingresa los dígitos de tu tarjeta');
    }
};

const reload = () => {
    validationSection.classList.add('hide');
    mainSection.classList.remove('hide');
    creditCardNumber.setAttribute("autocomplete", "off");
};

form.addEventListener('submit', captureInfo);
reloadButton.addEventListener('click', reload);

    