let mathOperation = prompt ( 'What do you want to do: add, sub, mult, div?' );
let firstNumber = +prompt ( 'Enter the first number' );
let secondNumber = +prompt ( 'Enter the second number' );
	
switch (mathOperation){
	case "add", "+":
		alert( firstNumber + secondNumber );
		break;
	case "sub", "-":
		alert( firstNumber - secondNumber );
		break;
	case "mult", "*":
		alert( firstNumber * secondNumber );
		break;
	case "div", "/":
		if ( secondNumber == 0){
			alert( 'На ноль делить нельзя, пёс. Вводи еще раз!' );
			}
		else
			alert( firstNumber / secondNumber );
		break;
	default:
		alert( 'Invalid data. Press F5' );
}
/*Задачу выполнил так, как её понял. Может я что-то упустил на занятии и эту задачу 
можно было выполнить более простыми способами ¯\_(ツ)_/¯*/