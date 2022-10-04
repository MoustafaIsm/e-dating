const url = "http://127.0.0.1:8000/api";

// Variables
const loginBtn = document.getElementById("login-btn");
const loginEmail = document.getElementById("login-email-input");
const loginPassword = document.getElementById("login-password-input");
const loginError = document.getElementById("login-error");

const signupText = document.getElementById("signup-text");
const signupModal = document.getElementById("signup-modal");
const signupCloseModal = document.getElementById("signup-close-modal");

const signupBtn = document.getElementById("signup-btn");
const signupFullName = document.getElementById("signup-name-input");
const signupEmail = document.getElementById("signup-email-input");
const signupPassword = document.getElementById("signup-password-input");
const signupAge = document.getElementById("signup-age-input");
const signupGender = document.getElementsByName("gender");
const signupIntrested = document.getElementsByName("intrested-gender")

// Modal related stuff
if (typeof signupModal.showModal !== 'function') {
    signupModal.hidden = true;
}
// Listeners functions
const loginUser = () => {
    if (loginEmail.value != "" && loginPassword.value != "") {

        const formData = new FormData();
        formData.append("email", loginEmail.value);
        formData.append("password", loginPassword);

        axios.post(`${url}/auth/login`, formData)
            .then((response) => {
                // saveUserData(response.data);
                window.location.href = "../main.html";
            })
            .catch((error) => loginError.textContent = "Invalid email or password.");
    } else {
        loginError.textContent = "Error";
    }
}

const openSignupModal = () => {
    signupModal.showModal();
    signupModal.classList.remove("hide");
}

const closeSignupModal = () => {
    signupModal.close();
    signupModal.classList.add("hide");
}

const signupUser = () => {
    if (checkeSelected(signupGender) && checkeSelected(signupIntrested)) {
        const name = signupFullName.value;
        const email = signupEmail.value;
        const password = signupPassword.value;
        const age = signupAge.value;
        const gender = getGender();
        const intrested = getIntrested();
        const location = getLocation();
    }
}

// Event listeners
loginBtn.addEventListener("click", loginUser);

signupText.addEventListener("click", openSignupModal);
signupCloseModal.addEventListener("click", closeSignupModal);

signupBtn.addEventListener("click", signupUser);

// Helper functions
const checkeSelected = (array) => {
    let selected = false;
    for (const item of array) {
        if (item.checked)
            selected = true;
    }
    return selected;
}

const getGender = () => {
    for (const item of signupGender) {
        if (item.checked)
            return item.value;
    }
    return "NA";
}

const getIntrested = () => {
    let selected = "";
    for (const item of signupIntrested) {
        if (item.checked)
            selected += item.value + ",";
    }
    return selected;
}

const validateEmail = (email) => {
    return email.match(/(.+)@(.+){2,}\.(.+){2,}/);
}

const validatePassword = (password) => {
    return password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
}
