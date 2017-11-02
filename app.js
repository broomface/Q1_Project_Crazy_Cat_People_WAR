function cardConverter(data, x){   // Will not be called until compare is called
  if(data.cards[x].value === 'ACE'){
    data.cards[x].value = 14;
  }
  if(data.cards[x].value === 'KING'){
    data.cards[x].value = 13;
  }
  if(data.cards[x].value === 'QUEEN'){
    data.cards[x].value = 12;
  }
  if(data.cards[x].value === 'JACK'){
    data.cards[x].value = 11;
  }
  if(typeof data.cards[x].value == 'string'){
    data.cards[x].value = parseInt(data.cards[x].value);
  }
  return data.cards[x].value;
}


function greet(){
  var name = localStorage.getItem("name");
  if (name == null || name == "null"){
     alert("Hi, Stranger!");
    name = prompt("What is your name?");
    console.log(name);
    localStorage.setItem("name", name);
  } else {
    alert ("Hi, " + name + "!");
  } // end greet
} // end function
console.log(greet());

function compare(card1num, card2num, remainingCardCount){
  console.log("card1num =" + card1num + " card2num = " + card2num);
  if (remainingCardCount === '0'){
    if (player1.points > player2.points){
      console.log("Player 1 is the greatest with a score of " + player1.points + ", pulling well ahead of Player 2 by " + player1.points - player2.points + "points!");
    }
    if (player2.points > player1.points){
      console.log("Player 2 is the greatest with a score of " + player2.points + ", pulling well ahead of Player 2 by " + player2.points - player1.points + "points!");
    }
    if (player1.points === player2.points){
      console.log("IT IS A TIE!  Both players tie with " + player1.points + "!");
    }

  }
  if(card1num > card2num){
    console.log("1 wins!")
    player1.points += 1;
    atWar = false;
    console.log("player 1", player1.points);
    return player1.points;
  }
  if(card1num < card2num){
    console.log("2 wins!");
    player2.points += 1;
    atWar = false;
    console.log("player 2", player2.points);
    return player2.points;
  }
  if(card1num === card2num){
    atWar = true;
    makeWar();
  }
};

function playAgain(){
  var response = prompt("Asking if they would like to play again...radio button, yes/no button?");
  if (response.toLowerCase === 'yes' || response.toLowerCase === 'y'){
    alert("Well alright, prepare for WAR!");
    console.log("Call a function to start again...?");
  } else {
    alert ("Ok, thanks for playing!");
  } // end greet
} // end function

$(document).ready(function() {
var remainingCardCount;
var player1 = {name: "", gender: "", points: 0};
var player2 = {name: "", gender: "", points: 0};
var $deckid;
var atWar = false;

// update, what about a cat task tracker?  There can be prefilled fields for tasks (litter box cleaning, pick up cat toys, play cat and mouse, feed and water cat, brush cat, teach cat to bring slippers) or ones that you can add into the local storage.
// what if the 2 players were the two adults, with one button to control the outcome?

// sample object (people in seperate object from logged tasks?)
//{date: ""; [player1: "Ken", player: "Barbie"], [task: ], [result: ]}
// medicine and yack....

// Is this a new task?  Allow adding.  If not, drop down?



// try to work this out...could be a better way to do this?

// try to hardwire event handlers below declared variables but above functions to help readability...


// This will be the draw button to start the game...

$.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', function newDeck(data) {
    $deckid = function(){
      return data["deck_id"];
    }  // this works
    console.log("DeckID = ", $deckid());  // this works
  //  console.log("cards remaining = " +  remainingCardCount);
});

console.log("deck pull works")
// this will store the deck_id from the current deck in a variable to be added in later API requests.

  // receive in the original deck of cards
  // random push to each person's array

  // test if card count === 2, then hide image
  // test if card count === 0, then end game?
  //  Use the onclick for the 'deal' button (have 2 buttons ('deal' open at beginning, 'flip' open after ))
  //will deal 2 cards...basically assign array[0] to CCL and [1] to cat and show
  // if (remainingCardCount === 0){
  //
  // }
var card1;
var card2;


var button = $('#buttonFlip1').click(function(){

$.getJSON('https://www.deckofcardsapi.com/api/deck/' + $deckid() + '/draw/?count=2', function twoCards(data) {
  card1 = data.cards[0].image;
  card2 = data.cards[1].image;
  remainingCardCount = data['remaining'];
  if(remainingCardCount <= 0){
    playAgain();
  }
  console.log(remainingCardCount);   // this works here (counts down)

// $('img src= "card1"').appendTo("#cardFace-image1");
$("#cardFace-image1").attr('src', card1 );
$("#cardFace-image2").attr('src', card2 );

compare(card1num = cardConverter(data, 0), card2num = cardConverter(data, 1), remainingCardCount)
playAgain();
});
});




function makeWar(){
if (cardArr === undefined){  //
  var cardArr = [];
}
  $.getJSON('https://www.deckofcardsapi.com/api/deck/' + $deckid + '/draw/?count=6', function(data) {
  for (var i = 0; i < data['cards'].length; i++){
    cardArr.push(cardConverter(data, i));
  }
  console.log(cardArr);
  compare(cardArr[0], cardArr[1]);
   if (cardArr[0] !== cardArr[1]);{
     cardArr = [];
     console.log(cardArr);
   }

var response = false;







  })

}








});

//funFunFunctionCalc(x, y)
//  if ()

/*
function toSpot(){ // stretch
  // stretch takes first card, moves it to arena spot
  // stretch flips the card
  // stretch this where the card will flip
}
*/


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
/*
function calc(){
  // this is where the card will be calculated and a winner chosen.
  // of statement
}
function postCalc(){
  // this is a large function
  // cards move toward side of scoreboard for the winner
  //
}
*/

// if card count === 0,
// button "New Deck" on start...
// New Deck should request a new deck (update deck id)
// changes to "Flip" until last card
// changes back to "New Deck"


// When game is over... use https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/    instead of getting a new deck...

// Use the randomizer to divy out the 2 piles,   https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=AS,2S
