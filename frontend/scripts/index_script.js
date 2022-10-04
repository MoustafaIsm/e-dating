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
const signupIntrested = document.getElementsByName("intrested-gender");
const signupError = document.getElementById("signup-error");

// Modal related stuff
if (typeof signupModal.showModal !== 'function') {
    signupModal.hidden = true;
}
// Listeners functions
const loginUser = () => {
    loginError.innerText = "";
    if (loginEmail.value != "" && loginPassword.value != "") {

        const formData = new FormData();
        formData.append("email", loginEmail.value);
        formData.append("password", loginPassword.value);

        axios.post(`${url}/auth/login`, formData)
            .then((response) => {
                login(response.data);
            })
            .catch((error) => {
                loginError.textContent = "Invalid email or password.";
            });
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

const signupUser = async () => {
    signupError.innerText = "";
    if (checkeSelected(signupGender) && checkeSelected(signupIntrested)
        && validateEmail(signupEmail.value) && validatePassword(signupPassword.value)) {
        const formData = new FormData();
        formData.append("name", signupFullName.value);
        formData.append("email", signupEmail.value);
        formData.append("password", signupPassword.value);
        formData.append("age", signupAge.value);
        formData.append("gender", getGender());
        formData.append("intrested_in", getIntrested());
        window.navigator.geolocation.getCurrentPosition((response) => {
            const long = response.coords.longitude;
            const lat = response.coords.latitude;
            const key = "d06600033d4a46e99b31c71538561636 ";
            const url1 = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${key}`;
            axios.get(url1).then((response) => {
                formData.append("location", response.data.results[0].formatted);
                axios.post(`${url}/auth/register`, formData)
                    .then((response1) => {
                        login(response1.data);
                    })
                    .catch((error) => {
                        signupError.innerText = "Please choose another email.";
                    });
            }).catch((error) => console.log(error));
        }, console.log);
    } else {
        signupError.style.color = "red";
        signupError.innerText = "Please enter a valid email, and a valid password.";
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

const getLocation = () => {
    if (window.navigator.geolocation) {
        return
    }
}

const validateEmail = (email) => {
    const pattern = /(.+)@(.+){2,}\.(.+){2,}/;
    return email.match(pattern);
}

const validatePassword = (password) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return password.match(pattern);
}

const login = (data) => {
    saveDataTolocalStorage(data);
    window.location.href = "../frontend/main.html";
}

const saveDataTolocalStorage = (data) => {
    localStorage.setItem("token", data.authorisation.token);
    localStorage.setItem("id", data.user.id);
    localStorage.setItem("Name", data.user.full_name);
    localStorage.setItem("age", data.user.age);
    localStorage.setItem("location", data.user.location);
    localStorage.setItem("gender", data.user.gender);
    localStorage.setItem("intrestedIn", data.user.intrested_in);
}
