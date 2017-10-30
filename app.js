(function() {
  'use strict';

  var urlAPI = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1/';
  var deckId = '';



function warDeck(){
  this.id= null;

  this.loadDeck = function() {
    var self = this;
    var $req =  $.getJSON(urlAPI);
    $req.done(function(data)){
    console.log(data)
    <!-- ('GET', url + 'new/shuffle', true); -->
    $req()('load', function(){
      var response = JSON.parse(req.responseText);
      if ( response.success == true ) {
        deckId = response.deck_id;  // response back from request
        console.log('Loaded deck successfully')
      }
      else {
        console.log('Error Loading Deck!');
      }
    });
    req.send(null);
  }
}
/*
  function deal( numberOfCards ) {
    var req = new XMLHttpRequest();
    req.open('GET', url + deckId + '/draw/?count=' + numberOfCards, false);
    req.send(null);
    var response = JSON.parse(req.responseText);
    if ( response.success == true ) {
      var cards = response.cards;
       Take Some Action With Cards
    }
    else {
      console.log('Error Drawing Cards!');
    }
  }
*/

})

function deal(obj){
  // receive in the original deck of cards
  // random push to each person's array
  //
}

function toSpot(){
  // takes first card, moves it to arena spot
  // flips the card
  // this where the card will flip
}

function calc(){
  // this is where the card will be calculated and a winner chosen.

}

function postCalc(){
  // this is a large function
  // cards move toward side of scoreboard for the winner
  //



  // if card count === 0,
}
// button "New Deck" on start...
// changes to "Flip" until last card
// changes back to "New Deck"







/*

function startScreen(){
  alert()
}
*/

/*
var $deck= $.getJSON("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
$deck.done(function(data){  // .done is the promise


  for (var i = 0; i < data.Search.length; i++){  // loop to add to object
}
}
*/
