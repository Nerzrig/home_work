let mathOperation = prompt ( 'What do you want to do: add, sub, mult, div?' );
let firstNumber = +prompt ( 'Enter the first number' );
let secondNumber = +prompt ( 'Enter the second number' );
	
switch (mathOperation){
	case "add":
		alert( `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}` );
		break;
	case "sub":
		alert( `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}` );
		break;
	case "mult":
		alert( `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}` );
		break;
	case "div":
		if ( secondNumber === 0){
			alert( 'На ноль делить нельзя.' );
			}
		else
			alert( `${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}` );
		break;
	default:
		alert( 'Invalid data. Press F5' );
}