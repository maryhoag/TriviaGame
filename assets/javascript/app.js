//
var app = {
	// will these need to be outside the app object?
	counter: 10,
	index: 0,
	trueness: false,
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

	//delivers next qustion after delay
	newQuestion: function() {
		//setTimeout($(".gameboard").html(app.questions[app.index]), (10 * 1000));
		$(".gameboard").html(app.questions[app.index]); //(10 * 1000));
		//setTimeout
	},

	setBoolean: function() {
		app.trueness = $(this).attr("data-truth");
		clearInterval(app.starting);
	},

	count: function() {
		this.counter--;
		$(".timer").html(app.counter);
	},
	//counts with var to skip
	start: function() {
		var starting = setInterval(app.count, 1000);
	},
	//sets replay button
	again: function() {
		$("#replay").append('<button type="button" class="btn btn-warning centered">Wanna play again?</button>');
	},

	game: function() {
		//use index for i here, or will i want them seperate
		//i've hard coded 5 here: fix or add a random question generator
		for(app.index; app.index < app.questions.length; app.index++) {
			//ask question
			app.newQuestion();
			app.count();
			app.start(); 
			$(".response").click(app.setBoolean());
			
			console.log(this);
			if(app.trueness = true) {
				setTimeout(function() {
					$(".gameboard").html("Correct! What are you, psychic?");
					app.wins++;
					app.counter = 10;
					$(".correct").html("# Correct: " + app.wins);
				}, (5 * 1000));
			}
			else {
				setTimeout(function() {
					$(".gameboard").html("Wrong! You're not exactly hyperattentive.");
					app.losses++;
					app.counter = 10;
					$(".incorrect").html("# Incorrect: " + app.losses);
				}, (5 * 1000));

			}
		}
	}
};

app.game();

	