function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('.profile button'));
    buttons.forEach(b => b.addEventListener('click', toggleFunction));

    function toggleFunction(e) {
        const profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            const infoDiv = profile.querySelector('div');

            if (e.target.textContent == 'Show more') {
                infoDiv.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                infoDiv.style.display = '';
                e.target.textContent = 'Show more';
            }
        }
    }
}