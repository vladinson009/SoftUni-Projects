function walking(input) {
    let gabiGoal = 10000;
    let index = 0;
    let command = input[index++];

    let steps = 0;
    
    for (let i = 0; i < input.length; i++) {
        if (command === 'Going home') {
            steps += Number(input[input.length - 1]);
            break;
        }
        currentSteps = Number(command);
        steps += currentSteps;
        command = input[index++];
    }
    if (steps >= gabiGoal) {
        console.log('Goal reached! Good job!');
        console.log(`${steps - gabiGoal} steps over the goal!`);
    } else {
        console.log(`${gabiGoal - steps} more steps to reach goal.`);
    }
}
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])