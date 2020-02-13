// User cases
//  const creditCardInput = '4056789067542345';
const creditCardInput = '4137894711755904';
// const creditCardInput = '';
// const creditCardInput = 'ASER4'

function validateUserInput(creditCardInput) {
    // validates user input is not empty and is a number
    if (creditCardInput.length === 0) {
        console.log('Por favor ingrese los dígitos de su tarjeta')
    } else if (creditCardInput.length > 0) {
        const digitsRegEx = /^[0-9]*$/.test(creditCardInput)
        if (digitsRegEx === true) {
            turnStringToArray(creditCardInput)
        } else {
            console.log('Por favor ingrese sólo dígitos')
        }
    }
}

function turnStringToArray(creditCardInput) {
    // converts user input to an array of numbers
    let creditCardArray = []
    for (let i = 0; i < creditCardInput.length; i++) {
        const charToNumber = parseInt(creditCardInput.charAt(i))
        creditCardArray.push(charToNumber)
    }
    return creditCardArray;
}

function reversingArray(arr) {
    // reverses the array
    const reversedArray = [];
    for (let i = newArray.length - 1; i >= 0; i--) {
        reversedArray.push(newArray[i]);
    }
    return reversedArray;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // esto debería ser una función o varias??
function preparingLuhn() {
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

function validatingLuhn() {
    let finalValue = (preparedArray.reduce(reducer));
    if (finalValue % 10 === 0) {
        console.log('Su tarjeta es válida, estás siendo redirigido al sitio de pago')
    } else {
        console.log('Oh no! Tu tarjeta no ha sido reconocida. Quieres intentarlo de nuevo?')
    }
}

validateUserInput(creditCardInput);
const newArray = turnStringToArray(creditCardInput);
const newReversedArray = reversingArray(newArray);
const preparedArray = preparingLuhn(newReversedArray);
validatingLuhn(preparedArray);