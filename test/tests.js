const expect = chai.expect

//window.onload = function() {


var name = 'Scott';
describe('greet', function() {
  it('should receive input as a string', function() {
    expect(name).to.be.a('string');
});
});

var remainingCardCount = '0';
var player1 = {'points': 10};
var player2 = {'points': 8};
describe('compare', function(){
  it ('determines which player has more points', function(){
    expect(compare(player1.points, player2.points, remainingCardCount)).to.deep.equal(11);
  })
  it ('determines which player has more points', function(){
    expect(compare(player2.points, player1.points, remainingCardCount)).to.deep.equal(9);
  })
})

var response = "";
describe('playAgain', function () {
  it('returns a string from the user', function () {
    expect(response).to.be.a('string');
  })
})

/*
  describe('compare', function() {

    it("returns true when one player has a higher value than another", function() {
      expect(compare(player1.points>player2.points), "Values compared will be true").to.deep.eq(true)
    })
})

//}

*/

/*
  describe('#add', function () {
    it('should be a function', function () {
      expect(calculator.add).to.be.a('function')
    })

    it('should add two numbers together', function () {
      expect(calculator.add(10,20)).to.equal(30)
    })
  })
})


const chai = require('chai');
const assert = chai.assert;
const myFunc - require(../app.js);

const yellPhrase = require('../yellPhrase').yellPhrase;//change this


describe(.click, function() {
  it('will change card on click', function() {
    assert.equal(click, true);
  });
// maybe?
  // We can have more its here
});

// modify this...
describe('yellPhrase', function() {
  it('should convert a string to all caps', function() {
    const aggressiveGreeting = yellPhrase('hey there, friend');
    assert.equal(aggressiveGreeting, 'HEY THERE, FRIEND');
  });
  it('should display a message if given a non-string input', function() {
    const numberInput = yellPhrase(5);
    assert.equal(numberInput, 'Please input a string.');
  });
});
```
*/
