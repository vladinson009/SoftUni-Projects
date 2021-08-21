function password(input) {
    let pass = input[0];

    switch (pass) {
        case 's3cr3t!P@ssw0rd':
            console.log('Welcome');
            break;
        default:
            console.log('Wrong password!');
            break;
    }
}
password(['s3cr3t!P@ssw0rd']);
//////////////////////////////////////////////////////////////////////////////////////
function thePassword(input) {
    let thePass = input[0];

    if (thePass === 's3cr3t!P@ssw0rd') {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}
thePassword(['s3cr3t!P@ssw0rd']);