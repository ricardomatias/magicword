# lockme [![Build Status](https://travis-ci.org/ricardomatias/lockme.svg)](https://travis-ci.org/ricardomatias/lockme)

> Encrypt any text file with a password (CLI)
> 
> **Use with caution. There's no way of unlocking a file without the original secret.**

## Requirements

* node.js

## CLI

```
npm install -g lockme
```

```cli
lockme account.txt
Write the secret you want to encrypt with:
> ****
Please confirm the secret
> ****
File locked!

lockme account.txt
What's the secret ?
> ****
File unlocked!
```

## Usage

```
npm install lockme
```

```
var Lockme = require('lockme');
var lm = new Lockme();

lm.decrypt('foo', 'hello world!', function(err, decryptedText) {
    if(err) {
        // do something
    }

    console.log(decryptedText); // 'hello world'
});

```

## API

The encryption is done with the use of a special *Unicode* character to identify that the text was encrypted with **lockme**.

This character is assigned to the **token** property, so you can change it to another character.

The **decrypt** method expects exactly **one** character, so it will throw an error in case this changes.

### encrypt (secret, text, callback)

Encrypts the **text** with the given **secret**.

returns => error, encrypted text (String)

---

### decrypt (secret, string, callback)

Decrypts the **text** with the given **secret**.

returns => error, decrypted text (String)

---


### promptEncryption (message, text, callback)

Asks the user to write the secret to **encrypt** the file.

returns => error, secret (String)

---

### promptDecryption(message, text, callback)

Asks the user to write the secret to **decrypt** the file.
Uses `decrypt` to verify the secret.

returns => error, secret (String)

---

### isEncrypted(text)

Checks if the **file** is encrypted (by looking for the token).

returns => Boolean


## License

MIT © Ricardo Matias
