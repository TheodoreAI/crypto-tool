# CryptoTool - A Simple File Encryption and Decryption Tool

CryptoTool is a Node.js module for encrypting and decrypting files using the AES-256-CBC algorithm. It provides a simple object-oriented interface for handling encryption and decryption tasks.

## Installation

Place the cryptoTool.js file in your project directory.

## Usage

First, import the CryptoTool class from the cryptoTool.js file:

```javascript
const CryptoTool = require('./cryptoTool');
```

Next, create a new instance of the CryptoTool class with a custom initialization vector (IV) and secret key:

```javascript
const crypto = require('crypto');
const iv = crypto.randomBytes(16);
const key = crypto.randomBytes(32);

const initializationVector = Buffer.from(iv, 'hex');
const secretKey = Buffer.from(key, 'hex');
const cryptoTool = new CryptoTool(initializationVector, secretKey);
```

Use the cryptoTool instance to call the writeEncryptedMessage and writeDecryptedMessage methods, which will encrypt a file and decrypt the encrypted file, respectively:

```javascript
cryptoTool.writeEncryptedMessage("message.json");
cryptoTool.writeDecryptedMessage("encryptedMessage.json");
```

Additionally, you can use the encrypt and decrypt methods directly to encrypt and decrypt data:

```javascript
const encryptedData = cryptoTool.encrypt("message.json");
console.log("Encrypted data:", encryptedData);

const decryptedData = cryptoTool.decrypt(encryptedData);
console.log("Decrypted data:", decryptedData);
```

## Example

Here's a complete example of how to use the CryptoTool module:

```javascript
const CryptoTool = require('./cryptoTool');

// Create a new instance of the CryptoTool class with custom iv and key
const crypto = require('crypto');
const iv = crypto.randomBytes(16);
const key = crypto.randomBytes(32);

const initializationVector = Buffer.from(iv, 'hex');
const secretKey = Buffer.from(key, 'hex');
const cryptoTool = new CryptoTool(initializationVector, secretKey);

// Use the instance to call the methods
cryptoTool.writeEncryptedMessage("message.json");
cryptoTool.writeDecryptedMessage("encryptedMessage.json");

// You can also use the encrypt and decrypt methods directly if needed
const encryptedData = cryptoTool.encrypt("message.json");
console.log("Encrypted data:", encryptedData);

const decryptedData = cryptoTool.decrypt(encryptedData);
console.log("Decrypted data:", decryptedData);
```

## In Action

[decryptedJson]()
[encryptedJson]()


## License

This project is released under the MIT License.