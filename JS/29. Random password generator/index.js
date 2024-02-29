// RANDOM PASSWORD GENERATOR

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars   = "0123456789";
    const symbolChars    = "!@#$%^&*()_[]{}<>?:";

    let allowedChars = "";
    let password     = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numbersChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 4){
        return `(Password length must be at least 4)`;
    }
    if(includeLowerCase === false){
        return `(Password MUST include a lowercase character)`;
    }
    else if(includeUpperCase === false){
        return `(Password MUST include a uppercase character)`;
    }
    else if(includeNumbers === false){
        return `(Password MUST include a number)`;
    }
    else if(includeSymbols === false){
        return `(Password MUST include a symbol)`;
    }
    
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                  includeLowerCase,
                                  includeUpperCase,
                                  includeNumbers,
                                  includeSymbols);
                                  
console.log(`Generated password = ${password}`);