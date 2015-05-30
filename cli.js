#!/usr/bin/env node

var meow = require('meow');
var magicword = require('./');

var cli = meow({
    help: [
        'Usage',
        '  $ magicword <number>',
        '',
        'Example',
        '  $ magicword',
        '  $ > Rx<4=B7%z',
        '  $ magicword 15',
        '  $ > t$$:n6g&mesEG$I',
        '  $ magicword 15 --upper -numbers',
        '  $ > 71V48N434K6VUBE',
    ].join('\n')
});


if (process.stdin.isTTY) {
    var passwordLength = cli.input[0];

    if (cli.flags.h || cli.flags.help) {
        return cli.showHelp();
    }
    var a = 'upper, lower, numbers, symbols';

    if (Object.keys(cli.flags).length > 0) {
        return console.log(magicword(passwordLength, cli.flags));
    }

    return console.log(magicword(passwordLength));
}
