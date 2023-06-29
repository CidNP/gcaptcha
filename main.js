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

const resetBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
}

const captchaKeyUpValidate = () => {
    //toggle submit button disable class based on captcha input field.
    submitButton.classList.toggle("disabled", !captchaInputBox.value);

    if (!captchaInputBox.value) message.classList.remove("active");
};

//function to validate the enetered captcha

const submitBtnClick = () => {
    captchaText = captchaText
        .split("")
        .filter((char) => char !== " ")
        .join("");
    message.classList.add("active");

    //Check if the entered captcha text is correct or not
    if (captchaInputBox.value === captchaText) {
        message.innerText = "Captcha Correct";
        message.style.color = "#FF2525";
    } else{
        message.innerText = "Captcha Incorrect";
        message.style.color = "#FF2525"
    }
};


// add event listeners for the reset button, captchaInputBox, submit button
resetButton.addEventListener("click", resetBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

//generate a captcha when the page loads
generateCaptcha();
