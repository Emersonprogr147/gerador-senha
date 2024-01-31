//Select Elements
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

//New Function 

 
const openGeneratorPasswordButton = document.querySelector("#open-generate-password");
const generatorPasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers"); 
const symbolsInput = document.querySelector("#symbols"); 
const copyPasswordButton = document.querySelector("#copy-password"); 

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


const getSymbol = () => {
    const symbols = "(){} []=<> /.,!@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {

    let password = " " 
    const passwordLength = 10

    const generators = [

        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol 
    ] 


    for (i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => { 
              const randomValue = generators[Math.floor(Math.random() * generators.length)]() ; 
       password += randomValue ;
        });
    }

 password = password.slice(0, passwordLength); 


    generatedPasswordElement.style.display = "block ";

    generatedPasswordElement.querySelector("h4").innerText = password ;
};


//Event
generatePasswordButton.addEventListener("click", () => {
    generatePassword( getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
        );
});


openGeneratorPasswordButton.addEventListener("click",  ()=> { 
generatorPasswordContainer.classList.toggle("hide");

});