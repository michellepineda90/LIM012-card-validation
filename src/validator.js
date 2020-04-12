const turnStringToArrayOfDigits = (string) => {
    const stringToNumber = Number(string);
    const arrayOfDigits = Array.from(String(stringToNumber), Number);
    return arrayOfDigits;
};

const reducer = (a, b) => a + b;

const prepareArrayForValidation = (reversedArray) => {
    let validationArray = [];
    for (let i = 0; i <= reversedArray.length - 1; i++) {
        let newDigitValue = 0;
        let resizedDigit = 0;
        let temporarySum = [];
        if (i % 2 === 0) {
            validationArray.push(reversedArray[i]);
        } else {
            newDigitValue = reversedArray[i] * 2;            
            if (newDigitValue >= 10) {
                newDigitValue = newDigitValue.toString();
                temporarySum = turnStringToArrayOfDigits(newDigitValue);
                resizedDigit = temporarySum.reduce(reducer);
                validationArray.push(resizedDigit);
            } else {
                validationArray.push(newDigitValue);
            }
        }
    }
    return validationArray;
};

/*
const validateCreditCard = (validationArray) => {
    let finalValue = ;
    return finalValue % 10 === 0;
}
*/

const validator = {
    isValid: (string) => {
        const reversedArray = turnStringToArrayOfDigits(string).reverse();
        const validationArray = prepareArrayForValidation(reversedArray);
        return (validationArray.reduce(reducer)) % 10 === 0;
    },

    maskify: (creditCardNumber) => {
        return creditCardNumber.replace(/.(?=.{4,}$)/g, '#');
    },
};

export default validator;
