const formEl = document.querySelector(".email-signup");
const inputEl = document.querySelector(".email-signup-input");
const submitButton = document.querySelector(".email-submit-button");
const errorIcon = document.querySelector(".error-icon");
const errorText = document.querySelector(".error-text");

const handleValidation = (e) => {
    e.preventDefault();
    const regEx = /^[\w.-]+@[\w.-]+\.[\w-]+$/;

    if (!regEx.test(inputEl.value)) {
        formEl.classList.add("show");
        formEl.classList.add("show");
        
    } else {
        formEl.classList.remove("show");
        formEl.classList.remove("show");
        alert("Thank you! Check your email.")
        inputEl.value = "";
    }
}

formEl.addEventListener('submit',handleValidation)
