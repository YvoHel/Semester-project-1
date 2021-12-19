const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phoneError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const sucsess = document.querySelector(".sucsess");

let nameValidation = false;
let subjectValidation = false;
let emailValidation = false;
let messageValidation = false;

function validateForm() {
    event.preventDefault();

    if (name.value.trim().length > 3) {
        nameError.style.display = "none";
        nameValidation = true;
    } else {
        nameError.style.display = "block";
    }


    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
        emailValidation = true;
    } else {
        emailError.style.display = "block";
    }

    if (phone.value.trim().length > 7) {
        phoneError.style.display = "none";
        subjectValidation = true;
    } else {
        phoneError.style.display = "block";
    }


    if (message.value.trim().length > 25) {
        messageError.style.display = "none";
        messageValidation = true;
    } else {
        messageError.style.display = "block";
    }
    
    if (nameValidation === true && emailValidation === true && messageValidation === true && subjectValidation === true) {
        sucsess.style.display = "block";
        document.getElementById("contact-form").classList.add('hide');
        document.getElementById("contact-info").classList.add('hide');
    }

}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

form.addEventListener("submit", validateForm);