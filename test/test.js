const chai = require('chai');
const assert = chai.assert;
const yellPhrase = require('../yellPhrase').yellPhrase;//change this


describe(.click, function() {
  it('will change card on click', function() {
    assert.equal(click, true);
  });
// maybe?
  // We can have more its here
});

// modify this...
escribe('yellPhrase', function() {
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
