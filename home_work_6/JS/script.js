//Task #1

//После явного преообразования в скобках в Number мы получим явным преобразованием вне скобок Boolean (итого 1, он же true).
//Но, как мы знаем, арифметические операции "стараются" при их примененни преобразовать типы данных.
//В итоге Boolean + Number даст нам 2 (а это уже Number, что доказывается выводом данных в консоль).
/*
const result = Boolean(Number('10'))+1;
console.log(result, typeof result);
*/

//В данном примере 'sub' является строкой (т.е. string) состоящей из буквенных символов. Преобразовать в тип отличный от строки мы в данный момент не можем.
//Поэтому результатом данной операции станет строка "sub0"
/*
const result = `sub` + Number(false);
console.log(result, typeof result);
*/

//В этом примере строкой выступает число обрамленное пробелами. При преобразовании в Number срабатывает что-то типа ф-ции trim(), которая обрезает пробелы.
//Так как иные символы в строке отсутствуют, то '91' преобразуется в Number благодаря операции умножения
/*
const result = 16 * '      91    ';
console.log(result, typeof result);
*/

//Как и в прошлые разы происходит неявное преобразование типов благодаря математической операции. В итоге 1 - 70 даст результат -69 типа Number
/*
const result = true - 70;
console.log(result, typeof result);
*/

//В скобках благодаря явному преобразованию мы получим 11 (строка). Потом преобразуем в Number и 11 сумируем с 1 получая 12 типа Number.
/*
const result = Number(1 + String(1))+1;
console.log(result, typeof result);
*/

//Task #2

//Сразу умножил на 3600 секунд (60 сек в минуте * на 60 мин в часе).
/*
const secondsInHours = 3600 * +prompt("Enter the number of hours to translate into seconds:");
alert (`Result: ${secondsInHours} seconds `);
*/

//Task #3

let num = 1;

//Было
/*
num = num + 12;
num = num — 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num — 1;
*/

//Стало
num += 12;
num -= 14;
num *= 5; 
num /= 7;
num++;
num--;

alert(num);
