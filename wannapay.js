const creditCardInput = '4056789067542345';
// const creditCardInput = "";

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

reversingArray(newArray);