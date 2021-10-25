const num = +prompt ( 'Введите число ' );
let flag = true;

for ( let i = 2; i < num; i++ ) {
	if ( num % i === 0 ) {
		flag = false;
		break;
	}
}
if( flag ){
	console.log(`Число ${num} простое; // ${flag}. `);
}else{
	console.log(`Число ${num} составное // ${flag}.`);
}