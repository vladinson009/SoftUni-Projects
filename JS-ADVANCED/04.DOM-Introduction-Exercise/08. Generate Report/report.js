function generateReport() {
    const inputBoxes = document.querySelectorAll('tr th input');
    const statistic = document.querySelectorAll('tbody tr');
    const output = document.querySelector('#output');
    const result = [];

    for (let i = 0; i < statistic.length; i++) {
        let currentObj = {};

        for (let j = 0; j < inputBoxes.length; j++) {
            if (inputBoxes[j].checked == true) {
                currentObj[inputBoxes[j].name] = statistic[i].children[j].textContent;
            }
        }
        result.push(currentObj);
    }
    output.textContent = JSON.stringify(result);
}