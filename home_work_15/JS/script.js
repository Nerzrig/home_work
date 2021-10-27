function padStr(str, strLen, strSym, leftOrRight = 'true') {
    let message = '';
    if (str === null || str === '')
        message += 'You interrupted input of the string!\r\n';
    if (strLen === null || strLen === '')
        message += 'You interrupted the input of the string length!\r\n';
    if (strSym === null || strSym === '')
        message += 'You interrupted the input of the symbol!\r\n';
    if (leftOrRight === null || leftOrRight === '')
        message += 'You interrupted the input of the symbol direction!\r\n';
    if (message !== '') {
        return message;
    }
    if (strLen > str.length) {
        strLen -= str.length;
        if (leftOrRight === 'true') {
            for (let n = 0; n < strLen; n++) {
                str += strSym;
            }
        } else {
            for (let m = 0; m < strLen; m++) {
                str = strSym + str;
            }
        }
    } else {
        str = str.substr(0, strLen);
    }
    return str;
}


console.log(padStr('hello', 8, '*'));
console.log(padStr('hello', 6, '*', false));
console.log(padStr('hello', 2));
