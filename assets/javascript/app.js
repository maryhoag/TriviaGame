//
var app = {
	var counter = 5;
	var index;

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


	//delivers answer after delay
	countdown: function() {
		setTimeout($(".gameboard")).html(answer[index], 6000);
	}

	//delivers next qustion after delay
	newQuestion: function() {
		setTimeout($".gameboard").html(question[index], 4000);
	}

	