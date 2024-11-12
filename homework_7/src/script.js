function displayList(items) {
    const listItems = items.map(item => `<li>${item}</li>`).join('');

    const list = `<ul>${listItems}</ul>`;

    document.getElementById('list-container').innerHTML = list;
}

const elements = ['MSI', 'Acer', 'ASUS', 'Palit', 'Gigabite', 'Asrock'];

displayList(elements);
