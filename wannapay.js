const creditCardInput = '4056789067542345';
// const creditCardInput = "";

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


// el parámetro puede ser lo que sea, realmente

function validateUserInput(creditCardArray) {
    // validates user inputs is not empty ++ should also validate is numbers
    if (creditCardArray.length === 0) {
        console.log('Por favor ingrese los dígitos de su tarjeta')
    } else {
        console.log('Continúe')
    }
}

// pero el argumento sí me tengo que cerciorar que sea lo que quiero
validateUserInput(newArray);

function reversingArray(arr) {
    // reverses an array
    const reversedArray = [];
    for (let i = myArray.length - 1; i >= 0; i--) {
        reversedArray.push(myArray[i]);
    }
    return reversedArray;
}

reversingArray(myArray);

/* Regex para ver que la tarjeta contenga sólo números y el tipo de tarjeta
^(?:4[0-9]{12}(?:[0-9]{3})?          # Visa
 |  (?:5[1-5][0-9]{2}                # MasterCard
     | 222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}
 |  3[47][0-9]{13}                   # American Express
 |  3(?:0[0-5]|[68][0-9])[0-9]{11}   # Diners Club
 |  6(?:011|5[0-9]{2})[0-9]{12}      # Discover
 |  (?:2131|1800|35\d{3})\d{11}      # JCB
)$
*/