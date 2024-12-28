document.addEventListener('DOMContentLoaded', function() {

    const authForm = document.getElementById('authForm');
    const loginInput = document.getElementById('login');
    const dateOfBirthInput = document.getElementById('date_of_birth');
    const genderSelect = document.getElementById('gender');
    const loginError = document.getElementById('login-error');
    const dateOfBirthError = document.getElementById('date_of_birth-error');
    const genderError = document.getElementById('gender-error');

    authForm.addEventListener('submit', function (e) {
        e.preventDefault();

        loginError.textContent = '';
        dateOfBirthError.textContent = '';
        genderError.textContent = '';

        let isValid = true;
        if (!loginInput.value.trim()){
            loginError.textContent = 'Пожалуйста, введите логин';
            isValid = false;
        }
        if (!dateOfBirthInput.value.trim()){
            dateOfBirthError.textContent = 'Пожалуйста, введите дату рождения';
            isValid = false;
        }
        if (!genderSelect.value){
            genderError.textContent = 'Пожалуйста, выберите пол';
            isValid = false;
        }

        if(isValid){
            const login = loginInput.value.trim();
            const dateOfBirth = dateOfBirthInput.value;
            const gender = genderSelect.value;

            localStorage.setItem('userLogin', login);
            localStorage.setItem('userDate', dateOfBirth);
            localStorage.setItem('userGender', gender);
            localStorage.setItem('testScore', 0);

            window.location.href = 'main.html';
        }
    });
});