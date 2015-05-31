# magicword [![Build Status](https://travis-ci.org/ricardomatias/magicword.svg)](https://travis-ci.org/ricardomatias/magicword)

> Generate a password of any length with several composability options (CLI)

## Requirements

* node.js

## CLI

```
npm install -g magicword
```

```cli
magicword
> Rx<4=B7%z
magicword 15
> t$$:n6g&mesEG$I
magicword 15 --upper --numbers
> 71V48N434K6VUBE
```

### Flags

* `upper` - Uppercase letters
* `lower` - Lowercase letters
* `numbers` - Numbers
* `symbols` - Symbols

## Usage

```
npm install magicword
```

```
var magicword = require('magicword');

var pw = magicword({ upper: true, lower: true });

console.log(pw) // OWJbtVhxr

```

## API

### magicword(passwordLength, options)

passwordLength: (Number)
options: { upper, lower, numbers, symbols } (Properties -> Boolean)


## License

MIT © Ricardo Matias
