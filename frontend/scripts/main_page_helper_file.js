const url = "http://127.0.0.1:8000/api/user";
const token = localStorage.getItem("token");

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

const fillFavorites = () => {
    axios.get(`${url}/favorites/get_favorites`, {
        headers: { 'Authorization': `Bearer ${token}` }
    }).then((response) => {
        populateCards(favoritesWrapper, response.data.result);
    }).catch((error) => {
        console.log(error);
        // window.location.href = "../frontend/index.html";
    });
}

const populateCards = (container, array) => {
    container.innerHTML = ``;
    if (array.length == 0) {
        container.innerHTML = `<p> You have no favorited users </p>`;
    }
    for (const item of array) {
        let ppHolder = "";
        if (item.favorited_info.profile_picture_url != "NA")
            ppHolder = `<img src="${item.favorited_info.profile_picture_url}" alt="Profile picture">`;
        container.innerHTML += `
            <!-- Card -->
            <div class="card">
                <!-- Profile information -->
                <div class="info-wrapper">
                    <!-- Image -->
                    <div class="img-wrapper"> ${ppHolder} </div>
                    <!-- Details -->
                    <div class="details-wrapper">
                        <p class="bold-text meduim-text"> ${item.favorited_info.full_name} </p>
                        <p class="regular-text"> ${item.favorited_info.age} </p>
                        <p class="regular-text"> ${item.favorited_info.gender} </p>
                    </div>
                </div>
                <!-- Bio -->
                <div class="bio-wrapper">
                    <p class="bold-text meduim-text"> Bio: </p>
                    <p> ${item.favorited_info.bio} </p>
                </div>
                <!-- Buttons -->
                <div class="btns-wrapper">
                    <span class="material-symbols-outlined">
                        favorite
                    </span>
                    <span class="material-symbols-outlined">
                        send
                    </span>
                </div>
            </div>
        `;
    }
}