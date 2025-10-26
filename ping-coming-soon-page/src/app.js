const emailInput = document.querySelector("#email");
const formElement = document.querySelector(".ping-page-form");
const forgotErrorMessage = document.querySelector(".error-forgot-email");
const invalidErrorMessage = document.querySelector(".error-invalid-email");


formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const regex = /^[\w.-]+@[\w.-]+\.[\w-]+$/;

    if (emailInput.value === "") {
        forgotErrorMessage.classList.remove("hidden");
        emailInput.classList.add("invalid");
    } else if(!regex.test(emailInput.value)) {
        invalidErrorMessage.classList.remove("hidden");
        emailInput.classList.add("invalid");
    } else {
        alert("We have received your email, we'll get back to you!");
        emailInput.value = "";     
    }
})

emailInput.addEventListener("input", () => {
    forgotErrorMessage.classList.add("hidden");
    invalidErrorMessage.classList.add("hidden");
    emailInput.classList.remove("invalid");
})
