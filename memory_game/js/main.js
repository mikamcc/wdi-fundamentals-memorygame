console.log("UP and running!")
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/
console.log("User flipped" + cardOne);
console.log("User flipped" + cardThree);


var cards = ["queen","queen","king", "king"];
var cardsInPlay = [];
var checkForMatch = function(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}

}
var flipCard = function(cardId){
	console.log("User flipped" + cards[cardId])
	cardsInPlay.push(cards[cardId]);

    flipCard(0);
    flipCard(2);
     
    checkForMatch();



if(length.cardsInPlay === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
 	} else { 
		alert("Sorry, try again!");
	}
};
}



/*
var cardOne = cards[0];
cardsInPlay.push(cards[0]);
console.log("User flipped queen");
var cardTwo = cards[2];
cardsInPlay.push(cards[2]);
console.log ("User flipped king");
*/



