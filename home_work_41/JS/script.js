'use strict';
(function(){
	function Student (name, surname, birth){
		
		this.name = name;
		this.surname = surname;
		this.birth = birth;
		
		this.scores = new Array (10);
		this.visits = new Array (10);
		
		this.getScores = function () {
			return this.scores;
		}
		
		this.getVisits = function () {
			return this.visits;
		}

		this.arrayAdd = function(array, value) {
			if(array[array.length-1] !== undefined){
				console.log('Array is full!');
				return;
				//throw new Error ('Array is full!');
			}
			for (let i = 0; i < array.length; i++){
				if(array[i] === undefined){
					array[i] = value;
					break;
				}	
			}
		}
		
		this.present = function() {
			this.arrayAdd (this.visits, true);
		}
		
		this.absent = function() {
			this.arrayAdd (this.visits, false);
		}
		
		this.mark = function(score) {
			this.arrayAdd (this.scores, score);
		}
				
		this.summary = function() {
			if(this.visits[0] === undefined || this.scores[0] === undefined){
				console.log('Array is empty!');
				return;
				//throw new Error('Array is empty!');
			}
			let visitsSum = 0;
			let scoresSum = 0;
			let i = 0;
			let n = 0;
			
			for(i; i < 10; i++){
				if(this.visits[i] === undefined)
					break;
				visitsSum += this.visits[i];
			}
			
			for(n; n < 10; n++){
				if(this.scores[n] === undefined)
					break;
				scoresSum += this.scores[n];
			}
			
			if((visitsSum/i >= 0.9)&&(scoresSum/n >= 9)){
				console.log(`Ути какой молодчинка! Ср. оценка ${scoresSum/n} из 10, Ср. посещаемость ${visitsSum/i} из 1`);
			}
			if(((visitsSum/i < 0.9)&&(scoresSum/n >= 9)) || ((visitsSum/i >= 0.9)&&(scoresSum/n < 9))){
					console.log(`Норм, но можно лучше. Ср. оценка ${scoresSum/n} из 10, Ср. посещаемость ${visitsSum/i} из 1`);
			}
			if((visitsSum/i < 0.9)&&(scoresSum/n < 9)){
				console.log(`Редиска! Ср. оценка ${scoresSum/n} из 10, Ср. посещаемость ${visitsSum/i} из 1`);
			}

		}
	}
	
	let stud = new Student ('Петя', 'Орлов', 1998);
	let ogre = new Student ('Огр', 'Оркович', '187 год эры золотого дождя');
	stud.present();
	stud.present();
	stud.present();
	stud.present();
	stud.present();
	stud.present();
	stud.present();
	stud.present();
	
	stud.mark(9);
	stud.mark(4);
	stud.mark(10);
	stud.mark(0);
	
	console.log(stud);
	console.log(ogre);
	//создал 2 экземпляра. В первом подергал все методы. Второй создал просто, чтобы был.
	console.log(stud.getVisits()); 
	console.log(stud.getScores()); 
	
	stud.summary();
})();