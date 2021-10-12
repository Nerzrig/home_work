let firstNumber = +prompt( "Enter the first number" ); //перед prompt + использую для преобразования типов
let secondNumber = +prompt( "Enter the second number" );

console.log( `${firstNumber} + ${secondNumber} =`, firstNumber + secondNumber );
console.log( `${firstNumber} - ${secondNumber} =`, firstNumber - secondNumber );
console.log( `${firstNumber} * ${secondNumber} =`, firstNumber * secondNumber );
if( secondNumber != 0 ){
	console.log( `${firstNumber} / ${secondNumber} =`, firstNumber / secondNumber );
}
else
	console.log( `${firstNumber} / ${secondNumber} = ФИГ ТЕБЕ, А НЕ ДЕЛЕНИЕ НА НОЛЬ`,
	`\r\nНо JS считает, что это ${firstNumber / secondNumber}`);