const num = +prompt ( 'Введите число ' );
let i = 2;
for (; i <= num; i++) {
	if (num % i === 0) {
		break;
	}
}
if ( num < 1){
	console.log ( NaN );
}else{
	if ( i === num ){
		console.log(`Число ${num} простое. А значит, что оно делится на 1 и на ${num}`);
	}else{
		console.log(`Число ${num} составное, его наименьший делитель ${i}.`);
		}
}
