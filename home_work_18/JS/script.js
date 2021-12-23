function main(callback) {
    const a = +prompt('Enter the 1-st number:');
    const b = +prompt('Enter the 2-nd number:');
    return callback(a, b);
}

function exponentiation(a, b) {
    return a ** b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function showResult(result) {
    alert(result);
}

showResult(main(exponentiation));
showResult(main(multiply));
showResult(main(division));
showResult(main(modulo));