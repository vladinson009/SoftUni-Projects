function subtract() {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    const result = document.getElementById('result');

    const calc = Number(firstNumber) - Number(secondNumber);

    result.textContent = calc;
}