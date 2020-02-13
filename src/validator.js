const validator = {
    // ...

    validator.isvalid(creditCardNumber) {

    }


    validator.maskify(creditCardNumber) {
        creditCardInput.replace(/.(?=.{4,}$)/g, '#');
    }

};

export default validator;