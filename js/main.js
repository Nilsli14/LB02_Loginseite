const registerButton = document.getElementById("register-button");
const registerSection = document.getElementById("register-section");
const registerCloseModalButton = document.getElementById("register-close-modal-button");
const registerCancelButton = document.getElementById("register-cancel-button");
const registerPasswordField = document.getElementById('register-password');
const registerPasswordRepeatField = document.getElementById('register-password-repeat');
const registerSubmitButton = document.getElementById("register-submit-button");
const registerEmailField = document.getElementById('register-email');
const registerEmailHint = document.getElementById('register-email-hint')
const registerPasswordHint = document.getElementById('register-password-hint')
const registerPasswordCheckHint = document.getElementById('register-password-check-hint')
const registerForm = document.getElementById("register-form");
let passwordValid = false;
let emailValid = false;
let registerPasswordField2;
let registerEmailField2;


function checkEmail() {
    const emailValue = registerEmailField.value;
    emailValid = false;

    const pattern = /^.{3,}@.{3,}\..{2,3}$/;
    if (emailValue.match(pattern))
    {
        // valid
        registerEmailField.classList.remove("bad-input");
        registerEmailField.classList.add("good-input");
        registerEmailHint.classList.remove("bad-hint");
        registerEmailHint.classList.add("good-hint");
        registerEmailHint.innerText = ("Korrekt!");
        emailValid = true;
    }
    else {
        registerEmailField.classList.remove("good-input");
        registerEmailField.classList.add("bad-input");
        registerEmailHint.classList.add("bad-hint");
        registerEmailHint.classList.remove("good-hint");
        registerEmailHint.innerText = ("E-Mail-Adresse ist nicht valid!");
    }
}
function checkPass() {
    passwordValid = false;
    const password1Value = registerPasswordField.value;
    const password2Value = registerPasswordRepeatField.value;

    //if password length is less than 8
    if (password1Value.length < 8) {
        feedback('Enter a password of at least 8 characters');
        registerPasswordRepeatField.classList.remove("bad-input");
        registerPasswordRepeatField.classList.remove("good-input");

        //if pass1 is blank, set neutral background
        if (password1Value.length === 0) {
            registerPasswordField.classList.remove("bad-input");
            registerPasswordField.classList.remove("good-input");
        } else {
            registerPasswordField.classList.remove("good-input");
            registerPasswordField.classList.add("bad-input");
            registerPasswordHint.classList.remove("good-hint");
            registerPasswordHint.classList.add("bad-hint");
            registerPasswordHint.innerText = ("Passwort ist nicht valid!");
        }
        //else if passwords do not match
    } else if (password2Value !== password1Value) {
        //we now know that pass1 is long enough
        feedback('Confirm password');
        registerPasswordField.classList.remove("bad-input");
        registerPasswordField.classList.add("good-input");
        registerPasswordHint.classList.add("good-hint");
        registerPasswordHint.classList.remove("bad-hint");
        registerPasswordHint.innerText = ("Passwort ist OK!");
        //if pass2 is blank, set neutral background
        if (password2Value.length === 0) {
            registerPasswordRepeatField.classList.remove("bad-input");
            registerPasswordRepeatField.classList.remove("good-input");
        } else {
            registerPasswordRepeatField.classList.remove("good-input");
            registerPasswordRepeatField.classList.add("bad-input");
            registerPasswordCheckHint.classList.add("bad-hint");
            registerPasswordCheckHint.classList.remove("good-hint");
            registerPasswordCheckHint.innerText = ("Falsches Passwort!");
        }
        //else all is well
    } else {
        feedback('Passwords match');
        registerPasswordField.classList.remove("bad-input");
        registerPasswordField.classList.add("good-input");
        registerPasswordRepeatField.classList.remove("bad-input");
        registerPasswordRepeatField.classList.add("good-input");
        registerPasswordCheckHint.classList.remove("bad-hint");
        registerPasswordCheckHint.classList.add("good-hint");
        registerPasswordCheckHint.innerText = ("Richtiges Passwort!");
        passwordValid = true;
    }
}

//helper function for feedback message
function feedback(msg) {
    console.log(msg);

}


registerButton.addEventListener('click', () => {
    registerSection.classList.remove('hidden');
})

function closeRegisterModal() {
    registerSection.classList.add('hidden')
}

function updateRegisterSubmit() {
    if (passwordValid && emailValid) {
        registerSubmitButton.disabled = false;
    } else {
        registerSubmitButton.disabled = true;
    }
}
function handelsubmit(){
    registerPasswordField2 = document.getElementById("register-password").value;
    registerEmailField2 = document.getElementById("register-email").value;
    alert("Sie haben sich erfolgreich registriert, mit der Email: " + registerEmailField2 +
        "und dem Passwort: " + registerPasswordField2);
    event.preventDefault()
    writeJson()
}

registerCloseModalButton.addEventListener('click', closeRegisterModal);
registerCancelButton.addEventListener('click', closeRegisterModal);
registerEmailField.addEventListener('keyup', checkEmail)
registerEmailField.addEventListener('keyup', updateRegisterSubmit);
registerPasswordField.addEventListener('keyup', checkPass)
registerPasswordRepeatField.addEventListener('keyup', checkPass)
registerForm.addEventListener('change', updateRegisterSubmit);
registerForm.addEventListener('submit', handelsubmit);
registerPasswordRepeatField.addEventListener('keyup', updateRegisterSubmit)
