function reception(input) {
    let p1 = Number(input.shift());
    let p2 = Number(input.shift());
    let p3 = Number(input.shift());
    let totalEmployees = p1 + p2 + p3;

    let people = Number(input.shift());
    let hours = 0;
    while (people > 0) {
        hours++;
        if (hours % 4 !== 0) {
            people -= totalEmployees;
        }


    }
    console.log(`Time needed: ${hours}h.`);

}
reception(['5', '6', '4', '20']);