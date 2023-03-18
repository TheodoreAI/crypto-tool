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