const turnStringToArrayOfDigits = (string) => {
    const stringToNumber = Number(string);
    const arrayOfDigits = Array.from(String(stringToNumber), Number);
    return arrayOfDigits;
};

const reversedArray = turnStringToArrayOfDigits(string).reverse();

const reducer = (a, b) => { a + b };

const prepareArrayForValidation = (reversedArray) => {
    let finalArray = [];
    for (let i = 0; i <= reversedArray.length - 1; i++) {
        let newIndexValue = 0;
        let resizedDigit = 0;
        let temporarySum = [];
        if (i % 2 === 0) {
            finalArray.push(reversedArray[i]);
        } else {
            newIndexValue = reversedArray[i] * 2;
            if (newIndexValue >= 10) {
                newIndexValue = newIndexValue.toString();
                for (let i = 0, len = newIndexValue.length; i < len; i += 1) {
                    temporarySum.push(+newIndexValue.charAt(i));
                }
                resizedDigit = (temporarySum.reduce(reducer));
                finalArray.push(resizedDigit);
            } else {
                finalArray.push(newIndexValue);
            }
        }
    }
    return finalArray;
}

const validateCreditCard = (validationArray) => {
    let finalValue = (validationArray.reduce(reducer));
    if (finalValue % 10 === 0) {
        return true;
    } else {
        return false;
    }
}

const validator = {
    isValid: (string) => {
        const arr = reversedArray(turnStringToArrayOfDigits(string));
        const result = validateCreditCard(prepareArrayForValidation(arr));
        return result;
    },

    maskify: (creditCardNumber) => {
        return creditCardNumber.replace(/.(?=.{4,}$)/g, '#');
    },
};

export default validator;