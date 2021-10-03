function toggle() {
    const button = document.querySelector('#accordion span');
    const text = document.getElementById('extra');

    button.textContent = button.textContent == 'More' ? 'Less' : 'More';
    text.style.display = text.style.display == '' || text.style.display == 'none' ? 'block' :
        text.style.display = 'none';
}