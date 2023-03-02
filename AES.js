// Mateo Estrada Jorge
// March 1, 2023
// This is the file that will have all the AES functions.
// It leverages the crypto-js library to do the heavy lifting.

const { generateKey } = require('crypto');
const crypto = require('crypto');
// Reads a local json file and returns the data
function readJSONFile(file) {
    // Read the file using the file system
    const fs = require('fs');
    let rawData = fs.readFileSync(file);
    let messages = JSON.parse(rawData);
    return JSON.stringify(messages);
}

function makeKey() {
    return crypto.randomBytes(32);
}

function Encrypt(message, key) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(message, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}


// Tests the readJSONFile function
function testReadJSONFile() {
    let file = readJSONFile("message.json");
    console.log("The file is running", file);
}

function testMakeKey() {
    let key = makeKey();
    console.log("The key is", key);
}

let encMsg = Encrypt(readJSONFile("message.json"), crypto.randomBytes(32));
console.log("The encrypted message is:", encMsg);


//* TESTS *//
testReadJSONFile();
testMakeKey();
