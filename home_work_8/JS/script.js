//1.
/*
const a = 0;
a === 0 ? alert( 'Верно' ) : alert ( 'Неверно' );
*/
//2.
/*
const a = 1;
a > 0 ? alert( 'Верно' ) : alert ( 'Неверно' );
*/
//3.
/*
const a = -1;
a < 0 ? alert( 'Верно' ) : alert ( 'Неверно' );
*/
//4.
/*
const a = 1;
a >= 0 ? alert( 'Верно' ) : alert ( 'Неверно' );
*/
//5.
/*
const a = 0;
a <= 0 ? alert( 'Верно' ) : alert ( 'Неверно' );
*/
//6.
/*
const a = 1;
a != 0 ? alert( 'Верно' ) : alert ( 'Неверно' );
*/
//7.
/*
const a = 'test';
a == 'test' ? alert( 'Верно' ) : alert ( 'Неверно' );
*/
//8.
/*
const a = '1';
a === '1' ? alert( 'Верно' ) : alert ( 'Неверно' );
*/
//9.
/*
const a = 3.14;
a > 0 && a < 5 ? alert( 'Верно' ) : alert ( 'Неверно' );
*/
//10.
/*
let a = +prompt ( 'Введите число' );
if( a === 0 || a === 2 ){
	a += 7;
	alert ('Новое значение = ' + a);
}else{
	a /= 10;
	alert ('Новое значение = ' + a);
}
*/
//11.
/*
const a = +prompt ( 'Введите первое число' );
const b = +prompt ( 'Введите второе число' );
let result;
if( a <= 1 && b >=3 ){
	result = a + b;
	alert ('Результат сложения = ' + result);
}else{
	result = a - b;
	alert ( 'Результат вычитания = ' + result);
}
*/
//12.
/*
const a = +prompt ( 'Введите первое число' );
const b = +prompt ( 'Введите второе число' );
if( (a > 2 && a < 11) || (b >= 6 && b < 14 ) ){
	alert ('Верно!');
}else{
	alert ( 'Неверно!');
}
*/
//13.
/*Получаю случайное число в пределах от 1 до 4.
Так как метод random() возвращает псевдослучайное число с плавающей запятой в диапазоне от 0 до 1,
то для получения необходимого мне диапазона я результат умножил на 4. 
Особенностью данного метода так же является и то, что он не включает максимальное значение (4), 
но включает минимальное (0). 0 для задачи мне не нужен, а 4 нужно. Поэтому я прибавляю 1.
Так же с помощью метода floor() я округляю полученный результат (random() же возвращает 'float'). 
*/
/*
const num = Math.floor(Math.random() * 4) + 1;
let result;
switch (num){
	case 1:
		result = 'Зима';
		console.log (result);
		break;
	case 2:
		result = 'Весна';
		console.log (result);
		break;
	case 3:
		result = 'Лето';
		console.log (result);
		break;
	case 4:
		result = 'Осень';
		console.log (result);
		break;
	default:
		result = 'Произошла неведомая хрень. Вызывайте экзорциста!';
		console.log (result);
		break;
}
*/