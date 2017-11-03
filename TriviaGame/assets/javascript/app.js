$('#start').on('click', function(){

	game.start();

});

$(document).on('click', '#end', function(){
	game.done()
})

var questions = [{
	question: 'Which of the following is not part of the Nolan Batman triology?',
	answers:["Batman Begins", "Batman Returns", "The Dark Knight", "The Dark Knight Rises"],
	correctAnswer: "Batman Returns"
}, {
	question: 'Which Nolan movie received an Oscar nomination for Best Picture?',
	answers:["Doodlebug", "Inception", "The Dark Knight", "Interstellar"],
	correctAnswer: "Inception"
}, {
	question: 'The protagonist in "Memento" suffers from...',
	answers:["Amnesia", "Asthma", "Dyslexia", "Anaplasia"],
	correctAnswer: "Amnesia"
}, {
	question: 'In "Inception," what toy symbolizes a person\'s dream state?',
	answers:["Teddy Bear", "Train", "Watch", "Top"],
	correctAnswer: "Top"
}, {
	question: 'Which actor shows up in both "Inception" and "Interstellar?"',
	answers:["Jessica Chastain", "Christina Bale", "Tom Hardy", "Michael Caine"],
	correctAnswer: "Michael Caine"
}, {
	question: 'Which "Superman" movie did Nolan write but not direct?',
	answers:["Man of Steel", "Supergirl", "Superman Returns", "Superman"],
	correctAnswer: "Man of Steel"
}, {
	question: 'Whose character has trouble sleeping in "Insomnia?"',
	answers:["Al Pacino", "Hilary Swank", "Robin Williams", "Cillian Murphy"],
	correctAnswer: "Al Pacino"
}, {
	question: 'Which of Nolan\'s movies came out first?',
	answers:["Batman Begins", "The Prestige", "Inceptipion", "Interstellar"],
	correctAnswer: "Batman Returns"
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 120,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter <=0) { 
			console.log('Timeisup');
			game.done();
		}
	},
	
	start: function() {

		timer = setInterval(game.countdown, 1000);
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter"> 120</span> Seconds </h2>')
		$('#start').remove();

		for(var i = 0; i < questions.length; i++){

			$('#subwrapper').append('<h2>' + questions[i].question + '</h2>');

			for (var j = 0; j < questions[i].answers.length; j++) {

				$("#subwrapper").append("<input type = 'radio' name = 'question-" + i +"'value ='" + questions[i].answers[j]+"'>"+questions[i].answers[j])


			}
		}
		$('#subwrapper').append('<br><button id="end">FINISHED</button>')

	},

	done: function() {

		$.each($("input[name='question-0']:checked"), function() {
			if($(this).val() == questions[0].correctAnswer){
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});
		

		$.each($("input[name='question-1']:checked"), function() {
			if($(this).val() == questions[1].correctAnswer){
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-2']:checked"), function() {
			if($(this).val() == questions[2].correctAnswer){
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-3']:checked"), function() {
			if($(this).val() == questions[3].correctAnswer){
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-4']:checked"), function() {
			if($(this).val() == questions[4].correctAnswer){
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-5']:checked"), function() {
			if($(this).val() == questions[5].correctAnswer){
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-6']:checked"), function() {
			if($(this).val() == questions[6].correctAnswer){
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-7']:checked"), function() {
			if($(this).val() == questions[7].correctAnswer){
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		this.result();
		
		
	},

	result: function(){
		clearInterval(timer);

		$('#subwrapper h2').remove();

		$('#subwrapper').html("<h2>All done!</h2>");
		$('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
		$('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
		$('#subwrapper').append('<h3>Unanswered: '+(questions.length-(this.incorrect+this.correct))+"</h3>");
	}

	
}

