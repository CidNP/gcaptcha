// selecting DOM elements

const captchaTextBox = document.querySelector(".captcha-box input");
const resetButton = document.querySelector(".reset-button");
const captchaInputBox = document.querySelector(".captcha-input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

//variable to store generated captcha
let captchaText = null;

//Function to generate captcha

const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) => 
    (Math.random() > 0.5 ? char.toUpperCase() : char));
    captchaText = changeString.join("  ");
    captchaTextBox.value= captchaText;
    console.log(captchaText);
};


