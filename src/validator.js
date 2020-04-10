const turnStringToArray = (string) => {
    let newArr = [];
    for (let i = 0; i < string.length; i++) {
        const element = parseInt(string.charAt(i))
        newArr.push(element);
    }
    return newArr;
}

const reversingArray = (array) => {
    const newArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArr.push(array[i]);
    }
    return newArr;
}

const reducer = (accumulator, currentValue) => { return accumulator + currentValue };

const preparingLuhn = (newReversedArray) => {
    let validationArray = [];
    for (let i = 0; i <= newReversedArray.length - 1; i++) {
        let newIndexValue = 0;
        let resizedDigit = 0;
        let temporarySum = [];
        if (i % 2 === 0) {
            validationArray.push(newReversedArray[i]);
        } else {
            newIndexValue = newReversedArray[i] * 2;
            if (newIndexValue >= 10) {
                newIndexValue = newIndexValue.toString();
                for (let i = 0, len = newIndexValue.length; i < len; i += 1) {
                    temporarySum.push(+newIndexValue.charAt(i));
                }
                resizedDigit = (temporarySum.reduce(reducer));
                validationArray.push(resizedDigit);
            } else {
                validationArray.push(newIndexValue);
            }
        }
    }
    return validationArray;
}

const validatingLuhn = (validationArray) => {
    let finalValue = (validationArray.reduce(reducer));
    if (finalValue % 10 === 0) {
        return true;
    } else {
        return false;
    }
}

const validator = {
    isValid: (string) => {
        const arr = reversingArray(turnStringToArray(string));

        return resultado;
    },
    maskify: (creditCardNumber) => {
        return creditCardNumber.replace(/.(?=.{4,}$)/g, '#');
    }
};

export default validator;