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
    } else {
        alert("Thank you! Check your email.")
        inputEl.value = "";
    }
}

const handleError = () => {
    formEl.classList.remove("show");
}

inputEl.addEventListener("input", handleError);
formEl.addEventListener('submit',handleValidation);
