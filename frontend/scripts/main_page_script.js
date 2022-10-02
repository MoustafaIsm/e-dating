// Variables
const homeNavBtn = document.getElementById("home-nav-btn");
const msgsNavBtn = document.getElementById("msgs-nav-btn");
const profileNavBtn = document.getElementById("profile-nav-btn");
const homePage = document.getElementById("home-page");
const msgsPage = document.getElementById("msgs-page");
const profilePage = document.getElementById("profile-page");

const burgerMenu = document.getElementById("burger-menu");
const burgerMenuBtns = document.getElementById("burger-menu-btns");

const editProfilemodal = document.getElementById("edit-profile-modal");
const editProfileBtn = document.getElementById("edit-profile-btn");
const closeEditProfileBtn = document.getElementById("close-edit-profile-btn");


// Modal related stuff
if (typeof editProfilemodal.showModal !== 'function') {
    editProfilemodal.hidden = true;
}


// Listeners functions
const openHomePage = () => {
    openPage("home");
}

const openMsgsPage = () => {
    openPage("msgs");
}

const openProfilePage = () => {
    openPage("profile");
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

burgerMenu.addEventListener("click", openMenu);

editProfileBtn.addEventListener("click", openEditProfile);
closeEditProfileBtn.addEventListener("click", closeEditProfile);


// Helper functions
const openPage = (page) => {
    if (page == "home") {
        homePage.classList.remove("hide");
        homeNavBtn.classList.add("active-nav-btn");
        msgsPage.classList.add("hide");
        msgsNavBtn.classList.remove("active-nav-btn");
        profilePage.classList.add("hide");
        profileNavBtn.classList.remove("active-nav-btn");
    }
    if (page == "msgs") {
        homePage.classList.add("hide");
        homeNavBtn.classList.remove("active-nav-btn");
        msgsPage.classList.remove("hide");
        msgsNavBtn.classList.add("active-nav-btn");
        profilePage.classList.add("hide");
        profileNavBtn.classList.remove("active-nav-btn");
    }
    if (page == "profile") {
        homePage.classList.add("hide");
        homeNavBtn.classList.remove("active-nav-btn");
        msgsPage.classList.add("hide");
        msgsNavBtn.classList.remove("active-nav-btn");
        profilePage.classList.remove("hide");
        profileNavBtn.classList.add("active-nav-btn");
    }
}


