// Helper functions
const openPage = (page) => {
    if (page == "home") {
        homePage.classList.remove("hide");
        homeNavBtn.classList.add("active-nav-btn");
        homeBurgerNavBtn.classList.add("active-burger-nav-btn");
        msgsPage.classList.add("hide");
        msgsNavBtn.classList.remove("active-nav-btn");
        msgsBurgerNavBtn.classList.remove("active-burger-nav-btn");
        profilePage.classList.add("hide");
        profileNavBtn.classList.remove("active-nav-btn");
        profileBurgerNavBtn.classList.remove("active-burger-nav-btn");
    }
    if (page == "msgs") {
        homePage.classList.add("hide");
        homeNavBtn.classList.remove("active-nav-btn");
        homeBurgerNavBtn.classList.remove("active-burger-nav-btn");
        msgsPage.classList.remove("hide");
        msgsNavBtn.classList.add("active-nav-btn");
        msgsBurgerNavBtn.classList.add("active-burger-nav-btn");
        profilePage.classList.add("hide");
        profileNavBtn.classList.remove("active-nav-btn");
        profileBurgerNavBtn.classList.remove("active-burger-nav-btn");
    }
    if (page == "profile") {
        homePage.classList.add("hide");
        homeNavBtn.classList.remove("active-nav-btn");
        homeBurgerNavBtn.classList.remove("active-burger-nav-btn");
        msgsPage.classList.add("hide");
        msgsNavBtn.classList.remove("active-nav-btn");
        msgsBurgerNavBtn.classList.remove("active-burger-nav-btn");
        profilePage.classList.remove("hide");
        profileNavBtn.classList.add("active-nav-btn");
        profileBurgerNavBtn.classList.add("active-burger-nav-btn");
    }
}

const fillUserInfo = () => {
    if (localStorage.getItem("profile_picture") != "NA")
        userProfilePicture.innerHTML = `<img src="${localStorage.getItem("profile_picture_url")}" alt="Profile Picture">`;
    userInfo.innerHTML = `
        <P class="meduim-text bold-text"> ${localStorage.getItem("name")} </P>
        <p> ${localStorage.getItem("email")} </p>
        <p> ${localStorage.getItem("gender")} </p>
        <p> ${localStorage.getItem("location")} </p>
        <p> ${localStorage.getItem("bio")} </p>
    `;
}