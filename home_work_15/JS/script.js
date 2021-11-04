function padStr(str, strLen, strSym, leftOrRight = true) {
    let message = '';
    if (typeof (str) != "string") {
        message += 'You interrupted input of the string!\r\n';
    }
    if (strLen === null || !Number.isInteger(strLen)) {
        message += 'You interrupted input of the string length!\r\n';
    }
    if (strSym === null) {
        message += 'You must input just ONE symbol!\r\n';
    }
    if (leftOrRight === null) {
        message += 'You interrupted input of the symbol direction!\r\n';
    }
    if (message !== '') {
        return message;
    }
    if (strLen > str.length) {
        strLen -= str.length;
        for (let i = 0; i < strLen; i++) {
            leftOrRight === true ? str += strSym : str = strSym + str;
        }
    } else {
        str = str.substr(0, strLen);
    }
    return str;
}

console.log(padStr('hello', 8, '*'));
console.log(padStr('hello', 6, '*', false));
console.log(padStr('hello', 2));
