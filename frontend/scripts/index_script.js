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
}

const closeSignupModal = () => {
    signupModal.close();
}



// Event listeners
signupText.addEventListener("click", openSignupModal);
signupCloseModal.addEventListener("click", closeSignupModal);


// Helper functions



