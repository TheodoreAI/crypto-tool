// Mateo Estrada Jorge
// March 1, 2023
// This is the file that will have all the AES functions.
// It leverages the crypto-js library to do the heavy lifting.

// Reads a local json file and returns the data
function readJSONFile(file) {
    // Read the file using the file system
    const fs = require('fs');
    let rawData = fs.readFileSync('message.json');
    let messages = JSON.parse(rawData);
    
    return messages;
}


// Tests the readJSONFile function
function testReadJSONFile() {
    var file = readJSONFile("AES.json");
    console.log("The file is running", file);
}


testReadJSONFile();

   