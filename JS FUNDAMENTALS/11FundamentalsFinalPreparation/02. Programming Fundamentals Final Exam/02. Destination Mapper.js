function destinationMapper(input) {
    let pattern = /([=\/])(?<dest>[A-Z][a-zA-Z]{2,})\1/g;
    let myDest = [];
    let travelPoints = 0;

    let match = pattern.exec(input);
    while (match !== null) {
        let currentDest = match[2];

        myDest.push(currentDest);
        travelPoints += currentDest.length;



        match = pattern.exec(input);
    }
    console.log(`Destinations: ${myDest.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);


};
destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');