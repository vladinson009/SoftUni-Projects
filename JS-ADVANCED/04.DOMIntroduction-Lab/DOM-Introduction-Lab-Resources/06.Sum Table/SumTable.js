function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let sum = document.getElementById('sum');
    let result = 0
    for (let i = 1; i < rows.length - 1; i++) {
        result += Number(rows[i].lastElementChild.textContent)
    }
    sum.textContent = result;
}