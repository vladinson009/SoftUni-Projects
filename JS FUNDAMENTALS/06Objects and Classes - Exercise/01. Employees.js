function employees(listOfEmployees) {
    for (let currentEmployee of listOfEmployees) {

        let object = {
            name: currentEmployee,
            personalNumber: Number(currentEmployee.length)
        }
        console.log(`Name: ${object.name} -- Personal Number: ${object.personalNumber}`);
    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])