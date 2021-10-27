function arrayFunc(someArray) {
    let someArrayNew = [];
    if (someArray.length === 0) {
        return 'Array is empty!';
    }
    for (let i = 0; i < someArray.length; i++) {
        if (someArray[i] > 0) {
            someArrayNew.push(someArray[i]);
        }
    }
    if (someArrayNew.length === 0) {
        return null;
    }
    return someArrayNew;
}

//const arr = [1, 2, 3, -1, -2, -3];
//const arr = [];
console.log(arrayFunc(arr));