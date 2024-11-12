document.addEventListener('DOMContentLoaded', () => {
    const passwordFields = document.querySelectorAll('.input-wrapper input');
    const toggleIcons = document.querySelectorAll('.icon-password');
    const submitButton = document.querySelector('.btn');
    const form = document.querySelector('.password-form');

    toggleIcons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            const field = passwordFields[index];
            if (field.type === 'password') {
                field.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                field.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const password1 = passwordFields[0].value;
        const password2 = passwordFields[1].value;
        const errorMessage = document.querySelector('.error-message');

        if (password1 === '' && password2 === '') {
            alert('Пажалуйста, введите пароль!')
            return;
        }

        if (password1 === password2) {
            alert('You are welcome');
        } else {
            if (!errorMessage) {
                const error = document.createElement('div');
                error.textContent = 'Нужно ввести одинаковые значения';
                error.style.color = 'red';
                error.classList.add('error-message');
                form.appendChild(error);
            }
        }
    });

    passwordFields.forEach(field => {
        field.addEventListener('input', () => {
            const errorMessage = document.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
        });
    });
});
