window.onload = () => {
    fillDiscover();
}

// Listeners functions
const openHomePage = () => {
    openPage("home");
    fillDiscover();
}

const openMsgsPage = () => {
    openPage("msgs");
}

const openProfilePage = () => {
    openPage("profile");
    fillUserInfo();
    fillFavorites();
}

const openMenu = () => {
    burgerMenuBtns.classList.toggle("hide");
}

const openEditProfile = () => {
    editProfilemodal.classList.remove("hide");
    editProfilemodal.showModal();
}

const closeEditProfile = () => {
    editProfilemodal.classList.add("hide");
    editProfilemodal.close();
}



// Event listeners
homeNavBtn.addEventListener("click", openHomePage);
msgsNavBtn.addEventListener("click", openMsgsPage);
profileNavBtn.addEventListener("click", openProfilePage);
homeBurgerNavBtn.addEventListener("click", openHomePage);
msgsBurgerNavBtn.addEventListener("click", openMsgsPage);
profileBurgerNavBtn.addEventListener("click", openProfilePage);

burgerMenu.addEventListener("click", openMenu);

editProfileBtn.addEventListener("click", openEditProfile);
closeEditProfileBtn.addEventListener("click", closeEditProfile);





