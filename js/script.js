//Select Elements
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");


//New Function with option for select the type in  Password 

const openCloseGeneratorButton = document.querySelector("#open-generate-password")
const generatorPasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#length")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const copyPasswordButton = document.querySelector("#copy-password")

//Function  for  to generate Password 


const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};


const getSymbols = () => {
    const symbols = "(){} []=<>/.,!@#$%&*";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbols
) => {

    let password = " ";

    // segunda version  
    const passwordLength = +lengthInput.value;

    const generators = [];
    if (lettersInput.checked) {

        generators.push(getLetterLowerCase, getLetterUpperCase);
    }

    if (numbersInput.checked) {

        generators.push(getNumber);

    }

     if (symbolsInput.checked) {
 
         generators.push(getSymbols);
 
     } 



     console.log(generators.length);

    if (generators.length === 0) {
        return;

    }


    for (i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            password += randomValue;
        });
    }

    password = password.slice(0, passwordLength);

    generatedPasswordElement.style.display = "block";

    generatedPasswordElement.querySelector("h4").innerText = password;

}

//Event for click and  to hide options in password 
generatePasswordButton.addEventListener("click", () => {
    generatePassword(getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbols
    );
});

openCloseGeneratorButton.addEventListener("click", () => {
    generatorPasswordContainer.classList.toggle("hide");

});


// Event for click  and save  register  

