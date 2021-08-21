function bestPlayer(input) {
    let index = 0;
    let name = input[index++];
    let mostGoals = Number.MIN_SAFE_INTEGER;
    let bestPlayer = '';
    while (name !== 'END') {
        let goals = Number(input[index++]);
        if (goals > mostGoals) {
            mostGoals = goals;
            bestPlayer = name;
        }
        name = input[index++];
        if (goals >= 10) {
        break;
    }
    }
    console.log(`${bestPlayer} is the best player!`);
    if (mostGoals >= 3) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostGoals} goals.`);
    }
}
bestPlayer(["Neymar", "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"
])