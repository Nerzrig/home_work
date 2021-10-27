function subStr(str, strLen, strSym, leftOrRight = true) {
    let message = '';
    if (str === null || str.trim() === '')
        message += 'You interrupted input of the string!\r\n';
    if (strLen === null)
        message += 'You interrupted the input of the string length!\r\n';
    if (strSym === null)
        message += 'You interrupted the input of the symbol!\r\n';
    if (leftOrRight === null)
        message += 'You interrupted the input of the symbol direction!\r\n';
    if (message !== '')
        return message;
    else
        return 1;

    //if(str.trim() ==='' || strLen.trim() ==='' || isNaN(+strLen) || strSym === '' || leftOrRight === null)
}

console.log(subStr(prompt('Enter the string:'), prompt('Enter the string length:'),
    prompt('Enter the symbol:'), prompt('Enter the add symbol direction:')));