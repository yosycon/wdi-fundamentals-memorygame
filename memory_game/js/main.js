var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

//create variable for cards user flipped
var cardOne = cards[0];
cardsInPlay.push('cardOne');

var cardTwo = cards[1];
cardsInPlay.push('cardTwo');

//check length of cardsinplay is 2
if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("you found a match!");
} else {
  alert("sorry, try again");
}

console.log ("user flipped " + cardOne);
console.log ("user flipped " + cardTwo);
