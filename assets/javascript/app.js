//
$(document).ready(function() {

	var app = {
	// will these need to be outside the app object?
	counter: 10,
	index: 0,
	wins: 0,
	losses: 0,

	questions: [
	"What's with the pineapples? It's an inside joke.",
	"The actor who plays Lassie once played a psychic.",
	"Every actor from The Breakfast Club has appeared on Psych.",
	"Shawn always chews Wrigley's doublemint gum.",
	"In season 5, Gus teaches Lassiter to tap dance.",
	"Since Shawn will never go fishing, Shawn's father takes Lassiter.",
	"In one epsidoe, Juliette waits all day in a train station for an ex boyfriend.", 
	"Shawn and Gus give Gus' car a nickname -- The Blackberry!",
	"In one epsidoe, Shawn gets a part on a Bollywood movie.",
	"Shawn's father is named Harry."
	],

	answers: [
	true, true, false, false, true, true, true, false, false, false
	],

	//delivers next qustion 
	newQuestion: function() {
		//setTimeout($(".gameboard").html(app.questions[app.index]), (10 * 1000));
		$(".gameboard").html(app.questions[app.index]);
		app.start();
	},

	correctAnswer: function() {
		$(".gameboard").html("Correct! What are you, psychic?");
		app.wins++;
		app.counter = 10;
		$(".correct").html("# Correct: " + app.wins);
	},

	incorrectAnswer: function() {
			$(".gameboard").html("Wrong! Some psychic detective you are!");
			app.losses++;
			app.counter = 10;
			$(".incorrect").html("# Incorrect: " + app.losses);
	},

	start: function() {
		 setInterval(app.count, 1000);
		 $(".timer").html("Time remaining:" + app.counter);
	},

	count: function() {
			app.counter--;
			//$(".timer").html("Time remaining:" + app.counter);
			if(app.counter === 0) {
				app.stop()
			}
	},
	
	//sop counting
	stop: function() {
		clearInterval(app.count);
	},
	
	//sets replay button
	again: function() {
		$("#replay").append('<button type="button" class="btn btn-warning centered">Wanna play again?</button>');
	},

	game: function() {
		//use index for i here, or will i want them seperate
		//i've hard coded 5 here: fix or add a random question generator
		
		for(var i = 0; i < app.questions.length; i++) {
			app.index = i;
			//ask question
			var trueness;
			app.newQuestion();
			var pause = setInterval(function() {

				$(".response").click(function() {
					console.log("message");
					return trueness = $(this).data("truth");
				});
				//console.log(trueness);
					
				if(trueness == app.answers[app.index]) {
					app.correctAnswer();
					console.log(trueness);
				}
				else {
					app.incorrectAnswer();
				}
					}, 10 * 1000);
			setTimeout(function(){
				console.log("waiting");
			}, 10 * 1000);
			}


		clearInterval(app.counting);
			console.log(this);
		


		
		setTimeout(app.again, 10 * 1000);
	}

};

	app.game();

});

	