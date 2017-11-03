var card1; // face image of p1 card
var card2; // face image of p2 card
var player1 = 0;
var player2 = 0;
var cardArr; // in makeWar
let $deckid; // deck identifier
var atWar;
var remainingCardCount;
var name;

function greet() {
  name = localStorage.getItem("name");
  if (name == null || name == "null") {
    localStorage.setItem("name", name);
  } else {
  swal("Write something here:", {
  content: "input",
});
}
}
greet();
/*
function greet() {
  var name = localStorage.getItem("name");
  if (name == null || name == "null") {
    alert("Hi, Stranger!");
    name = prompt("What is your name?");
    localStorage.setItem("name", name);
  } else {
    alert("Hi, " + name + "!");
  } // end greet
} // end function
console.log(greet());
*/



function cardConverter(data, x) { // Will not be called until compare is called
  if (data.cards[x].value === 'ACE') {
    data.cards[x].value = 14;
  }
  if (data.cards[x].value === 'KING') {
    data.cards[x].value = 13;
  }
  if (data.cards[x].value === 'QUEEN') {
    data.cards[x].value = 12;
  }
  if (data.cards[x].value === 'JACK') {
    data.cards[x].value = 11;
  }
  if (typeof data.cards[x].value == 'string') {
    data.cards[x].value = parseInt(data.cards[x].value);
  }
  return data.cards[x].value;
}


function compare(card1num, card2num, remainingCardCount) {
  console.log("card1num =" + card1num + " card2num = " + card2num);
  if (remainingCardCount <= 0) {
    if (player1.points > player2.points) {
      console.log("Player 1 is the greatest with a score of " + player1.points + ", pulling well ahead of Player 2 by " + player1.points - player2.points + "points!");
      $('.message').html("Player 1 wins !!  Player 2, get to work!");
      $("#buttonFlip1").attr("disabled", "disabled");
    }
    if (player2.points > player1.points) {
      console.log("Player 2 is the greatest with a score of " + player2.points + ", pulling well ahead of Player 2 by " + player2.points - player1.points + "points!");
      $('.message').html("Player 2 wins!!  Player 1, get to work!");
      $("#buttonFlip1").attr("disabled", "disabled");
    }
    if (player1.points === player2.points) {
      console.log("IT IS A TIE!  Both players tie with " + player1.points + "!");
      $('.message').html("It's A Tie!!  Play again to determine who is getting stuck with the task!");
      $("#buttonFlip1").attr("disabled", "disabled");
    }

  }
  if (card1num > card2num) {
    console.log("1 wins!")
    player1.points += 1;
    atWar = false;
    $('.player1score').html("Player 1:  " + player1.points);
    $('.message2').html("Player 1 wins this round!");
    return player1.points;
  }
  if (card1num < card2num) {
    player2.points += 1;
    atWar = false;
    $('.player2score').html("Player 2: " + player2.points);
    $('.message2').html("Player 2 wins this round!");
    return player2.points;
  }
  if (card1num === card2num) {
    atWar = true;
    makeWar();
  }
};

function playAgain() {
  var response = prompt("Asking if they would like to play again...radio button, yes/no button?");
  if (response.toLowerCase === true || response.toLowerCase === true) {
    alert("Well alright, prepare for WAR!");
    console.log("Call a function to start again...?");
    ready();
  } else {
    return alert("Ok, thanks for playing!"); // does not work...
  } // end greet
} // end function

// MAKE WAR...when it works
function makeWar() {
  $('*').css('background-color', 'red');
$('.message2').html("TIME TO DECLARE WAR!!!");
  if (cardArr === undefined) { //
    cardArr = [];
  }
  if (remainingCardCount >= 6){
  console.log("1this is deck id: " + $deckid);
  $.getJSON('https://www.deckofcardsapi.com/api/deck/' + $deckid() + '/draw/?count=4', function(data) {
    console.log("2this is deck id: " + $deckid);
    for (var i = 0; i < data['cards'].length; i++) {
      cardArr.push(cardConverter(data, i));
    }
    console.log(cardArr);
    compare(cardArr[0], cardArr[1]);
    if (cardArr[0] !== cardArr[1]); {
      cardArr = [];
      console.log(cardArr);
    }
    var response = false;
    twoCards(data);
  })
}
  if (remainingCardCount === 4){
    $.getJSON('https://www.deckofcardsapi.com/api/deck/' + $deckid() + '/draw/?count=4', function(data) {
      console.log("2this is deck id: " + $deckid);
      for (var i = 0; i < data['cards'].length; i++) {
        cardArr.push(cardConverter(data, i));
      }
      compare(cardArr[0], cardArr[1]);
      if (cardArr[0] !== cardArr[1]); {
        cardArr = [];
      }
      var response = false;
      twoCards(data);
    })
  }
  if (remainingCardCount === 2){
    $.getJSON('https://www.deckofcardsapi.com/api/deck/' + $deckid() + '/draw/?count=4', function(data) {
      for (var i = 0; i < data['cards'].length; i++) {
        cardArr.push(cardConverter(data, i));
      }
      compare(cardArr[0], cardArr[1]);
      if (cardArr[0] !== cardArr[1]); {
        cardArr = [];
      }
      var response = false;
      twoCards(data);
    })
  }
}
$(document).ready(function() {

  player1 = {
    name: "",
    gender: "",
    points: 0
  };
  player2 = {
    name: "",
    gender: "",
    points: 0
  };
  atWar = false;
  $("#buttonFlip1").removeAttr("disabled");

  // Fixes ASAP
  // WAR functionality  // when we pull 6 cards, have it written on the scoreboard in a misc area to show it...
  // scoreboard display p1 and p2 score and have a misc section for war
  // Yes/NO end the game...
  // CSS move cat away
  // Crazy Cat dude pic
  // Welcome bar with basic info... name, radio button (gender, task)

  // Object array of pics, STRETCH




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
    $deckid = function() {
      return data["deck_id"];
    } // this works
    console.log("DeckID = ", $deckid()); // this works
    //  console.log("cards remaining = " +  remainingCardCount);
  });
  var button = $('#buttonFlip1').click(function() {

    // pulls 2 cards, stores images in an array, pushes to screen
$('*').css('background-color', 'green');

    $.getJSON('https://www.deckofcardsapi.com/api/deck/' + $deckid() + '/draw/?count=2', function twoCards(data) {
      console.log(data);
      card1 = data.cards[0].image;
      card2 = data.cards[1].image;
      remainingCardCount = data['remaining'];

      console.log(remainingCardCount); // this works here (counts down)

      $("#cardFace-image1").css('background-image', `url(${card1})`);
      $("#cardFace-image2").css('background-image', `url(${card2})`);
      // takes in all values and uses cardConverter before comparing values
      compare(card1num = cardConverter(data, 0), card2num = cardConverter(data, 1), remainingCardCount)
    });
    if (remainingCardCount <= 0) {
      playAgain();
    }
  });
});

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
