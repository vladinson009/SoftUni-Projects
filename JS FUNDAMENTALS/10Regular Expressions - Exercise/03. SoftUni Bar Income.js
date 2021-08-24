function softUniBar(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%.*?<(?<product>\w+)>.*?\|(?<qty>\d+)\|.*?(?<price>\d+(?:\.\d+)?)\$/;
    let totalMoney = 0;

    while (input[0] != 'end of shift') {
        let line = input.shift();
        let match = pattern.exec(line);
        if (match != null) {

            let income = Number(match.groups.qty) * Number(match.groups.price);

            console.log(`${match.groups.name}: ${match.groups.product} - ${income.toFixed(2)}`);
            totalMoney += income;
        }
    }
    console.log(`Total income: ${totalMoney.toFixed(2)}`);
}

softUniBar(["%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift"
]);