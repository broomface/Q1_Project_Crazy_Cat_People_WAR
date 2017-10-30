$(document).ready(function() {

var $deckid;
//var player1 = {name: '', }
//var player

// try to hardwire event handlers below declared variables but above functions to help readability...


$.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', function(data) {
    $deckid = data["deck_id"];  // this works
    console.log("DeckID = ", $deckid);  // this works
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
console.log("got here 4")

//}

$('#buttonFlip').click(function(){
$.getJSON('https://www.deckofcardsapi.com/api/deck/' + $deckid + '/draw/?count=2', function(data) {
  //var player1Card = data['cards'][0];
  //var player2Card = data['cards'][1];
  console.log(data["cards"][0], data["cards"][1]);
  console.log(data['image']);
  $('#cardFace1').attr("src", data['image']);

//  var cF1 = $('#cardFace1');
//  cF1 = data["cards"][0];
//  var cF2 = $('#cardFace2');
//  cF2 = data["cards"][1];
}).then()
//  console.log(data["cards"][0], data["cards"][1]);
});




function toSpot(){ // stretch
  // stretch takes first card, moves it to arena spot
  // stretch flips the card
  // stretch this where the card will flip

}

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
