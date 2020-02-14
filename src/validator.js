const validator = {
    // ...

    isvalid(creditCardNumber) {

    },


    maskify(creditCardNumber) {
        creditCardInput.replace(/.(?=.{4,}$)/g, '#');
    }

};

export default validator;