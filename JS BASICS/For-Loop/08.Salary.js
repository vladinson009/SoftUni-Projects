function salary(input) {
    let openedTabs = Number(input[0]);
    let salary = Number(input[1]);
    let index = 2
    for (let i = 0; i < openedTabs; i++) {
        let currentTab = input[index];
        index++
        if (currentTab === 'Facebook') {
            salary -= 150;
            if (salary <= 0) {
                console.log('You have lost your salary.');
                break;
            }
        } else if (currentTab === 'Instagram') {
            salary -= 100;
            if (salary <= 0) {
                console.log('You have lost your salary.');
                break;
            }
        } else if (currentTab === 'Reddit') {
            salary -= 50;
            if (salary <= 0) {
                console.log('You have lost your salary.');
                break;
            }
        }
    }
    if (salary > 0) {
        console.log(salary)
    }
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])