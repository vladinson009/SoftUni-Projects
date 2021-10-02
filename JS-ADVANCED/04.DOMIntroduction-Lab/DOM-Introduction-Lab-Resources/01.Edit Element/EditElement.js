function editElement(el, match, replacer) {

    const pattern = new RegExp(match, 'g');
    let text = el.textContent;
    // el.textContent = text.replaceAll(match, replacer);
    text = text.replace(pattern, replacer)

    el.textContent = text;
}