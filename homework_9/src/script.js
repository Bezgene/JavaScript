document.addEventListener('DOMContentLoaded', function () {
    const tabTitles = document.querySelectorAll('.tabs-title');
    const tabContents = document.querySelectorAll('.tabs-content li');

    function clearActiveTabs() {
        tabTitles.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.style.display = 'none');
    }

    clearActiveTabs();
    tabTitles[0].classList.add('active');
    tabContents[0].style.display = 'block';

    tabTitles.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            clearActiveTabs();
            tab.classList.add('active');
            tabContents[index].style.display = 'block';
        });
    });
});
