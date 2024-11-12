document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById('themeToggle');
    const bodyElement = document.body;

    // Проверка и загрузка темы при загрузке страницы
    if (localStorage.getItem('theme') === 'dark') {
        bodyElement.classList.add('dark-theme');
    }

    // Обработчик события для кнопки смены темы
    themeToggleButton.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-theme');

        // Сохранение текущей темы в localStorage
        if (bodyElement.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
    });
});