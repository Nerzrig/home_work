function getSumFunc() {
    let num = 0;
    function sum(number) {
        return (()=>{num = num + number;
            return num})();
    }
    return sum;
}

const a = getSumFunc();