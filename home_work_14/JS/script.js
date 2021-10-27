function numPow(num, numP = 1){
    if(num === null || numP === null){
        return 'You canceled data entry!';
    }
    if(num.trim() === '' || isNaN(+num) || numP.trim() === '' || isNaN(+numP)){
        return 'Invalid data!';
    }
    console.log(numP);
    return num ** numP;
}
console.log(numPow(prompt('Enter number:'), prompt('Enter pow:')));