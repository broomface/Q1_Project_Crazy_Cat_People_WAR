$(document).ready(function() {

var remainingCardCount;
var player1 = {};
var player2 = {};

var $deckid;


// try to hardwire event handlers below declared variables but above functions to help readability...


$.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', function(data) {
    $deckid = data["deck_id"];  // this works
    console.log("DeckID = ", $deckid);  // this works
  //  remainingCardCount = data['remaining'];
  //  console.log("cards remaining = " +  remainingCardCount);
});

console.log("got here 1")
// this will store the deck_id from the current deck in a variable to be added in later API requests.

// }).catch( function(error){
//   console.log(error);


//$('.button')onclick()

console.log("got here 2")
// function deal(obj){  Linked to the button



  // receive in the original deck of cards
  // random push to each person's array

  // test if card count === 2, then hide image
  // test if card count === 0, then end game?
  //  Use the onclick for the 'deal' button (have 2 buttons ('deal' open at beginning, 'flip' open after ))
  //will deal 2 cards...basically assign array[0] to CCL and [1] to cat and show

var card1;
var card2;
//}

$('#buttonFlip1').click(function(){
$.getJSON('https://www.deckofcardsapi.com/api/deck/' + $deckid + '/draw/?count=2', function(data) {
  //var player1Card = data['cards'][0];
  //var player2Card = data['cards'][1];
  card1 = data.cards[0].image;
  card2 = data.cards[1].image;

  console.log(data, 1)
  console.log(data["cards"][0], data["cards"][1]);
  console.log(data['image']);
  console.log(remainingCardCount);

// $('img src= "card1"').appendTo("#cardFace-image1");
$("#cardFace-image1").attr('src', card1 );
$("#cardFace-image2").attr('src', card2 );
})
//  console.log(data["cards"][0], data["cards"][1]);
});




function toSpot(){ // stretch
  // stretch takes first card, moves it to arena spot
  // stretch flips the card
  // stretch this where the card will flip

}

/*
if (card1 === card2){
  if (remaining card count > 6)
    deal 3 cards per (6 total) and use the final dealt card on each side...
    if (both cards match){
      draw the next card...
    } else if (player 1 card > player 2 card){
     player 1 gets points
  }
      else if (player 1 card < player 2 card){
      player 2 gets
    }
      if (both cards match){
        draw the next card...
    else{)

  if (remaining card count < 6)
  deal all final cards and use the last card to compare
    if (both cards match){

    else{
    discard last cards and do not add points
  }
  }
  deal 3 cards to each
}


*/

function calc(){
  // this is where the card will be calculated and a winner chosen.
  // of statement

}

function postCalc(){
  // this is a large function
  // cards move toward side of scoreboard for the winner
  //
}
console.log("got here 5")

});
console.log("got here 6")
// if card count === 0,
// button "New Deck" on start...
// New Deck should request a new deck (update deck id)
// changes to "Flip" until last card
// changes back to "New Deck"


// When game is over... use https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/    instead of getting a new deck...

// Use the randomizer to divy out the 2 piles,   https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=AS,2S
