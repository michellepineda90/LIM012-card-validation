const validator = {
    // ...


    // aquí debo cambiar por el selector del DOM
    validator.maskify(creditCardNumber) {
        creditCardInput.replace(/.(?=.{4,}$)/g, '#');
    }

};

export default validator;