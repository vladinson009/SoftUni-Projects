function nationalCourt(array) {

    let [p1, p2, p3, people] = array.map(Number);
    let employees = p1 + p2 + p3;
    let hours = 0;

    while (people > 0) {

        hours++;
        if (hours % 4 !== 0) {
            people -= employees
        }

    }
    console.log(`Time needed: ${hours}h.`);
}
nationalCourt(['5', '6', '4', '20'])