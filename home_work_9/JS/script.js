let currentYear = new Date();
currentYear = currentYear.getFullYear();

let champions = {
	'настольный теннис': 'Ма Лун',
	'футбол': 'Рона́лду ди Аси́с Море́йра',
	'бокс': 'Василий Ломаченко',
}

let userAge = prompt ( 'Введите год своего рождения.' );
if( userAge === null ){
	alert ( 'Жаль, что Вы не захотели ввести свой год рождения.' );
	userAge = 'надо было ввести год рождения';
}else if( userAge.trim() === '' || isNaN( +userAge ) || currentYear - userAge < 0 ) {
    userAge = 'надо было ввести СВОЙ год рождения';
}else{
	userAge = currentYear - userAge;
}

let userCity = prompt ( 'В каком городе Вы живете?' );
if( userCity === null || userCity.trim() === '' ){
	alert ( 'Жаль, что Вы не захотели ввести название города, в котором живете.' );
	userCity = '- призраке, судя по всему';
}
let userSportsInterest = prompt ( 'Какой ваш любимый вид спорта?' );
if( userSportsInterest === null ){
	alert ( 'Жаль, что Вы не захотели ввести свой любимый вид спорта.' );
	userSportsInterest = ' жирдяем.';
}else if ( champions[userSportsInterest.toLowerCase()] != undefined ){
	userSportsInterest = ', как ' + champions[userSportsInterest.toLowerCase()];
}else{
	userSportsInterest = ' споротсменом.';
}

switch(userCity.toLowerCase()){
	case 'киев':
		alert( `Тебе ${userAge}. Ты живешь в столице Украины. Круто! Хочешь стать${userSportsInterest}` );
		break;
	case 'москва':
		alert( `Тебе ${userAge}. Ты живешь в столице России. Круто! Хочешь стать${userSportsInterest}` );
		break;
	case 'минск':
		alert( `Тебе ${userAge}. Ты живешь в столице Белоруссии. Круто! Хочешь стать${userSportsInterest}` );
		break;
	default:
		alert( `Тебе ${userAge}. Ты живешь в городе ${userCity}. Круто! Хочешь стать${userSportsInterest}` );
}
