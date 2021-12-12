//1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
(function () {
    const arr = ['a', 'b', 'c', 'd'];
    const str = arr.join();
    const newStr = str.replace(/,/gi, function (value, index) {
        if(index % 2 !== 0 && index !== 3){
            return '+'
        }
        else return ',';
    });

    console.log('Exercise # 1 - ' + newStr)
})();

//2. Создайте массив arr с элементами 2, 5, 3, 9.
//Умножьте первый элемент массива на второй, а третий элемент на четвертый.
//Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной
(function () {
    const arr = [2, 5, 3, 9];
    const arr2 = arr.splice(2, 2);

    function multiplyArr(arr1, arr2) {
        const result = arr1.reduce((result, current) => result * current, 1) +
            arr2.reduce((result, current) => result * current, 1);
        console.log('Exercise # 2 - ' + result);
    }

    multiplyArr(arr, arr2);
})();

//3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
(function () {
    const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const newArr = arr.flat();
    console.log('Exercise # 3 - ' + newArr.find(item => item === 4));

})();

//4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.
(function () {
    const obj = {
        js: ['jQuery', 'Angular'],
        php: 'hello',
        css: 'world'
    }
    console.log('Exercise # 4 - ' + obj.js[0]);
})();

//5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
(function () {
    const arr = [];
    let str = 'x';
    for (let i = 0; i < 12; i++) {
        arr.push(str);
        str += 'x';
    }
    console.log('Exercise # 5 - ' + arr);
})();

//6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.
(function () {
    const arr = [];
    let str = '';
    for (let i = 1; i < 10; i++) {
        for (let n = 0; n < i; n++) {
            str += String(i);
        }
        arr.push(str);
        str = '';
    }
    console.log('Exercise # 6 - ' + arr);
})();

//7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
//Первым параметром функция принимает значение, которым заполнять массив,
//а вторым — сколько элементов должно быть в массиве.
//Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].

(function () {
    function arrayFill(value, count, arr = []) {
        for (let i = 0; i < count; i++) {
            arr.push(value);
        }
        return arr;
    }

    console.log('Exercise # 7 - ' + arrayFill('x', 5));
})();

//8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
//чтобы в сумме получилось больше 10-ти.

(function () {
    const arr = [-1, -2, -3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > 10) {
            console.log('Exercise # 8 - ' + (i + 1));
            break;
        }
    }
})();

//9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
(function () {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    console.log('Exercise # 9 - ' + reverseArr);
})();

//10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
//Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
(function () {
    const arr = [[1, 2, 3], [4, 5], [6]];
    const flatArr = arr.flat();
    console.log('Exercise # 10 - ' + flatArr.reduce((sum, current) => sum + current, 0));
})();

//11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
//Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
//СДЕЛАЛ ДЛЯ СЕБЯ АНАЛОГ FLAT!!! В ПРЕДЫДУЩИХ ЗАДАНИЯХ ЮЗАЮ НЕПОСРЕДСТВЕННО FLAT,
//ТАК ЧТО Я В КУРСЕ ПРО ЕГО СУЩЕСТВОВАНИЕ (:
(function () {
    const originalArr = [4, 6, [11, 3, 9, [1, 2], 2, 8, [3, 4]], [1, [5, 6], [7, 0, 8], 3]];
    let finalArr = [];

    function arrDeployment(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                arrDeployment(arr[i])
            } else {
                finalArr.push(arr[i]);
            }
        }
        return finalArr.reduce((sum, current) => sum + current, 0);
    }

    console.log('Exercise # 11 - ' + arrDeployment(originalArr));
})();