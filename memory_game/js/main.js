var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    alert("you found a match!");
    } else {
    alert("sorry, try again");
    }
}

var flipCard = function(cardId) {
  cardsInPlay.push(cards[cardId]);
  console.log ("user flipped " + cards[cardId]);
  checkForMatch();
}

flipCard(0);
flipCard(1);
