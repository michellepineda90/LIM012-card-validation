const validator = {

    isvalid(creditCardNumber) {

        const validateUserInput = (creditCardNumber) => {
            // validates user input is not empty and is a number
            if (creditCardNumber.length === 0) {
                alert('Por favor ingrese los dígitos de su tarjeta')
            } else if (creditCardNumber.length > 0) {
                const digitsRegEx = /^[0-9]*$/.test(creditCardNumber)
                if (digitsRegEx === true) {
                    turnStringToArray(creditCardNumber);
                } else {
                    alert('Por favor ingrese sólo dígitos')
                }
            }
        }

        const turnStringToArray = (creditCardNumber) => {
            // converts user input to an array of numbers
            let creditCardArray = []
            for (let i = 0; i < creditCardNumber.length; i++) {
                const charToNumber = parseInt(creditCardNumber.charAt(i))
                creditCardArray.push(charToNumber);
            }
            return creditCardArray;
        }

        const reversingArray = (creditCardArray) => {
            // reverses the array
            const reversedArray = [];
            for (let i = creditCardArray.length - 1; i >= 0; i--) {
                reversedArray.push(creditCardArray[i]);
            }
            return reversedArray;
        }

        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        // // esto debería ser una función o varias??
        const preparingLuhn = () => {
            let validationArray = [];
            for (let i = 0; i <= newReversedArray.length - 1; i++) {
                let newIndexValue = 0;
                let temporarySum = [];
                let resizedDigit = 0;
                if (i % 2 === 0) {
                    validationArray.push(newReversedArray[i]);
                } else {
                    newIndexValue = newReversedArray[i] * 2;
                    if (newIndexValue >= 10) {
                        //descomponer un número en dígitos
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

        const validatingLuhn = () => {
            let finalValue = (preparedArray.reduce(reducer));
            if (finalValue % 10 === 0) {
                return true;
            } else {
                return false;
            }
        }

        validateUserInput(creditCardNumber);
        const creditCardArray = turnStringToArray(creditCardNumber);
        const newReversedArray = reversingArray(creditCardArray);
        const preparedArray = preparingLuhn(newReversedArray);
        const resultado = validatingLuhn(preparedArray);
        console.log(resultado);
    },


    maskify(creditCardNumber) {
        return creditCardNumber.replace(/.(?=.{4,}$)/g, '#');
    }

};

export default validator;