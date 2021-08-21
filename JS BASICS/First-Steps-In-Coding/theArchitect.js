function architect(input) {

    let architectName = input[0];
    let projectsNumber = Number(input[1]);
    let hours = projectsNumber * 3;

    console.log(`The architect ${architectName} will need ${hours} hours to complete ${projectsNumber} project/s.`)
}
architect(['George', '4'])
