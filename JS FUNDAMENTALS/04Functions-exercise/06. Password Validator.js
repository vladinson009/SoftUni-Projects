function passwordValidator(thePass) {

    function IsLengthValid(pass) {
        let counter = 0;
        for (let i = 0; i < pass.length; i++) {
            counter++;
        }
        return counter >= 6 && counter <= 10
    }

    function isConsistValid(pass) {
        for (let i = 0; i < pass.length; i++) {
            let charCode = pass[i].charCodeAt(0)
            if (!(charCode >= 48 && charCode <= 57) &&
                !(charCode >= 65 && charCode <= 90) &&
                !(charCode >= 97 && charCode <= 122)) {
                return false;
            }
        }
        return true;
    }

    function atLeastTwoDigits(pass) {
        let counter = 0;
        for (let i = 0; i < pass.length; i++) {
            let char = (pass[i]).charCodeAt(0);
            if (char >= 48 && char <= 57) {
                counter++;
            }
        }
        return counter > 1;
    }

    let lengthValidation = IsLengthValid(thePass);
    let consistValidation = isConsistValid(thePass);
    let twoDigitsValidation = atLeastTwoDigits(thePass);

    if (lengthValidation && consistValidation && twoDigitsValidation) {
        console.log('Password is valid');
    }
    if (!lengthValidation) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!consistValidation) {
        console.log('Password must consist only of letters and digits');
    }
    if (!twoDigitsValidation) {
        console.log('Password must have at least 2 digits');
    }
}
passwordValidator('Pa$s$s')