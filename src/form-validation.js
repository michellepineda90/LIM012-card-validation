const onlyDigits = new RegExp('^[0-9]+$');

const validator = {
    isValid: string => string !== '' && onlyDigits.test(string), 
};

export default validator;
