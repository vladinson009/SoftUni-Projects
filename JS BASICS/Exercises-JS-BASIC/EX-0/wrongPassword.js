function password(input) {
    let correctPasword = 's3cr3t!P@ssw0rd';
    let password = input[0]
    if (input[0] === correctPasword) {
        console.log('Welcome!');
    } else {
        console.log('Wrong Password!')
    }
}
password(['s3cr3t!P@ssw0rd'])