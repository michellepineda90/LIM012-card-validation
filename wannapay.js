/* Unit tests
 const creditCardInput = '4056789067542345';
const creditCardInput = '';
const creditCardInput = 'ASER4'
*/

function validateUserInput(creditCardInput) {
    // validates user input is not empty and is a number
    if (creditCardArray.length === 0) {
        console.log('Por favor ingrese los dígitos de su tarjeta')
    } else if (creditCardArray.length > 0) {
        const digitsRegEx = /^[0-9]*$/.test(creditCardInput)
        if (digitsRegEx === true) {
            turnStringToArray(creditCardInput)
        } else {
            console.log('Por favor ingrese sólo dígitos')
        }
    }
}

validateUserInput(creditCardInput);

function turnStringToArray(creditCardInput) {
    // converts user input to an array of numbers
    let creditCardArray = []
    for (let i = 0; i < creditCardInput.length; i++) {
        const charToNumber = parseInt(creditCardInput.charAt(i))
        creditCardArray.push(charToNumber)
    }
    return creditCardArray;
}

const newArray = turnStringToArray(creditCardInput);

function reversingArray(arr) {
    // reverses the array
    const reversedArray = [];
    for (let i = newArray.length - 1; i >= 0; i--) {
        reversedArray.push(newArray[i]);
    }
    return reversedArray;
}

const validationArray = reversingArray(newArray);

function verifyLuhn(arr) {

}

for (let i = 0; i <= myArray.length - 1; i++) {
    let newIndexValue = 0;
    let temporarySum = [];
    let resizedDigit = 0;
    if (i % 2 === 0) {
        validationArray.push(myArray[i]);
    } else {
        newIndexValue = myArray[i] * 2;
        if (newIndexValue >= 10) {
            //descomponer un número en dígitos
            newIndexValue = newIndexValue.toString();
            for (let i = 0, len = newIndexValue.length; i < len; i += 1) {
                temporarySum.push(+newIndexValue.charAt(i));
            }
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            resizedDigit = (temporarySum.reduce(reducer));
            validationArray.push(resizedDigit);
        } else {
            validationArray.push(newIndexValue);
        }
    }
}

// falta sumar todo ese array y validarlo según Luhn y ver si esa suma%10 === 0; tarjeta es válida