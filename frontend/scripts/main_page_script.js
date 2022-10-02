// Variables
const editProfilemodal = document.getElementById("edit-profile-modal");
const editProfileBtn = document.getElementById("edit-profile-btn");
const closeEditProfileBtn = document.getElementById("close-edit-profile-btn");


// Modal related stuff
if (typeof editProfilemodal.showModal !== 'function') {
    editProfilemodal.hidden = true;
}


// Listeners functions
const openEditProfile = () => {
    editProfilemodal.showModal();
}

const closeEditProfile = () => {
    editProfilemodal.close();
}



// Event listeners
editProfileBtn.addEventListener("click", openEditProfile);
closeEditProfileBtn.addEventListener("click", closeEditProfile);


// Helper functions



