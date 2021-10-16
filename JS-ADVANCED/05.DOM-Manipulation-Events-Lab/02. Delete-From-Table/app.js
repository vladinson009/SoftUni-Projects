function deleteByEmail() {
    const contents = document.querySelectorAll('#customers tbody tr');
    const input = document.querySelector('input[type="text"][name="email"]');
    const result = document.getElementById('result');


    for (let content of contents) {
        const email = content.children[1].textContent;
        if (input.value == email) {
            content.remove()
            result.textContent = 'Deleted.';
            break;
        }
        result.textContent = 'Not found.';
    }

}