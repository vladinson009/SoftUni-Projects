function adAstra(input) {

    let pattern = /([#\|])(?<name>[a-zA-Z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calo>\d+)\1/g;
    let items = [];
    let totalCalories = 0;

    let match = pattern.exec(input[0]);
    while (match != undefined) {
        totalCalories += Number(match[4]);
        items.push(`Item: ${match[2]}, Best before: ${match[3]}, Nutrition: ${match[4]}`)
        match = pattern.exec(input[0]);
    }
    let totalDays = Math.floor(totalCalories / 2000)

    console.log(`You have food to last you for: ${totalDays} days!`);
    for (let each of items) {
        console.log(each);
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);