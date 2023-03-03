// Mateo Estrada Jorge
// March 1, 2023
// This is the file that will have all the AES functions.
// It leverages the crypto-js library to do the heavy lifting.
// It also leverages the fs library to read and write files.

// Imports
const fs = require('fs');
const crypto = require('crypto');
const iv = crypto.randomBytes(16);
const key = crypto.randomBytes(32);

function Encrypt(file) {
    let rawData = fs.readFileSync(file, 'utf-8');
    console.log("The raw text is:", rawData);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(rawData, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function Decrypt(encryptedData, key, iv) {
    try {
      const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
      let encryptedBuffer = Buffer.from(encryptedData, 'hex');
      let decrypted = decipher.update(encryptedBuffer, 'utf-8');
      decrypted += decipher.final('utf-8');
      return decrypted;
    } catch (error) {
      console.error('Decryption error:', error);
      return null;
    }
}
  
function writeEncryptedMessage(file) {
    let encrypted = Encrypt(file);
    fs.writeFileSync("encryptedMessage.json", encrypted);
}

// Decrypt the message from a file and write it to a file
function writeDecryptedMessage(file, key, iv) {
    let textFromJsonFile = fs.readFileSync(file, 'utf-8');
    console.log("The encrypted text is:", textFromJsonFile);
    let decrypted = Decrypt(textFromJsonFile, key, iv);
    console.log("The decrypted text is:", decrypted);
    fs.writeFileSync("decryptedMessage.json", decrypted);
}

//* Running the functions *//
writeEncryptedMessage("message.json");
writeDecryptedMessage("encryptedMessage.json", key, iv);
