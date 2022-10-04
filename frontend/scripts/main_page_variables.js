// Variables
const homeNavBtn = document.getElementById("home-nav-btn");
const msgsNavBtn = document.getElementById("msgs-nav-btn");
const profileNavBtn = document.getElementById("profile-nav-btn");
const homeBurgerNavBtn = document.getElementById("home-burger-nav-btn");
const msgsBurgerNavBtn = document.getElementById("msgs-burger-nav-btn");
const profileBurgerNavBtn = document.getElementById("profile-burger-nav-btn");
const homePage = document.getElementById("home-page");
const msgsPage = document.getElementById("msgs-page");
const profilePage = document.getElementById("profile-page");

const burgerMenu = document.getElementById("burger-menu");
const burgerMenuBtns = document.getElementById("burger-menu-btns");

const editProfilemodal = document.getElementById("edit-profile-modal");
const editProfileBtn = document.getElementById("edit-profile-btn");
const closeEditProfileBtn = document.getElementById("close-edit-profile-btn");

// Profile
const userProfilePicture = document.getElementById("user-profile-picture");
const userInfo = document.getElementById("user-info");


// Modal related stuff
if (typeof editProfilemodal.showModal !== 'function') {
    editProfilemodal.hidden = true;
}