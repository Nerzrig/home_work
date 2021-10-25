/*
//#1
const x = 10;
const y = 7;
x > y ? alert ('x больше, чем y') : alert ('x не больше, чем y');
*/
/*
//#2
const num = prompt('Введите число');
if ( num % 2 === 0){
	alert ( "Число " + num + " четное" );
}else{
	alert ( "Число " + num + " нечетное" );
}
*/
//#3
/*
let a = prompt ( 'Введите число' );
let aLen;
let posOrNeg;
if ( !(a === null || a.trim() === '' || isNaN( +a )) ){
	a = a.trim();
	aLen = a.length;
	if ( a > 0){
		posOrNeg = 'положительное';
	}else{
		posOrNeg = 'отрицательное';
		--aLen;
	}
	switch (aLen){
		case 1:
			alert (`Число ${a} однозначное ${posOrNeg}.`);
			break;
		case 2:
			alert (`Число ${a} двузначное ${posOrNeg}.`);
			break;
		case 3:
			alert (`Число ${a} трехзначное ${posOrNeg}.`);
			break;	
		default:
			alert (`Число ${a} многозначное ${posOrNeg}.`);
	}
}else{
	alert ('Вы ввели не число :(');
}
*/
//#4
/*
const firstNum = +prompt ( 'Введите первое число ' );
const secondNum = +prompt ( 'Введите второе число ' );
const thirdNum = +prompt ( 'Введите третье число' );
if ( firstNum > secondNum && firstNum > thirdNum){
	alert ( `Максимальное значение ${firstNum}` );
}else{
	if ( secondNum > thirdNum ){
		alert ( `Максимальное значение ${secondNum}` );
	}else{
		alert ( `Максимальное значение ${thirdNum}` );
	}
}
*/
//#5

const a = +prompt ( 'Введите длину первой стороны треугольника' );
const b = +prompt ( 'Введите длину второй стороны треугольника ' );
const c = +prompt ( 'Введите длину третьей стороны треугольника' );

if( a > 0 && b > 0 && c > 0)
{
	if( (a + b > c) && (a + c > b) && (b + c > a) ){
		alert (`Треугольник с длинами сторон ${a}, ${b}, ${c} может сущестовать`);
	}else{
		alert (`Треугольник с длинами сторон ${a}, ${b}, ${c} не может сущестовать`);
	}
}else{
	alert ('Сторона треугольника не может быть <= 0!');
}
