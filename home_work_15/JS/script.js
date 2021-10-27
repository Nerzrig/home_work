function padStr(str, strLen, strSym, leftOrRight = true) {
    let message = '';
    if (str === null || str.trim() === '')
        message += 'You interrupted input of the string!\r\n';
    if (strLen === null || strLen.trim() === '')
        message += 'You interrupted the input of the string length!\r\n';
    if (strSym === null || strSym.trim() === '')
        message += 'You interrupted the input of the symbol!\r\n';
    if (leftOrRight === null || leftOrRight.trim() === '')
        message += 'You interrupted the input of the symbol direction!\r\n';
    if (message !== '') {
        return message;
    } else {
        if (strLen > str.length) {
            strLen -= str.length;
            if (leftOrRight === true) {
                for (let i = 0; i < strLen; i++) {
                    str += strSym;
                }
            } else {
                for (let i = 0; i < strLen; i++) {
                    strSym += strSym;
                }
                str = strSym + str;
            }
        } else {
            console.log(str, str.length, strLen)
            str = str.substr(0, strLen);
        }
        return str;
    }

    //if(str.trim() ==='' || strLen.trim() ==='' || isNaN(+strLen) || strSym === '' || leftOrRight === null)
}

console.log(padStr(prompt('Enter the string:'), prompt('Enter the string length:'),
    prompt('Enter the symbol:'), prompt('Enter the add symbol direction:')));