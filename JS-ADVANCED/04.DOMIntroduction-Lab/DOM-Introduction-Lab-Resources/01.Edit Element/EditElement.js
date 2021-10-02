function editElement(el, match, replacer) {

    const pattern = new RegExp(match);
    let text = el.textContent;
    // el.textContent = text.replaceAll(match, replacer);

    let currentMatch = pattern.exec(text);
    while (currentMatch != null) {
        text = text.replace(match, replacer)
        currentMatch = pattern.exec(text);
    }
    el.textContent = text;
}