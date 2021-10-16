function attachGradientEvents() {
    const result = document.getElementById('result');
    const element = document.getElementById('gradient');
    element.addEventListener('mousemove', onMove);

    function onMove(ev) {
        const box = ev.target;
        const offset = Math.floor(ev.offsetX / box.clientWidth * 100)
        result.textContent = offset + '%'
    }
}