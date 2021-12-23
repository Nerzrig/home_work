//1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
/*
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);
*/
//2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]
/*
const arr1 = [1, 2, 3];
const arr2 = arr1.reverse();
console.log(arr2);
*/
//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
/*
const arr1 = [1, 2, 3];
arr1.push(4, 5, 6);
console.log(arr1);
*/
//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
/*
const arr1 = [1,2,3];
arr1.unshift(4, 5, 6);
console.log(arr1);
*/
//5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
/*
const arr1 = ['js', 'css', 'jq'];
console.log(arr1.shift());
*/
//6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
/*
const arr1 = ['js', 'css', 'jq'];
console.log(arr1.pop());
*/
//7 Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
/*
const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.slice(0,3);
console.log(arr2);
*/
//8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].
/*
const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.slice(arr1.length-2, arr1.length);
console.log(arr2);
*/
//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].
/*
const arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 2);
console.log(arr1);
*/
//10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].
/*
const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.slice(1,4);
console.log(arr2);
*/
//11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
/*
const arr1 = [1, 2, 3, 4, 5];
arr1.splice(3, 0, 'a,', 'b', 'c');
console.log(arr1);
*/
//12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
/*
const arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 4, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
console.log(arr1);
*/
//13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
/*
const arr1 = [3, 4, 1, 2, 7];
console.log(arr1.sort());
*/
//14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
/*
const arr1 = [5, 6, 7, 8, 9];
const result = arr1.reduce((sum, current) => sum + current, 0);
console.log (result);
*/
//15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
/*
const arr1 = [5, 6, 7, 8, 9];
arr1.forEach((item, index, array) => {
    array[index] = item*item;
});
console.log(arr1);
*/
//16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
/*
const arr1 = [1, -3, 5, 6, -7, 8, 9, -11];
const arr2 = arr1.filter((item) => item > 0);
console.log(arr2);
*/
//17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
/*
const arr1 = [1,-3, 5, 6,-7, 8, 9,-11];
const arr2 = arr1.filter((item) => item % 2 === 0);
console.log(arr2);
*/
//18. Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'].
//Оставьте в нем только те строки, длина которых больше 5-ти символов.
/*
const arr1 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const arr2 = arr1.filter(function (item){
    if (item.length > 5){
        return item;
    }
})
console.log(arr2);
*/
//19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]].
//Оставьте в нем только подмассивы.
/*
const arr1 = [1, 2, [3, 4], 5, [6, 7]];
const arr2 = arr1.filter(function (item){
    if (typeof (item) === 'object'){
        return item;
    }
});
console.log(arr2);
*/
//20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
/*
const arr1 = [5,-3, 6,-5, 0,-7, 8, 9];
let count = null;
for(let i = 0; i < arr1.length; i ++){
    if(arr1[i] < 0){
        count++;
    }
}
console.log(count);
*/