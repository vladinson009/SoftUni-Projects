function calc() {
    // TODO: sum = num1 + num2
    const first = Number(document.getElementById('num1').value);
    const second = Number(document.getElementById('num2').value);
    let sum = document.getElementById('sum');
    const result = first + second

    sum.value = result;
}