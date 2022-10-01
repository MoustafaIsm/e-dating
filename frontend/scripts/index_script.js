// Variables
const signupText = document.getElementById("signup-text");
const signupModal = document.getElementById("signup-modal");
const signupCloseModal = document.getElementById("signup-close-modal");

// Modal related stuff
if (typeof signupModal.showModal !== 'function') {
    signupModal.hidden = true;
}
// Listeners functions
const openSignupModal = () => {
    signupModal.showModal();
    signupModal.classList.remove("hide");
}

const closeSignupModal = () => {
    signupModal.close();
    signupModal.classList.add("hide");
}



// Event listeners
signupText.addEventListener("click", openSignupModal);
signupCloseModal.addEventListener("click", closeSignupModal);


// Helper functions



