function addItem() {
    const items = document.getElementById('items');
    const newItemText = document.getElementById('newItemText');

    const li = document.createElement('li');
    li.textContent = newItemText.value;

    const a = document.createElement('a')
    a.textContent = '[Delete]';
    a.href = '#';
    a.addEventListener('click', (e) => e.target.parentElement.remove());

    li.appendChild(a);
    items.appendChild(li);

    newItemText.value = '';

}