//Task #1
/*
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user, typeof user);
*/

//Task #2 - Const "имяОбъекта" определяет, что мы не можем менять то, на что указывает "имяОбъекта" в памяти системы. 
//Поэтому манипуляции с добавлением/удалением ключа-значения ни как не противоречат тому, что объект является константой.
/*
const user = {
	name: 'John',
};
user.name = 'Pete';
console.log(user);
*/

//Task #3
/*
const salaries = { //намеренно исправил на const, данные же не меняются
	John: 100,
	Ann: 160,
	Pete: 130,
}
const sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum, typeof sum);
*/