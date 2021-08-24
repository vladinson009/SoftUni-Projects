function companyUsers(input) {
    let companies = {};

    for (let current of input) {
        let [company, employee] = current.split(' -> ');

        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        if (!companies[company].includes(employee)) {
            companies[company].push(employee);
        }
    }
    sortedCompanies = Object.keys(companies).sort((a, b) => a.localeCompare(b));

    for (let currentCompany of sortedCompanies) {
        console.log(currentCompany);
        companies[currentCompany].forEach(value => console.log(`-- ${value}`))
    }
}




companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);