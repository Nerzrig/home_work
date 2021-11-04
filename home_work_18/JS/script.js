function mainFunction(callback) {
    const a = +prompt('Enter the 1-st number:');
    const b = +prompt('Enter the 2-nd number:');
    const result = callback(a, b);
    alert(result);
    //alert(callback(a, b));
}

mainFunction(Math.pow);