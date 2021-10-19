/*
const numOrStr = prompt('input number or string');
console.log( numOrStr, typeof numOrStr );

if( numOrStr === null || numOrStr.trim() === '' || isNaN( +numOrStr ) ) {
    alert('Фууу.....');
} else {
    console.log('OK!');
}
*/

const numOrStr = prompt('input number or string');
console.log ( numOrStr, typeof numOrStr );

switch (true){
	case numOrStr === null:
		alert ( 'Ну и пожалуйста. Не нужны мне твои данные, чумба!' );
		break;
	case (numOrStr.trim() === ''):
		alert ( 'Пустой строкой сыт не будешь так-то...' );
		break;
	case isNaN( +numOrStr ):
		alert ( 'На самом деле нужно ввести число.' );
		break;
	default:
		alert ( 'Судя по всему, ты ввел число. Возьми с полки пирожок, жирдяй!' );
		break;
}