function encodeAndDecodeMessages() {
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons[0].addEventListener('click', sender)
    buttons[1].addEventListener('click', reciever)
    const senderValue = document.querySelectorAll('textarea')[0];
    const recieverValue = document.querySelectorAll('textarea')[1];

    function sender() {
        let result = '';
        for (let i = 0; i < senderValue.value.length; i++) {
            const symAsChar = senderValue.value.charCodeAt(i) + 1;
            result += String.fromCharCode(symAsChar);
        }
        recieverValue.value = result;
        senderValue.value = '';
    }

    function reciever() {
        let result = '';
        for (let i = 0; i < recieverValue.value.length; i++) {
            const symAsChar = recieverValue.value.charCodeAt(i) - 1;
            result += String.fromCharCode(symAsChar);
        }
        recieverValue.value = result;
    }

}