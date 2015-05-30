'use strict';

module.exports = function(passwordLength, opts) {
    // check if only opts passed
    if (typeof passwordLength === 'object') {
    opts = passwordLength;
    passwordLength = undefined;
    }

    var password = [],
        unicodes = [],
        i = 0,
        j = 0,
        len = passwordLength || 9,
        optsKeys = opts && Object.keys(opts),
        optsKeysLen,
        uniTypes = {
        upper: [ 0 ],
        lower: [ 1 ],
        numbers: [ 2 ],
        symbols: [ 3, 4 ]
        },
        unicodeLib = [
        [65, 90], // upper case
        [97, 122], // lower case
        [48, 57], // numbers
        [35, 38], // symbols set 1
        [58, 63] // symbols set 2
        ];

    if (optsKeys) {
        optsKeys.forEach(function(key) {
            if (uniTypes[key]) {
                uniTypes[key].forEach(function(val) {
                    unicodes.push(unicodeLib[val]);
                });
            }
        });
    }

    if (!unicodes.length) {
        unicodes = unicodeLib;
    }

    // Picks a random number within a range
    function randomInt(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }

    // grab a random char based on their Unicode
    function generatePick(n) {
        return String.fromCharCode(randomInt.apply(null, unicodes[n]));
    }

    // Selects picks while garanteeing 1 upper, 1 lower and 1 number
    // number of characters in the password

    optsKeysLen = (optsKeys && optsKeys.length);

    for (i; i < len; i += 1) {
        if (i < ( optsKeysLen || 3)) {
            password.push(generatePick(i));
        } else {
            password.push(generatePick(randomInt(0, unicodes.length - 1)));
        }
    }

    password.sort(function() {
        return randomInt(0, 1);
    });

    return password.join('');
};
