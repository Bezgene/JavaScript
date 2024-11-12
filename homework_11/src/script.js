 document.addEventListener('keydown', function(event) {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
    button.style.backgroundColor = '#33333a';
});
    const keyName = event.key.toUpperCase();
    const buttonToHighlight = Array.from(buttons).find(btn => btn.textContent.toUpperCase() === keyName);

    if (buttonToHighlight) {
    buttonToHighlight.style.backgroundColor = 'blue';
}
});
