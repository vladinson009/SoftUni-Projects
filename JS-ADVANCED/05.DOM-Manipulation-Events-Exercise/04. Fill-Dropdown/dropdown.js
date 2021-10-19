function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const option = document.createElement('option');

    option.textContent = newItemText.value;
    option.value = newItemValue.value;
    document.getElementById('menu').appendChild(option);
    newItemText.value = '';
    newItemValue.value = '';

}