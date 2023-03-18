// Mateo Estrada Jorge
// March 18, 2023
// This is the file that will have all the cryptoTool class and its method functions.
// It leverages the crypto-js library to do the heavy lifting.
// It also leverages the fs library to read and write files.

// Imports
const fs = require('fs');
const crypto = require('crypto');

// CryptoTool class definition and methods
class CryptoTool {
  constructor(iv = crypto.randomBytes(16), key = crypto.randomBytes(32)) {
    this.iv = crypto.randomBytes(16);
    this.key = crypto.randomBytes(32);
  }

  // Encrypts a file and returns the encrypted data
  encrypt(file) {
    let rawData = fs.readFileSync(file, 'utf-8');
    const cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.iv);
    let encrypted = cipher.update(rawData, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }
  // Decrypts a file and returns the decrypted data
  decrypt(encryptedData) {
    try {
      const decipher = crypto.createDecipheriv('aes-256-cbc', this.key, this.iv);
      let encryptedBuffer = Buffer.from(encryptedData, 'hex');
      let decrypted = decipher.update(encryptedBuffer, 'utf-8');
      decrypted += decipher.final('utf-8');
      return decrypted;
    } catch (error) {
      console.error('Decryption error:', error);
      return null;
    }
  }

  // Writes the encrypted data to a file
  writeEncryptedMessage(file) {
    let encrypted = this.encrypt(file);
    fs.writeFileSync("encryptedMessage.json", encrypted);
  }

  // Writes the decrypted data to a file
  writeDecryptedMessage(file) {
    let textFromJsonFile = fs.readFileSync(file, 'utf-8');
    let decrypted = this.decrypt(textFromJsonFile);
    fs.writeFileSync("decryptedMessage.json", decrypted);
  }
}

module.exports = CryptoTool;

// This is the code that will run when you run the file directly
if (require.main === module) {
  const cryptoTool = new CryptoTool();
  cryptoTool.writeEncryptedMessage("message.json");
  cryptoTool.writeDecryptedMessage("encryptedMessage.json");
}
