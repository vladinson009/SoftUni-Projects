function calculation(input) {

    let name = (input[0]);
    let projectNumber = (input[1]);
    let hours = projectNumber * 3;
    let results = `The architect ${name} will need ${hours} hours to complete ${projectNumber} project`
    console.log(results);

}

calculation(["Viktor", "14"]) // Architect & Projects