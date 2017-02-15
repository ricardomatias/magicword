'use strict';

// Picks a random number within a range
function randomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

// grab a random char based on their Unicode
function generatePick(collection, n) {
  return String.fromCharCode(randomInt.apply(null, collection[n]));
}

var UNICODE_TYPES = {
  upper: [ 0 ],
  u: [ 0 ],
  lower: [ 1 ],
  l: [ 1 ],
  numbers: [ 2 ],
  n: [ 2 ],
  symbols: [ 3, 4 ],
  s: [ 3, 4 ]
};

var UNICODE_MAPPINGS = [
  [65, 90], // upper case
  [97, 122], // lower case
  [48, 57], // numbers
  [35, 38], // symbols set 1
  [58, 63] // symbols set 2
];

function magicword(passwordLength, opts) {
  // check if options are passed in
  if (typeof passwordLength === 'object') {
    opts = passwordLength;
    passwordLength = undefined;
  }

  var password = [],
      unicodes = [];

  var i = 0;

  var len = passwordLength || 9,
      optsKeys = opts && Object.keys(opts),
      optsKeysLen;

  if (optsKeys) {
    optsKeys.forEach(function(key) {
      if (UNICODE_TYPES[key]) {
        UNICODE_TYPES[key].forEach(function(val) {
          unicodes.push(UNICODE_MAPPINGS[val]);
        });
      }
    });
  }

  // when no options
  if (!unicodes.length) {
    unicodes = UNICODE_MAPPINGS;
  }

  // Selects picks while garanteeing 1 upper, 1 lower and 1 number
  // number of characters in the password
  optsKeysLen = (optsKeys && optsKeys.length);

  for (i; i < len; i += 1) {
    if (i < ( optsKeysLen || 3)) {
      password.push(generatePick(unicodes, i));
    } else {
      password.push(generatePick(unicodes, randomInt(0, unicodes.length - 1)));
    }
  }

  password.sort(function() {
    return randomInt(0, 1);
  });

  return password.join('');
}

module.exports = magicword;
