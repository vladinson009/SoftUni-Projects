function extractText() {
    const text = document.getElementById('items').children;
    const result = document.getElementById('result');

    const arr = [];

    for (const item of Array.from(text)) {
        arr.push(item.textContent);
    }
    result.textContent = arr.join('\n');
}