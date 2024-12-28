let userLogin = "";
let userDate = "";
let userGender = "";
function displayProfileName(name) {
    const profileNameElement = document.getElementById('profileName');
    if (profileNameElement) {
        profileNameElement.textContent = name;
    }
}

function displayUserInfo(login, dateOfBirth, gender) {
    const userLoginElement = document.getElementById('userLogin');
    const userDateElement = document.getElementById('userDate');
    const userGenderElement = document.getElementById('userGender');

    if (userLoginElement) userLoginElement.textContent = login;
    if (userDateElement) userDateElement.textContent = dateOfBirth;
    if (userGenderElement) userGenderElement.textContent = gender;
}

function showFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.classList.add('visible');
    }
}


if (sessionStorage.getItem('userLogin')) {
    userLogin = sessionStorage.getItem('userLogin');
    userDate = sessionStorage.getItem('userDate');
     userGender = sessionStorage.getItem('userGender');
    displayProfileName(userLogin);
    displayUserInfo(userLogin, userDate, userGender);
}

showFooter();