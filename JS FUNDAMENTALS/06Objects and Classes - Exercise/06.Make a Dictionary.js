function makeADictionary(array) {
    let objAsArray = [];
    let theObjects = {};

    for (let currentObj of array) {
        let asObject = JSON.parse(currentObj);
        Object.assign(theObjects, asObject);
    }
    Object.entries(theObjects).sort((a, b) => a[0].localeCompare(b[0]));
    let keys = [];
    let values = [];
    for (const [key, value] of Object.entries(theObjects)) {
        keys.push(key);
        values.push(value);
    }
    keys.sort((a, b) => a.localeCompare(b));

    for (let i of keys) {
        console.log(`Term: ${i} => Definition: ${theObjects[i]}`);

    }
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])