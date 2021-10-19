const userAge = prompt ( 'Введите свой год рождения.' );
if( !(userAge === null || userAge.trim() === '' || isNaN( +userAge )) ) {
	const userCity = prompt ( 'В каком городе Вы живете?' );
	const userSportsInterest = prompt ( 'Какой ваш любимый вид спорта?' );
}else{
	alert( 'Да введи же ты нормальные цифры, дурашка!' );
}