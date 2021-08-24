function login(input) {
    let index = 0;
    const username = input[index++];
    let currentPassword = input[index++];
    let correctPassword = '';
    let count = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        correctPassword = correctPassword + (username[i]);
    }

    while (currentPassword !== correctPassword) {
        count++;
        if (count === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log('Incorrect password. Try again.');
        currentPassword = input[index++];
    }
    
    console.log(`User ${username} logged in.`);
}
//login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);

function loginOnReverse(input) {
    let index = 0;
    const username = input[index++];
    let currentPassword = input[index++];
    let count = 0;
    let passwordFromUsername = (username.split('')).reverse()
    let correctPassword = passwordFromUsername.join('')

    while (currentPassword !== correctPassword) {
        count++;
        if (count === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log('Incorrect password. Try again.');
        currentPassword = input[index++];
    }
    
    console.log(`User ${username} logged in.`);
}
loginOnReverse(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])
