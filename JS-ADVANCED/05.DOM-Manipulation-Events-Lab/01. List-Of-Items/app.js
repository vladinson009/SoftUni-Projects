function addItem() {
    const items = document.getElementById('items');
    const newItemText = document.getElementById('newItemText');

    const li = document.createElement('li');
    li.textContent = newItemText.value;
    items.appendChild(li);
    console.log(items);
    newItemText.value = '';
}